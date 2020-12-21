import React from 'react'

export const Items = ({ name, init_date, end_date, prediction, image, zodiacImage, color }) => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img width="100%" height="100%" src={zodiacImage} alt={image}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-header">
                        <h3 style={{'color': color}}>{name}</h3>
                    </div>
                    <div className="card-body">
                        <p className="card-text">
                            {prediction}
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-footer text-center"> 
                <label style={{'color': color, }}>{init_date} al {end_date}</label>
            </div>
        </>
    )
}


