import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({ title, position, location, duration, sujet, technologie }) => {
    return (
        <Card title={title} subTitle={position} footer={location} className="md:w-25rem">
            <div>
                <div><b>Sujet : </b> {sujet}</div>
                <div><b>Technologie : </b>{technologie}</div>
                <div><b>Date : </b>{duration}</div>
            </div>
        </Card>
    );
};

const Experiences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            title: 'Stage de fin d\'année 2022',
            position: 'Stagiaire',
            duration: 'aout 2022',
            location: 'MTDS - Rabat',
            technologie: 'Django, SQLite, GitHub',
            sujet: 'Mise en œuvre d\'une application transfer bancaire ',
        },
    ];

    return (
        <section className="section">
            {experienceData.map((experience, index) => (
                <ExperienceCard
                    key={index}
                    title={experience.title}
                    position={experience.position}
                    duration={experience.duration}
                    location={experience.location}
                    sujet={experience.sujet}
                    technologie={experience.technologie}
                />
            ))}
        </section>
    );
};

export default Experiences;
