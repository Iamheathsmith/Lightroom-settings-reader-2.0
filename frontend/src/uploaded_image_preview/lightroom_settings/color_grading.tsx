import { Tab } from "semantic-ui-react";
import { XmlType } from "../../types";
import { BarSetting } from "../common";
import { BarColorScale } from "../../enum";
import { convertBaseBarAmountToBarPostion } from "../common/helpers";

const getTranslateX = (saturation: number) => {
	const reducer = 175 / 200;
	// 175 is the circle width
	// is what its saturation is based on, 100 plus and 100 minus
	return saturation * reducer;
};

const GradingElement = ({ hue, saturation, barAmount }: { hue: number; saturation: number; barAmount: number }) => {
	return (
		<Tab.Pane>
			<div className='color-grade-zone'>
				<div className='colorwheel box'>
					<div
						className='colorwheel-pointer'
						style={{
							transform: `rotate(-${hue}deg) translateX(${getTranslateX(saturation)}px)`,
						}}
					/>
				</div>
				<BarSetting
					header={""}
					marginLeft={convertBaseBarAmountToBarPostion(barAmount)}
					barAmount={barAmount}
					colorScale={BarColorScale.GrayScaleNormal}
				/>
			</div>
		</Tab.Pane>
	);
};

export const ColorGrading = ({ imageData }: { imageData: XmlType }) => {
	const hightlightHue = imageData.SplitToningHighlightHue;
	const hightlightSaturation = imageData.SplitToningHighlightSaturation;
	const shadowHue = imageData.SplitToningShadowHue;
	const shadowSaturation = imageData.SplitToningShadowSaturation;
	const midtownHue = imageData.colorGradeMidtoneHue;
	const midtownSaturation = imageData.colorGradeMidtoneSat;

	const panes = [
		{
			menuItem: "Hightlights",
			render: () => (
				<GradingElement
					hue={hightlightHue}
					saturation={hightlightSaturation}
					barAmount={imageData.colorGradeHighlightLum}
				/>
			),
		},
		{
			menuItem: "Midtones",
			render: () => (
				<GradingElement hue={midtownHue} saturation={midtownSaturation} barAmount={imageData.colorGradeMidtoneLum} />
			),
		},
		{
			menuItem: "Shadows",
			render: () => (
				<GradingElement hue={shadowHue} saturation={shadowSaturation} barAmount={imageData.colorGradeShadowLum} />
			),
		},
	];

	return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};
