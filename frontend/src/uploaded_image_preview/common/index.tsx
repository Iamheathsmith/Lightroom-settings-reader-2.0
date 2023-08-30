import './index.scss'

export const TextSetting= ({header, data}: {header: string, data: string | number}) => {
    return (
        <div className='settings__text'>
            <strong className="settings__text-header">{`${header}:`}</strong>
            <div className="settings__text-data">{data}</div>
        </div>
    );
};
