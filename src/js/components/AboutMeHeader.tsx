import { Col, Row } from 'react-bootstrap';
import { IoFish } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const AboutMeHeader = () => {
    const { t } = useTranslation();

    return (
        <>
            <Row className="justify-content-md-center mt-4">  
                <Col md="auto">
                    <h1 id='intro'>{t('about.intro')}</h1>
                </Col>
            </Row>
            <Col md="auto">
                <p>{t('about.body_pt1')}</p>
            </Col>
            <Col className="p-0" md="auto">
                <IoFish className="icon" size={30} />
            </Col>
        </>
    );
}

export default AboutMeHeader;