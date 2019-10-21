import React from "react"
import CarFill from "./img/car-fill.svg"
import CarOutline from "./img/car-outline.svg"
import TreeFill from "./img/tree-fill.svg"
import TreeOutline from "./img/tree-outline.svg"
import uuid from "uuid"
import getNItems from "./utils/nItems"
import Zoom from '@material-ui/core/Zoom'
import { makeStyles } from '@material-ui/core/styles'


function Viz({ currentYear, priorYear, vizMode }) {
    const useStyles = makeStyles(theme => ({
        vizContainer: {
            padding: 20
        },
        delayedZoom: {
            transitionDelay: "100ms"
        },
        vizIcon: {
            width: "20%",
            padding: 10
            // filter: "invert(0.5) sepia(1) saturate(1) hue-rotate(" + Math.floor(Math.random() * 360) + "deg)"
        }
    }))
    const classes = useStyles()
    const nItems = getNItems(currentYear, priorYear, vizMode)
    return (
        <div className={classes.vizContainer}>
            {[...Array(Math.abs(Math.round(nItems)))].map((e, i) =>
                <Zoom in={true} key={uuid.v4()} style={{
                    transitionDelay: `${(i + 1) * 100}ms`
                }} >
                    <img
                        src={vizMode == "cars" ? CarFill : TreeFill}
                        className={classes.vizIcon}
                        key={i}
                    />
                </Zoom>
            )}
            {nItems == 0 &&
                <Zoom in={true} key={uuid.v4()} className={classes.delayedZoom} >
                    <img src={vizMode == "cars" ? CarOutline : TreeOutline} className={classes.vizIcon} />
                </Zoom>
            }
        </div >
    )
}

export default Viz