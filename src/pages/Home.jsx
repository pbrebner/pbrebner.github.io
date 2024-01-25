import ProjectContainer from "../components/ProjectContainer";
import "./styles/Home.css";
import pug from "../assets/icons/pug.svg";

import projectList from "../assets/data/projectInfo";
import profile from "../assets/images/profile.jpg";

function Home() {
    return (
        <div className="home">
            <div className="homeInnerContainer">
                <div className="hl"></div>
                <section id="intro" className="intro homeSection">
                    <p>
                        Hi, I'm Patrick. A full-time learner with a passion for
                        software development.
                    </p>
                </section>
                <section id="about" className="about homeSection">
                    <div className="sectionHead">
                        <div className="sectionHl"></div>
                        <h2>About Me</h2>
                        <div className="sectionHl"></div>
                    </div>

                    <div className="aboutContent">
                        <img
                            src={profile}
                            alt="profile"
                            className="aboutImage"
                        />
                        <div>
                            <p>
                                Deeply invested in the life-long learning
                                mentality, I'm currently expanding my skills as
                                a full-stack developer. Along with my background
                                in biomedical engineering and data analysis, I'm
                                well acquainted to bringing out solutions to
                                complex problems.
                            </p>
                            <a href="#contact" className="aboutLink">
                                Say Hello
                            </a>
                        </div>
                    </div>
                </section>
                <section id="projects" className="projects homeSection">
                    <div className="sectionHead">
                        <div className="sectionHl"></div>
                        <h2>Projects</h2>
                        <div className="sectionHl"></div>
                    </div>

                    <div className="projectsContainer">
                        {projectList.map((project, index) => {
                            if (index % 2) {
                                return (
                                    <ProjectContainer
                                        key={index}
                                        reversed={false}
                                        project={project}
                                    />
                                );
                            } else {
                                return (
                                    <ProjectContainer
                                        key={index}
                                        reversed={true}
                                        project={project}
                                    />
                                );
                            }
                        })}
                    </div>
                </section>
                <section id="skills" className="skills homeSection">
                    <div className="sectionHead">
                        <div className="sectionHl"></div>
                        <h2>Tools & Skills</h2>
                        <div className="sectionHl"></div>
                    </div>

                    <div className="skillOuterContainer">
                        <div className="skillCategory">
                            <h3 className="skillHead">Front-end</h3>
                            <div className="skillContainer">
                                <div className="skill">
                                    <i className="devicon-html5-plain"></i>
                                    <div>HTML</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-css3-plain"></i>
                                    <div>CSS</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-javascript-plain"></i>
                                    <div>Javascript</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-react-original"></i>
                                    <div>React</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-jest-plain"></i>
                                    <div>Jest</div>
                                </div>
                            </div>
                        </div>
                        <div className="skillCategory">
                            <h3 className="skillHead">Back-end</h3>
                            <div className="skillContainer">
                                <div className="skill">
                                    <i className="devicon-nodejs-plain"></i>
                                    <div>NodeJs</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-express-original"></i>
                                    <div>Express</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-javascript-plain"></i>
                                    <div>Javascript</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-mongodb-plain"></i>
                                    <div>MongoDB</div>
                                </div>
                                <div className="skill">
                                    <img src={pug} alt="Pug" />
                                    <div>Pug</div>
                                </div>
                            </div>
                        </div>
                        <div className="skillCategory">
                            <h3 className="skillHead">Miscellaneous</h3>
                            <div className="skillContainer">
                                <div className="skill">
                                    <i className="devicon-git-plain"></i>
                                    <div>Git</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-github-original"></i>
                                    <div>Github</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-python-plain"></i>
                                    <div>Python</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-linux-plain"></i>
                                    <div>Linux</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-vscode-plain"></i>
                                    <div>VSCode</div>
                                </div>
                                <div className="skill">
                                    <i className="devicon-webpack-plain"></i>
                                    <div>Webpack</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact homeSection">
                    <div className="sectionHead">
                        <div className="sectionHl"></div>
                        <h2>Get in Touch</h2>
                        <div className="sectionHl"></div>
                    </div>

                    <div className="contactContent">
                        <p>
                            I would love to hear from you. Whether it is a
                            project collaboration, job opportunity, or just a
                            chat.
                        </p>
                        <div className="contactOptions">
                            <div className="emailOption">
                                <p>Write me an email at:</p>
                                <div className="contactEmail">
                                    patrick.brebner@gmail.com
                                </div>
                            </div>
                            <p>OR</p>
                            <div className="socialOption">
                                <p>Reach me through social media</p>
                                <div className="socialLinks">
                                    <a
                                        href="https://github.com/pbrebner"
                                        target="_blank"
                                    >
                                        <i className="devicon-github-original"></i>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/patrick-brebner/"
                                        target="_blank"
                                    >
                                        <i className="devicon-linkedin-plain"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="hl"></div>
            </div>
        </div>
    );
}

export default Home;
