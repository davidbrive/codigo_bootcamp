import { useNavigate } from "react-router-dom"

export function Footer() {
    const navigate = useNavigate()
    return (
        <div className="footer-container">
            <div className="footer-social">
                <ol className="footer-list">
                    <li>
                        <button
                            onClick={() => navigate("/home")}
                            className="logo"
                        />
                    </li>
                    <li>
                        <button
                            onClick={() => navigate("/conditions")}
                            className="conditions"
                        >
                            Terms + Conditions
                        </button>
                    </li>
                    <li>
                        <a href="#">
                            <img className="social-media" src="/images/facebook.svg" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="social-media" src="/images/twitter.svg" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="social-media" src="/images/linkedin.svg" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="social-media" src="/images/instagram.svg" alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="social-media" src="/images/tiktok.svg" alt="tiktok" />
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    )
}
