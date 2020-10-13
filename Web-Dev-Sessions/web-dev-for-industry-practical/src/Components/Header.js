import React from 'react'
import PropTypes from "prop-types";
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header(props) {

    const { name, image } = props;

    const headerStyle = {
        position: "relative",
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(180deg, #95A2FB 0%, #B69DFF 100%)",
        justifyContent: "space-between",

    }

    const headerPersonalStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexGrow: "0.1"
       }

    const headerNameStyle = {
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "17px",        
        /* Dark 50% */ 
        color: "rgba(31, 32, 65, 0.5)",
    }

    const headerImageContainerStyle = {
        background: "url(image.png)",
        border: "2px solid #FFFFFF",
        filter: "drop-shadow(0px 10px 20px rgba(31, 32, 65, 0.1))",
        borderRadius: "24px",
        width: "34px",
        height: "34px",
    }

    return (
        <div className="header" style= {headerStyle}>
            <MenuIcon style={ { color: "rgba(31, 32, 65, 0.5)",  flexGrow: "0.1"}}/>
            <div className="header_personal" style={headerPersonalStyle}>
                <ExpandMoreIcon style={ { color: "rgba(31, 32, 65, 0.5)", }}/>
                <span style={headerNameStyle}>{name}</span>
                <div className="header_image_container" style={headerImageContainerStyle}>
                    <img src={image} alt=""/>
                </div>
            </div>
        </div>
    )
}


Header.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
  };
  
  Header.defaultProps = {
    name: 'unknown',
    image: 'url',
  };

export default Header
