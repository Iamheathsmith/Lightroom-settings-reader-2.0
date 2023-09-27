export const convertExporeTimeToShutterSpeed = (exposureTime: number) => {
	if (!exposureTime) return "N/A";

	if (exposureTime > 1) return `${exposureTime.toFixed(1)} Sec`;

	const flPercentage = Math.floor(1 / exposureTime);

	return `1/${flPercentage}th`;
};

export const convertApertureValueToFStop = (apertureValue: number) => {
	if (!apertureValue) return "N/A";
	const rounedApertureValue = Number(apertureValue.toFixed(2));
	const fStop = Math.sqrt(Math.pow(2, rounedApertureValue)).toFixed(1);
	return `F/${fStop}`;
};

const BAR_CENTER = 50;
const TEMP_MID = 7000;
const TEMP_75 = 13000;
const TEMP_87_5 = 25000;

export const convertTempToBarPostion = (tempAmount: number) => {
	if (tempAmount < TEMP_MID) {
		const barPostion = ((TEMP_MID - tempAmount) / 5000) * 100;
		return `${BAR_CENTER - barPostion / 2}%`;
	}
	if (tempAmount > TEMP_MID) {
		if (tempAmount < TEMP_75) {
			const barPostion = ((TEMP_MID - tempAmount) / 5000) * 100;
			return `${BAR_CENTER - barPostion / 2}%`;
		}

		if (tempAmount < TEMP_87_5) {
			const barPostion = ((TEMP_MID - tempAmount) / 13000) * 100;
			return `${BAR_CENTER - barPostion / 2}%`;
		}

		const barPostion = ((TEMP_MID - tempAmount) / 43000) * 100;
		return `${BAR_CENTER - barPostion / 2}%`;
	}
	return `${BAR_CENTER}%`;
};
export const convertTintToBarPostion = (tintAmount: number) => {
	if (tintAmount === 0) return `${BAR_CENTER}%`;
	const amount = ((tintAmount / 150) * 100) / 2;
	return `${BAR_CENTER + amount}%`;
};

export const convertExporeToBarPostion = (barPostion: number) => {
	if (barPostion === 0) return `${BAR_CENTER}%`;

	const amount = ((barPostion / 5) * 100) / 2;
	return `${BAR_CENTER + amount}%`;
};

export const convertBaseBarAmountToBarPostion = (barPostion: number) => {
	return `${BAR_CENTER + barPostion / 2}%`;
};

export const meteringModeDisplay = (meterMode?: string) => {
	return meterMode?.replace(/([A-Z])/g, " $1").trim();
};
