import React from "react";
import { StrictMode } from "react";
import App from "./components/app.jsx";
import "./components/styles/main.css"
import "./components/styles/reset.css"
import "../node_modules/material-icons/iconfont/material-icons.css"
import "material-symbols"
import { useState } from "react"



export default  function Home() {
  return (
  <StrictMode>
    <App/>
  </StrictMode>
  
  )
}
