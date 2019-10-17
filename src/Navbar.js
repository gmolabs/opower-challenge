import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import Settings from "@material-ui/icons/Settings"
import { makeStyles } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    menuItem: {
        width: 400
    },
    menuLabel: {
        width: 120
    },
    menuSlider: {
        marginLeft: 20
    }
}))

function Navbar({ data, setMyData }) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const handleMenu = event => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const open = Boolean(anchorEl);
    const handlePriorYearSliderChange = (e, value) => {
        console.log(value)
        let newData = data;
        newData.energyUse.priorYear = value;
        setMyData(newData)
    }

    // {
    //     "customer": {
    //       "id": "A29071",
    //       "name": "Julia Simpson"
    //     },
    //     "energyUse": {
    //       "currentYear": 573,
    //       "priorYear": 791
    //     }
    //   }



    const handleThisYearSliderChange = (e, value) => {
        console.log(value)

        let newData = data;
        newData.energyUse.currentYear = value;
        setMyData(newData)
    }


    return (
        <AppBar color="primary" position="static" style={{ height: "64px" }}>
            <ToolBar>
                <Typography color="inherit" className={classes.title}>Your Energy Savings</Typography>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <Settings />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem className={classes.menuItem} ><Typography className={classes.menuLabel}>Prior Year</Typography>
                        <Slider
                            className={classes.menuSlider}
                            max={2000}
                            onChangeCommitted={handlePriorYearSliderChange}
                            defaultValue={data.energyUse.priorYear}
                        />
                    </MenuItem>
                    <MenuItem className={classes.menuItem} ><Typography className={classes.menuLabel}>This Year</Typography>
                        <Slider
                            className={classes.menuSlider}
                            max={2000}
                            onChangeCommitted={handleThisYearSliderChange}
                            defaultValue={data.energyUse.currentYear}
                        />
                    </MenuItem>
                </Menu>
            </ToolBar>
        </AppBar >
    )
}

export default Navbar