import  { useState } from 'react';
import { FileUplpad } from '../file_upload';
import { UploadImageSection } from '../uploaded_image_preview';

export const FileUploadAndPreview = () => {
    const [file, setfile] = useState<File | undefined>(undefined);

    const handleSetFile = (newFile: File | undefined) => setfile(newFile)

	return (
    <div >
        <FileUplpad file={file} handleSetFile={handleSetFile}/>
        {file && <UploadImageSection file={file}/>}
    </div>
	);
};
