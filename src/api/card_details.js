

import axios from 'axios'

const url ='https://covid19.mathdro.id/api';

const fetchData = async (country) => {

    let changableUrl =url;

    if (country){
        changableUrl = `${url}/countries/${country}`
    }
     

    try{
        const {data: {confirmed, recovered, deaths, lastUpdate}  } = await axios.get(changableUrl);

        return {confirmed, recovered,deaths,lastUpdate}    
    }
    catch(error){

    }
}

export default fetchData