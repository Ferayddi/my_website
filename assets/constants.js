const FILES = {
    resume: 'assets/resume.pdf',
}

const homePage = {
    home_quote: "The best solution is the simplest one",
    paragraph_1: 'I am a computer science graduate, with a passion for technology and innovation. I aim to make my skills \
            useful. An entrepreneur is like a bird\'s egg. I have met so many smart people, who fails to \
            envision how their life will span, and I had to learn from great minds that think intelligence can be judged \
            by a set of answers.',
    paragraph_2: 'I always found amazing the ability to control computers and networks infrastructure that are located in another country, while being just another human walking along the streets. Knowing that we have the \
    capability to structure, organize and lead projects that are sent over the clouds, into physical structures that needs to be managed and organized is something very exciting to me. It required a deep understanding of \
    systems and of their interactions in order to be able to leverage it for specific use, which I love to demonstrate to others. '
}

const motivationPage = {
    motivation: 'There are two aspects of my motivation. The first is to fulfil my thirst for knowledge and competency. I enjoy the process of gaining competency in varied fields of computer science. \
                The second aspect is money. I need money '
}

const backgroundPage = {
    background_section_1: 'I was born in New Caledonia, a French colony in the Pacific Ocean. My family moved to Thailand when I was nine, where I first integrated a French private school (CNED), then integrated an international english speaking school three years later. \
                At my senor year of high school, I applied to various universities in the UK, the Netherlands and Hong Kong, where I was able to get into my first choice, the Hong Kong university of Science and Technology. \
                I graduated and obtained a Bachelor of Engineering in Computer Science in 2024. The next part of my journey is left to be written.',
    background_section_2: 'My mother was born in Avignon, France, and her parents are from China and Vietnam. My father was also born in French Alsaze, however his parents are descendants from French Algeria and Spain. \
                My parents moved to New Caledonia after getting married, where they worked hard to establish various businesses, including a real estate agency, dental clinic and promotion development. They gave birth to four children, of which I am the youngest.',
    background_section_3: 'My eldest brother studied business management in city university of Hong Kong, and is now working in the family business. My second brother studied veterinarian studies Spain, but have decided to shift his ambitions towards the family business as well. \
    My sister studied Economics and Finance in the Hong Kong university of Science and Technology, and is handling the finances of my family\'s business. I am the last of the siblings to graduate and start my active life. I am actively learning from the tech industry, and working alongside my family \
    However I am extremely ambitious and am well aware that I need to continuing growing in the computer science industry to satisfy my ambitions.',
    
}

const personalityPage = {
    type: "INFJ",
    descriptions: [
        "Natural collaborators, thrive on challenges",
        "Big picture thinker",
        "Strong work ethic",
        "Insightful",
        "Loyal"
    ]
}

const academicsPage = {
    university: 'Hong Kong University of Science and Technology',
    degree: 'Bachelor of Engineering in Computer Science',
    year: '2024',
    classification: 'First Class Honours',
    roles: "President of Tennis Society",
    awards: "4 Awarded Dean's List, Leadership Award",
    high_school: "Regents International School Pattaya",
    year: '2020',
    high_school_diploma: "International Baccalaureate Diploma",
    Score: "35",
    high_school_role: "Prefect",
    high_school_accomplishments: "Designed school talentshow trophy, using solidworks and laser cutting"
}


const skillsPage = {
    hard_skills: [
        {
            title: 'Python',
            rating: 5
        },
        {
            title:'Javascript',
            rating: 5
        },
        {
            title:'React',
            rating: 5
        },
        {
            title:'Node.js',
            rating: 5
        },
        {
            title:'Express',
            rating: 5
        },
        {
            title:'PostgreSQL',
            rating: 5
        },
        {
            title:'Sequelize',
            rating: 5
        },
        {
            title:'Git',
            rating: 5
        },
        {
            title:'HTML',
            rating: 5
        },
        {
            title:'C++',
            rating: 5
        },
        {
            title:'Java',
            rating: 4
        },
        {
            title:'C#',
            rating:4
        },
        {
            title:'Django',
            rating: 4
        },
        {
            title:'Angular',
            rating:4
        }
    ],
    soft_skills : [
        {
            title: 'Communication',
            rating: 5
        },
        {
            title: 'Teamwork',
            rating: 5
        },
        {
            title: 'Problem solving',
            rating: 5
        },
        {
            title: 'Time management',
            rating: 5
        },
        {
            title: 'Adaptability',
            rating: 5
        },
        {
            title: 'Creativity',
            rating: 5
        },
        {
            title: 'Leadership',
            rating: 4
        },
        {
            title: 'Critical thinking',
            rating: 4
        },
        {
            title: 'Work ethic',
            rating: 4
        },
        {
            title: 'Stress management',
            rating: 4
        },
        {
            title: 'Conflict resolution',
            rating: 4
        },
        {
            title: 'Empathy',
            rating: 4
        }
    ]
}

//Tennis website, fit and Match, Cloud app, ERP program, Machine Learning recognition, Search Engine project
const project_portfolio_page = {
    projects: [
      {
        name: 'Fit&Match',
        type: "Startup",
        awards: "Hong Kong Science Park initial and secondary funding",
        description: 'A mobile application for matching people for fitness activities.',
        details: `I joined a group of 4 ambitious students, where two of us were computer science students, and the other two were business students.
                  I was in charge of the backend development, where I made use of providers along with Firebase.`,
        technologies: ['Flutter', 'Dart', 'Firestore', 'Firebase'],
        video_link: ''
      },
      {
        name: "ERP program",
        type: "Internship",
        description: "An ERP program for small businesses",
        details: `During my internship, I was charged with the task of developing a full stack web development project for their clients.
                   In this project, I developed a sales management system (for artifacts such as invoices, estimates, etc.), as well as a purchase management system (for bills, purchase orders, etc.).
                   I also developed an inventory management system along with a staff management system. The goal was to make all these systems integrated so that it can provide a better accounting solution.`,
        technologies: ['React', 'Node.js', 'Express', 'Sequelize'],
        video_link: ''
      },
      {
        name: "Tennis Website",
        type: "Society project",
        description: "A website that allows university members to register to the tennis society, as well as register to weekly practice sessions",
        details: `As the tennis society President, I believed that the tasks of registering members and managing the weekly sessions were too redundant and time-consuming.
                  I decided to develop a website that would allow members to register to the society, and register to the sessions on a weekly basis. This website would also allow the committee to manage members (Mark the members present for each session, record the members who paid the membership fee).`,
        technologies: ['Django', 'Python', 'PostgreSQL', 'HTML', 'CSS'],
        video_link: ''
      },
      {
        name: "Cloud leveraging application for automated crawling",
        type: "Course project",
        details: `A web application that leverages the power of cloud computing and allows the user to crawl the web and generate datasets.
                  The user can choose the crawling platform and the data to be crawled.
                  The application makes use of Spark programming and dataframes techniques in order to automatically scale the server resources and ensure efficiency.`,
        technologies: ['Spark', 'Docker', 'React', 'Node.js', 'Express', 'PostgreSQL'],
        video_link: 'https://www.youtube-nocookie.com/embed/X7iriZu4G6Y?si=mmKF5esrEP9F2dau'
      },
      {
        name: "Machine learning Hawaiian bird recognition",
        type: "Course project",
        description: 'A machine learning project that recognizes endangered Hawaiian birds from images.',
        details: `The project makes use of a convolutional neural network and is trained on a self-collected dataset of Hawaiian birds.
                  The project is able to recognize 5 different species of birds with an accuracy of 97%.`,
        technologies: ['Python', 'Tensorflow', 'Keras', 'CNN'],
        techniques: ['Deeplab Pre-trained model', 'Crawling', 'Data augmentation', 'Fine-tuning'],
        video_link: "https://www.youtube-nocookie.com/embed/LpZVgIAE4ik?si=VyRgco0uX_yoX0h4"
      },
      {
        name: "Search Engine application",
        type: "Course project",
        description: 'A search engine application that allows the user to search for documents in a database',
        details: `Project of the Search Engine course. The project makes use of the inverted index technique and the vector space model.
                  The project was needed to be implemented from scratch and make use of well-known methods, such as the cosine similarity, the tf-idf score, and the BM25 score.`,
        technologies: ['Javascript',],
        video_link: 'https://www.youtube-nocookie.com/embed/f-SuCtJ0ZoE?si=Wq3beW6ZdPQPl9SQ'
      }
    ]
  };



module.exports = {
    motivationPage,
    backgroundPage,
    skillsPage,
    project_portfolio_page,
    homePage


};