import "./styles/Home.css";

function Home() {
    return (
        <div className="home">
            <section id="intro" className="intro homeSection">
                <p>
                    Hi, I'm Patrick. A full-time learner with a passion for
                    software development.
                </p>
            </section>
            <section id="about" className="about homeSection">
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae cumque cum alias suscipit eum at necessitatibus, quo
                    quis voluptas nulla iure, aliquid consequatur quidem ratione
                    vel magnam delectus sequi et.{" "}
                </p>
            </section>
            <section id="projects" className="projects homeSection">
                <h2>Featured Projects</h2>
                <div className="projects">
                    <div className="projectContainer">
                        <div className="projectImage">Project Image</div>
                        <div className="projectImage">Project Image</div>
                        <div className="projectDetails">
                            <h3 className="projectTitle">Blog Website</h3>
                            <div className="projectTags">
                                <p className="projectTag">React</p>
                                <p className="projectTag">NodeJs</p>
                            </div>
                            <p className="projectInfo">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Facere consequatur, esse,
                                vitae laborum eos quas dolor quis illo explicabo
                                eaque similique culpa! Sed necessitatibus
                                blanditiis recusandae vitae excepturi
                                voluptatibus libero?
                            </p>
                            <div className="projectLinks">
                                <a href="" className="projectLink">
                                    Review the Code
                                </a>
                                <a href="" className="projectLink">
                                    See it Live
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="skills" className="skills homeSection">
                <h2>Tools & Skills</h2>
                <div className="skillOuterContainer">
                    <div className="skillCategory">
                        <h3 className="skillHead">Front-end</h3>
                        <div className="skillContainer">
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">Javascript</div>
                            <div className="skill">React</div>
                            <div className="skill">Jest</div>
                        </div>
                    </div>
                    <div className="skillCategory">
                        <h3 className="skillHead">Back-end</h3>
                        <div className="skillContainer">
                            <div className="skill">NodeJs</div>
                            <div className="skill">Express</div>
                            <div className="skill">Javascript</div>
                            <div className="skill">MongoDB/Mongoose</div>
                            <div className="skill">Pug</div>
                        </div>
                    </div>
                    <div className="skillCategory">
                        <h3 className="skillHead">Miscellaneous</h3>
                        <div className="skillContainer">
                            <div className="skill">Git</div>
                            <div className="skill">Github</div>
                            <div className="skill">Python</div>
                            <div className="skill">Linux</div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact homeSection">
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
