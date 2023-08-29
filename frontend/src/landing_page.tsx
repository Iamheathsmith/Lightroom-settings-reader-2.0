import React from 'react';
import { useSelector } from 'react-redux';

import { FileUplpad } from './file_upload';
import { getUploadedFileName } from './redux/file';
import { UploadImageSection } from './uploaded_image_preview';
import { FileUploadAndPreview } from './file_upload_and_preview';

import './landing_page.scss';

const LandingPage: React.FC = () => {
	const imageName = useSelector(getUploadedFileName)

	return (
			<div className='landing_page'>
				<FileUploadAndPreview />
			</div>
	);
};

export default LandingPage;
