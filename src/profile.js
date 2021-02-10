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
    paragraph: "I'm South African female citizen. I'm currently 26 years old and the languages I speak is English and Afrikaans. My abilities are good communication skills, working well in a team, self-movitation, good time management, critical thinking, determination and persistance. My  interest are watching news because I love knowing what is going on  around the world, watching movies and doing outdoor/adventures."
}

const skillsBar = [
    {
        name: "HTML",
        value: 70
    },{
        name: "CSS",
        value: 50
    },{
        name: "Javascript",
        value: 50
    },{
        name: "Bootstrap",
        value: 60
    },{
        name: "React",
        value: 50
    },{
        name: "Vuejs",
        value: 60
    },{
        name: "Python",
        value: 50
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
        url: "https://github.com/Doreen162/Github-finder-project"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Contact Keeper",
        skills: ["React"],
        url: "https://github.com/Doreen162/contact-keeper"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "I.T logger",
        skills: ["React"],
        url: "https://github.com/Doreen162/it-logger"
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
        url: "https://github.com/Doreen162/Beauty-salon"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Portfolio in Vuejs",
        skills: ["Vuejs"],
        url: "https://github.com/Doreen162/Portfolio"
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
const section34Title = "Experience"
const experience = [
    {
        // Add image in './styles/images.css' in #project1
        name:'Full Stack Developement Intern',
        where:'Salasian Life Choices',
        from:'September 2020',
        to:'Present'
    },
    {
        // Add image in './styles/images.css' in #project2
        name:'Caregiver',
        where:'Creative Wellness',
        from:'April 2018',
        to:'May 2018'
    },
    {
        // Add image in './styles/images.css' in #project3
        name:'Caregiver (Volunteer)',
        where:'Huis Matina (Old Age Home)',
        from:'November 2017',
        to:'December 2017',
    },
    {
        // Add image in './styles/images.css' in #project2
        name:'General Worker',
        where:'Rainbow Factory (Capacity Agency)',
        from:'June 2014',
        to:'November 2016',
    },
    {
        // Add image in './styles/images.css' in #project3
        name:'Cashier',
        where:'Dunns Clearance Shop',
        from:'December 2012',
        to:'June 2013',
    },
    
]

// Contact form text, and Jotforms link
// To get your own jotform link, go to https://www.jotform.com/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch"
const contact = {
    pitch: "Tell us more about your enquiry.",
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
export { header, background, about, skillsBar, projects , education, experience , contact, social, section2title, section3Title, section33Title, section34Title, section5Title }