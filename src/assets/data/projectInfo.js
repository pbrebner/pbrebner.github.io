import blogOne from "./projectImages/blogOne.png";
import blogTwo from "./projectImages/blogTwo.png";

import membersOne from "./projectImages/membersOne.png";
import membersTwo from "./projectImages/membersTwo.png";

import weatherOne from "./projectImages/weatherOne.png";
import weatherTwo from "./projectImages/weatherTwo.png";

// Project Info List: Secondary Image and links are optional (Everything else is required)
const projectList = [
    {
        mainImage: blogOne,
        secondaryImage: blogTwo,
        title: "Blog Website",
        tags: ["React", "AWS S3", "NodeJs", "Express", "MongoDB", "JWT"],
        description:
            "Fully featured blog with backend API integration. Users are able to sign-up, manage their profiles, view and post content, and interact with others through comments and likes.",
        website: "https://pbrebner.github.io/blog-client/",
        github: "https://github.com/pbrebner/blog-client",
    },
    {
        mainImage: membersOne,
        secondaryImage: membersTwo,
        title: "Members Only Club",
        tags: ["NodeJs", "Express", "MongoDB", "Pug/Jade", "Passport"],
        description:
            "Message board website with member only permissions created through the use of Passport",
        website: "https://members-only-deploy.fly.dev/",
        github: "https://github.com/pbrebner/members-only",
    },
    {
        mainImage: weatherOne,
        secondaryImage: weatherTwo,
        title: "Weather App",
        tags: ["Javascript", "HTML/CSS", "Webpack", "API"],
        description:
            "A weather forecast application that utilizes the open weather API to display relavent data of the searched city on a clean user interface.",
        website: "https://pbrebner.github.io/weather-app/",
        github: "https://github.com/pbrebner/weather-app",
    },
];

export default projectList;
