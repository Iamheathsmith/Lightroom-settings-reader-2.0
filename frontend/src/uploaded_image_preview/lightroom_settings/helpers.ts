export const convertExporeTimeToShutterSpeed = (exposureTime: number) => {
    if (exposureTime > 1) return `${exposureTime.toFixed(1)} Sec`

    const flPercentage = Math.floor(1 / exposureTime)

    return `1/${flPercentage}th`
}

export const convertApertureValueToFStop = (apertureValue: number) => {
    const rounedApertureValue = Number(apertureValue.toFixed(2))
    const fStop = Math.sqrt(Math.pow(2, rounedApertureValue)).toFixed(1)
    return `F/${fStop}`
}