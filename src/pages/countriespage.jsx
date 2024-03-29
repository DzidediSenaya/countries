import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Countriespage() {
const [countries, setCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

async function fetchCountries() {
  try {
    const response = await axios.get(url);
    setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
        
      }
  }

  async function display5Countries() {
  await  fetchCountries();
  console.log('countries', countries);
  const fiveItems = countries.slice(0, 5);
  console.log('five', fiveItems);
  }

  display5Countries();

//async function displayAllCountries(){
//const countries = await axios.get(url)
//const countriesBox = countries.data
//const slicedData = countriesBox.slice(0,5)



//}

  return (
    <>
      <Navbar />
      <h1>Countries</h1>
      <div className="outer-div">
        {countries.slice(0, 12).map((item) => (
          <div className="inner-div">
          <h2 className="official">{item.name.common}</h2>
          <h3 className="official">{item.name.official}</h3>
         <img src={item.flags.png} alt={item.flags.alt} className="flag"/>
         <Link to={`/Country/${item.name.common}`}> <button>Learn More</button></Link>
         </div>
        ))}
    </div>
    </>
  );
        }
