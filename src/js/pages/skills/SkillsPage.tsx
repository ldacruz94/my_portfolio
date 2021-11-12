import { Animated } from 'react-animated-css';
import { Row, Col, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { GiSkills } from "react-icons/gi";
import './SkillsPage.scss';
import { FrameworksAndLibraries, Languages, Tools } from '../../components/Skills';

const SkillsPage = () => {
    const { t } = useTranslation();

    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h1>{t('skills.title')}</h1>
                </Col>
                <Col className="p-0" md="auto">
                    <GiSkills className="icon" size={45}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-4">
                <Col md="auto" className="w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <FrameworksAndLibraries />
                    </Animated>
                </Col>
                <Col md="auto" className="w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <Languages />
                    </Animated>
                </Col>
                <Col md="auto" className="w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <Tools />
                    </Animated>
                </Col>
            </Row>
        </Container>
    );
}

export default SkillsPage;