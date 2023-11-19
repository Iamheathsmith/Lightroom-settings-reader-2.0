import { TextSetting } from "../common";
import { convertApertureValueToFStop, convertExporeTimeToShutterSpeed, meteringModeDisplay } from "../common/helpers";
import { XmlType } from "../../types";
import { motion } from "framer-motion";

import "./index.scss";

export const CameraSettings = ({ imageData }: { imageData: XmlType }) => {
	const cameraMakeAndModal = `${imageData.Make || "unknown"} ${imageData.Model || "unknown"}`;
	const cameraFocalLenth = imageData.FocalLength ? `${imageData.FocalLength}mm` : "unknown";
	return (
		<motion.div
			initial={{ opacity: 0, x: -100 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className='camera-settings'
		>
			<TextSetting header={"Camera Modal"} data={cameraMakeAndModal} />
			<TextSetting header={"Lens"} data={imageData.LensModel} />
			<TextSetting header={"Focal length"} data={cameraFocalLenth} />
			<TextSetting header={"Apature"} data={convertApertureValueToFStop(imageData.apertureValue)} />
			<TextSetting header={"Shutter speed"} data={convertExporeTimeToShutterSpeed(imageData.ExposureTime)} />
			<TextSetting header={"ISO"} data={imageData.ISO} />
			<TextSetting header={"Metering Mode"} data={meteringModeDisplay(imageData?.MeteringMode)} />
			<TextSetting header={"Exposure Program"} data={imageData.ExposureProgram} />
			<TextSetting header={"Exposure Compensation"} data={imageData.ExposureCompensation} />
			<TextSetting header={"Flash"} data={imageData.Flash} />
		</motion.div>
	);
};
