import React from "react"
import Container from "@material-ui/core/Container"
import ThumbUp from "@material-ui/icons/ThumbUp"
import Warning from "@material-ui/icons/Warning"
import CheckCircle from "@material-ui/icons/CheckCircle"
import Typography from "@material-ui/core/Typography"
import uuid from "uuid"
import Zoom from '@material-ui/core/Zoom';
function SavingsDescription({ priorYear, currentYear, vizMode }) {

    const curYear = currentYear
    const lastYear = priorYear
    const savings = lastYear - curYear
    const carFactor = 35
    const treeFactor = 210
    const nItems = Math.round((vizMode === "cars" ? (savings / carFactor) : (savings / treeFactor)) * 100) / 100
    const n = Math.round(nItems)

    return (
        <Container>
            <div style={{ display: "flex", flexDirection: "row", }}>
                <Zoom in={true} key={uuid.v4()}>

                    {
                        nItems < 0 &&
                        <Warning style={{
                            paddingRight: 15,
                            paddingTop: 2
                        }} />
                        || nItems == 0 &&
                        <CheckCircle style={{
                            paddingRight: 15,
                            paddingTop: 2
                        }} />
                        || nItems > 0 &&
                        <ThumbUp style={{
                            paddingRight: 15,
                            paddingTop: 2
                        }} />
                    }
                </Zoom>
                <Typography variant="h5" gutterBottom>
                    {
                        ((nItems < 0 && vizMode === "cars") && `Compared to this month last year, you used ${Math.abs(nItems)} more ${nItems === -1 ? "car's" : "cars'"} worth of energy.`)
                        || ((nItems < 0 && vizMode === "trees") && `Compared to this month last year, you used the carbon equivalent of ${Math.abs(nItems)} ${nItems === -1 ? "tree's" : "trees'"} more energy.`)
                        || ((nItems === 0) && `You used the same amount of energy as this month last year.`)
                        || ((nItems > 0 && vizMode === "cars") && `Last month, you saved enough energy to take ${nItems} car${nItems === 1 ? "" : "s"} off the road!`)
                        || ((nItems > 0 && vizMode === "trees") && `Last month, you saved the energy equivalent of ${nItems} tree${nItems === 1 ? "'s" : "s'"} worth of carbon!`)
                    }
                </Typography>
            </div>
            <Typography variant="body1" style={{ paddingLeft: 40, paddingTop: 10, paddingBottom: 20 }}>
                {

                    (nItems < 0 && vizMode == "cars") &&
                    `You used ${curYear} kwh last month, 
                        compared to ${lastYear} kwh in the same month last year. 
                        This amount is equal to the energy consumption of  
                        ${Math.abs(nItems)} average-size car${nItems == 1 ? "" : "s"} for one month.`
                    || (nItems < 0 && vizMode == "trees") &&
                    `You used ${curYear} kwh last month, 
                        compared to ${lastYear} kwh in the same month last year. 
                        It would take
                        ${Math.abs(nItems)} tree${nItems == 1 ? "" : "s"} a month to sequester that amount of carbon.`
                    || nItems == 0 &&
                    `You used ${curYear} kwh last month, 
                        the same amount as the same month last year.`
                    || (nItems > 0 && vizMode == "cars") &&
                    `Great Job! You used ${curYear} kwh last month, 
                        compared to ${lastYear} kwh in the same month last year.
                        The resulting saving is enough to offset the 
                        energy consumption of ${nItems} average-size car${nItems == 1 ? "" : "s"}
                        for one month.`
                    || (nItems > 0 && vizMode == "trees") &&
                    `Great Job! You used ${curYear} kwh last month, 
                        compared to ${lastYear} kwh in the same month last year.
                        The resulting saving is equivalent to the 
                        carbon sequestered by ${nItems} tree${nItems == 1 ? "" : "s"}
                        in one month.`
                }
            </Typography>
        </Container>
    )
}

export default SavingsDescription