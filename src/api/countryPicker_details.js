


import axios from 'axios'

const url ='https://covid19.mathdro.id/api';

const fetchCountries = async () => {
    try{
        const { data : {countries} }= await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    }
    catch(error){
        console.log(error)
    }
}

export default fetchCountries