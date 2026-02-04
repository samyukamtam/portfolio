import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { HiArrowRight } from "react-icons/hi";

import '../Projects/Projects.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleProject from '../Projects/SingleProject/SingleProject';


function Blog() {

    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {blogData.length > 0 && (
                <div className="projects" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>Research</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleProject
                                    theme={theme}
                                    key={blog.id}
                                    id={blog.id}
                                    name={blog.title}
                                    desc={blog.description}
                                    tags={[...(blog.tools || [])]}
                                    website={blog.url}
                                    code={blog.code}
                                    image={blog.image}
                                />
                            ))}
                        </div> 

                        <div className="projects--viewAll">
                            <Link to="/research">
                                <button className={classes.viewAllBtn}>
                                    Expand
                                    <HiArrowRight className={classes.viewArr} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default Blog
