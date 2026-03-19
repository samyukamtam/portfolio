import resume from '../assets/pdf/Resume_SamyuKamtam.pdf'
import resumeAlt from '../assets/pdf/resume.pdf'
import profileImg from '../assets/png/samyu-photo.png'

export const headerData = {
    name: 'Samyu Kamtam',
    title: "Robotics and Intelligent systems.",
    desciption:"Human-centered engineering, guided by purpose, fueled by creativity, and grounded in care to drive real-world impact.",
    image: profileImg,
    resumePdf: resume,
    resumes: [
        { label: 'Robotics', file: resume },
        { label: 'Computer Science', file: resumeAlt },
        { label: 'Data Science', file: resume },
        { label: 'Master Resume', file: resumeAlt },
    ],
}
