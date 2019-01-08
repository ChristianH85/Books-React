import React from 'react';
import axios from 'axios'
import StringInput from './StringInput';
 


class ResultsCard extends React.Component {
    state = {
      search: "",
      results: []
    };
 
       
       showResults=()=>{
           if(this.href === "/"){
            axios.get('api/saved').then(res =>{
                console.log("noneyet")
            })
           }
           
       } 
        handleChange=(event)=>{
            const { name, value } = event.target;
            this.setState({[name]: value })
        }
        handleSubmit=(event)=>{
            event.preventDefault()
            
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=this.state:keyes&key=AIzaSyB7YvSQOZdDQrI7MNPIOC8llHx5esbC0eM`)
          .then(res => {
            console.log("got")
          })
        }
      
     
        render(){
            return(
                <div className="card">
                <StringInput/>
                <a href= "/save"> saved </a>
                <div> or</div>
                <a href= "/"> search</a>
                </div>
            )
        }
    }
export default ResultsCard