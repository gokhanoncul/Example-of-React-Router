import React from "react";
import "./Modal.css";

const About = () => {

    return( 
        <div> 
                {/* <div className="modal">
                    <div className="modal-content">
                        <h3>I'm a Model</h3>
                    </div>
                </div>    */}
            <div className="ui raised very padded container segment" style={{marginTop:"80px"}}>
                <h3 className="ui header">About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    
    )
}

export default About;