import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { Animated } from "react-animated-css";

const ProjectsPage = () => {
    const { t } = useTranslation();

    return (
        <Animated animationIn="bounceInUp" animationOut="fadeOut" isVisible={true}>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1>{t('projects.title')}</h1>
                    </Col>
                </Row>
            </Container>
        </Animated>
    );
}

export default ProjectsPage;