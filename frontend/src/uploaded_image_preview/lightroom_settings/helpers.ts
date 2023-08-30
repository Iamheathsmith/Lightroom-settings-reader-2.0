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

const BAR_CENTER = 50

export const convertExporeToBarPostion = (barPostion: number) => {
    if (barPostion > 0) {
        const amount = ((barPostion / 5) * 100 / 2)
        return `${BAR_CENTER + amount}%`
    }
    if (barPostion < 0) {
        const amount = ((barPostion / 5) * 100 / 2)
        return `${BAR_CENTER - amount}%`
    }
    return `${BAR_CENTER}%`
}

export const convertBaseBarAmountToBarPostion = (barPostion: number) => {
    if (barPostion > 0) return `${BAR_CENTER + (barPostion / 2)}%`
    if (barPostion < 0) return `${BAR_CENTER - (barPostion / 2)}%`
    return `${BAR_CENTER}%`
}