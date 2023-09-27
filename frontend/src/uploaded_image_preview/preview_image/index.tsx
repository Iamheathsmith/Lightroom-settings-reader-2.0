import { useEffect } from "react";
import { Header } from "semantic-ui-react";

import "./index.scss";

export const UploadImagePreview = ({ file }: { file: File }) => {
	useEffect(() => {
		let imageElement = document.getElementById("output") as HTMLImageElement;
		const url = URL.createObjectURL(file);
		imageElement.src = url;
	}, [file]);

	return (
		<div className='image-preview'>
			<img className='image-preview__image' alt='' id='output' />
			<Header className='image-preview__name'>{file?.name}</Header>
		</div>
	);
};
