import React from "react"
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup"
import ToggleButton from "@material-ui/lab/ToggleButton"
import DriveEta from "@material-ui/icons/DriveEta"
import NaturePeople from "@material-ui/icons/NaturePeople"
import Typography from "@material-ui/core/Typography"

function VizToggle({ vizMode, setVizMode }) {
    const handleVizMode = (event, newVizMode) => {
        if (newVizMode) {
            setVizMode(newVizMode)
        }
    }

    return (
        <ToggleButtonGroup
            style={{ margin: 20 }}
            value={vizMode}
            exclusive
            onChange={handleVizMode}
            aria-label="viz type">
            <ToggleButton value="cars" aria-label="cars">
                <DriveEta /><Typography>Cars</Typography>
            </ToggleButton>
            <ToggleButton value="trees" aria-label="trees">
                <NaturePeople /><Typography>Trees</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default VizToggle