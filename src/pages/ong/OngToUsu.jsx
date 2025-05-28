import HeaderLog from "../../components/HeaderLog";
import { useState } from "react";
import Vagas from "../../components/Vagas";
import Post from "../../components/Post";

function OngToUsu() {
    const [isUser, setIsUser] = useState(true);


    return (
        <div>
            <HeaderLog />
            <div className="container pt-5">
                <div className="row align-items-center">
                    <div className="col-4">
                        <img src="https://placehold.co/300x200" className="rounded" alt="" />
                    </div>
                    <div className="col-8 text-center">
                        <div className="fs-3 fw-bold">
                            Nome da ONG
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet lorem ex, id malesuada eros dignissim id. Morbi vehicula libero augue, vel sagittis nisl sodales eu. In vitae arcu dolor. Donec ut quam arcu. Maecenas vestibulum quam vel leo lacinia, lacinia euismod dui porta. Aliquam tempus finibus turpis sit amet elementum. Vivamus eu vehicula velit. Nulla quis sodales nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ac auctor tellus. Praesent rutrum odio in dui luctus, a aliquam sem tempus. Proin dictum et dui in viverra. Mauris porttitor ex sapien, vitae auctor massa suscipit ac. Suspendisse at aliquet enim.</div>
                </div>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center pt-5 pb-3">
                <button
                    className="btn btn-success fw-semibold"
                    onClick={() => setIsUser(true)}
                    disabled={isUser === true}
                >
                    Vagas
                </button>
                <button
                    className="btn btn-success fw-semibold"
                    onClick={() => setIsUser(false)}
                    disabled={isUser === false}
                >
                    Postagens
                </button>
            </div>
            <div className="d-flex justify-content-center">
                {isUser ? <Vagas /> : <Post />}
            </div>
        </div>
    );
}

export default OngToUsu;
