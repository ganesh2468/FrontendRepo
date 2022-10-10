import React,{useContext} from "react";
import {HelloContext} from './Hooks'
const HelloComponent=()=>{
    const hello=useContext(HelloContext)
    console.log(hello)
    return(
        <h1>Hello from child of main MainComponent</h1>
    )
}

export default HelloComponent