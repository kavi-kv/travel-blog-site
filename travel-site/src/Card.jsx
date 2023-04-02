import React from 'react'
import './card.css'



export default  function MyCard(props)
{
  const img = props.coverImage
    return (
        <>
        <div className='container'>
            <div className="main-card">
                <div>
                    <img src={props.info.coverImage} className="card-img"/>
                </div>
                <div className="card-text">
                    <div className="location-info">
                        <img src={props.info.locImage} className="location-img"/>
                        <span className="country-name">{props.info.countryName}</span>
                        {/* <p className="loaction-link">{props.info.mapLink}</p> */}
                        <a href={props.info.link} className="loaction-link">{props.info.mapLink}</a>
                    </div>
                    <h2 className="location-name">{props.info.locationName}</h2>
                    <div className="card-desc">
                        <h3 className="duration">{props.info.duration}</h3>
                        <p className="description">{props.info.description}</p>
                    </div>
                    {/* <hr/> */}
                </div>
            </div>
            <hr/>
        </div>
        
        </>
    )
}