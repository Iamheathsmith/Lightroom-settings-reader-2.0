import { Header } from "semantic-ui-react";

import { BarSetting, TextSetting } from "../common";
import { XmlType } from "../../types";

import {
	convertBaseBarAmountToBarPostion,
	convertExporeToBarPostion,
	convertTempToBarPostion,
	convertTintToBarPostion,
} from "../common/helpers";
import { BarColorScale } from "../../enum";

import "./index.scss";
import { LineChartArea } from "./line_chart";
import { HSLArea } from "./color_section";
import { ColorGrading } from "./color_grading";

export const LightroomSettings = ({ imageData }: { imageData: XmlType }) => {
	console.log("imageData: ", imageData);
	return (
		<div className='lightroom-settings'>
			<Header className='lightroom-settings__header'>LightRoom Seetings Used</Header>
			<TextSetting header={"White Balance"} data={imageData.WhiteBalance} />
			<BarSetting
				header={"Temp"}
				marginLeft={convertTempToBarPostion(imageData.Temperature)}
				barAmount={imageData.Temperature}
				colorScale={BarColorScale.Temp}
			/>
			<BarSetting
				header={"Tint"}
				marginLeft={convertTintToBarPostion(imageData.Tint)}
				barAmount={imageData.Tint}
				colorScale={BarColorScale.Tint}
			/>
			<div>----------</div>
			<i>Tone</i>
			<BarSetting
				header={"Exposure"}
				marginLeft={convertExporeToBarPostion(imageData.Exposure2012)}
				barAmount={imageData.Exposure2012}
				colorScale={BarColorScale.GrayScaleNormal}
			/>
			<BarSetting
				header={"Contrast"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Contrast2012)}
				barAmount={imageData.Contrast2012}
				colorScale={BarColorScale.GrayScaleReverse}
			/>
			<BarSetting
				header={"Hightlights"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Highlights2012)}
				barAmount={imageData.Highlights2012}
				colorScale={BarColorScale.GrayScaleNormal}
			/>
			<BarSetting
				header={"Shadows"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Shadows2012)}
				barAmount={imageData.Shadows2012}
				colorScale={BarColorScale.GrayScaleNormal}
			/>
			<BarSetting
				header={"Whites"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Whites2012)}
				barAmount={imageData.Whites2012}
				colorScale={BarColorScale.GrayScaleNormal}
			/>
			<BarSetting
				header={"Blacks"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Blacks2012)}
				barAmount={imageData.Blacks2012}
				colorScale={BarColorScale.GrayScaleNormal}
			/>
			<div>----------</div>
			<i>Presense</i>
			<BarSetting
				header={"Texture"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Texture)}
				barAmount={imageData.Texture}
				colorScale={BarColorScale.GrayScaleReverse}
			/>
			<BarSetting
				header={"Clarity"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Clarity2012)}
				barAmount={imageData.Clarity2012}
				colorScale={BarColorScale.GrayScaleReverse}
			/>
			<BarSetting
				header={"Dehaze"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Dehaze)}
				barAmount={imageData.Dehaze}
				colorScale={BarColorScale.GrayScaleReverse}
			/>
			<div>----------</div>
			<BarSetting
				header={"Saturation"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Saturation)}
				barAmount={imageData.Saturation}
				colorScale={BarColorScale.ColorNormal}
			/>
			<BarSetting
				header={"Vibrance"}
				marginLeft={convertBaseBarAmountToBarPostion(imageData.Vibrance)}
				barAmount={imageData.Vibrance}
				colorScale={BarColorScale.ColorNormal}
			/>
			<div>----------</div>
			<LineChartArea
				base={imageData.ToneCurvePV2012}
				red={imageData.ToneCurvePV2012Red}
				blue={imageData.ToneCurvePV2012Blue}
				green={imageData.ToneCurvePV2012Green}
			/>
			<div>----------</div>
			<HSLArea imageData={imageData} />
			<ColorGrading imageData={imageData} />
		</div>
	);
};
