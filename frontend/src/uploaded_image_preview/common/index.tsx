import classNames from "classnames";
import { BarColorScale } from "../../enum";
import "./index.scss";

export const TextSetting = ({ header, data }: { header: string; data: string | number }) => {
	return (
		<div className='settings__text'>
			<strong className='settings__text-header'>{`${header}:`}</strong>
			<div className='settings__text-data'>{data}</div>
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

	return (
		<div className='bar-settings'>
			<strong className={"bar-settings__text"}>{header}</strong>
			<div
				className={classNames("bar-settings__bar", {
					"bar-settings__bar--gray-scale": isGrayScale,
					"bar-settings__bar--gray-scale-reversed": isGrayScaleReversed,
				})}
			>
				<div style={{ left: marginLeft }} className='bar-settings__bar-postion' />
			</div>
			<div className='bar-settings__amount'>{barAmount}</div>
		</div>
	);
};
