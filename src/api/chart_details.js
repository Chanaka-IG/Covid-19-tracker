

import axios from 'axios'

const url ='https://covid19.mathdro.id/api';

 
const fetchDailyData = async() => {
    try {
       const {data} = await axios.get(`${url}/daily`)     
       
    

        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths : dailyData.deaths.total,
             date : dailyData.reportDate,

            
        }));
    return modifiedData

    } catch (error) {
        console.log(error)    
    }
}

export default fetchDailyData