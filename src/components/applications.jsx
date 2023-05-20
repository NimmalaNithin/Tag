import React from "react";

export default function Application() {
    const appData =[
        {id:1, name:"bio generator" , desc:"generate youtube account bio", image:""},
        {id:2, name:"title generator" , desc:"generate youtube video title", image:""},
        {id:3, name:"description generator" , desc:"generate youtube video description", image:""},
    ]
    
    const appList = appData.map(appDetails => 
        <Apps key = {appDetails.id} name = {appDetails.name} desc = {appDetails.desc} img = {appDetails.image} />
        )
    return (
      <div className="all-applications">
        {appList}
      </div>
    )
  }

function Apps({name, desc, img}) {
    return (
        <div className="app-item">
            <img src={img} alt="app-icon" />
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    )
}