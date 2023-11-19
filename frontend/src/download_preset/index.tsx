import { Button } from "semantic-ui-react";

import "./index.scss";

export const DownLoadPreset = () => {
	const downloadFile = () => {
		const file = new File(["foo"], "note.txt", {
			type: "text/plain",
		});
		const link = document.createElement("a");
		const url = URL.createObjectURL(file);

		link.href = url;
		link.download = file.name;
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		window.URL.revokeObjectURL(url);
	};

	return <Button className='download-button' size='mini' content='Donwload Preset' onClick={downloadFile} />;
};
