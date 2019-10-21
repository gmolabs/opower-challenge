import React from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Slider from "@material-ui/core/Slider"
import ValueLabelComponent from "./ValueLabelComponent"
import IconButton from "@material-ui/core/IconButton"
import Settings from "@material-ui/icons/Settings"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

function SettingsMenu({ priorYear, currentYear, setPriorYear, setCurrentYear }) {
    const useStyles = makeStyles(theme => ({
        menuItem: {
            width: 300
        },
        menuLabel: {
            width: 120
        },
        menuSlider: {
            marginLeft: 20,
            marginRight: 25
        }
    }))
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
        setPriorYear(value)
    }
    const handleThisYearSliderChange = (e, value) => {
        setCurrentYear(value)
    }

    return (
        <>
            <IconButton
                aria-label="adjust values"
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
                        ValueLabelComponent={ValueLabelComponent}
                        aria-label="adjust prior year energy use"
                        defaultValue={priorYear}
                        className={classes.menuSlider}
                        max={2000}
                        onChangeCommitted={handlePriorYearSliderChange}
                        defaultValue={priorYear}
                    />
                </MenuItem>
                <MenuItem className={classes.menuItem} ><Typography className={classes.menuLabel}>This Year</Typography>
                    <Slider
                        ValueLabelComponent={ValueLabelComponent}
                        aria-label="adjust current year energy"
                        defaultValue={currentYear}
                        className={classes.menuSlider}
                        max={2000}
                        onChangeCommitted={handleThisYearSliderChange}
                        defaultValue={currentYear}
                    />
                </MenuItem>
            </Menu>
        </>
    )
}

export default SettingsMenu