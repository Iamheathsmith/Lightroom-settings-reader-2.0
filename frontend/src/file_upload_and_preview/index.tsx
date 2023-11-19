import { useEffect, useState } from "react";
import { FileUpload } from "../file_upload";

import exifr from "exifr";
import { XmlType } from "../types";
import { UploadImagePreview } from "../uploaded_image_preview/preview_image";
import { CameraSettings } from "../uploaded_image_preview/camera_settings";
import { LightroomSettings } from "../uploaded_image_preview/lightroom_settings";
import { DownLoadPreset } from "../download_preset";

import "./index.scss";

const hasLightroomData = (exifData: XmlType | undefined) => {
	const { WhiteBalance, Temperature, Tint, Exposure2012, contrast2012, Highlights2012 } = exifData || {};
	if (!WhiteBalance && !Temperature && !Tint && !Exposure2012 && !contrast2012 && !Highlights2012) {
		return false;
	}

	return true;
};

const hasCameraData = (exifData: XmlType | undefined) => {
	const { Make, Model, FocalLength, LensModel, apertureValue, ExposureTime } = exifData || {};

	if (!Make && !Model && !FocalLength && !LensModel && !apertureValue && !ExposureTime) {
		return false;
	}

	return true;
};

export const FileUploadAndPreview = () => {
	const [file, setfile] = useState<File | undefined>(undefined);
	const [exifData, setExifData] = useState<XmlType | undefined>(undefined);

	const handleSetFile = (newFile: File) => {
		setfile(newFile);
		exifr.parse(newFile, true).then((data) => {
			setExifData(data as XmlType);
		});
	};

	useEffect(() => {
		if (file && !exifData) {
			exifr.parse(file, true).then((data) => {
				setExifData(data as XmlType);
			});
		}
	}, [file, exifData]);

	const showLightroomSettings = hasLightroomData(exifData) && exifData;
	const showCamaeraData = hasCameraData(exifData) && exifData;

	return (
		<div className='image-preivew-section'>
			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>
					<div>Image</div>
					{showLightroomSettings && <DownLoadPreset />}
				</div>
				<FileUpload file={file} handleSetFile={handleSetFile} />
				{file && <UploadImagePreview file={file} />}
			</div>

			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>Camera Settings</div>
				{showCamaeraData && <CameraSettings imageData={exifData} />}
				{!showCamaeraData && exifData && <div className='no-settings'>No Camera data available</div>}
			</div>

			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>Lightroom Settings</div>
				{showLightroomSettings && <LightroomSettings imageData={exifData} />}
				{!showLightroomSettings && exifData && <div className='no-settings'>No Lightroom Data available</div>}
			</div>
		</div>
	);
};
