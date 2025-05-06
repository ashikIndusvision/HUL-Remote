import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f8f8f8",
        fontFamily: "sans-serif",
        color: "#333",
      }}>
        <h1 style={{ fontSize: "5rem", color:"red" , fontWeight:"600" }}>😕 404</h1>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem" , fontWeight:"600" }}>Page Not Found</p>
        <Link to="/" style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "1rem",
        }}>
          🔑 Go Back
        </Link>
      </div>
  )
}

export default Notfound