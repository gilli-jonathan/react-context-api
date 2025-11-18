import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function ProdottoSingoloPage() {

    const { id } = useParams()
    const [prod, setProd] = useState({})

    // funzione che chiama il prodotto tramite l'ID corrsipondente
    function axiosCall() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resp) => setProd(resp.data))
            .catch((err) => alert('errore di caricamento, mi dispiace'));

    }

    // con effect faccio partire la funzione al caricamento della pagina
    useEffect(axiosCall, [])



    return (
        <main>

            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div
                        className="h-100 p-5 text-dark bg-ligth rounded-3"
                    >
                        <h2>{prod.title}</h2>
                        <p>
                            {prod.description}
                        </p>
                        <p><h3>{prod.price} $</h3></p>

                        <p></p>
                        <button
                            className="btn btn-outline-success m-3"
                            type="button"
                        >
                            Aggiugngi al carello <i className="bi bi-bag-plus-fill"></i>
                        </button>
                        <button
                            className="btn btn-outline-danger m-3"
                            type="button"
                        >
                            Aggiugngi ai preferiti <i className="bi bi-heart-fill"></i>
                        </button>

                    </div>
                </div>


                <div className="col-md-6">
                    <div className="h-100 p-5 rounded-3">

                        <div id="jumbo-img">
                            <img src={prod.image} alt="" />
                        </div>



                    </div>
                </div>
            </div>



        </main>
    )
}