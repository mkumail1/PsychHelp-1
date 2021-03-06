import React from "react";
import Navbar from "../../UI/Navbar/Navbar";
import classes from "./Home.module.css";
import hero from "../../assets/hero.png";

const Home = () => {
    return (
        <div className={classes.Home}>
            <Navbar />
            {/* <div className="container"> */}
            <div
                className={["row d-flex align-items-center", classes.Home].join(
                    " "
                )}
            >
                <div
                    className={[
                        "col-sm-6 col-md-6 col-sm-12 col-xs-12 d-flex flex-column",
                        classes.cardColumn,
                    ].join(" ")}
                >
                    <div>
                        <h2 className={classes.title}>Matching patient <br/> with great doctors</h2><br/>
                    </div>
                    <div className={classes.cardRow}>
                        <div
                            className={["card col-lg-6", classes.cardAlignment].join(' ')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">For Doctors</h5>
                                <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <button className="btn btn-primary">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div
                            className={["card col-lg-6", classes.cardAlignment].join(' ')}
                        >
                            <div className="card-body">
                                <h5 className="card-title">For Patients</h5>
                                <p className="card-text">
                                    With supporting text below as a natural
                                    lead-in to additional content.
                                </p>
                                <button className="btn btn-primary">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={[
                        "col-sm-6 col-md-6 col-sm-12 col-xs-12",
                        classes.imageColumn,
                    ].join(" ")}
                >
                    <img src={hero} alt="Hero" />
                </div>
            </div>
            {/* </div> */}
        </div>
    );
};

export default Home;
