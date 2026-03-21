import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from 'react-icons/ai';

import './ExperiencePage.css';
import ExperienceCard from '../../components/Experience/ExperienceCard';
import { ThemeContext } from '../../contexts/ThemeContext';
import { experienceData } from '../../data/experienceData';
import { headerData } from '../../data/headerData';

function ExperiencePage() {
    const [search, setSearch] = useState('');
    const { theme } = useContext(ThemeContext);

    const filteredExperience = experienceData.filter((exp) => {
        const content = `${exp.jobtitle} ${exp.company} ${exp.startYear} ${exp.endYear}`;
        return content.toLowerCase().includes(search.toLowerCase());
    });

    const useStyles = makeStyles((t) => ({
        search: {
            color: theme.tertiary,
            width: '40%',
            height: '2.75rem',
            outline: 'none',
            border: 'none',
            borderRadius: '20px',
            padding: '0.95rem 1rem',
            fontFamily: "'Noto Sans TC', sans-serif",
            fontWeight: 500,
            fontSize: '0.9rem',
            backgroundColor: theme.secondary,
            boxShadow:
                theme.type === 'dark'
                    ? 'inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060'
                    : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
            '&::placeholder': {
                color: theme.tertiary80,
            },
            [t.breakpoints.down('sm')]: {
                width: '350px',
            },
        },
        home: {
            color: theme.secondary,
            position: 'absolute',
            top: 25,
            left: 25,
            padding: '7px',
            borderRadius: '50%',
            boxSizing: 'content-box',
            fontSize: '2rem',
            cursor: 'pointer',
            boxShadow:
                theme.type === 'dark'
                    ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050'
                    : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
                color: theme.tertiary,
                transform: 'scale(1.1)',
            },
            [t.breakpoints.down('sm')]: {
                fontSize: '1.8rem',
            },
        },
    }));

    const classes = useStyles();

    return (
        <div className="experiencePage" style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Experience</title>
            </Helmet>
            <div className="experiencePage-header" style={{ backgroundColor: theme.primary }}>
                <Link to="/">
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Experience</h1>
            </div>
            <div className="experiencePage-container">
                <div className="experiencePage-search experiencePage-searchFull">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search experience/keywords/skills"
                        className={classes.search}
                    />
                </div>
                <div className="experience-categoryBar">
                    {/* <a href="#experience-startup" className="experience-categoryBtn">Startup</a> */}
                    <a href="#experience-robotics" className="experience-categoryBtn">Robotics</a>
                    <a href="#experience-data-science" className="experience-categoryBtn">Data Science</a>
                    <a href="#experience-software" className="experience-categoryBtn">Software Engineering</a>
                </div>
                <div className="experiencePage-content">
                    <aside className="experiencePage-sidebar">
                        <h3 className="experiencePage-sidebarTitle" style={{ color: theme.tertiary }}>
                            Browse
                        </h3>
                        {filteredExperience.map((exp) => (
                            <a
                                key={`nav-${exp.id}`}
                                href={`#experience-${exp.id}`}
                                className="experiencePage-sidebarLink"
                            >
                                <span className="experiencePage-sidebarCompany">{exp.company}</span>
                                <span className="experiencePage-sidebarRole">{exp.jobtitle}</span>
                            </a>
                        ))}
                    </aside>
                    <div className="experiencePage-main">
                        <div className="experience-container">
                            <Grid
                                className="experience-grid"
                                container
                                direction="row"
                                alignItems="center"
                                justifyContent="center"
                            >
                                {['Robotics', 'Data Science', 'Software Engineering'].map((group) => (
                                    <div
                                        key={group}
                                        className="experience-section"
                                        id={
                                            group === 'Software Engineering'
                                                ? 'experience-software'
                                                : group === 'Data Science'
                                                    ? 'experience-data-science'
                                                    : `experience-${group.toLowerCase()}`
                                        }
                                    >
                                        <h2 className="experience-sectionTitle" style={{color: theme.primary}}>{group}</h2>
                                        {filteredExperience
                                            .filter((exp) => exp.group === group)
                                            .map((exp) => (
                                                <ExperienceCard
                                                    key={exp.id}
                                                    id={exp.id}
                                                    anchorId={`experience-${exp.id}`}
                                                    jobtitle={exp.jobtitle}
                                                    company={exp.company}
                                                    startYear={exp.startYear}
                                                    endYear={exp.endYear}
                                                    description={exp.description}
                                                    tools={exp.tools}
                                                    categories={exp.categories}
                                                    icon={exp.icon}
                                                />
                                            ))}
                                    </div>
                                ))}
                            </Grid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperiencePage;
