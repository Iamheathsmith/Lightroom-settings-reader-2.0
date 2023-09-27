import { ChangeEvent, useState } from "react";
import { Input } from "semantic-ui-react";

import { useDispatch } from "react-redux";

import "./index.scss";

export const FileUplpad = ({
	file,
	handleSetFile,
}: {
	file: File | undefined;
	handleSetFile: (newFile: File) => void;
}) => {
	const dispatch = useDispatch();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const target = event.target as HTMLInputElement;
		const targetFile = target.files?.[0];
		if (targetFile) {
			handleSetFile(targetFile);
		}
	};

	return (
		<Input type='file' placeholder='Search...' action>
			<Input type='file' className='upload-form__input' id='fileUpload' onChange={handleChange} />
		</Input>
	);
};
