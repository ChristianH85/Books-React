import React from 'react';
import axios from 'axios'
class StringInput extends React.Component{
    state={
        search:""
    }
    handleChange=(event)=>{
        const { name, value } = event.target;
        this.setState({[name]: value })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        
            axios.get(`GET https://www.googleapis.com/books/v1/volumes?q=this.state:keyes&key=AIzaSyB7YvSQOZdDQrI7MNPIOC8llHx5esbC0eM`)
      .then(res => {
        console.log("got")
      })
    

}
    render(){

    
    return(
        <div>
            <input name = "search" className = "query" placeholder="Search Books" value={this.state.search} onChange= {this.handleChange}></input>
            <button className = "search" onClick= {this.handleSubmit}>search</button>
        </div>
    )
    }
} 
export default StringInput