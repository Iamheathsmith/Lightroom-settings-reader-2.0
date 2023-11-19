import { ChangeEvent, useRef, useState } from "react";
import { Button, Header } from "semantic-ui-react";

import "./index.scss";

export const FileUpload = ({
	file,
	handleSetFile,
}: {
	file: File | undefined;
	handleSetFile: (newFile: File) => void;
}) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const targetFile = target.files?.[0];
		if (targetFile) {
			handleSetFile(targetFile);
		}
	};

	const fileInputRef = useRef<HTMLInputElement>(null);
	const handleButtonClick = () => fileInputRef.current?.click();

	return (
		<div className='upload-form'>
			<input
				className='upload-form__input'
				onChange={handleChange}
				multiple={false}
				ref={fileInputRef}
				type='file'
				hidden
			/>
			<Button ize='small' className='upload-form__button' onClick={handleButtonClick} content={"Image Upload"} />
			<Header className='upload-form__file-name'>{file?.name ?? "Lets get Extracting!"}</Header>
		</div>
	);
};
