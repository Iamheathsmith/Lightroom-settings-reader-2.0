import { Tab } from "semantic-ui-react";
import { XmlType } from "../../types";
import { BarSetting } from "../common";
import { BarColorScale } from "../../enum";
import { convertBaseBarAmountToBarPostion } from "../common/helpers";

export const ColorGrading = ({ imageData }: { imageData: XmlType }) => {
	const hightlightHue = imageData.SplitToningHighlightHue;
	const hightlightSaturation = imageData.SplitToningHighlightSaturation;
	const shadowHue = imageData.SplitToningShadowHue;
	const shadowSaturation = imageData.SplitToningShadowSaturation;
	const midtownHue = imageData.ColorGradeMidtoneHue;
	const midtownSaturation = imageData.ColorGradeMidtoneSat;

	const getPointerPostion = () => {};

	const panes = [
		{
			menuItem: "Hightlights",
			render: () => (
				<Tab.Pane>
					<div className='color-grade-zone'>
						<div className='colorwheel box'>
							<div className='colorwheel-pointer' />
						</div>
						<BarSetting
							header={""}
							marginLeft={convertBaseBarAmountToBarPostion(imageData.ColorGradeHighlightLum)}
							barAmount={imageData.ColorGradeHighlightLum}
							colorScale={BarColorScale.GrayScaleNormal}
						/>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Midtones",
			render: () => (
				<Tab.Pane>
					<div className='color-grade-zone'>
						<div className='colorwheel box'>
							<div className='colorwheel-pointer' />
						</div>
						<BarSetting
							header={""}
							marginLeft={convertBaseBarAmountToBarPostion(imageData.ColorGradeMidtoneLum)}
							barAmount={imageData.ColorGradeMidtoneLum}
							colorScale={BarColorScale.GrayScaleNormal}
						/>
					</div>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Shadows",
			render: () => (
				<Tab.Pane>
					<div className='color-grade-zone'>
						<div className='colorwheel box'>
							<div className='colorwheel-pointer' />
						</div>
						<BarSetting
							header={""}
							marginLeft={convertBaseBarAmountToBarPostion(imageData.ColorGradeShadowLum)}
							barAmount={imageData.ColorGradeShadowLum}
							colorScale={BarColorScale.GrayScaleNormal}
						/>
					</div>
				</Tab.Pane>
			),
		},
	];

	return <Tab panes={panes} />;
};
