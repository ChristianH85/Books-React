import React from 'react'
import Header from '../components/Header';
import ResultsCard from '../components/ResultsCard';
import Footer from '../components/Footer';
 class Search extends React.Component{
     
    render(){
        return(
        <div>
        <div className="App">
        <Header/>
          <header className="App-header">
            
            
            <ResultsCard/>
            
          </header>
          <Footer/>
        </div>
        </div>
        )
    }
 }
 export default Search