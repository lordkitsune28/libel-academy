import React, { useState } from 'react'

export const ActionsMovies = () => {

    const [part1, setPart1] = useState("d-inline-flex ms-5")
    const [part2, setPart2] = useState("d-none")

    let respuesta;
    const evaluar = (e) => {
        respuesta = e.target.value

        if (respuesta === "atras") {
            setPart1("d-inline-flex ms-5");
            setPart2("d-none");
        } else if (respuesta === "adelante") {
            setPart2("d-inline-flex ms-5");
            setPart1("d-none");
        }
    }

    return (
        <div className='actions'>
            <div className="row p-5">
                <div className='col p-5'>
                    <div className='filtro mx-auto ps-5'>
                        <button type="button" className="btn d-inline mx-3">Today</button>

                        <p className='slash d-inline mx-3'>/</p>

                        <button type="button d-inline mx-3" className="btn">This week</button>

                        <p className='slash d-inline mx-3'>/</p>

                        <button type="button d-inline mx-3" className="btn">Last 30 days</button>

                    </div>
                    <div className='carrusel'>
                        <div id='part1' className={part1}>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">Den of Thieves</h5>
                                </div>
                            </div>

                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, Thriller, 2018</p>
                                    <h5 className="fs-6 fw-bold">Lady Bird</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, Drama, 2017</p>
                                    <h5 className="fs-6 fw-bold">Lady Bird</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, Mystery, 2016</p>
                                    <h5 className="fs-6 fw-bold">Spiderman 3</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2018</p>
                                    <h5 className="fs-6 fw-bold">American Made</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2011</p>
                                    <h5 className="fs-6 fw-bold">Begin Again</h5>
                                </div>
                            </div>

                        </div>
                        <div id='part2' className={part2}>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">holi</h5>
                                </div>
                            </div>

                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">holi</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">holi</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">holi</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">holi</h5>
                                </div>
                            </div>
                            <div className="card w-25 mx-1 bg-transparent">
                                <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676487030/download_eszcvp.jpg" class="card-img-top" alt='den of thieves' />
                                <div>
                                    <p className="m-0">Action, 2016</p>
                                    <h5 className="fs-6 fw-bold">funciono</h5>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='col py-5'>
                    <div className='control w-75'>
                        <hr className='w-25' />
                        <h2 className='w-75 fs-1 fw-bold'>Action & Drama Movies</h2>

                        <button type="button" className="btn" value={"atras"} onClick={(e) => evaluar(e)}>&lt;</button>
                        <button type="button" className="btn" value={"adelante"} onClick={(e) => evaluar(e)}>&gt;</button>

                        <hr className='mt-5' />

                        <p>VIEW ALL &gt;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
