
import React from 'react'

import { Cards, Chart, CountryPicker, Navbar, HeroSection, Wrapper } from './component'
import { BrowserRouter as Router} from 'react-router-dom';
import styles from './App.module.css'
import  fetchData  from './api/card_details'

class App extends React.Component{

  state= {
    data :{},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    if( country !== 'global'){
      this.setState({ data: fetchedData, country:country})
    
    }
    else{
      const fetchedData = await fetchData();
      this.setState({data:fetchedData})
    }
    
  
  }


  render() {

    const {data,country} = this.state

    return(

      <div>
          <Router>
             <Navbar />
             <HeroSection />
          </Router>
     
          <div className={styles.container}>
              <Cards data={data} />
            
              <CountryPicker handleCountryChange={this.handleCountryChange}/>
              <Chart data={data} country={country} />
            
        </div>
        
       <Wrapper />

     </div>
    )
  }
}

export default App