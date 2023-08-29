import { useSelector } from 'react-redux';
import {  Header } from 'semantic-ui-react';
import { getUploadedFile } from '../../redux/file';
import { TextSetting } from './text_setting';

import './index.scss'

export const LightroomSettings= () => {
  const imageData = useSelector(getUploadedFile)
  console.log('imageData :', imageData);

  if (!imageData) return null

	return (
		<div className='lightroom-settings'>
      <Header className="lightroom-settings__header">LightRoom Seetings Used</Header>
      <TextSetting header={'Camera Modal'} data={`${imageData.Make} ${imageData.Model}`}/>
      <TextSetting header={'Lens'} data={imageData.LensModel}/>
    </div>
	);
};
