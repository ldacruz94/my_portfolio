import { ListGroup } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import { 
    DiJava, 
    DiPython, 
    DiPhp, 
    DiJavascript, 
    DiHtml5, 
    DiCss3, 
} from 'react-icons/di';
import { AiOutlineConsoleSql } from "react-icons/ai";
import { SiGnubash } from 'react-icons/si'
import './SkillGroups.scss';

const Languages = () => {
    const { t } = useTranslation(); 

    return (
        <ListGroup variant='flush'>
            <ListGroup.Item className="text-center skill_header" active>
                {t('skills.languages.title')}
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.java')}
                <DiJava size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.python')}
                <DiPython size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.php')}
                <DiPhp size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.javascript')}
                <DiJavascript size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.bash')}
                <SiGnubash size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.html')}
                <DiHtml5 size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.css')}
                <DiCss3 size={25}/>
            </ListGroup.Item>
            <ListGroup.Item className="text-center skill_item">
                {t('skills.languages.sql')}
                <AiOutlineConsoleSql size={25}/>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default Languages;