import './index.scss'

export const TextSetting= ({header, data}: {header: string, data: string | number}) => {
    return (
        <div className='settings__text'>
            <strong className="settings__text-header">{`${header}:`}</strong>
            <div className="settings__text-data">{data}</div>
        </div>
    );
};

export const BarSetting = ({header, marginLeft, barAmount}: {header: string, marginLeft: string, barAmount: number}) => {
    return (
        <div className='bar-settings'>
            <strong className="bar-settings__text">{header}</strong>
            <div className="bar-settings__bar">
                <div style={{left: marginLeft}}className="bar-settings__bar-postion"/>
            </div>
            <div className="bar-settings__amount">{barAmount}</div>
        </div>
    );
};
