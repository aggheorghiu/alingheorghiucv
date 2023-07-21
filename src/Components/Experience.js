import React from 'react';
import '../styling/Experience.css';

const experiences = [
    {
        role: "Erasmus Student",
        company: "Universidade dos Açores",
        duration: "02/2023 – 07/2023",
        location: "Ponta Delgada, Portugal"
    },
    {
        role: "Team Coach",
        company: "Webhelp",
        duration: "06/2022 – 11/2022",
        location: "Iasi, Romania"
    },
    {
        role: "Travel Advisor",
        company: "Webhelp",
        duration: "12/2020 – 06/2022",
        location: "Iasi, Romania"
    },
    {
        role: "Software Developer Internship",
        company: "Pentalog",
        duration: "04/2022 – 06/2022",
        location: "Iasi, Romania"
    },
    {
        role: "Public Relations",
        company: "AlmaViva",
        duration: "08/2018 – 11/2020",
        location: "Iasi, Romania"
    }
];

const education = [
    {
        degree: "Bachelor in Business Informatics",
        institution: "Alexandru Ioan Cuza University",
        faculty: "Faculty of Economy and Business Administration",
        duration: "10/2020 – 07/2023",
        location: "Iasi, Romania"
    },
    {
        degree: "High School Diploma",
        institution: "Technical College of Transport and Constructions",
        duration: "09/2010 – 06/2015",
        location: "Iasi, Romania"
    }
];

const languages = [
    {
        language: "Italian",
        understanding: "C1",
        speaking: "B2",
        writing: "B2",
        listening: "B2",
        reading: "C1"
    },
    {
        language: "English",
        understanding: "C1",
        speaking: "C1",
        writing: "B2",
        listening: "B2",
        reading: "C1"
    },
    {
        language: "Portuguese",
        understanding: "A2",
        speaking: "A2",
        writing: "A2",
        listening: "A2",
        reading: "B2"
    }
];

const Experience = () => (
    <div className="experience-section">
        <h2 className='xp-title'>Experience</h2>
        <div className="timeline">
            {experiences.map((experience, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag">{experience.duration}</span>
                        <h3>{experience.role}</h3>
                        <h4>{experience.company}</h4>
                        <p>{experience.location}</p>
                        <span className="circle" />
                    </div>
                </div>
            ))}
        </div>

        <h2 className='xp-title'>Education</h2>
        <div className="timeline">
            {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                    <div className="timeline-item-content">
                        <span className="tag">{edu.duration}</span>
                        <h3>{edu.degree}</h3>
                        <h4>{edu.faculty}</h4>
                        <h5> {edu.institution} </h5>
                        <p>{edu.location}</p>
                        <span className="circle" />
                    </div>
                </div>
            ))}
        </div>

        <h2 className='xp-title'>Language Skills</h2>
        <div className="language-section">
            {languages.map((language, index) => (
                <div key={index} className="language-item">
                    <h3>{language.language}</h3>
                    <p>Understanding: {language.understanding}</p>
                    <p>Speaking: {language.speaking}</p>
                    <p>Writing: {language.writing}</p>
                    <p>Listening: {language.listening}</p>
                    <p>Reading: {language.reading}</p>
                </div>
            ))}
        </div>

    </div>
);

export default Experience;
