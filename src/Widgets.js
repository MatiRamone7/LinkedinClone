import React from 'react'
import './Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Arme un Linkedin", "Top news! No soy tan pelotudo")}
            {newsArticle("Turismo para vacunarse: destinos, precios", "606 readers")}
            {newsArticle("La agencia de medicamentos de EEUU", "234 readers")}
            {newsArticle("Cómo será el vuelo de Jeff Bezos al espacio", "780 readers")}
            {newsArticle("El precio de la carne", "4005 readers")}
            {newsArticle("Polémica", "123 readers")}

        </div>

        
    )
}

export default Widgets
