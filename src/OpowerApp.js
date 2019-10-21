import React, { useContext, useState, PureComponent } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Viz from "./Viz"
import data from "./data.json"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar"
import VizToggle from "./VizToggle"
import SavingsDescription from "./SavingsDescription"
import SavingsGraph from "./SavingsGraph"
import useLocalStorageState from "./hooks/useLocalStorageState"

function OpowerApp() {
    const [vizMode, setVizMode] = useLocalStorageState("vizType", "cars")
    const [priorYear, setPriorYear] = useLocalStorageState("priorYear", data.energyUse.priorYear)
    const [currentYear, setCurrentYear] = useLocalStorageState("currentYear", data.energyUse.currentYear)

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        bgPaper: {
            padding: 0,
            margin: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "#fafafa"
        },
        mainGrid: {
            marginTop: "1rem",
            width: "100vw"
        },
        descriptionPaper: {
            paddingTop: 20, paddingBottom: 20
        },
        vizPaper: {
            textAlign: "center"
        }
    }))
    const classes = useStyles()

    return (
        <Paper className={classes.bgPaper} elevation={0}>
            <Navbar priorYear={priorYear} currentYear={currentYear} setPriorYear={setPriorYear} setCurrentYear={setCurrentYear} />
            <Grid className={classes.mainGrid} container justify="center" spacing={3}>
                <Grid item xs={11} md={11} lg={6}>
                    <Paper className={classes.descriptionPaper}>
                        <SavingsDescription priorYear={priorYear} currentYear={currentYear} vizMode={vizMode} />
                        <SavingsGraph priorYear={priorYear} currentYear={currentYear} vizMode={vizMode} />
                    </Paper>
                </Grid>
                <Grid item xs={11} md={11} lg={5}>
                    <Paper className={classes.vizPaper}>
                        <VizToggle vizMode={vizMode} setVizMode={setVizMode} />
                        <Viz priorYear={priorYear} currentYear={currentYear} vizMode={vizMode} />
                    </Paper>
                </Grid>

            </Grid>
        </Paper >
    )
}

export default OpowerApp