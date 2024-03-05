import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import axios from "axios";

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
    <div>
      <Navbar />
      <h1>Country List</h1>
      <ul>
        {countries.slice(0, 5).map((country, index) => (
          <li key={index}>{country.name.common}</li>
        ))}
      </ul>
    </div>
  );
}
