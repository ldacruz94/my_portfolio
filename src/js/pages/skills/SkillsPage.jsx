import { Animated } from 'react-animated-css';
import { Row, Col, Container, Fade } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { GiSkills } from "react-icons/gi";
import { Languages, FrameworksAndLibraries, Tools } from './skill_groups';
import './SkillsPage.scss';

const SkillsPage = () => {
    const { t } = useTranslation();
    
    return (
        <Container className="mt-5">
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <Fade appear={true} in={true}>
                        <h1>{t('skills.title')}</h1>
                    </Fade>
                </Col>
                <Col md="auto p-0">
                    <Fade appear={true} in={true}>
                        <GiSkills className={"icon"} size={45}/>
                    </Fade>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-4">
                <Col md="auto" className="w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <Languages />
                    </Animated>
                </Col>
                <Col md="auto w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                        <FrameworksAndLibraries />
                    </Animated>
                </Col>
                <Col md="auto w-25">
                    <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
                    <Tools />
                    </Animated>
                </Col>
            </Row>
        </Container>
    );
}

export default SkillsPage;