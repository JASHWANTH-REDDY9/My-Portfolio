import React, { useState } from 'react';
import './projects.css'; // Import your CSS file
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Project() {
    const [hoveredProject, setHoveredProject] = useState(null);

    // Sample project data
    const projects = [
        {
            name: 'Psephologist LLM',
            description: 'Developed a Flutter app with Firebase for tracking expenses and managing budgets. Features include intuitive UI, PIN security, dark theme, notifications, cloud sync, and a Recycle Bin for deleted items.',
            technologies: 'Technologies used: Large language models( LLMs ) | Python | JavaScript | NodeJS | Express | React',
            duration: 'April 2024 - Ongoing',
            link: '' // Example link URL
        },
        {
            name: 'Blockchain-Based eVault for Legal Records',
            description: 'Deployed & configured Hyper Ledger Fabric for storing and accessing legal records in a secured manner. Deployed smart contracts using Javascript.',
            technologies: 'Technologies used: JavaScript | NodeJS | Express | Hyper Ledger Fabric.',
            duration: 'February 2024',
            link: 'https://github.com/JASHWANTH-REDDY9/Blockchain-based-Evault-for-legal-records'
        },
        {
            name: 'Mitra College portal',
            description: 'Made a website for the students in my college that helps them see their abendance, exam results, Important NoRficaRons and College calendar. This project was also selected for the College expo.',
            technologies: 'Technologies used: Python | Django | API',
            duration: 'October 2023',
            link: 'https://github.com/JASHWANTH-REDDY9/MITRA-Student-Portal' // Add your project link here
        },
        // Add more projects as needed
    ];
    
    

    const handleMouseEnter = (index) => {
        setHoveredProject(index);
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className="timeline-container dark-theme" id='projects'>
            <h1 className="title">Projects</h1>

            <VerticalTimeline animate={true} >
                {projects.map((project, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={project.duration}
                        dateClassName="date"
                        iconStyle={{ background: '#1d10aa', color: '#fff' }}      
                        icon={hoveredProject === index ? <i className="fas fa-code"></i> : <i className="fas fa-briefcase"></i>}
                        iconOnClick={() => window.open(project.link, '_blank')}
                        onTimelineElementClick={() => window.open(project.link, '_blank')}
                        iconClassName="icon"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className='styling-text'
                        contentStyle={{
                            background: '#333',
                            color: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            padding: '20px',
                            borderRadius: '8px'
                        }}
                        contentArrowStyle={{
                            borderRight: '7px solid #333',
                            width:'30px',
                            height:'10px'
                        }}
                    >
                        <h3 className="vertical-timeline-element-title">{project.name}</h3>
                        <h5 className="vertical-timeline-element-subtitle">{project.technologies}</h5>
                        <p>{project.description}</p>
                        {project.link ?<p>Click for code</p>:<p></p>}
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
            
        </div>
    );
}
