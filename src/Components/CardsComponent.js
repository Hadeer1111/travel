import img10 from '../images/10.webP'
import img11 from '../images/11.webP'
import img12 from '../images/12.webP'
import img13 from '../images/13.webP'
import img14 from '../images/14.webP'
import img15 from '../images/15.webP'

import img45 from '../images/45.webP'
import img46 from '../images/46.webP'
import img47 from '../images/47.webP'
import img48 from '../images/48.webP'
import img49 from '../images/49.webP'
import img50 from '../images/50.webP'
import Card from './Card'
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {txtDB} from "../firebase"

function CardsComponents(){

    const [data,setData] = useState([])

    const getData = async () =>{
        const valRef = collection(txtDB,'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb)
    }
    
    useEffect(()=>{
        getData()
    })
    console.log(data,"datadata")

    const row1 = [
        {
            img1: img10,
            img2: img45,
            days: "8",
            number: "25",
            city: "Bern",
            country: "Switzerland",
            discount: "1000",
            price:"2000"
        },
        {
            img1: img11,
            img2: img46,
            days: "8",
            number: "30",
            city: "Brazil",
            country: "Brazil",
            discount: "1223",
            price:"2000"
        },
        {
            img1: img12,
            img2: img47,
            days: "8",
            number: "155",
            city: "Giza",
            country: "Egypt",
            discount: "1000",
            price:"2000"
        },
        {
            img1: img13,
            img2: img48,
            days: "8",
            number: "25",
            city: "Tokyo",
            country: "Japan",
            discount: "1500",
            price:"2000"
        },
        {
            img1: img14,
            img2: img49,
            days: "8",
            number: "30",
            city: "Riyadh",
            country: "Saudi Arabia",
            discount: "1800",
            price:"2000"
        },
        {
            img1: img15,
            img2: img50,
            days: "8",
            number: "155",
            city: "Paris",
            country: "France",
            discount: "1000",
            price:"2000"
        }
    ]


    const pStyle = {
        fontFamily: "'Poppins', sans-serif", 
        color: "#DF6951"
    }

    const h3Style = {
        fontFamily: "'Volkhov', serif", 
        color: "#181E4B"
    }

    return(
        <div className="text-center">
        <p className="text-uppercase fw-bold" style={pStyle}>trendy</p>
        <h3 className="fw-bold text-capitalize text-wrap" style={h3Style}>Our Trending Tour Packages</h3>
        <div className="container py-5">
          <div className="row justify-content-center align-items-center pb-5">
          {data.map(value => (
        <Card key={value.id} img1={value.cityImageVal} img2={value.countryImageVal} 
        days={value.daysVal} number={value.peopleVal} city={value.cityVal} 
        country={value.countryVal} discount={value.newPriceVal} price={value.oldPriceVal}
        des={value.descriptionVal} rate = {value.rateVal} />
      ))}
            </div>
            </div>
            </div>
    );
}

export default CardsComponents;