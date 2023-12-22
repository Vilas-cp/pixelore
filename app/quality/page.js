import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import "../quality/quality.css"

function QualityCheck() {
  return (
    <div>
        <Header/>
        
    <div class="containeri">
        <div class="latlong">
            <form id="locationForm">
                <label for="latitude" class="lat" className='pr-2 text-white'>Latitude:</label>
                <input type="text" id="latitude" name="latitude" placeholder="Enter latitude" required/>
                <label for="longitude" class="long">Longitude:</label>
                <input type="text" id="longitude" name="longitude" placeholder="Enter longitude" required/>
            </form>
            <div>
                <img src="building.jpeg" alt="" class="img"/>

            </div>

            <div class="desc">
                <p class="des_p" className='font-bold ml-4 mt-4'>Problem Description :</p>
               
                
            </div>
        </div>
    </div>

    

    </div>
  )
}

export default QualityCheck;