import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
      let {title,description,link}=this.props;
    return (
      <div>
          
          <div className="card" style={{width: "18rem"}}/>
           
           <div className="card-body">
              <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
               <a href={link} target="_blank" className="btn btn-primary">See more</a>
           </div>
         </div>
          

     
    )
  }
}

export default Newsitem