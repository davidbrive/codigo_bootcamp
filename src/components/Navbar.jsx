import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className="navbar">
            <ul className="navbar-list">
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
            </ul>
        </nav>
    )
}
