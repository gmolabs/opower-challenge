function getNItems(currentYear, priorYear, vizMode) {
    const curYear = currentYear
    const lastYear = priorYear
    const savings = lastYear - curYear
    const carFactor = 35
    const treeFactor = 210
    const nItems = Math.round((vizMode === "cars" ? (savings / carFactor) : (savings / treeFactor)) * 100) / 100
    return nItems
}

export default getNItems