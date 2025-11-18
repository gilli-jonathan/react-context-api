import Jumbo from "../assets/img/jumbo.png"
export default function HomePage() {


    return (
        <>
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div
                        className="h-100 p-5 rounded-3"
                    >
                        <h2>Jon & Jon Shop</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod quidem unde eos modi aperiam ut, a assumenda quae dolorem reiciendis similique officiis qui est nemo et ullam aspernatur explicabo illo.
                        </p>

                    </div>
                </div>
                <div className="col-md-6">
                    <div id="jumbo-img" className="h-100 p-5 rounded-3" >
                        <img src={Jumbo} alt="" />

                    </div>
                </div>
            </div>




        </>

    )

}