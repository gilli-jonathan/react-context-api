import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


export default function ProdottiPage(arr) {

    const prodotti_link = "https://fakestoreapi.com/products"

    const [prodotti, setProdotti] = useState([])

    useEffect(() => axiosCall(), [])

    function axiosCall() {
        axios.get(prodotti_link)
            .then((resp) => setProdotti(resp.data))
            .catch((err) => alert('errore di caricamento, mi dispiace'));

    }



    return (

        <main>

            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">

                    {/* GENITORE DELLE CARD */}
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                        {prodotti.map((obj) => (
                            <div className="col mb-5">
                                <div className="card h-100 p-4">

                                    {/* <!-- Immagine--> */}
                                    <div id="img-daddy">

                                        <img className="card-img-top" src={obj.image} alt="..." />

                                    </div>

                                    {/* <!-- card body--> */}
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            {/* <!-- Nome--> */}
                                            <h5 className="fw-bolder">{obj.title}</h5>
                                            {/* <!-- Prezzo--> */}
                                            {obj.price} $
                                        </div>
                                    </div>

                                    {/* <!-- cose da fare--> */}
                                    <div className="card-footer pt-0 border-top-0 bg-transparent">
                                        <div className="text-center">

                                            <Link class="btn btn-outline-dark mt-auto m-2" to={`/prodotti/${obj.id}`}>info</Link>
                                            <a class="btn btn-outline-success mt-auto m-2" href="#"><i class="bi bi-bag-plus-fill"></i></a>
                                            <a class="btn btn-outline-danger mt-auto m-2" href="#"><i class="bi bi-heart-fill"></i></a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>

                </div>
            </section>

        </main>
    )
}