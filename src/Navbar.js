import React from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

function Navbar() {
    return (
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
            <ToolBar>
                <Typography color="inherit">Your Energy Savings</Typography>
            </ToolBar>
        </AppBar>
    )
}

export default Navbar