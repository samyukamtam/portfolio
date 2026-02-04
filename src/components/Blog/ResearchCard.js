import React, { useContext } from 'react';
import { FaCode } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

import { ThemeContext } from '../../contexts/ThemeContext';
import placeholder from '../../assets/png/placeholder.png';
import './ResearchCard.css';

function ResearchCard({
    id,
    title,
    date,
    image,
    url,
    code,
    professor,
    tools,
    details,
}) {
    const { theme } = useContext(ThemeContext);

    const content = (
        <div key={id} className="research-card" style={{ backgroundColor: theme.primary30 }}>
            <div className="research-img" style={{ backgroundColor: theme.primary }}>
                <img src={image || placeholder} alt={title} />
            </div>
            <div className="research-details">
                <h6 style={{ color: theme.primary }}>{date}</h6>
                <h4 style={{ color: theme.tertiary }}>{title}</h4>
                {professor && (
                    <h5 style={{ color: theme.tertiary80 }}>Advisor: {professor}</h5>
                )}
                {Array.isArray(details) && details.length > 0 && (
                    <ul className="research-detailsList" style={{ color: theme.tertiary80 }}>
                        {details.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                )}
                {Array.isArray(tools) && tools.length > 0 && (
                    <div className="research-tools">
                        {tools.map((tool) => (
                            <span key={tool} className="research-toolTag" style={{ color: theme.tertiary }}>
                                {tool}
                            </span>
                        ))}
                    </div>
                )}
                {code && (
                    <a
                        className="research-codeLink"
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Codebase"
                        title="Codebase"
                        style={{ color: theme.tertiary }}
                    >
                        <FaCode />
                    </a>
                )}
            </div>
        </div>
    );

    return (
        <Fade bottom>
            {url ? (
                <a href={url} target="_blank" rel="noreferrer" className="research-cardLink">
                    {content}
                </a>
            ) : (
                content
            )}
        </Fade>
    );
}

export default ResearchCard;
