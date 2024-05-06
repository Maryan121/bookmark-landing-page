import React from 'react'
import '../css/downloadSection.css'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'
import dots from '../images/bg-dots.svg'

export default function DownloadSection() {
  return (
    <div className='downloadContainer'>
      <div className="downloadTitleAndInfo">
        <h3 className='downloadTitle'>Download the extension</h3>
        <p className='downloadDes'>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
      </div>
      <div className="downloadItems">
        <div className="item item1">
            <img src={chrome} alt="chrome" />
            <h4>Add to Chrome</h4>
            <p>Minimum version 62</p>
            <img style={{width:'90%',margin:'1rem 0'}} src={dots} alt="" />
            <button className='downloadBtn'> Add & Install Extension</button>
        </div>
        <div className="item item2">
            <img src={firefox} alt="firefox" />
            <h4>Add to Chrome</h4>
            <p>Minimum version 62</p>
            <img style={{width:'90%',margin:'1rem 0'}} src={dots} alt="" />
            <button className='downloadBtn'> Add & Install Extension</button>
        </div>
        <div className="item item3">
            <img src={opera} alt="opera" />
            <h4>Add to Chrome</h4>
            <p>Minimum version 62</p>
            <img style={{width:'90%',margin:'1rem 0'}} src={dots} alt="" />
            <button className='downloadBtn'> Add & Install Extension</button>
        </div>
        
      </div>
    </div>
  )
}
