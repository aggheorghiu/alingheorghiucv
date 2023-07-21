import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styling/Skills.css';


const skill1 = process.env.PUBLIC_URL + '/htmlcssjs.jpg'; 
const skill2 = process.env.PUBLIC_URL + '/nodejs.png'; 
const skill3 = process.env.PUBLIC_URL + '/reactjs.jpg'; 
const skill4 = process.env.PUBLIC_URL + '/python.jpg'; 
const skill5 = process.env.PUBLIC_URL + '/sql.jpg'; 
const skill6 = process.env.PUBLIC_URL + '/mongodb.jpg'; 
const skill7 = process.env.PUBLIC_URL + '/powerbi.png'; 
const skill8 = process.env.PUBLIC_URL + '/excel.jpg'; 
const skill9 = process.env.PUBLIC_URL + '/powerpoint.jpg'; 





const Skills = () => {
    return (
        <Carousel autoPlay infiniteLoop>
            <div>
                <img src={skill1} alt="Skill 1" />
                <p className="legend">HTML CSS JS</p>
            </div>
            <div>
                <img src={skill2} alt="Skill 2" />
                <p className="legend">NodeJS</p>
            </div>
            <div>
                <img src={skill3} alt="Skill 3" />
                <p className="legend">ReactJS</p>
            </div>
            <div>
                <img src={skill4} alt="Skill 4" />
                <p className="legend">Python</p>
            </div>
            <div>
                <img src={skill5} alt="Skill 5" />
                <p className="legend">SQL</p>
            </div>
            <div>
                <img src={skill6} alt="Skill 6" />
                <p className="legend">MongoDB</p>
            </div>
            <div>
                <img src={skill7} alt="Skill 7" />
                <p className="legend">Power BI</p>
            </div>
            <div>
                <img src={skill8} alt="Skill 8" />
                <p className="legend">Excel</p>
            </div>
            <div>
                <img src={skill9} alt="Skill 9" />
                <p className="legend">PowerPoint</p>
            </div>
        </Carousel>
    );
};

export default Skills;
