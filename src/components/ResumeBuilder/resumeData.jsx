const resumeData = {
  name: "Gaurav Yadav",

  role: "Software Engineer Intern",

  contact: {
    phone: "+91 95361 10219",
    email: "gauravyadavgh@gmail.com",
    linkedin: "linkedin.com/in/gaurav-opensource",
    github: "github.com/gaurav-opensource",
    location: "Agra, Uttar Pradesh, India",
  },

  summary:
    "Software engineer   experience in full-stack web development and applied machine learning. B.Tech graduate  with strong expertise in Python, React, SQL, MongoDB, and ML libraries including Pandas, NumPy, and Scikit-learn. Proven ability to build CI/CD pipelines, optimize backend systems, and deliver high-accuracy models.",

  skills: {
    "Programming Languages": ["Python", "C++"],
    "Frontend & Frameworks": ["ReactJS", "Node.js", "Express.js","CSS", "Flask", "FastAPI"],
    "Databases & Platforms": ["MongoDB", "SQL", "PyCharm", "VS Code", "IntelliJ IDEA"],
    "Platforms & Libraries": ["Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    Others: ["Rapport building", "Stakeholder management", "Communication Skills"],
  },

  experience: [
    {
      role: "FullStack Intern Trainee",
      company: "IBM SkillsBuild",
      location: "Hyderabad",
      duration: "June 2025 – Aug 2025",
      technologies: "Node.js, React, Tailwind CSS, SQL, MongoDB, CI/CD",
      points: [
        "Built and maintained web server components and APIs.",
        "Managed CI/CD pipelines reducing manual effort by 20 hours/week.",
        "Fixed 15 major bugs improving quality and reducing defects.",
        "Optimized endpoints improving latency by 66%.",
        "Enabled horizontal scaling achieving 99.97% uptime.",
      ],
    },
    {
      role: "Backend Developer Intern Trainee",
      company: "CodSoft Technologies",
      location: "Remote",
      duration: "Dec 2025 – Jun 2026",
      technologies: "Node.js,Express, Flask, PostgreSQL, MongoDB, REST APIs",
      points: [
        "Developed RESTful APIs using Node.js and Express.js with scalable modular architecture.",
        "Designed MongoDB schemas using Mongoose and optimized database queries for better performance.",
        "Implemented JWT-based authentication and secure route access using middleware.",
        "Enhanced backend reliability with proper error handling, async/await patterns, and clean code structure.",
        "Deployed backend services using Git/GitHub on platforms like Render and Heroku."
      ]


    },
  ],

  projects: [
    {
      title: "Digital Healthcare System",
      duration: "Dec 2024 – Feb 2025",
      github: "https://github.com/gaurav-opensource/Smart-Digital-Healthcare-System",
      points: [
        "Built a telemedicine platform with appointment booking, report uploads, and video consultations.",
        "Added role-based dashboards with secure login, doctor approval, and prescription handling.",
        "Developed an AI report analyzer using FastAPI and OCR to extract metrics and detect abnormalities.",
        "Integrated video calling, Cloudinary storage, and smart doctor search for a seamless healthcare workflow."
      ],
    },
    {
      title: "Automated Recruitment & Coding Assessment Portal",
      duration: "",
      github: "https://github.com/gaurav-opensource/Smart-Recruitment-System",
      points: [
        "Built a full-stack hiring platform with job applications, resume upload, and coding test features.",
        "Developed an AI resume-scoring system using FastAPI NLP models, improving screening accuracy and reducing manual HR effort.",
        "Integrated Judge0 API for automated coding evaluations, enabling faster and objective candidate assessment.",
        "Implemented secure role-based dashboards for students and HR to automate the complete hiring workflow."
      ]

    },
    {
      title: "Heart Disease Prediction",
      duration: "Jul 2023 – Aug 2023",
      points: [
        "Developed logistic model achieving 97% precision.",
        "Implemented HIPAA-compliant encryption improving safety.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institute: "Hindustan College of Science and Technology",
      duration: "Jul 2023 – Aug 2027",
      score: "CGPA: 7.61 / 10",
    },
    {
      degree: "Senior Secondary (XII) – PCM",
      institute: "Rastriya Inter College, Agra",
      duration: "Jul 2021 – Jun 2022",
      score: "Percentage: 75%",
    },
  ],

  achievements: [
    {
      title: "Smart India Hackathon",
      desc: "Built a centralized recruitment system to automate hiring.",
    },
    {
      title: "ByteClub (College Program)",
      desc: "Ranked 6th among 1000+ students in DSA assessment.",
    },
  ],

  certifications: [
    {
      title: "Apna College",
      desc: "Full-Stack Web Development (MERN Stack).",
    },
    {
      title: "GeeksforGeeks",
      desc: "Data Science Program (Python, ML, Data Analysis).",
    },
  ],
};

export default resumeData;

