function Home() {
    return (
        <div className="home">
            <section id="intro" className="intro">
                <p>
                    Hi, I'm Patrick. A full-time learner with a passion for
                    software development.
                </p>
            </section>
            <section id="about" className="about">
                <h2>About Me</h2>
                <p>Hi, I'm Patrick.</p>
            </section>
            <section id="projects" className="projects">
                <h2>Featured Projects</h2>
            </section>
            <section id="skills" className="skills">
                <h2>Tools & Skills</h2>
                <div>
                    <div className="skillType">
                        <h3 className="skillHead">Front-end</h3>
                        <div className="skillContainer">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                        </div>
                    </div>
                    <div className="skillType">
                        <h3 className="skillHead">Back-end</h3>
                        <div className="skillContainer">
                            <div className="skill">NodeJs</div>
                            <div className="skill">Express</div>
                        </div>
                    </div>
                    <div className="skillType">
                        <h3 className="skillHead">Miscellaneous</h3>
                        <div className="skillContainer">
                            <div className="skill">Git</div>
                            <div className="skill">Github</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact">
                <h2>Get in Touch</h2>
                <p>
                    I would love to hear from you. Whether it is a project
                    collaboration, job opportunity, or just a chat. Feel free to
                    reach me at: patrick.brebner@gmail.com
                </p>
            </section>
        </div>
    );
}

export default Home;
