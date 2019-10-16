import React, { useContext, useState, PureComponent } from "react"
import Typography from "@material-ui/core/Typography"
import { DriveEta, NaturePeople } from "@material-ui/icons"
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Viz from "./Viz"
import data from "./data.json"
import useLocalStorageState from "./hooks/useLocalStorageState"
import { VizContext } from "./contexts/VizContext"
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Navbar from "./Navbar"
import SavingsDescription from "./SavingsDescription"

import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { Container } from "@material-ui/core"
import VizToggle from "./VizToggle"
import Description from "./SavingsDescription"
const sampleData = [
    {
        name: 'Last year', kwh: 791
    },
    {
        name: 'This year', kwh: 573
    }
]


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


function OpowerApp() {
    const [mydata, setMyData] = useState(data);
    console.log(mydata)
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
                        <Viz />
                        <VizToggle />
                    </Paper>
                </Grid>
                <Grid item xs={11} md={11} lg={6}>
                    <Paper style={{ padding: 30 }}>
                        <Description />
                        <Grid item style={{ padding: 20 }}>
                            <BarChart
                                width={300}
                                height={300}
                                data={sampleData}
                                margin={{
                                    top: 0, right: 30, left: 20, bottom: 5,
                                }}
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "auto"
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="kwh" fill="#8884d8" />
                            </BarChart>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        </Paper >
    )
}

export default OpowerApp