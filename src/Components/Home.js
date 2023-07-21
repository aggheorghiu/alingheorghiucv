import '../styling/Home.css';
import Experience from './Experience';

function Home() {
    const profileImage = process.env.PUBLIC_URL + '/profile.jpg';
    return (
        <div className="home">
            <header>
                <h1>Alin George Gheorghiu</h1>
                <h2>Fullstack Web Developer</h2>
                <img src={profileImage} alt="Alin George Gheorghiu" className="profile-image" />
            </header>

            <div className="contact-details">
                <p><i class="fas fa-envelope"></i> Email: <a href="mailto:aggheorghiu@hotmail.com">aggheorghiu@hotmail.com</a></p>
                <p><i class="fas fa-phone-alt"></i> Phone: (+40) 0748988782</p>
                <p><i className="fab fa-linkedin"></i> Linkedin: <a href="https://www.linkedin.com/in/gheorghiu-alin-george-5056bb187/" target="_blank" rel="noreferrer"> Gheorghiu Alin George</a></p>
                <p><i class="fab fa-github"></i> GitHub: <a href="https://github.com/aggheorghiu" target="_blank" rel="noopener noreferrer">aggheorghiu</a></p>
            </div>


            <section className="about-me">
                <h2>About Me</h2>
                <p>I am an extremely ambitious and hardworking individual, always striving to improve and achieve the goals I set for myself. Additionally, I consistently bring a positive energy and proactive attitude to the workplace, motivating and inspiring my colleagues. I enjoy working in teams, sharing ideas and collaborating to achieve the best results. With my strong communication skills, attention to detail, and perseverance, I am prepared to tackle challenges and contribute to the growth and success of the company.</p>
                <a href={process.env.PUBLIC_URL + '/documents/cv_europass.pdf'} download className="btn">Download My Europass CV</a>
            </section>

            <Experience />

            <footer>
                <p>© {(new Date()).getFullYear()} Alin George Gheorghiu</p>
            </footer>
        </div>
    );
}

export default Home;
