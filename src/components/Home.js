import React, { } from 'react';
import "./styles/Home.css";
import startingImg from "../assets/images/main.png";
import laptopImg from "../assets/images/laptops.png";
import girlImg from "../assets/images/girl.png";
import boyImg from "../assets/images/boy.png";
import { ImgCarousel } from './ImgCarousel';

export const Home = () => {
    return (
        <main>
            {/* top of page */}
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

            {/* mid page */}
            <section className="padding-block-900">
                <div className="container">
                    <div className="two-column | second-container-styling">
                        <div className="flow">
                            <ImgCarousel />
                            {/* <h1> Samples </h1> */}

                            {/* <img src={startingImg} alt="working-sample" />
                        <img src={startingImg} alt="working-sample" /> */}
                        </div>
                        <div className="flow">
                            <img src={laptopImg} alt="small-aesthetic-pic" />
                            <h1 className="fs-headings fw-bold txt-accent-clr-blue">Team Up to accomplish tasks</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* bottom page */}
            <section className="padding-block-900">
                <div className="container | container-divider">
                    <div className="three-column">
                        <div>
                            <img src={girlImg} height={250} alt="girl-img" />
                        </div>
                        <div className="flow">
                            <p className="fs-headings fw-bold txt-accent-clr-blue">Accountabilty at a high level with your Friends</p>
                            <button className="button">Get Started</button>
                        </div>
                        <div>
                            <img src={boyImg} height={250} alt="boy-img" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Home 