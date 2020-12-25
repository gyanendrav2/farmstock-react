import React, { useState, useContext } from "react";
import { congo } from "../assets/images/";
import { useParams } from "react-router-dom";

const CongratsPage = (props) => {
    return (
        <>
            <img
                style={{ width: "80%", height: "40%" }}
                src={`https://dev.farmstock.in/media/__sized__/listing/cattlelistingimage/ZII6hfn9QDaBwkTUmrgiQA-thumbnail-700x700.png`}
            />
            <h5 className="  text-center p-2">
                {props.location.state.postdata.name} ji, Congratulations
            </h5>
            <h5 className="text-center ">
                Your post is publicy available. you will get call from the
                customers soon
            </h5>
            <div className=" container-md mt-3 bg-blue ">
                <h6 className="text-center">
                    This, Sahiwal Cow{props.location.state.postdata.breed} is
                    available for sale on Krishify
                </h6>
                <div style={{ backgroundColor: "grey" }}>
                    <img
                        style={{ width: "100%" }}
                        src={props.location.state.img.front}
                    />
                </div>

                <h6 className="text-center">
                    {props.location.state.postdata.milking_capacity}, ltrs milk,
                    Pregnency count{" "}
                    {props.location.state.postdata.pregnancy_count}, Rs
                    {props.location.state.postdata.rate}
                </h6>
                <h6 className="text-center ">Gorakpur, Up, 110044</h6>
                <h8 className="text-center ">
                    Track your cattle order, Click here
                </h8>
                <br />
                <a href=""> click here</a>
            </div>
        </>
    );
};
export default CongratsPage;
