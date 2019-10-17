import React, { createContext } from "react"
import useLocalStorageState from "../hooks/useLocalStorageState"

export const VizContext = createContext()

export function VizModeProvider(props) {
    const [vizMode, setVizMode] = useLocalStorageState("vizType", "trees")

    return (
        <VizContext.Provider value={{ vizMode, setVizMode }}>
            {props.children}
        </VizContext.Provider>
    )
}