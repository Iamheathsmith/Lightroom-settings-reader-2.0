import  { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  Header } from 'semantic-ui-react';
import {  getUploadedFileName } from '../../redux/file';
import EXIF from 'exif-js';

import './index.scss'

export const UploadImagePreview = ({file}: {file: File}) => {
  const imageName = useSelector(getUploadedFileName)

  useEffect(() => {


    if (file) {
      const reader = new FileReader();
      reader.onload = function(){
        let dataURL = reader.result;
        let output = document.getElementById('output') as HTMLImageElement;
        output.src = dataURL as string;
      };

      
        
      reader.readAsDataURL(file);
    }
  }, [file])

	return (
    <div className='image-preview'>
      <Header className="image-preview__name">{imageName}</Header>
      <img className="image-preview__image" alt="" id='output'/>
    </div>
	);
};
