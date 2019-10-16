import React, { useContext } from "react"
import { VizContext } from "./contexts/VizContext"
import Paper from "@material-ui/core/Paper"
import { flexbox } from "@material-ui/system"

function Viz() {
    const { vizMode, setVizMode } = useContext(VizContext)

    return (
        <div style={{
            display: "flex",
            padding: 20,
            margin: 0,
            height: 500,
            justifyContent: "center"
        }}>
            Cars
        </div>
    )
}

export default Viz