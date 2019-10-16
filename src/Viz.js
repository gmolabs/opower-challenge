import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"

function Viz() {
    // const { vizMode, setVizMode } = useContext(VizContext)
    const n = 6

    return (
        <div style={{ padding: 20 }}>
            {[...Array(n)].map((e, i) => <img src="../car-fill.svg" style={{ width: "25%", padding: 10 }} key={i} />)}
        </div>
    )
}

export default Viz