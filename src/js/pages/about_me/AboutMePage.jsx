import { Fade, Container, Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './AboutMePage.scss';
import profile_pic from './profile.jpg';
import { IoFish } from 'react-icons/io5';

const AboutMePage = () => {
    const { t } = useTranslation();

    return (
        <Fade appear={true} in={true}>
            <Container className="pt-4">
                <Row className="justify-content-md-center mt-4">  
                    <Col md="auto">
                        <h1 id='intro'>{t('about.intro')}</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p>{t('about.body_pt1')}</p>
                    </Col>
                    <Col sm="auto">
                        <IoFish className="icon" size={40} />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src={profile_pic} roundedCircle/>
                    </Col>
                    <Col md={5}>
                        <p>
                            {t('about.body_pt2')}
                            <a href="https://www.constantcontact.com/" 
                                target="_blank" 
                                rel="noreferrer">
                                {t('about.ctct')}
                            </a>
                            {t('about.body_pt3')}
                        </p>
                        <p>{t('about.body_pt4')}</p>
                    </Col>
                </Row>
            </Container>
        </Fade>
    );
}

export default AboutMePage;