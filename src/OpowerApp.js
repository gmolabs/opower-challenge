import React from "react"
import Typography from "@material-ui/core/Typography"
import { DriveEta, NaturePeople } from "@material-ui/icons"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Viz from "./Viz.js"

function OpowerApp() {
    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">Your Energy Savings</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={6}>
                    <Paper>
                        <Viz />
                        <ToggleButtonGroup
                            value={"cars"}
                            exclusive
                            // onChange={() => { console.log(this.value) }}
                            aria-label="viz type">
                            <ToggleButton value="cars" aria-label="cars">
                                <DriveEta /><Typography>Cars</Typography>
                            </ToggleButton>
                            <ToggleButton value="trees" aria-label="trees">
                                <NaturePeople /><Typography>Trees</Typography>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Paper>
                </Grid>
                <Grid item xs={11} md={8} lg={6}>
                    <Paper>
                        Text explanation
                    </Paper>
                </Grid>
                <Grid item xs={11} md={8} lg={6}>
                    <Paper>
                        Bar chart
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default OpowerApp