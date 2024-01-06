import ProjectContainer from "../components/ProjectContainer";
import "./styles/Home.css";

function Home() {
    const projectList = [
        {
            image: "",
            title: "Blog Website",
            tags: ["React", "NodeJs"],
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
            website: "",
            github: "",
        },
        {
            title: "Blog Website",
            tags: ["React", "NodeJs"],
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
            website: "",
            github: "",
        },
        {
            title: "Blog Website",
            tags: ["React", "NodeJs"],
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
            website: "",
            github: "",
        },
    ];

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
                <div className="aboutContent">
                    <div className="aboutImage">Profile Image</div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae cumque cum alias suscipit eum at necessitatibus,
                        quo quis voluptas nulla iure, aliquid consequatur quidem
                        ratione vel magnam delectus sequi et.{" "}
                    </p>
                </div>
            </section>
            <section id="projects" className="projects homeSection">
                <h2>Featured Projects</h2>
                <div className="projects">
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
                <h2>Tools & Skills</h2>
                <div className="skillOuterContainer">
                    <div className="skillCategory">
                        <h3 className="skillHead">Front-end</h3>
                        <div className="skillContainer">
                            <div className="skill">
                                <i className="fa-brands fa-html5"></i>
                                <div>HTML</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-css3"></i>
                                <div>CSS</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-js"></i>
                                <div>Javascript</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-react"></i>
                                <div>React</div>
                            </div>
                            <div className="skill">
                                <i class="fa-solid fa-vial-circle-check"></i>
                                <div>Jest</div>
                            </div>
                        </div>
                    </div>
                    <div className="skillCategory">
                        <h3 className="skillHead">Back-end</h3>
                        <div className="skillContainer">
                            <div className="skill">
                                <i className="fa-brands fa-node"></i>
                                <div>NodeJs</div>
                            </div>
                            <div className="skill">
                                <div>ex</div>
                                <div>Express</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-js"></i>
                                <div>Javascript</div>
                            </div>
                            <div className="skill">
                                <i class="fa-solid fa-database"></i>
                                <div>MongoDB</div>
                            </div>
                            <div className="skill">
                                <i className="fa-solid fa-code"></i>
                                <div>Pug</div>
                            </div>
                        </div>
                    </div>
                    <div className="skillCategory">
                        <h3 className="skillHead">Miscellaneous</h3>
                        <div className="skillContainer">
                            <div className="skill">
                                <i className="fa-brands fa-git-alt"></i>
                                <div>Git</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-github"></i>
                                <div>Github</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-python"></i>
                                <div>Python</div>
                            </div>
                            <div className="skill">
                                <i className="fa-brands fa-linux"></i>
                                <div>Linux</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="contact" className="contact homeSection">
                <h2>Get in Touch</h2>
                <div className="contactContent">
                    <p>
                        I would love to hear from you. Whether it is a project
                        collaboration, job opportunity, or just a chat.
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
                                <a href="">
                                    <i className="fa-brands fa-github"></i>
                                </a>
                                <a href="">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
