
import {  Header } from 'semantic-ui-react';

import { TextSetting } from '../common';
import { XmlType } from '../../types';

import './index.scss'


export const LightroomSettings= ({imageData}: {imageData: XmlType }) => {
	return (
		<div className='lightroom-settings'>
      <Header className="lightroom-settings__header">LightRoom Seetings Used</Header>
      <TextSetting header={'White Balance'} data={imageData.WhiteBalance}/>
    </div>
	);
};
