const personalDetails = {
    name: 'DURGESH GUPTA',
    designation: 'FRONT END DEVELOPER',
    aboutMe: `I'm an innovative Front End Developer with 2.5+ years of work experience in web development.
            Mostly i worked on Javascript frameworks such as Angular, ReactJS, NodeJS, Ionic etc.
            Experienced to work on Scrum Process(JIRA) and Github/Gitlab for Version Control.
            I have developed products for 2 startups with upto 90% work satisfaction.`,
    details: [
        { icon: 'fa fa-envelope', html: `<a href="mailto:durgeshgupta15101997@gmail.com" alt="durgeshgupta15101997@gmail.com" target="_blank" rel="noopener noreferrer">durgeshgupta15101997@gmail.com</a>` },
        { icon: 'fa fa-linkedin', html: `<a href="https://www.linkedin.com/in/durgesh-gupta-b7aa17122/" alt="linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/durgesh-gupta-b7aa17122/</a>` },
        { icon: 'fa fa-mobile', html: `<a href="tel:+919079231433" alt="+919079231433" target="_blank" rel="noopener noreferrer">+919079231433</a>, <a href="tel:+919983557858" alt="+919983557858" target="_blank" rel="noopener noreferrer">+919983557858</a>` },
        { icon: 'fa fa-calendar', html: `15 Oct 1997` },
    ],
    experience: [
        {
            designation: 'Front End Developer',
            company: 'Axestrack Software Solutions',
            duration: '01/2021 - Present',
            location: 'Jaipur',
            desc: `Provide the GPS based tracking solutions for consignment, personal, mobile and vehicle based tracking with Geofence, Over Speed, stoppage, Route-deviation, 
            Break-down, fuel consumption and different-2 Sensor based analysis solution.`,
        },
        {
            designation: 'Front End Developer',
            company: 'Webcontentor Pvt Ltd',
            duration: '04/2019 - 12/2020',
            location: 'Delhi',
            desc: `Provide Software Products, Mobile Apps, transactional and interactive Web Presences for more than 8 years. a web solution with workflows and functionality based on the type of user sign-in and the UI responsively adjusts based on the access device.`,
        }
    ],
    educations: [
        {
            name: 'B. Tech.',
            college: 'Jagannath Gupta Institute of Engineering & Technology (JNIT)',
            duration: '2014 - 2018',
            location: 'Jaipur',
            stream: 'Computer Science',
            desc: ''
        }
    ],
    skills: ['Javascript', 'MongoDB', 'Angular', 'ReactJS', 'Ionic'],
    technologies: ['Kendo Ui', 'Material Ui', 'React-Bootstrap', 'Github', 'Gitlab', 'Jira', 'Kanban', 'Redux', 'Context Api', 'Formik', 'Nrwl'],
    projects: [
        {
            name: 'Trackurate',
            tech: 'Angular, Ionic, NodeJS, MongoDB',
            desc: `DOST is a complete ERP for logistic owners to manage their records. 
            It has more than 7 modules such as accounting, trips, tyres, documents etc.`,
            link: 'https://play.google.com/store/apps/details?id=gold.fvts.in'
        },
        {
            name: 'DOST (Digital Operations for Smart Transportation)',
            tech: 'Angular, Ionic',
            desc: `DOST is a complete ERP for logistic owners to manage their records. 
            It has more than 7 modules such as accounting, trips, tyres, documents etc.`,
            link: 'http://elogist.in/dost/'
        },
        {
            name: 'Walle8',
            tech: 'Ionic, Javascript',
            desc: `Wallet for fliet owners to fill fuel & pay toll tax and getting discount on every fuel filling or toll tax payment.`,
            link: 'https://play.google.com/store/apps/details?id=www.walle8.com'
        },
        {
            name: 'Partner Admin Dashboard',
            tech: 'Angular',
            desc: `A application that manages all the company partner and decides which roles needs to provide to their partner and contain all the info regarding them.`,
            link: 'https://play.google.com/store/apps/details?id=com.sanghi.motrs'
        },
        {
            name: 'FVTS',
            tech: 'Angular, Java, PostgreSql',
            desc: `A web app that manages all the trucks of fleet managers. live tracking of vehicles and route optimization, performance reporting and fuel mangement kind of module inside it.`,
            link: "https://play.google.com/store/apps/details?id=com.sanghi.motrs",

        },
        {
            name: 'Wallet8-Admin',
            tech: 'Angular',
            desc: `This application contains information regarding all the fastrack info and all the transition on toll, containing diffrenet reports inside it for fleet managers. different kind of bank transition api also inside this project.`,
            link: 'https://qkfeedback.com/'
        },
        {
            name: 'Blog App',
            tech: 'ReactJs, Redux, Material-UI',
            desc: `This is a News blog application shows current news and search news according to classification wise. with google authentication login and logout.`,
            link: 'https://play.google.com/store/apps/details?id=io.ionic.starterseeadoc2018'
        },
        {
            name: 'Flipkart Clone',
            tech: 'ReactJs, ExpressJs, NodeJs, MongoDB, Redux',
            desc: `This project deals with developing an e-commerce website for Online Product Sale. This project also includes admin portal to mangaes all the category, product, cart and upi transition.`,
            link: 'https://www.getshortcut.co/'
        },
        {
            name: 'Covid19-Tracker',
            tech: 'RectJs, Context-Api',
            desc: `A tracker that provide infomation of recovery, deaths and infected with charts and according to country wise information.`,
            link: ''
        },
        {
            name: 'Report Central',
            tech: 'Angular',
            desc: `First In Line, is the solution, With the power to immediately and dramatically improve call management and customer satisfaction while reducing staffing costs and infrastructure expenses.`,
            link: ''
        }
    ],
}




module.exports = personalDetails;