import {  Header } from 'semantic-ui-react';

import './index.scss'

export const TextSetting= ({header, data}: {header: string, data: string}) => {
    return (
        <div className='lightroom-settings__text'>
            <div className="lightroom-settings__text-header">{`${header}:`}</div>
            <div className="lightroom-settings__text-data">{data}</div>
        </div>
    );
};
