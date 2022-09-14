import React from "react";
import "../dashboardstyles.css"
function MyMap(props) {
    const styles = {
    alignItems: 'center',
      display: 'grid',
      marginTop: '15px',
      gridTemplateRows: '160px 160px 160px 160px',
      gridTemplateColumns: '180px 180px 180px 180px',
      justifyContent: 'center',
      paddingLeft: '100px',
    }
    return (
        <div style={{marginTop: '50px'}}>
            <h1> MyMap </h1>

        
        <div className="map-container" style={styles}>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>
            <button>
            </button>

        </div>
        </div>
    )
}

export default MyMap;