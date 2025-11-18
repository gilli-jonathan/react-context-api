import { Link, NavLink } from "react-router-dom";
import Logo from '../assets/img/ghost.png'

export default function Navbar() {

    const nav_header = [
        { id: 1, title: 'Home', link: '/' },
        { id: 2, title: 'Prodotti', link: '/prodotti' },
        { id: 3, title: 'Chi siamo', link: '/chi-siamo' }

    ]



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container px-4 px-lg-5">
                    <div id="logo-container">
                        <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                            {
                                nav_header.map((obj) => (

                                    <li key={obj.id} className="nav-item">
                                        <NavLink className="nav-link" aria-current="page" to={obj.link}>{obj.title}</NavLink>
                                    </li>

                                ))
                            }

                        </ul>


                        <form className="d-flex">
                            <button className="btn btn-outline-light" type="submit">
                                <i class="bi bi-bag me-1"></i>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button>


                            {/* <button className="btn btn-outline-danger" type="submit">
                                <i class="bi bi-heart-fill"></i>
                                <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                            </button> */}
                        </form>
                    </div>
                </div>
            </nav>


        </>
    )
}