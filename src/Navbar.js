import React from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import SettingsMenu from "./SettingsMenu"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        height: 64
    }
}))

function Navbar({ priorYear, currentYear, setPriorYear, setCurrentYear }) {
    const classes = useStyles()
    return (
        <AppBar color="primary" position="static" className={classes.appBar}>
            <ToolBar>
                <Typography color="inherit" className={classes.title}>Your Energy Savings</Typography>
                <SettingsMenu priorYear={priorYear} currentYear={currentYear} setPriorYear={setPriorYear} setCurrentYear={setCurrentYear} />
            </ToolBar>
        </AppBar >
    )
}

export default Navbar