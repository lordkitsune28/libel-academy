import React from 'react'

export const ActionsMovies = () => {
    return (
        <div className='actions'>
            <div className="row p-5">
                <div className='col p-5'>
                    <div className='filtro mx-auto ps-5'>
                        <button type="button" class="btn d-inline mx-3">Today</button>

                        <p className='slash d-inline mx-3'>/</p>

                        <button type="button d-inline mx-3" class="btn">This week</button>

                        <p className='slash d-inline mx-3'>/</p>

                        <button type="button d-inline mx-3" class="btn">Last 30 days</button>

                    </div>
                    <div className='carrusel'>

                    </div>
                </div>
                <div className='col py-5'>
                    <div className='control w-75'>
                        <hr className='w-25' />
                        <h2 className='w-75 fs-1 fw-bold'>Action & Drama Movies</h2>

                        <button type="button" class="btn"> &lt; </button>
                        <button type="button" class="btn"> &gt; </button>

                        <hr className='mt-5' />

                        <p>VIEW ALL &gt;</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
