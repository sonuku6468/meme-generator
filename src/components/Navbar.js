import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./meme.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Explore your creativity</h4>
        </header>
    )
}