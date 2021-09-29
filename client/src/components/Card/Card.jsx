import { Link } from "react-router-dom"
import React, { useState } from "react";

export default function Card ({props}=props) {
    console.log (props)
    return (
        <div>
            <h1>{props.texto}</h1>
        </div>
    )
}