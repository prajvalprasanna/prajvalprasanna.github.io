const data = {
    profile: {
        name: "Prajval P",
        title: "Sr. Gen AI Engineer / Data Scientist",
        about: "I am a passionate Data Scientist and Gen AI Engineer with a strong background in building intelligent systems. I specialize in Deep Learning, Computer Vision, and Large Language Models. I love solving complex problems and turning data into actionable insights.",
        image: "image/profile_pic.jpg", // Replace with your actual image path
        contact: {
            email: "prajvalprasannakumar@gmail.com", // Add your email
            phone: "", // Add your phone if you want
            location: "Bangalore, India" // Add your location
        },
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/prajval-p-b0188b1a0/", icon: "fab fa-linkedin" },
            { name: "GitHub", url: "https://github.com/prajvalprasanna", icon: "fab fa-github" },
            { name: "Credly", url: "https://www.credly.com/users/prajval-p", icon: "fas fa-certificate" },
            { name: "Medium", url: "https://medium.com/@prajvalprasannakumar", icon: "fab fa-medium" }
        ],
        experience: [
            {
                role: "Sr. Engineer",
                company: "Aspire Systems",
                year: "Jun, 2025 - Present",
                desc: "Leading Gen AI initiatives and building LLM agents."
            },
            {
                role: "Data Scientist",
                company: "Tata Consultancy Services",
                year: "Aug, 2021 - Jan, 2025",
                desc: "Developed predictive models, optimized data pipelines and neural network models."
            }
        ],
        education: [
            {
                degree: "MSc. Data Science",
                school: "Manipal Academy of Higher Education",
                year: "2022 - 2024",
                desc: "Focus: Data Science, ML, Deep Learning and NLP"
            },
            {
                degree: "B.E. Electronics and Communication Engineering",
                school: "Visvesvaraya Technological University",
                year: "2017 - 2021",
                desc: "Focus: Electronics, Signal Analysis and Control Systems"
            }
        ]
    },
    latestWork: {
        type: "article",
        id: "art-2" // Featuring the latest article
    },
    projects: [
        {
            id: "kaggle-agents",
            title: "Kaggle AI Agents Course",
            description: "Upcoming submission for the 5-day AI Agents course by Kaggle and Google. Exploring advanced agentic workflows.",
            tags: ["agents", "ai", "kaggle"],
            link: "https://github.com/prajvalprasanna/kaggle_5Daiagents_course",
            image: "image/ai_agents.jpg"
        },
        {
            id: "financial-news-agent",
            title: "Financial News Agent with Gemini",
            description: "Submission for the Kaggle x Google 5-day Gen AI course. An agent that fetches financial news and provides summaries using Google's Gemini model.",
            tags: ["genai", "gemini", "llm", "kaggle"],
            link: "https://github.com/prajvalprasanna/Financial-News-Agent-using-Google-Gemini",
            image: "image/news agent.jpg"
        },
        {
            id: "portfolio-optimization",
            title: "ML Models in Portfolio Optimization",
            description: "A comparative analysis of various Machine Learning models applied to financial portfolio optimization. Personal research project.",
            tags: ["finance", "ml", "python", "analysis"],
            link: "https://github.com/prajvalprasanna/Comparative-Analysis-of-ML-Models-Used-in-Portfolio-Optimization",
            image: "image/portfolio_optimization.jpg"
        },
        {
            id: "driver-drowsiness",
            title: "Driver Drowsiness Detection",
            description: "Engineering final year project. A non-intrusive machine vision system that detects driver fatigue by analyzing facial features and eye closure rates to prevent accidents.",
            tags: ["python", "opencv", "computervision"],
            link: "https://github.com/prajvalprasanna/Driver-Drowsiness-Detection-and-Alarm-System",
            image: "image/driver_drowsiness.jpg"
        },
        {
            id: "coursera-capstone",
            title: "Applied Data Science Capstone",
            description: "Final project for the IBM Applied Data Science Capstone on Coursera. Involves data analysis, visualization, and predictive modeling.",
            tags: ["datascience", "python", "ibm", "jupyter"],
            link: "https://github.com/prajvalprasanna/Coursera_Capstone",
            image: "image/applied_ds_capstone.jpg"
        },

        {
            id: "ml-capstone-ibm",
            title: "Machine Learning Capstone (IBM)",
            description: "Capstone project for the IBM Machine Learning course. Contains code submissions and model implementations for various ML problems.",
            tags: ["ml", "python", "scikit-learn"],
            link: "https://github.com/prajvalprasanna/MachineLearningCapstone-IBM",
            image: "image/ml_capstone.jpg"
        },
        {
            id: "deeplearning-specialization",
            title: "Deep Learning Specialization (Coursera)",
            description: "Code and assignment submissions for the Deep Learning Specialization by deeplearning.ai on Coursera. Covers Neural Networks, CNNs, RNNs, and more.",
            tags: ["python", "tensorflow", "deeplearning", "jupyter"],
            link: "https://github.com/prajvalprasanna/deeplearning.ai-specialization",
            image: "image/deeplearning.ai.jpg"
        },
        {
            id: "apponix",
            title: "Apponix Data Science",
            description: "Code files and assignments from my Data Science training at Apponix. Includes basics of Data Science and Machine Learning implementations.",
            tags: ["datascience", "python", "ml"],
            link: "https://github.com/prajvalprasanna/Apponix",
            image: "image/apponix.jpg"
        }
    ],
    articles: [
        {
            id: "art-1",
            title: "Building a Financial News Agent with Google Gemini",
            domain: "Generative AI",
            date: "Documentation",
            link: "https://medium.com/@prajvalprasannakumar/building-a-financial-news-agent-with-google-gemini-9571c4fe7e36",
            tags: ["genai", "gemini", "tutorial"]
        },
        {
            id: "art-2",
            title: "Your AI has a 'Too Long; Didn't Read' Problem",
            domain: "AI Research",
            date: "TowardsAI",
            link: "https://pub.towardsai.net/your-ai-has-a-too-long-didnt-read-problem-what-if-the-fix-is-pictures-dd7269643f63?source=friends_link&sk=aec3fae8a9c8940552ac5d78ab0fed48",
            tags: ["ai", "research", "medium"]
        }
    ],
    tagIcons: {
        "python": "fab fa-python",
        "tensorflow": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
        "deeplearning": "fas fa-brain",
        "jupyter": "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
        "datascience": "fas fa-chart-bar",
        "ml": "fas fa-cogs",
        "opencv": "https://upload.wikimedia.org/wikipedia/commons/5/53/OpenCV_Logo_with_text.png",
        "computervision": "fas fa-eye",
        "scikit-learn": "fas fa-tools",
        "finance": "fas fa-chart-line",
        "analysis": "fas fa-search-dollar",
        "genai": "fas fa-robot",
        "gemini": "fas fa-star",
        "llm": "fas fa-comments",
        "kaggle": "fab fa-kaggle",
        "agents": "fas fa-user-secret",
        "ai": "fas fa-microchip",
        "research": "fas fa-book-open",
        "medium": "fab fa-medium",
        "tutorial": "fas fa-graduation-cap",
        "ibm": "fas fa-server",
        "langgraph": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/langgraph/langgraph.svg",
        "langchain": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/langchain/langchain.svg",
        "crewai": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/crewai/crewai.svg",
        "azure sql db": "https://techicons.dev/icons/azure-sql-database.svg",
        "azure foundry": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/azure/azure.svg",
        "azure open ai": "https://azureicons.com/img/Azure_OpenAI.svg",
        "blandai": "https://logo.clearbit.com/bland.ai",
        "langsmith": "https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/langsmith/langsmith.svg"
    }
};
