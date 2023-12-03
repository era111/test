import App from "./app"
import React from "react"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

const devMode = process.env.NODE_ENV === "development"
if (devMode && module && module.hot) {
  module.hot.accept()
}
