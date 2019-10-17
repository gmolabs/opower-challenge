import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"

function Viz({ data, vizMode }) {
    // const { vizMode, setVizMode } = useContext(VizContext)
    const curYear = data.energyUse.currentYear
    const lastYear = data.energyUse.priorYear
    const savings = lastYear - curYear
    const carFactor = 35
    const treeFactor = 210
    const n = (vizMode === "cars" ? Math.round(savings / carFactor) : Math.round(savings / treeFactor))

    console.log(vizMode)
    return (
        <div style={{ padding: 20 }}>
            {[...Array(Math.abs(n))].map((e, i) => <img src={vizMode == "cars" ? "../car-fill.svg" : "../tree-fill.svg"} style={{ width: "20%", padding: 10 }} key={i} />)}
            {n == 0 && <img src={vizMode == "cars" ? "../car-outline.svg" : "../tree-outline.svg"} style={{ width: "20%", padding: 10 }} />}
        </div>
    )
}

export default Viz