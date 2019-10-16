import React, { useContext, useState, PureComponent } from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Viz from "./Viz"
import data from "./data.json"
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar"
import VizToggle from "./VizToggle"
import Description from "./SavingsDescription"
import SavingsGraph from "./SavingsGraph"

/*
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));
*/

function OpowerApp() {
    const [myData, setMyData] = useState(data);
    // const { vizMode, setVizMode } = useContext(VizContext)
    const n = 6; // Or something else

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            width: "100vw",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >
            <Navbar />
            <Grid container justify="center" spacing={3} style={{ marginTop: "1rem" }} >
                <Grid item xs={11} md={11} lg={5}>
                    <Paper style={{ textAlign: "center" }}>
                        <Viz data={myData} />
                        <VizToggle />
                    </Paper>
                </Grid>
                <Grid item xs={11} md={11} lg={6}>
                    <Paper style={{ padding: 30 }}>
                        <Description data={myData} />
                        <SavingsGraph data={myData} />
                    </Paper>
                </Grid>
            </Grid>

        </Paper >
    )
}

export default OpowerApp