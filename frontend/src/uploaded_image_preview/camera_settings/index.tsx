import { Header } from "semantic-ui-react";

import { TextSetting } from "../common";
import { convertApertureValueToFStop, convertExporeTimeToShutterSpeed } from "../lightroom_settings/helpers";
import { XmlType } from "../../types";

import "./index.scss";

export const CameraSettings = ({ imageData }: { imageData: XmlType }) => {
	return (
		<div className='camera-settings'>
			<Header className='camera-settings__header'>Camera Seetings Used</Header>
			<TextSetting header={"Camera Modal"} data={`${imageData.Make} ${imageData.Model}`} />
			<TextSetting header={"Lens"} data={imageData.LensModel} />
			<TextSetting header={"Focal length"} data={`${imageData.FocalLength}mm`} />
			<TextSetting header={"Apature"} data={convertApertureValueToFStop(imageData.ApertureValue)} />
			<TextSetting header={"Shutter speed"} data={convertExporeTimeToShutterSpeed(imageData.ExposureTime)} />
			<TextSetting header={"ISO"} data={imageData.ISO} />
			<TextSetting header={"Metering Mode"} data={imageData.MeteringMode} />
			<TextSetting header={"Exposure Program"} data={imageData.ExposureProgram} />
			<TextSetting header={"Exposure Compensation"} data={imageData.ExposureCompensation} />
			<TextSetting header={"Flash"} data={imageData.Flash} />
		</div>
	);
};
