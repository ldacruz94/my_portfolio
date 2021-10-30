import { useTranslation } from 'react-i18next';
import { 
    SiSpring, 
    SiSpringboot, 
    SiFlask, 
    SiBootstrap, 
    SiReact, 
    SiJquery
} from 'react-icons/si';
import { BiWrench } from "react-icons/bi";
import { ListGroup } from 'react-bootstrap';
import './SkillGroups.scss';

const FrameworksAndLibraries = () => {
    const { t } = useTranslation(); 

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item className="text-center skill_header" active>
                {t('skills.frameworks_and_libraries.title')}
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.spring')}
                <SiSpring size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.spring_boot')}
                <SiSpringboot size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.struts')}
                <BiWrench size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.flask')}
                <SiFlask size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.bootstrap')}
                <SiBootstrap size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.react')}
                <SiReact size={20}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.frameworks_and_libraries.jquery')}
                <SiJquery size={20}/>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default FrameworksAndLibraries;