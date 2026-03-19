import React, { useContext } from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AiOutlineHome } from 'react-icons/ai'

import './SkillsPage.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'
import { skillsCategories } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function SkillsPage() {
    const { theme } = useContext(ThemeContext)

    const useStyles = makeStyles((t) => ({
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
    }))

    const classes = useStyles()

    return (
        <div className='skillsPage' style={{ backgroundColor: theme.secondary }}>
            <Helmet>
                <title>{headerData.name} | Skills</title>
            </Helmet>
            <div
                className='skillsPage--header'
                style={{ backgroundColor: theme.primary }}
            >
                <Link to='/'>
                    <AiOutlineHome className={classes.home} />
                </Link>
                <h1 style={{ color: theme.secondary }}>Skills</h1>
            </div>
            <div className='skillsPage--container'>
                <div className='skillsPage--grid'>
                    {skillsCategories.map((category, index) => (
                        <div
                            key={category.title}
                            className={`skillsPage--card ${
                                index === skillsCategories.length - 1
                                    ? 'is-wide'
                                    : ''
                            }`}
                            style={{
                                backgroundColor: theme.secondary,
                                boxShadow: `0 0 30px ${theme.primary30}`,
                                borderColor: theme.primary,
                            }}
                        >
                            <h2 style={{ color: theme.primary }}>
                                {category.title}
                            </h2>
                            <div
                                className={`skillsPage--list ${
                                    category.title === 'Other'
                                        ? 'is-row'
                                        : ''
                                }`}
                            >
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className='skillsPage--item'
                                        style={{
                                            backgroundColor: theme.primary,
                                            color: theme.secondary,
                                        }}
                                    >
                                        <img
                                            src={skillsImage(skill)}
                                            alt={skill}
                                        />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsPage
