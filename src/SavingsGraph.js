import React from "react"
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts'

function SavingsGraph(props) {
    const graphData = [
        {
            name: 'Last year', kwh: props.data.energyUse.priorYear
        },
        {
            name: 'This year', kwh: props.data.energyUse.currentYear
        }
    ]

    return (
        <BarChart
            width={300}
            height={300}
            data={graphData}
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
    )
}

export default SavingsGraph