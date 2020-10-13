import React from 'react'
import PropTypes from "prop-types";

function ProgressBar(props) {
    const {progressTrack} = props;
    const progressBarStyle = {
        position: "relative",
        width: "280px",
        height: "10px",
        background: "rgba(188, 156, 255, 0.25)",
        borderRadius: "20px",
    }

    const progressBarSlideStyle = {
        position: "absolute",
        width: "280px",
        height: "10px",
        background: "rgba(188, 156, 255, 0.25)",
        borderRadius: "20px",
        background: "linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)",
        borderRadius: "20px",
    }

    const fontStyle = {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "bold",
        fontWize: "12px",
        lineHeight: "15px",
        textTransform: "uppercase",

/* Dark 50% */

color: "rgba(31, 32, 65, 0.5)",
    }

    return (
        <div className="progressBar_container" style={ {width:"280px", margin:"auto", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", paddingTop: "10px"}}>
        <div>
            <div className="progressBar" style={progressBarStyle}>
                <div className="progressBar_slide" style= {{...progressBarSlideStyle, width: `${progressTrack}%`}}></div>
            </div>
        </div>
        <div style = {{alignSelf: "flex-start"}}>
            <p style = {fontStyle}>{progressTrack}% TO<br/>GOAL</p>

        </div>
    
        </div>
    )
}

ProgressBar.propTypes = {
    progressTrack: PropTypes.number,
  };
  
  ProgressBar.defaultProps = {
    progressTrack: 0,
  };



export default ProgressBar
