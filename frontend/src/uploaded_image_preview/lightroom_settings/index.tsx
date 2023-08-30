
import {  Header } from 'semantic-ui-react';

import { BarSetting, TextSetting } from '../common';
import { XmlType } from '../../types';

import './index.scss'
import { convertBaseBarAmountToBarPostion, convertExporeToBarPostion } from './helpers';


export const LightroomSettings= ({ imageData }: { imageData: XmlType }) => {

	return (
		<div className='lightroom-settings'>
      <Header className="lightroom-settings__header">LightRoom Seetings Used</Header>
      <TextSetting header={'White Balance'} data={imageData.WhiteBalance}/>
      <BarSetting header={'Temp'} marginLeft={'0'} barAmount={0}/>
      <BarSetting header={'Tint'} marginLeft={'0'} barAmount={0}/>
      <BarSetting header={'Exposure'} marginLeft={convertExporeToBarPostion(imageData.Exposure2012)} barAmount={imageData.Exposure2012}/>
      <BarSetting header={'Contrast'} marginLeft={convertBaseBarAmountToBarPostion(imageData.Contrast2012)} barAmount={imageData.Contrast2012}/>
      <BarSetting header={'Hightlights'} marginLeft={convertBaseBarAmountToBarPostion(imageData.Highlights2012)} barAmount={imageData.Highlights2012}/>
      <BarSetting header={'Shadows'} marginLeft={convertBaseBarAmountToBarPostion(imageData.Shadows2012)} barAmount={imageData.Shadows2012}/>
      <BarSetting header={'Whites'} marginLeft={convertBaseBarAmountToBarPostion(imageData.Whites2012)} barAmount={imageData.Whites2012}/>
      <BarSetting header={'Blacks'} marginLeft={convertBaseBarAmountToBarPostion(imageData.Blacks2012)} barAmount={imageData.Blacks2012}/>
    </div>
	);
};
