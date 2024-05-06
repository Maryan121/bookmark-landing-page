import React, { useState } from 'react'
import '../css/features.css'
import data from './data/featuresData'

export default function Features() {
    const[featuresData,setFeaturesData] = useState(data)
    const[count,setCount] = useState(0)

  return (
    <div className='featuresContainer' id='features'>
        <h3 className='h3 title'>Features</h3>
        <p className='p'>Our aim is to make it quick and easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can access them on the go.
        </p>
            <div className='featuresDetailsSection'>
                <div className="featuresBts">
                    <hr />
                    <button className='featuresBtn active' 
                        onClick={()=>{
                        setCount(0)
                    }}>Simple Bookmarking</button>
                    <hr />
                    <button className='featuresBtn' onClick={()=>{
                        setCount(1)
                    }}>Speedy Searching</button>
                    <hr />
                    <button className='featuresBtn' onClick={()=>{
                        setCount(2)
                    }}> Easy Sharing </button>
                    <hr />
                </div>
                <hr className='generalHr'/>

                <div className="detailsSec">
                    <div className="imgSec">
                        <img  src={featuresData[count].image} alt="" />
                    </div>
                    <div className="infoSec">
                        <h3>{featuresData[count].title}</h3>
                        <p>{featuresData[count].description}</p>
                        <button className='more'>More info</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
