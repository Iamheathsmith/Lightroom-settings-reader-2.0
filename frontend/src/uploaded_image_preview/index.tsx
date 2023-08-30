import { useSelector } from 'react-redux';
import { LightroomSettings } from './lightroom_settings';
import { getUploadedFile } from '../redux/file';
import { UploadImagePreview } from './preview_image';
import { CameraSettings } from './camera_settings';

import './index.scss'

export const UploadImageSection = ({file}: {file: File}) => {
  const imageData = useSelector(getUploadedFile)

	return (
		<div className='image-preivew-section'>
      <UploadImagePreview file={file}/>
      {imageData && 
        <>
          <CameraSettings imageData={imageData}/>
          <LightroomSettings imageData={imageData}/>
        </>
      }

    </div>
	);
};
