const URL = "http://localhost:8080";

// Helper to get token from sessionStorage (customize as needed)
const getToken = () => window.sessionStorage.getItem("token");

const api = {
  // AUTHENTICATION
    login: (body) => {
    return fetch(`${URL}/authentication/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    },              
  register: (body) => fetch(`${URL}/authentication/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }),

  // PUBLIC
  listInstitutions: (search = "", page = 0, size = 10) => fetch(`${URL}/public/institutions/?search=${search}&page=${page}&size=${size}`),
  getInstitution: (id) => fetch(`${URL}/public/institutions/${id}`),
  listJobs: (search = "", page = 0, size = 10) => fetch(`${URL}/public/jobs?search=${search}&page=${page}&size=${size}`),
  listPostsByInstitution: (institutionId) => fetch(`${URL}/public/institutions/${institutionId}/posts`),
  getPost: (id) => fetch(`${URL}/public/posts/${id}`),
  listJobsByInstitution: (institutionId) => fetch(`${URL}/public/institutions/${institutionId}/jobs`),
  getJob: (id, token) => fetch(`${URL}/public/jobs/${id}`, {
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),

  // USER
  updateUser: (formData, token) => fetch(`${URL}/user/users/update`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token || getToken()}` },
    body: formData
  }),
  showUser: (token) => fetch(`${URL}/user/users/show`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token || getToken()}` },
  }),
  createJobApplication: (jobId, formData, token) => fetch(`${URL}/user/jobs/${jobId}/job_application`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token || getToken()}` },
    body: formData
  }),
  listJobApplications: (token) => fetch(`${URL}/user/job-applications`, {
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  getJobApplication: (id, token) => fetch(`${URL}/user/job-applications/${id}`, {
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  updateJobApplicationStatus: (id, status, token) => fetch(`${URL}/user/job-applications/${id}/status?status=${status}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  deleteJobApplication: (id, token) => fetch(`${URL}/user/job-applications/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  createCertificate: (body, token) => fetch(`${URL}/user/certificates`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }),
  listCertificates: (token) => fetch(`${URL}/user/certificates`, {
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  getCertificate: (id, token) => fetch(`${URL}/user/certificates/${id}`, {
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  updateCertificate: (id, body, token) => fetch(`${URL}/user/certificates/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }),
  deleteCertificate: (id, token) => fetch(`${URL}/user/certificates/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  createInstitution: (body, token) => fetch(`${URL}/user/institutions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }),

  // INSTITUTION
  createJob: (body, token) => fetch(`${URL}/institution/jobs`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
      // Não definir Content-Type para permitir envio de FormData
    },
    body
  }),
  completeJob: (id, token) => fetch(`${URL}/institution/jobs/${id}/complete`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token || getToken()}` },
  }),
  deleteJob: (id, token) => fetch(`${URL}/institution/jobs/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  createPost: (body, token) => fetch(`${URL}/institution/posts`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
    },
    body
  }),
  editPost: (id, body, token) => fetch(`${URL}/institution/posts/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
    },
    body
  }),
  editInstitution: (formData, token) => fetch(`${URL}/institution`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token || getToken()}` },
    body: formData
  }),
  deletePost: (id, token) => fetch(`${URL}/institution/posts/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
    }
  }),
  getJobDetails: (id, token) => fetch(`${URL}/institution/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${token || getToken()}`,
    }
  }),
  rejectJobApplication: (id, token) => fetch(`${URL}/institution/job_applications/${id}/reject`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
  chooseJobApplication: (id, token) => fetch(`${URL}/institution/job_applications/${id}/choose`, {
    method: "PUT",
    headers: { Authorization: `Bearer ${token || getToken()}` }
  }),
};

export default api;
