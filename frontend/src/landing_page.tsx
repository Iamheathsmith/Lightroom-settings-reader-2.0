import { FileUploadAndPreview } from "./file_upload_and_preview";
import { MainHeader } from "./header";

import "./landing_page.scss";

const LandingPage = () => {
	return (
		<div className='landing_page'>
			<MainHeader />
			<FileUploadAndPreview />
		</div>
	);
};

export default LandingPage;
