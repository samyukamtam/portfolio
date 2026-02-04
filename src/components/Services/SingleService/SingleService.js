import React,{useContext} from 'react';
import { Fade } from 'react-awesome-reveal';

import { ThemeContext } from '../../../contexts/ThemeContext';

import './SingleService.css'


function SingleService({id, title, date, description, icon}) {

    const { theme } = useContext(ThemeContext);
    return (
        <Fade bottom>
            <div key={id} className="single-service" style={{backgroundColor:theme.primary400}}>
                <div className="service-iconWrap" style={{backgroundColor: theme.primary}}>
                    <i className="service-icon">{icon}</i>
                </div>
                <div className="service-content" style={{color:theme.tertiary}}>
                    <h4 className="service-title" style={{color:theme.tertiary}}>{title}</h4>
                    {date && <p className="service-date" style={{color:theme.tertiary80}}>{date}</p>}
                    {description && (
                        <p className="service-desc" style={{color:theme.tertiary80}}>{description}</p>
                    )}
                </div>         
            </div>
        </Fade>
    )
}

export default SingleService
