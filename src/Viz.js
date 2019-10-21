import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"
import CarFill from "./img/car-fill.svg"
import CarOutline from "./img/car-outline.svg"
import TreeFill from "./img/tree-fill.svg"
import TreeOutline from "./img/tree-outline.svg"
import uuid from "uuid"
import getNItems from "./utils/nItems"
import Zoom from '@material-ui/core/Zoom';

function Viz({ currentYear, priorYear, vizMode }) {
    const nItems = getNItems(currentYear, priorYear, vizMode)
    return (
        <div style={{ padding: 20 }}>
            {[...Array(Math.abs(Math.round(nItems)))].map((e, i) =>
                <Zoom in={true} key={uuid.v4()} style={{ transitionDelay: `${(i + 1) * 100}ms` }} >
                    <img
                        src={vizMode == "cars" ? CarFill : TreeFill}
                        style={{
                            width: "20%",
                            padding: 10,
                            // filter: "invert(0.5) sepia(1) saturate(1) hue-rotate(" + Math.floor(Math.random() * 360) + "deg)"
                        }}
                        key={i}
                    />
                </Zoom>
            )}
            {nItems == 0 &&
                <Zoom in={true} style={{ transitionDelay: "100ms" }} >
                    <img src={vizMode == "cars" ? CarOutline : TreeOutline} style={{ width: "20%", padding: 10 }} />
                </Zoom>
            }
        </div >
    )
}

export default Viz