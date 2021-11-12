import { useTranslation } from 'react-i18next';


const AboutMeTextBody = () => {
    const { t } = useTranslation();

    return (
        <>
            <p>{t('about.body_pt2')}
                <a href="https://www.constantcontact.com/" 
                    target="_blank" 
                    rel="noreferrer"
                >{t('about.ctct')}
                </a>
            </p>
            <p>{t('about.body_pt3')}</p>
            <p>{t('about.body_pt4')}</p>
            <p>{t('about.body_pt5')}</p>
        </>
    );
}

export default AboutMeTextBody;