// Change your display name on tha landing display
const header = {
    name: "Doreen Ligman",
}
const background = {
    // Options: Snow or Particle
    type: "Snow"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "I'm a South African female citizen. I'm currently 27 years old and I speak English and Afrikaans. My competences include good communication skills, working well in a team, self-motivation, good time management, critical thinking, determination and persistence. I love to keep up with current affairs around the world by watching the news. To relax, I enjoy watching movies and doing outdoor activities/adventures."
}
const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "Node",
        faClass: "fab fa-node"
    },{
        name: "Python",
        faClass: "fab fa-python"
    },{
        name: "VueJs",
        faClass: "fab fa-vuejs"
    },{
        name: "Bootstrap",
        faClass: "fab fa-bootstrap"
    },{
        name: "React",
        faClass: "fab fa-react"
    },{
        name: "Npm",
        faClass: "fab fa-npm"
    },
]

// Edit your projects, its name, your skills used to make it, and the url. 
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Github finder ",
        skills: ["React"],
        url: "https://site177.netlify.app"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Contact Keeper",
        skills: ["React"],
        url: "https://aqueous-depths-36684.herokuapp.com/login"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "I.T logger",
        skills: ["React"],
        url: "https://it--logger.herokuapp.com/"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "My first portfolio",
        skills: ["React"],
        url: "https://portfolio17.netlify.app"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "Final react project",
        skills: ["React"],
        url: "https://doreen-beauty-salon.netlify.app"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "King James Challenge",
        skills: ["Html, CSS & Javascript"],
        url: "https://challenge177.netlify.app"
    },
]

const section33Title = "Education"
const education = [
    {
        // Add image in './styles/images.css' in #project1
        name:'Web development/Programming Coding Course',
        where:'Lifechoices Academy',
        from:'24 February 2020',
        to:'30 August 2020',
    },
    {
        // Add image in './styles/images.css' in #project2
        name:'Web development/Programming Coding Course',
        where:'Lifechoices Academy',
        from:'24 February 2020',
        to:'30 August 2020',
    },
    {
        // Add image in './styles/images.css' in #project3
        name:'Web development/Programming Coding Course',
        where:'Lifechoices Academy',
        from:'24 February 2020',
        to:'30 August 2020',
    },
    
]

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "Tell me more about your enquiry.",
    copyright: "Doreen Ligman",
    contactUrl: 'doreenligman17@gmail.com'
}
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
    github: 'https://github.com/Doreen162',
    linkedin: 'https://www.linkedin.com/in/doreen-rowena-ligman-20a55919b/',
    codepen: 'https://codepen.io/Doreen17',
}
// Dont change anything here
export { header, background, about, skillsBar, projects , education , contact, social, section2title, section3Title, section33Title, section5Title }