import {Link} from 'react-router-dom' 
import React, { useEffect, useState } from "react";
import { imgDB,txtDB } from "../firebase"
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    deleteDoc,
    updateDoc,
    doc,
  } from "firebase/firestore";

 

function DashBoard(){

  const countriesAndCities = {
    "USA": [
      "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio",
      "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis",
      "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "Washington, D.C.", "Boston"
    ],
    "Canada": [
      "Toronto", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Winnipeg",
      "Quebec City", "Hamilton", "London", "Victoria", "Halifax", "Saskatoon", "Regina",
      "St. John's", "Kitchener", "Windsor", "Sudbury", "Thunder Bay", "Sherbrooke"
    ],
    "UK": [
      "London", "Manchester", "Birmingham", "Glasgow", "Liverpool", "Edinburgh", "Bristol",
      "Leeds", "Newcastle", "Sheffield", "Nottingham", "Cardiff", "Belfast", "Southampton",
      "Leicester", "Coventry", "Bournemouth", "Derby", "Plymouth", "Stoke-on-Trent"
    ],
    "France": [
      "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg",
      "Montpellier", "Bordeaux", "Lille", "Rennes", "Reims", "Le Havre", "Cergy-Pontoise",
      "Saint-Étienne", "Toulon", "Angers", "Grenoble", "Dijon", "Nîmes"
    ],
    "Germany": [
      "Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf",
      "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hannover", "Nuremberg",
      "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Mannheim"
    ],
    "Australia": [
      "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Newcastle",
      "Canberra", "Sunshine Coast", "Wollongong", "Geelong", "Hobart", "Townsville",
      "Cairns", "Darwin", "Toowoomba", "Ballarat", "Bendigo", "Albury", "Launceston"
    ],
    "India": [
      "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad",
      "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Patna",
      "Indore", "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Nashik"
    ],
    "Japan": [
      "Tokyo", "Osaka", "Kyoto", "Yokohama", "Nagoya", "Sapporo", "Fukuoka",
      "Kawasaki", "Kobe", "Kawaguchi", "Saitama", "Hiroshima", "Sendai", "Chiba",
      "Kitakyushu", "Nara", "Okayama", "Kumamoto", "Hamamatsu", "Kagoshima"
    ],
    "Brazil": [
      "Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza", "Belo Horizonte",
      "Manaus", "Curitiba", "Recife", "Porto Alegre", "Goiânia", "Belém", "Campinas",
      "São Luís", "Sorocaba", "Natal", "Aracaju", "Teresina", "Campo Grande", "João Pessoa"
    ],
    "South Korea": [
      "Seoul", "Busan", "Incheon", "Daegu", "Daejeon", "Gwangju", "Ulsan",
      "Suwon", "Seongnam", "Goyang", "Changwon", "Jeonju", "Cheongju", "Asan",
      "Gimhae", "Pohang", "Yangsan", "Anyang", "Bucheon", "Hwaseong"
    ],
    "Italy": ["Rome", "Milan", "Venice", "Florence", "Naples", "Turin"],
  "Spain": ["Madrid", "Barcelona", "Seville", "Valencia", "Granada", "Bilbao"],
  "China": ["Beijing", "Shanghai", "Guangzhou", "Xi'an", "Chengdu", "Hangzhou"],
  "Mexico": ["Mexico City", "Cancun", "Guadalajara", "Monterrey", "Tijuana", "Merida"],
  "Argentina": ["Buenos Aires", "Cordoba", "Rosario", "Mendoza", "Salta", "Mar del Plata"],
  "Russia": ["Moscow", "St. Petersburg", "Novosibirsk", "Yekaterinburg", "Kazan", "Samara"],
  "Egypt": ["Cairo", "Alexandria", "Luxor", "Aswan", "Sharm El Sheikh", "Hurghada"],
  "Greece": ["Athens", "Thessaloniki", "Crete", "Rhodes", "Santorini", "Corfu"],
  "Thailand": ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Krabi", "Hua Hin"],
  "South Africa": ["Cape Town", "Johannesburg", "Durban", "Pretoria", "Port Elizabeth", "Bloemfontein"]
  };
  
  var countrySelect1 = document.getElementById("countrySelect1");
  var citySelect1 = document.getElementById("citySelect1");
  var countrySelect = document.getElementById("countrySelect");
  var citySelect = document.getElementById("citySelect");

    const [days,setDays] = useState('')
    const [people,setPeople] = useState('')
    const [oldPrice,setOldPrice] = useState('')
    const [newPrice,setNewPrice] = useState('')
    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')
    const [countryImage,setCountryImage] = useState('')
    const [cityImage,setCityImage] = useState('')
    const [rate,setRate] = useState('')
    const [description,setDescription] = useState('')
    const [data,setData] = useState([])

    const [updatedDays, setUpdatedDays] = useState(days);
    const [updatedPeople, setUpdatedPeople] = useState(people);
    const [updatedOldPrice, setUpdatedOldPrice] = useState(oldPrice);
    const [updatedNewPrice, setUpdatedNewPrice] = useState(newPrice);
    const [updatedCountry, setUpdatedCountry] = useState(country);
    const [updatedCity, setUpdatedCity] = useState(city);
    const [updatedCountryImage, setUpdatedCountryImage] = useState(countryImage);
    const [updatedCityImage, setUpdatedCityImage] = useState(cityImage);
    const [updatedRate, setUpdatedRate] = useState(rate);
    const [updatedDescription, setUpdatedDescription] = useState(description);
    const [render, setRender] = useState('');

    // Function to update the city dropdown based on the selected country
    function updateCities() {
      const selectedCountry = countrySelect.value;
      const cities = countriesAndCities[selectedCountry] || [];
    
      // Clear the current city dropdown options
      citySelect.innerHTML = "";
    
      // Populate the city dropdown with the cities of the selected country
      cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect.appendChild(option);
      });
    }
    
    function updateCities1() {
      const selectedCountry1 = countrySelect1.value;
      const cities = countriesAndCities[selectedCountry1] || [];
    
      // Clear the current city dropdown options
      citySelect1.innerHTML = "";
    
      // Populate the city dropdown with the cities of the selected country
      cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        citySelect1.appendChild(option);
      });
    }
    // Populate the country dropdown initially
    //populateCountries();
    
    // Add an event listener to the country dropdown to update the city dropdown
    //countrySelect.addEventListener("change", updateCities);
    
    // Initialize the city dropdown based on the initial selected country
   // updateCities();

    const deleteCard = async (id) => {
        console.log(id + "idddd")
        const cardDoc = doc(txtDB, "txtData", id);
        await deleteDoc(cardDoc);
        toast.success("Data deleted successfully" 
        , {
          position: toast.POSITION.TOP_CENTER, // Change the position here
        });
        setRender(cardDoc);
      };

    const handleUpload1 = (e) =>{
        console.log(e.target.files[0])
        const imgs = ref(imgDB,`Imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setCountryImage(val)
            })
        })
    }

    const handleUpdate1 = (e) =>{
      console.log(e.target.files[0])
      const imgs = ref(imgDB,`Imgs/${v4()}`)
      uploadBytes(imgs,e.target.files[0]).then(data=>{
          console.log(data,"imgs")
          getDownloadURL(data.ref).then(val=>{
              setUpdatedCountryImage(val)
          })
      })
  }

  const handleUpdate2 = async (e) =>{
    console.log(e.target.files[0])
    const imgs = ref(imgDB,`Imgs/${v4()}`)
    uploadBytes(imgs,e.target.files[0]).then(data=>{
        console.log(data,"imgs")
        getDownloadURL(data.ref).then(val=>{
            setUpdatedCityImage(val)
        })
    })
}

    const handleUpload2 = (e) =>{
        console.log(e.target.files[0])
        const imgs = ref(imgDB,`Imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data=>{
            console.log(data,"imgs")
            getDownloadURL(data.ref).then(val=>{
                setCityImage(val)
            })
        })
    }

    const handleClick = async () =>{
      if(days === "" || people === "" || country === "" || city  === "" || countryImage === "" || cityImage === "" || 
          oldPrice === "" || newPrice === "" || rate === "" || description === ""){
            toast.error("Please enter all the data",{
              position: toast.POSITION.TOP_CENTER, // Change the position here
            });
          }
       else{
        const valRef = collection(txtDB,'txtData')
        await addDoc(valRef,{daysVal:days,peopleVal:people,countryVal:country,cityVal:city,countryImageVal:countryImage,
            cityImageVal:cityImage,oldPriceVal:oldPrice,newPriceVal:newPrice,rateVal:rate,descriptionVal:description})
        toast.success("Data added successfully" 
        , {
          position: toast.POSITION.TOP_CENTER, // Change the position here
        });
        setRender(days);
       }
}

const getData = async () =>{
    const valRef = collection(txtDB,'txtData')
    const dataDb = await getDocs(valRef)
    const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
    setData(allData)
    console.log(dataDb)
}

useEffect(()=>{
    getData();
    
}, [render])
console.log(data,"datadata")

const update = async (id) => {
  console.log(id + " iddddddd");
    if(updatedDays.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { daysVal: updatedDays });
      setRender(cardDoc)
    }
    if(updatedPeople.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { peopleVal: updatedPeople });
      setRender(cardDoc)
    }
    if(updatedOldPrice.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { oldPriceVal: updatedOldPrice });
      setRender(cardDoc)
    }
    if(updatedNewPrice.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { newPriceVal: updatedNewPrice });
      setRender(cardDoc)
    }
    if(updatedCountry.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { countryVal: updatedCountry });
      setRender(cardDoc)
    }
    if(updatedCity.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { cityVal: updatedCity });
      setRender(cardDoc)
    }
    if(updatedRate.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { rateVal: updatedRate });
      setRender(cardDoc)
    }
    if(updatedDescription.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { descriptionVal: updatedDescription });
      setRender(cardDoc)
    }

    if(updatedCityImage){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { cityImageVal: updatedCityImage });
      setRender(cardDoc)
    }
    if(updatedCountryImage.length !== 0){
      console.log("entered")
      const cardDoc = doc(txtDB, "txtData", id);
      await updateDoc(cardDoc, { countryImageVal: updatedCountryImage });
      setRender(cardDoc)
    }
    toast.success("Data updated successfully" 
        , {
          position: toast.POSITION.TOP_RIGHT, // Change the position here
        });

  };

//   function displayNone(id){

//     if (document.getElementById("modal").classList.contains("visible")) {
//       document.getElementById("modal").classList.remove("visible");
//       document.getElementById("modal").classList.add("hidden");
//     }

//  else if (document.getElementById("modal").classList.contains("hidden")) {
//       document.getElementById("modal").classList.remove("hidden");
//       document.getElementById("modal").classList.add("visible");
//     }
//   }

// Function to generate unique modal IDs based on the row ID
function generateModalId(rowId) {
  return `modal-${rowId}`;
}

// Updated displayNone function
function displayNone(id) {
  const modalId = generateModalId(id);
  const modal = document.getElementById(modalId);

  if (modal) {
    if (modal.classList.contains("visible")) {
      modal.classList.remove("visible");
      modal.classList.add("hidden");
    } else if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
      modal.classList.add("visible");
    }
  }
}



    const color = {
        backgroundColor: "green"
    }
    
    const delete1 = {
        backgroundColor: "red"
    }

    const update1 = {
        backgroundColor: "blue"
    }

      const countryOptions = Object.keys(countriesAndCities).map((countryName) => (
        <option key={countryName} value={countryName}>
          {countryName}
        </option>
      ));

    return(
      <div className="m-5">
        <div>
        <Link className="icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" to="/">
  Home
</Link>
        </div>
        <div className="mt-5">
        <div className="container mb-3"> 
        <div className='row'>
        <h1>
            Add Package
        </h1>
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Number Of Days</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=> setDays(e.target.value)} placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Number Of People</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=> setPeople(e.target.value)} placeholder="Number of Days" />
            </div>   
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Old Price</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=>setOldPrice(e.target.value)} placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">New Price</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=>setNewPrice(e.target.value)} placeholder="Number of Days" />
            </div>   
        </div>
        <div className='row my-4'>
          <div className='col'>
          <select className="form-select" id="countrySelect1"  onChange={(e)=>{setCountry(e.target.value); updateCities1();}} aria-label="Default select example">
          {countryOptions}
          </select>
          </div>
          <div className='col'>
          <select className="form-select" id="citySelect1" onChange={(e)=>setCity(e.target.value)} aria-label="Default select example">       
</select>
          </div>
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Country Image</label>
           <input type="file" className="form-control border color" onChange={(e)=>handleUpload1(e)} id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">City Image</label>
           <input type="file" className="form-control border color" onChange={(e)=>handleUpload2(e)} id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>   
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Please Enter The Rate From 1 - 5</label>
           <input type="number" min={1} max={5} onChange={(e)=>setRate(e.target.value)} className="form-control border color" id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'>       
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control border color" onChange={(e)=>setDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>   
        </div>
        <div className="row my-5">
        <button className="btn w-50 border" onClick={handleClick} style={color} type="button">Add</button>
        <ToastContainer />
        </div>
        </div>
        </div>  

        <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Number of Days</th>
                        <th scope="col">Number of people</th>
                        <th scope="col">Country</th>
                        <th scope="col">Country Image</th>
                        <th scope="col">City</th>
                        <th scope="col">City Image</th>
                        <th scope="col">Old Price</th>
                        <th scope="col">New Price</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      
        {
                data.map(value=>
                    <tr key={value.id} className='align-items-center'>
                        <td>{value.daysVal}</td>
                        <td>{value.peopleVal}</td>
                        <td>{value.countryVal}</td>
                        <td><img src={value.countryImageVal} className="img-fluid" alt="" /></td>
                        <td>{value.cityVal}</td>
                        <td><img src={value.cityImageVal} className="img-fluid" alt="" /></td>
                        <td>{value.oldPriceVal}</td>
                        <td>{value.newPriceVal}</td>
                        <td>{value.rateVal}</td>
                        <td>{value.descriptionVal}</td>
                        <td><button type="button" className="btn btn-danger border me-3" onClick={() => deleteCard(value.id)} style={delete1}>Delete</button></td>
                        <td><button type="button" className="btn btn-danger border " onClick={() => displayNone(value.id)} style={update1}>Update</button></td>
                        <div className=" modal fade-effect hidden" tabIndex="-1"  id={generateModalId(value.id)}>
  <div className="modal-dialog ">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Update The Package</h5>
        <button type="button" className="btn-close" data-bs-dismiss={generateModalId(value.id)} onClick={() => displayNone(value.id)} aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Number Of Days</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=> setUpdatedDays(e.target.value)} placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Number Of People</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=> setUpdatedPeople(e.target.value)} placeholder="Number of Days" />
            </div>   
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Old Price</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=>setUpdatedOldPrice(e.target.value)} placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">New Price</label>
           <input type="number" className="form-control border color" id="exampleFormControlInput1" onChange={(e)=>setUpdatedNewPrice(e.target.value)} placeholder="Number of Days" />
            </div>   
        </div>
           <div className='row my-4'>
           <div className='col'>
          <select className="form-select" id="countrySelect"  onChange={(e)=>{setCountry(e.target.value); updateCities();}} aria-label="Default select example">
          {countryOptions}
          </select>
          </div>
          <div className='col'>
          <select className="form-select" id="citySelect" onChange={(e)=>setCity(e.target.value)} aria-label="Default select example">       
</select>
          </div>
        </div>
           <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Country Image</label>
           <input type="file" className="form-control border color" onChange={(e)=>handleUpdate1(e)} id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">City Image</label>
           <input type="file" className="form-control border color" onChange={(e)=>handleUpdate2(e)} id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>   
        </div>
        <div className="row my-3">
          <div className='col-s-12 col-lg-6'> 
          <label htmlFor="exampleFormControlInput1" className="form-label">Rate</label>
           <input type="number" min={1} max={5} onChange={(e)=>setUpdatedRate(e.target.value)} className="form-control border color" id="exampleFormControlInput1" placeholder="Number of Days" />
            </div>
            <div className='col-s-12 col-lg-6'>       
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea className="form-control border color" onChange={(e)=>setUpdatedDescription(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>   
        </div>
      </div>
      <div className="d-block modal-footer">
        <button type="button" className="btn btn-danger border " onClick={() =>update(value.id)} style={update1}>Update</button>
      </div>
    </div>
  </div>
</div>
                      </tr>

                      
                )
        }
                    </tbody>
                  </table>
                  
      </div>
 
    );
}

export default DashBoard;