import classNames from "classnames";
import { BarColorScale } from "../../enum";
import "./index.scss";

export const TextSetting = ({ header, data }: { header: string; data: string | number | undefined }) => {
	return (
		<div className='settings__text'>
			<strong className='settings__text-header'>{`${header}:`}</strong>
			<div className='settings__text-data'>{data || "unknown"}</div>
		</div>
	);
};

export const BarSetting = ({
	header,
	marginLeft,
	barAmount,
	colorScale = BarColorScale.None,
}: {
	header: string;
	marginLeft: string;
	barAmount: number;
	colorScale?: BarColorScale;
}) => {
	const isGrayScale = colorScale === BarColorScale.GrayScaleNormal;
	const isGrayScaleReversed = colorScale === BarColorScale.GrayScaleReverse;
	const isColorNormal = colorScale === BarColorScale.ColorNormal;
	const isTemp = colorScale === BarColorScale.Temp;
	const isTint = colorScale === BarColorScale.Tint;
	const isHueRed = colorScale === BarColorScale.HueRed;
	const isHueOrange = colorScale === BarColorScale.HueOrange;
	const isHueYellow = colorScale === BarColorScale.HueYellow;
	const isHueGreen = colorScale === BarColorScale.HueGreen;
	const isHueAqua = colorScale === BarColorScale.HueAqua;
	const isHueBlue = colorScale === BarColorScale.HueBlue;
	const isHueMagenta = colorScale === BarColorScale.HueMagenta;
	const isHuePurple = colorScale === BarColorScale.HuePurple;
	const isSaturationRed = colorScale === BarColorScale.SaturationRed;
	const isSaturationOrange = colorScale === BarColorScale.SaturationOrange;
	const isSaturationYellow = colorScale === BarColorScale.SaturationYellow;
	const isSaturationGreen = colorScale === BarColorScale.SaturationGreen;
	const isSaturationAqua = colorScale === BarColorScale.SaturationAqua;
	const isSaturationBlue = colorScale === BarColorScale.SaturationBlue;
	const isSaturationMagenta = colorScale === BarColorScale.SaturationMagenta;
	const isSaturationPurple = colorScale === BarColorScale.SaturationPurple;
	const isLuminanceRed = colorScale === BarColorScale.LuminanceRed;
	const isLuminanceOrange = colorScale === BarColorScale.LuminanceOrange;
	const isLuminanceYellow = colorScale === BarColorScale.LuminanceYellow;
	const isLuminanceGreen = colorScale === BarColorScale.LuminanceGreen;
	const isLuminanceAqua = colorScale === BarColorScale.LuminanceAqua;
	const isLuminanceBlue = colorScale === BarColorScale.LuminanceBlue;
	const isLuminanceMagenta = colorScale === BarColorScale.LuminanceMagenta;
	const isLuminancePurple = colorScale === BarColorScale.LuminancePurple;

	const normalizeBarAmount = () => {
		const toNumber = Number(barAmount);
		return !isNaN(toNumber) ? toNumber : 0;
	};

	return (
		<div className='bar-settings'>
			<strong className={"bar-settings__text"}>{header}</strong>
			<div
				className={classNames("bar-settings__bar", {
					"bar-settings__bar--gray-scale": isGrayScale,
					"bar-settings__bar--gray-scale-reversed": isGrayScaleReversed,
					"bar-settings__bar--color": isColorNormal,
					"bar-settings__bar--temp": isTemp,
					"bar-settings__bar--tint": isTint,
					"bar-settings__bar--red-hue": isHueRed,
					"bar-settings__bar--orange-hue": isHueOrange,
					"bar-settings__bar--yellow-hue": isHueYellow,
					"bar-settings__bar--green-hue": isHueGreen,
					"bar-settings__bar--aqua-hue": isHueAqua,
					"bar-settings__bar--blue-hue": isHueBlue,
					"bar-settings__bar--purple-hue": isHuePurple,
					"bar-settings__bar--magenta-hue": isHueMagenta,
					"bar-settings__bar--red-saturation": isSaturationRed,
					"bar-settings__bar--orange-saturation": isSaturationOrange,
					"bar-settings__bar--yellow-saturation": isSaturationYellow,
					"bar-settings__bar--green-saturation": isSaturationGreen,
					"bar-settings__bar--aqua-saturation": isSaturationAqua,
					"bar-settings__bar--blue-saturation": isSaturationBlue,
					"bar-settings__bar--purple-saturation": isSaturationPurple,
					"bar-settings__bar--magenta-saturation": isSaturationMagenta,
					"bar-settings__bar--red-luminance": isLuminanceRed,
					"bar-settings__bar--orange-luminance": isLuminanceOrange,
					"bar-settings__bar--yellow-luminance": isLuminanceYellow,
					"bar-settings__bar--green-luminance": isLuminanceGreen,
					"bar-settings__bar--aqua-luminance": isLuminanceAqua,
					"bar-settings__bar--blue-luminance": isLuminanceBlue,
					"bar-settings__bar--purple-luminance": isLuminancePurple,
					"bar-settings__bar--magenta-luminance": isLuminanceMagenta,
				})}
			>
				<div style={{ left: marginLeft }} className='bar-settings__bar-postion' />
			</div>
			<div className='bar-settings__amount'>{normalizeBarAmount()}</div>
		</div>
	);
};
