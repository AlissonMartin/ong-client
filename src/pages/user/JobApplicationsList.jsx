import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Card, Table, Spinner, Alert, Button } from "react-bootstrap";
import jsPDF from "jspdf";

const JobApplicationsList = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      setError("");
      try {
        const token = window.sessionStorage.getItem("token");
        const res = await api.listJobApplications(token);
        if (!res.ok) throw new Error("Erro ao buscar candidaturas");
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        setError(err.message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };
    fetchApplications();
  }, []);

  const handleCreateCertificate = async (jobApplicationId) => {
    setError("");
    try {
      const token = window.sessionStorage.getItem("token");
      const res = await api.createCertificate({ jobApplicationId }, token);
      if (!res.ok) throw new Error("Erro ao gerar certificado");
      alert("Certificado gerado com sucesso!");
    } catch (err) {
      setError(err.message || "Erro desconhecido ao gerar certificado");
    }
  };

  const handleViewCertificate = (app) => {
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const pageWidth = doc.internal.pageSize.getWidth();
    // Cores e borda
    doc.setFillColor(230, 240, 255);
    doc.rect(10, 10, pageWidth - 20, 190, "F");
    doc.setDrawColor(41, 128, 185);
    doc.setLineWidth(2);
    doc.rect(10, 10, pageWidth - 20, 190);
    // Título
    doc.setFontSize(28);
    doc.setTextColor(41, 128, 185);
    doc.text("Certificado de Trabalho Voluntário", pageWidth / 2, 40, { align: "center" });
    // Texto principal
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    const userName = app.job?.selectedUser?.name || app.user?.name || "Usuário";
    const institutionName = app.job?.institution?.name || "Instituição";
    const jobName = app.job?.name || "Vaga";
    const date = app.createdAt ? new Date(app.createdAt).toLocaleDateString() : "";
    const mainText = `Certificamos que ${userName} atuou como voluntário(a) na vaga '${jobName}' na instituição '${institutionName}', demonstrando dedicação e compromisso com a causa social.`;
    doc.text(mainText, pageWidth / 2, 70, { align: "center", maxWidth: pageWidth - 60 });
    // Data
    doc.setFontSize(16);
    doc.text(`Data de conclusão: ${date}`, pageWidth / 2, 100, { align: "center" });
    // Mensagem de agradecimento
    doc.setFontSize(16);
    doc.text("Agradecemos pelo seu trabalho e dedicação à nossa causa!", pageWidth / 2, 115, { align: "center" });
    // Assinatura
    doc.setFontSize(16);
    doc.text("______________________________", pageWidth / 2, 150, { align: "center" });
    doc.text(`${institutionName}`, pageWidth / 2, 160, { align: "center" });
    doc.save(`certificado_${userName.replace(/\s/g, "_")}_${jobName.replace(/\s/g, "_")}.pdf`);
  };

  if (loading) return <Spinner animation="border" className="mt-4" />;
  if (error) return <Alert variant="danger" className="mt-4">{error}</Alert>;

  if (!applications.length) return <Alert variant="info" className="mt-4">Nenhuma candidatura encontrada.</Alert>;

  return (
    <div className="container mt-4">
      <h2>Minhas Candidaturas</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Vaga</th>
            <th>Instituição</th>
            <th>Status</th>
            <th>Data</th>
            <th>Currículo</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => {
            let statusLabel = '-';
            if (app.status === 'ONGOING') statusLabel = 'Em andamento';
            else if (app.status === 'REJECTED') statusLabel = 'Rejeitada';
            else if (app.status === 'CHOSEN') statusLabel = 'Selecionada';
            else if (app.status) statusLabel = app.status;
            return (
              <tr key={app.id}>
                <td>{app.job?.name || "-"}</td>
                <td>{app.job?.institution?.name || "-"}</td>
                <td>{statusLabel}</td>
                <td>{app.createdAt ? new Date(app.createdAt).toLocaleString() : "-"}</td>
                <td>
                  {app.curriculumUrl ? (
                    <Button
                      as="a"
                      href={app.curriculumUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="sm"
                      variant="outline-primary"
                    >
                      Ver Currículo
                    </Button>
                  ) : (
                    "-"
                  )}
                  {app.status === "CHOSEN" && app.userCertificate == null && (
                    <Button
                      className="ms-2"
                      size="sm"
                      variant="success"
                      onClick={() => handleCreateCertificate(app.id)}
                    >
                      Gerar Certificado
                    </Button>
                  )}
                  {app.status === "CHOSEN" && app.userCertificate !== null && (
                    <Button
                      className="ms-2"
                      size="sm"
                      variant="success"
                      onClick={() => handleViewCertificate(app)}
                    >
                      Ver Certificado
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default JobApplicationsList;
