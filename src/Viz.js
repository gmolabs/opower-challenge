import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"
import CarFill from "./img/car-fill.svg"
import CarOutline from "./img/car-outline.svg"
import TreeFill from "./img/tree-fill.svg"
import TreeOutline from "./img/tree-outline.svg"

import Zoom from '@material-ui/core/Zoom';

function Viz({ currentYear, priorYear, vizMode }) {
    // const { vizMode, setVizMode } = useContext(VizContext)
    const curYear = currentYear
    const lastYear = priorYear
    const savings = lastYear - curYear
    const carFactor = 35
    const treeFactor = 210
    const n = (vizMode === "cars" ? Math.round(savings / carFactor) : Math.round(savings / treeFactor))

    return (
        <div style={{ padding: 20 }}>
            {[...Array(Math.abs(n))].map((e, i) =>
                <Zoom in={1} style={{ transitionDelay: `${(i + 1) * 100}ms` }} >
                    <img src={vizMode == "cars" ? CarFill : TreeFill} style={{ width: "20%", padding: 10 }} key={i} />
                </Zoom>
            )}
            {n == 0 &&
                <Zoom in={1} style={{ transitionDelay: "100ms" }} >
                    <img src={vizMode == "cars" ? CarOutline : TreeOutline} style={{ width: "20%", padding: 10 }} />
                </Zoom>
            }
        </div >
    )
}

export default Viz