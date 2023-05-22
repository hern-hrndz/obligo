import React, { } from 'react';
import "./styles/Intro.css";
import startingImg from "../assets/images/main.png";

export const Intro = () => {
    return (
        <section className="padding-block-900">
            <div className="container">
                <div className="two-column">
                    <div className="flow">
                        <h1 className="fw-bold fs-headings txt-accent-clr-blue">Accountabilty at a Fun Level</h1>
                        <p>Work an an accountable way, with friends!</p>
                        <button className="button" id="intro-button">Get Started</button>
                    </div>

                    <div>
                        <img src={startingImg} alt="startingImg" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Intro 