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
        tags: ["NodeJs", "Passport"],
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
        website: "https://pbrebner.github.io/blog-client/",
        github: "https://github.com/pbrebner/blog-client",
    },
    {
        mainImage: membersOne,
        secondaryImage: membersTwo,
        title: "Members Only Club",
        tags: ["NodeJs", "Pug/Jade", "Passport"],
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
        website: "https://members-only-deploy.fly.dev/",
        github: "https://github.com/pbrebner/members-only",
    },
    {
        mainImage: weatherOne,
        secondaryImage: weatherTwo,
        title: "Weather App",
        tags: ["Javascript", "Webpack", "API"],
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos magni fugit eius quasi assumenda odit quidem sunt, explicabo amet modi quia dolor facere dolores error earum sit adipisci mollitia officia.",
        website: "https://pbrebner.github.io/weather-app/",
        github: "https://github.com/pbrebner/weather-app",
    },
];

export default projectList;
