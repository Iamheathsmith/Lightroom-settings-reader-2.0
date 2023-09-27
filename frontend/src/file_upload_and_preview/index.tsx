import { useEffect, useState } from "react";
import { FileUplpad } from "../file_upload";

import exifr from "exifr";
import { XmlType } from "../types";
import { UploadImagePreview } from "../uploaded_image_preview/preview_image";
import { CameraSettings } from "../uploaded_image_preview/camera_settings";
import { LightroomSettings } from "../uploaded_image_preview/lightroom_settings";

import "./index.scss";

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

	return (
		<div className='image-preivew-section'>
			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>Image</div>
				<FileUplpad file={file} handleSetFile={handleSetFile} />
				{file && <UploadImagePreview file={file} />}
			</div>
			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>Camera Settings</div>
				{exifData && <CameraSettings imageData={exifData} />}
			</div>
			<div className='image-preivew-section__column'>
				<div className='image-preivew-section__column-title'>Lightroom Settings</div>
				{exifData && <LightroomSettings imageData={exifData} />}
			</div>
		</div>
	);
};
