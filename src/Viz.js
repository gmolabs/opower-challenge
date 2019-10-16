import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"

function Viz(props) {
    // const { vizMode, setVizMode } = useContext(VizContext)
    const curYear = props.data.energyUse.currentYear
    const lastYear = props.data.energyUse.priorYear
    const savings = lastYear - curYear
    const vizType = "cars"
    const carFactor = 35
    const treeFactor = 210
    const n = (vizType === "cars" ? Math.floor(savings / carFactor) : Math.floor(savings / treeFactor))

    console.log(n)

    return (
        <div style={{ padding: 20 }}>
            {[...Array(Math.abs(n))].map((e, i) => <img src="../car-fill.svg" style={{ width: "25%", padding: 10 }} key={i} />)}
        </div>
    )
}

export default Viz