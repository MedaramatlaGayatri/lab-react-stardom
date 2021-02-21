import React, { Component } from 'react'
import prostar  from './prostars.json';
import './style.css';

export default class Newcomponent extends Component {
  constructor(){
    super();
    this.state = {
      stars : [prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]],
      length:5
        }
    }
   
    renderItems = () => {
              return this.state.stars.map((item,index) => (
                  <React.Fragment key={item.id}>
                      <tr>
                          <span><img src={item.pictureUrl} alt="" /></span>
                          <span>{item.name}</span>
                          <span>{item.popularity} </span>
                          <span> delete</span>
                     </tr>
                  </React.Fragment>
                  
              ));
          };
    addNewItem= () => {
    this.setState({length:this.state.length+1});
    const tempArray = this.state.stars;
    tempArray.push(prostar[this.state.length])
    this.setState({stars:tempArray})
      
    }
    sortbyname = () =>{
       var temp= this.state.stars;
      temp.sort((a, b) => (a.name > b.name) ? 1 : -1)
      this.setState({stars:temp});
    }
    sortbypopularity = () =>{
       var temp= this.state.stars;
       temp.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)
        this.setState({stars:temp});
    }
    render (){
        return (
          <React.Fragment>
               <button onClick={this.addNewItem}>add</button>
              <button onClick={this.sortbypopularity}>sortbypopularity</button>
                <button onClick={this.sortbyname}>sortbyname</button>
                 <ul>{this.renderItems()} </ul>           
                 </React.Fragment>
        );
}
}