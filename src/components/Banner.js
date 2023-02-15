import React from 'react'

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='row py-5'>
                <div className='col m-5'>
                    <h1 className='m-5'>Big Comeback</h1>
                    <p className='m-5 w-75'>Nullam porta, eros idaliquam pulvinar, urna ex mattis eros, ves-
                        tibulum urna turpis et risus. Mauris porttitor risus faucibus, auctor
                        arcu a, tincidunt nibh...</p>
                    <button type="button" id='watch' className="btn btn-primary ms-5">WATCH NOW</button>
                    <button type="button" className="btn btn-outline-light ms-4">+ PLAYLIST</button>

                </div>
                <div className='col w-100'>
                    <img src="https://res.cloudinary.com/donoutoby/image/upload/v1676474339/icono_jj5b6j.png" class="w-75" alt="icono de reproductor" />
                </div>
            </div>
        </div>
    )
}
