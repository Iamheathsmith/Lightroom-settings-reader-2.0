import { Tab } from "semantic-ui-react";
import { BarSetting } from "../common";
import { XmlType } from "../../types";
import { convertBaseBarAmountToBarPostion } from "../common/helpers";
import { BarColorScale } from "../../enum";

export const HSLArea = ({ imageData }: { imageData: XmlType }) => {
	const panes = [
		{
			menuItem: "Hue",
			render: () => (
				<Tab.Pane>
					<BarSetting
						header={"Red"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentRed)}
						barAmount={imageData.HueAdjustmentRed}
						colorScale={BarColorScale.HueRed}
					/>
					<BarSetting
						header={"Orange"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentOrange)}
						barAmount={imageData.HueAdjustmentOrange}
						colorScale={BarColorScale.HueOrange}
					/>
					<BarSetting
						header={"Yellow"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentYellow)}
						barAmount={imageData.HueAdjustmentYellow}
						colorScale={BarColorScale.HueYellow}
					/>
					<BarSetting
						header={"Green"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentGreen)}
						barAmount={imageData.HueAdjustmentGreen}
						colorScale={BarColorScale.HueGreen}
					/>
					<BarSetting
						header={"Auqa"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentAqua)}
						barAmount={imageData.HueAdjustmentAqua}
						colorScale={BarColorScale.HueAqua}
					/>
					<BarSetting
						header={"Blue"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentBlue)}
						barAmount={imageData.HueAdjustmentBlue}
						colorScale={BarColorScale.HueBlue}
					/>
					<BarSetting
						header={"Purple"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentPurple)}
						barAmount={imageData.HueAdjustmentPurple}
						colorScale={BarColorScale.HuePurple}
					/>
					<BarSetting
						header={"Magenta"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.HueAdjustmentMagenta)}
						barAmount={imageData.HueAdjustmentMagenta}
						colorScale={BarColorScale.HueMagenta}
					/>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Saturation",
			render: () => (
				<Tab.Pane>
					<BarSetting
						header={"Red"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentRed)}
						barAmount={imageData.SaturationAdjustmentRed}
						colorScale={BarColorScale.SaturationRed}
					/>
					<BarSetting
						header={"Orange"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentOrange)}
						barAmount={imageData.SaturationAdjustmentOrange}
						colorScale={BarColorScale.SaturationOrange}
					/>
					<BarSetting
						header={"Yellow"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentYellow)}
						barAmount={imageData.SaturationAdjustmentYellow}
						colorScale={BarColorScale.SaturationYellow}
					/>
					<BarSetting
						header={"Green"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentGreen)}
						barAmount={imageData.SaturationAdjustmentGreen}
						colorScale={BarColorScale.SaturationGreen}
					/>
					<BarSetting
						header={"Auqa"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentAqua)}
						barAmount={imageData.SaturationAdjustmentAqua}
						colorScale={BarColorScale.SaturationAqua}
					/>
					<BarSetting
						header={"Blue"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentBlue)}
						barAmount={imageData.SaturationAdjustmentBlue}
						colorScale={BarColorScale.SaturationBlue}
					/>
					<BarSetting
						header={"Purple"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentPurple)}
						barAmount={imageData.SaturationAdjustmentPurple}
						colorScale={BarColorScale.SaturationPurple}
					/>
					<BarSetting
						header={"Magenta"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.SaturationAdjustmentMagenta)}
						barAmount={imageData.SaturationAdjustmentMagenta}
						colorScale={BarColorScale.SaturationMagenta}
					/>
				</Tab.Pane>
			),
		},
		{
			menuItem: "Luminance",
			render: () => (
				<Tab.Pane>
					<BarSetting
						header={"Red"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentRed)}
						barAmount={imageData.LuminanceAdjustmentRed}
						colorScale={BarColorScale.LuminanceRed}
					/>
					<BarSetting
						header={"Orange"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentOrange)}
						barAmount={imageData.LuminanceAdjustmentOrange}
						colorScale={BarColorScale.LuminanceOrange}
					/>
					<BarSetting
						header={"Yellow"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentYellow)}
						barAmount={imageData.LuminanceAdjustmentYellow}
						colorScale={BarColorScale.LuminanceYellow}
					/>
					<BarSetting
						header={"Green"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentGreen)}
						barAmount={imageData.LuminanceAdjustmentGreen}
						colorScale={BarColorScale.LuminanceGreen}
					/>
					<BarSetting
						header={"Auqa"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentAqua)}
						barAmount={imageData.LuminanceAdjustmentAqua}
						colorScale={BarColorScale.LuminanceAqua}
					/>
					<BarSetting
						header={"Blue"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentBlue)}
						barAmount={imageData.LuminanceAdjustmentBlue}
						colorScale={BarColorScale.LuminanceBlue}
					/>
					<BarSetting
						header={"Purple"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentPurple)}
						barAmount={imageData.LuminanceAdjustmentPurple}
						colorScale={BarColorScale.LuminancePurple}
					/>
					<BarSetting
						header={"Magenta"}
						marginLeft={convertBaseBarAmountToBarPostion(imageData.LuminanceAdjustmentMagenta)}
						barAmount={imageData.LuminanceAdjustmentMagenta}
						colorScale={BarColorScale.LuminanceMagenta}
					/>
				</Tab.Pane>
			),
		},
	];

	return <Tab menu={{ secondary: true, pointing: true }} panes={panes} />;
};
