import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux"; // Contact component'ni redux ile bağlamak için, react-redux kütüphanesinden connect fonksiyonu aldık.

const Contact = ({ cards }) => {
     
    return(

        <div>
             {
                 cards.map((card) => {
                    return (
                        <div className="ui raised very padded container segment" style={{marginTop:"80px"}} key={card.id}>
                            <Link to = {`/${card.title}`} className="ui header">{card.title}</Link>
                            <p>{card.body}</p>
                        </div>
                    )
                 })
             }
        </div>
    )
}

const mapStateToProps = (state) => { //redux'ın state'i parametre olarak verildi.

    const {cards}  = state;

    return {
        cards
    }
}

export default connect(mapStateToProps)(Contact);