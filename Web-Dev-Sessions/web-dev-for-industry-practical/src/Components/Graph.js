import React from "react";
import PropTypes from "prop-types";

function Graph(props) {
    const { progress, progress1, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9 } = props;

  const graph = {
    position: "relative",
    width: "13.74px",
    height: "31.74px",
    background: "linear-gradient(180deg,rgba(111, 207, 151, 0.25) 0%,#65cfe752 100%)",
    borderRadius: "2px",
  }
  const graph_front = {
    position: "absolute",
    background: "linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%)",
    borderRadius: "2px",
    width: "13.74px",
    bottom: "0",
    left: "0",
    right: "0",
  
  }

  return (
    <div className="graph_container" style={ {maxWidth:"200px", margin:"auto", display:"flex", flexDirection:"row", justifyContent:"space-evenly", alignItems:"center"}}>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress}%`}} >
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress1}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress2}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress3}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress4}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress5}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress6}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress7}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress8}%`}}>
                </div>
            </div>
            <div className="graph" style={graph}>
                <div className="graph_front" style = {{...graph_front, height:`${progress9}%`}}>
                </div>
            </div>
    </div>
    );
}

Graph.propTypes = {
    progress: PropTypes.number,
  };
  
  Graph.defaultProps = {
    progress: 0,
  };


export default Graph;
