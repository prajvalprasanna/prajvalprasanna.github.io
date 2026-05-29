const data = {
    profile: {
        name: "Prajval P",
        title: "Sr. Gen AI Engineer & Data Scientist",
        about: "Gen AI Engineer & Data Scientist with 4 years of experience architecting scalable AI solutions on Azure and OCI. I specialize in agentic workflows, RAG pipelines, and multi-agent systems using LangGraph, MCP, and LLMs — turning complex business problems into production-grade AI.",
        image: "image/profile_pic.jpg",
        contact: {
            email: "prajvalprasannakumar@gmail.com",
            phone: "",
            location: "Bengaluru, India"
        },
        social: [
            { name: "LinkedIn", url: "https://www.linkedin.com/in/prajval-p-b0188b1a0/", icon: "fab fa-linkedin" },
            { name: "GitHub", url: "https://github.com/prajvalprasanna", icon: "fab fa-github" },
            { name: "Credly", url: "https://www.credly.com/users/prajval-p", icon: "fas fa-certificate" },
            { name: "Medium", url: "https://medium.com/@prajvalprasannakumar", icon: "fab fa-medium" }
        ],
        experience: [
            {
                role: "Sr. Engineer – Gen AI",
                company: "Aspire Systems",
                year: "Jun 2025 - Present",
                desc: "Architecting multi-agent systems with LangGraph, MCP, and Bland AI for client-facing Gen AI PoCs."
            },
            {
                role: "Systems Engineer",
                company: "Tata Consultancy Services",
                year: "Aug 2023 - Jan 2025",
                desc: "Built enterprise RAG chatbots and a hybrid tariff plan recommender on Azure."
            },
            {
                role: "Assistant System Engineer",
                company: "Tata Consultancy Services",
                year: "Aug 2021 - Aug 2023",
                desc: "Delivered demand forecasting, customer segmentation, and a next-best-action engine for a 10M+ user telecom client."
            },
            {
                role: "Research Intern",
                company: "Lithoera Technologies",
                year: "Jun 2020 - Nov 2020",
                desc: "Benchmarked DNN object detectors for airport runway operations. Published in IJARIIT (Dec 2020)."
            }
        ],
        education: [
            {
                degree: "M.Sc. Data Science",
                school: "Manipal Academy of Higher Education (MAHE)",
                year: "2022 - 2024",
                desc: "CGPA: 9.00/10. Focus: ML, Deep Learning, and NLP."
            },
            {
                degree: "B.E. Electronics & Communication",
                school: "APS College of Engineering",
                year: "2017 - 2021",
                desc: "CGPA: 7.23/10. Focus: Electronics, Signal Analysis, Control Systems."
            }
        ]
    },
    latestWork: {
        type: "work",
        id: "transcript-eval"
    },
    skills: {
        "Generative AI": [
            "Agentic Workflows", "RAG", "LangChain", "LangGraph", "Model Context Protocol (MCP)",
            "Azure OpenAI", "Bland AI (Voice)", "Chroma DB", "LangSmith", "Arize AI"
        ],
        "Machine Learning": [
            "LightGBM", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision (Faster R-CNN)",
            "Forecasting (Prophet)", "LambdaMART"
        ],
        "Cloud & MLOps": [
            "Azure (ML Studio, AKS, Foundry)", "OCI", "Docker", "Git", "SQL", "PySpark", "Power BI"
        ]
    },
    workProjects: [
        {
            id: "transcript-eval",
            title: "Transcript Evaluation & AI Observability",
            company: "Aspire Systems",
            role: "Sr. Engineer – Gen AI",
            period: "2025 - Present",
            icon: "fas fa-gauge-high",
            gradient: "linear-gradient(135deg, #0eb6e0 0%, #5b6ef5 100%)",
            summary: "Built the evaluation and observability framework for an agentic transcript-evaluation system that determines university transfer-credit eligibility for admissions teams.",
            tags: ["arize", "langchain", "azure open ai", "llm"],
            impact: [
                "Per-phase accuracy tracked from SME audit logs",
                "Automated metrics refresh every 15 minutes",
                "End-to-end observability via Arize AI"
            ],
            details: {
                problem: "An agentic transcript 'TRACE' system evaluates student transfer-credit eligibility for university admissions SMEs (internal tool, not student-facing). It runs a multi-phase pipeline — extraction (LlamaParse), rule-based pre-evaluation with Azure OpenAI GPT-4.1 (grade, psychology-course, and bachelor's-rule checks), course matching against the university's course database (Walden University), report generation, and feedback submission — but there was no systematic way to measure how accurate each phase was or to observe the system in production.",
                approach: [
                    "Designed an evaluation framework using LLM-as-a-judge alongside SME audit logs.",
                    "Defined per-phase accuracy as (fields extracted − fields corrected by SMEs) / fields extracted, computed across each pipeline stage.",
                    "Built an Azure Function App that runs every 15 minutes to compute these metrics and push results to the Arize AI platform.",
                    "Integrated the application with Arize using custom LangChain instrumentation tailored to the client's evaluation requirements."
                ],
                stack: ["Arize AI", "LangChain (custom instrumentation)", "Azure OpenAI (GPT-4.1)", "Azure Functions", "LlamaParse", "Python"],
                results: [
                    "Quantified accuracy at every phase of the agentic pipeline using real SME corrections.",
                    "Continuous, automated metric refresh and end-to-end production observability.",
                    "Evaluation tuned to the client's domain rules and admissions workflow."
                ]
            }
        },
        {
            id: "sow-layout",
            title: "Multi-Tenant Scope-of-Work & Layout Generation",
            company: "Aspire Systems",
            role: "Sr. Engineer – Gen AI",
            period: "2025",
            icon: "fas fa-ruler-combined",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
            summary: "A Gen AI system that generates Scope-of-Work documents and scaled layout diagrams for home and industrial remodelling projects from a multi-tenant platform's data.",
            tags: ["azure open ai", "llm", "agents"],
            impact: [
                "Auto-generated SoWs from prospect & project data",
                "Produced scaled, spatially-aware layout diagrams",
                "Multi-tenant across many integrator businesses"
            ],
            details: {
                problem: "An AV / system-integration platform serves businesses doing home and industrial remodelling. Producing the Scope-of-Work documents and physical layout plans for each prospect was manual and time-consuming across a large multi-tenant customer base.",
                approach: [
                    "Used the platform's multi-tenant database — current prospect description, line items, location, and work description — as the grounding context for generation.",
                    "Generated tailored Scope-of-Work documents for each remodelling project.",
                    "Generated scaled layout diagrams that placed items spatially (e.g. a TV on the north wall, stereo speakers at each corner)."
                ],
                stack: ["Azure OpenAI", "Multi-tenant database", "Python"],
                results: [
                    "Automated SoW authoring directly from existing platform data.",
                    "Delivered spatially-aware, scaled layouts alongside the written scope.",
                    "Worked consistently across the platform's multi-tenant clients."
                ]
            }
        },
        {
            id: "genai-pocs",
            title: "Client-Facing Gen AI PoCs",
            company: "Aspire Systems",
            role: "Sr. Engineer – Gen AI",
            period: "2025",
            icon: "fas fa-flask",
            gradient: "linear-gradient(135deg, #8b5cf6 0%, #0eb6e0 100%)",
            summary: "A series of multimodal, voice, and RAG proof-of-concepts that translated client business problems into deployable Gen AI solutions across document, voice, and data modalities.",
            tags: ["blandai", "mcp", "rag", "llm", "azure open ai"],
            impact: [
                "Document extraction PoC scaling toward 8,000 US authorities",
                "Voice-driven support automation for a bank",
                "Self-serve PDF/Excel Q&A with auto-generated charts"
            ],
            details: {
                problem: "Clients needed proof that Gen AI could solve concrete business problems across different input modalities — document processing, voice support, and conversational data analysis — before committing to full builds.",
                approach: [
                    "Document analysis: used multimodal LLMs to extract a defined set of key-value pairs from USA toll-fine tickets for easy downstream processing — covering 25 issuing authorities, with a design path to scale to ~8,000 US issuing authorities.",
                    "Voice support: integrated Bland AI voice models to handle support calls for a bank, wired to an MCP server over the database (MCP-DB) and other internal tools.",
                    "RAG bot (HDFC): enabled users to upload PDFs and Excel sheets and ask questions; a Matplotlib agent generated charts and visual answers for spreadsheet-based queries."
                ],
                stack: ["Multimodal LLMs", "Bland AI", "Model Context Protocol (MCP)", "RAG", "Matplotlib agent", "Azure OpenAI"],
                results: [
                    "Demonstrated structured extraction at scale for US toll-fine processing.",
                    "Showed voice-driven support automation backed by live internal data via MCP.",
                    "Delivered a self-serve document & spreadsheet Q&A bot with automatic visualizations."
                ]
            }
        },
        {
            id: "rag-chatbots",
            title: "Enterprise RAG Chatbots — Support & HR",
            company: "Tata Consultancy Services",
            role: "Systems Engineer- Data Scientist",
            period: "2023 - 2025",
            icon: "fas fa-robot",
            gradient: "linear-gradient(135deg, #7c3aed 0%, #0eb6e0 100%)",
            summary: "Two production RAG assistants — a customer-support bot and an HR-policy bot — built on Azure OpenAI and Chroma DB, deployed on AKS via Docker.",
            tags: ["rag", "azure open ai", "chromadb", "langchain", "llm", "docker"],
            impact: [
                "40% faster ticket resolution",
                "60% fewer manual policy queries",
                "85% user satisfaction rating"
            ],
            details: {
                problem: "Generic chatbots couldn't access internal documentation, so support teams manually searched thousands of documents and policies — causing inconsistent responses, longer resolution times, and reduced productivity.",
                approach: [
                    "Built a seven-stage RAG pipeline: Blob Storage ingestion, LangChain chunking (512–1024 tokens), Azure OpenAI embeddings, Chroma DB vector store, top-K cosine retrieval, prompt augmentation, and GPT-4 generation.",
                    "Added metadata filtering (department/region/role), hybrid semantic + keyword search, Azure AD auth, and an automated re-indexing pipeline.",
                    "Chose RAG over fine-tuning for real-time updates, source attribution, and reduced hallucination; chose self-hosted Chroma DB over Azure Cognitive Search for flexibility and cost.",
                    "Containerized Chroma DB with Docker and deployed on AKS with auto-scaling and caching."
                ],
                stack: ["Azure OpenAI (GPT-4)", "Chroma DB", "LangChain", "Azure Blob Storage", "Docker", "AKS", "Azure AD"],
                results: [
                    "40% reduction in average support ticket resolution time.",
                    "60% decrease in manual HR policy queries.",
                    "85% user satisfaction; ~500 daily queries served at 99.5% uptime.",
                    "Evaluated with Recall@5, F1, and LLM-as-a-Judge plus user feedback and SME validation."
                ]
            }
        },
        {
            id: "tariff-recommender",
            title: "Tariff Plan Recommender",
            company: "Tata Consultancy Services",
            role: "Systems Engineer- Data Scientist",
            period: "2023 - 2025",
            icon: "fas fa-sim-card",
            gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            summary: "A hybrid recommender combining LightGBM churn prediction and LambdaMART plan ranking, with a GPT-4 layer that generates personalized, human-readable plan explanations.",
            tags: ["lightgbm", "lambdamart", "kmeans", "azure open ai", "pyspark", "ml"],
            impact: [
                "7% reduction in customer churn",
                "Personalized plan recommendations at 10M-user scale",
                "Two-stage rule + ML ranking"
            ],
            details: {
                problem: "A telecom client with 10M+ users needed to reduce churn and recommend best-fit tariff plans (data, voice, roaming) — especially flagging roamers likely to switch to foreign SIMs.",
                approach: [
                    "Engineered customer behavior features (roaming ratios, plan utilization, payment delays) in Azure Databricks; segmented users with MiniBatch K-Means.",
                    "Trained a LightGBM classifier for 30–60 day churn and a binary roaming-risk model combined with business rules.",
                    "Built a two-stage recommender: rule-based pre-filtering (device, budget, validity) then LambdaMART learning-to-rank.",
                    "Added a GPT-4 personalization layer to convert cold scores into friendly, contextual plan suggestions."
                ],
                stack: ["LightGBM", "LambdaMART", "MiniBatch K-Means", "Azure OpenAI (GPT-4)", "Azure Databricks (PySpark)", "Azure Synapse"],
                results: [
                    "7% reduction in customer churn.",
                    "Churn model tuned for Recall@Churners (plus Precision, AUC, F1); ranking evaluated with NDCG@5, MRR, Recall@10.",
                    "LightGBM chosen over XGBoost for speed, memory efficiency, and native categorical handling."
                ]
            }
        },
        {
            id: "predictive-sales",
            title: "Predictive Sales & Customer Insights Dashboard",
            company: "Tata Consultancy Services",
            role: "Data Scientist",
            period: "2021 - 2023",
            icon: "fas fa-chart-line",
            gradient: "linear-gradient(135deg, #10b981 0%, #0eb6e0 100%)",
            summary: "A 90-day demand forecasting solution using Facebook Prophet and K-Means customer segmentation, surfaced to leadership through Power BI.",
            tags: ["prophet", "kmeans", "power bi", "azure ml", "scikit-learn", "analysis"],
            impact: [
                "15% improvement in forecast accuracy (MAPE)",
                "22% higher conversion on high-value segments",
                "80% less manual reporting time"
            ],
            details: {
                problem: "The business relied on static historical reporting and was flying blind on future trends. Leadership wanted to shift from reactive reporting to proactive, data-driven inventory and marketing decisions.",
                approach: [
                    "Architected the solution on Azure: ADLS Gen2 + Data Factory ETL, feature engineering in Databricks/Pandas (RFM features, weekly category aggregates).",
                    "Forecasted 90-day demand with Prophet (chosen over ARIMA/LSTM for seasonality handling and interpretability) using a custom promotional holiday calendar.",
                    "Segmented customers with K-Means (k=5 via elbow + silhouette + business validation) into actionable personas.",
                    "Deployed models as Azure ML Endpoints with Functions for retraining; Power BI consumed outputs with drill-down by category, region, and segment."
                ],
                stack: ["Facebook Prophet", "K-Means (Scikit-learn)", "Statsmodels", "Azure ML Studio", "Azure Data Factory", "Power BI"],
                results: [
                    "15% improvement in forecast accuracy (MAPE) vs. prior statistical methods.",
                    "22% increase in conversion rates for high-value segments.",
                    "80% reduction in manual reporting time via an automated pipeline."
                ]
            }
        },
        {
            id: "nba-engine",
            title: "Next Best Action (NBA) Engine",
            company: "Tata Consultancy Services",
            role: "Systems Engineer- Data Scientist",
            period: "2021 - 2023",
            icon: "fas fa-bullseye",
            gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
            summary: "A centralized recommendation engine unifying customer targeting across D2C web/app and partner retail channels, served as a real-time Azure ML REST API.",
            tags: ["collaborative-filtering", "scikit-learn", "azure ml", "azure sql db", "ml"],
            impact: [
                "Unified offers across D2C + partner channels",
                "Real-time recommendations in milliseconds",
                "Increased upsell conversion"
            ],
            details: {
                problem: "Customer targeting was fragmented across the internal website/app and external partner sales systems, leading to inconsistent offers and missed upsell opportunities.",
                approach: [
                    "Unified internal CRM and partner POS data via SQL (Azure Synapse) ETL into a standardized staging table.",
                    "Built a user-based collaborative filtering model (cosine similarity, k=10 neighbors) returning the top 3–5 next best actions.",
                    "Handled cold-start with a hybrid fallback to globally/regionally popular items.",
                    "Deployed as a cached, real-time REST API in Azure ML consumed by D2C apps and partner POS systems."
                ],
                stack: ["User-Based Collaborative Filtering", "Scikit-learn", "Pandas/NumPy", "SQL (Azure Synapse)", "Azure ML Studio"],
                results: [
                    "Consistent, real-time upsell recommendations across all touchpoints.",
                    "Evaluated offline with Precision@K / Recall@K and online with A/B tests on CTR and upsell conversion.",
                    "Delivered from data unification to production rollout in 6–8 weeks."
                ]
            }
        },
        {
            id: "cnn-inspection",
            title: "CNN Quality Inspection for Packaged Products",
            company: "Tata Consultancy Services",
            role: "Data Scientist",
            period: "2021 - 2023",
            icon: "fas fa-eye",
            gradient: "linear-gradient(135deg, #6366f1 0%, #0eb6e0 100%)",
            summary: "An automated defect-detection system using Faster R-CNN (PyTorch) and OpenCV, deployed on AKS to replace manual inspection on a SIM-card packaging line.",
            tags: ["faster-rcnn", "pytorch", "opencv", "computervision", "docker", "azure ml"],
            impact: [
                ">95% recall on critical defects",
                "75% fewer customer-facing errors",
                "Real-time scoring on the production line"
            ],
            details: {
                problem: "Manual inspection of SIM-card packaging was error-prone. The business needed to catch nearly every critical defect (high recall) without excessive false alarms that would halt the line.",
                approach: [
                    "Used OpenCV for orientation/distortion correction and heavy data augmentation to fix a severely imbalanced dataset (few defect samples).",
                    "Trained a Faster R-CNN (ResNet-50 backbone) detector in PyTorch over 15,000+ images on Azure ML GPU clusters — chosen over YOLO for accuracy on small, distinct defects.",
                    "Tuned the detection confidence threshold against the precision-recall curve with the operations team.",
                    "Converted to ONNX, containerized with Docker, and deployed on AKS with autoscaling; flagged packets via Azure Event Grid."
                ],
                stack: ["Faster R-CNN (PyTorch)", "OpenCV", "ONNX", "Azure ML", "Docker", "AKS", "Azure Event Grid"],
                results: [
                    ">95% recall on critical defects with an acceptable false-positive rate.",
                    "75% reduction in customer-facing errors.",
                    "Low-latency real-time scoring integrated with the manufacturing system."
                ]
            }
        },
        {
            id: "runway-detection",
            title: "DNN Object Detection for Airport Runways",
            company: "Lithoera Technologies (Research Intern)",
            role: "Research Intern",
            period: "2020",
            icon: "fas fa-plane",
            gradient: "linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)",
            link: "https://www.ijariit.com/manuscript/dnn-%e2%80%8cdesign%e2%80%8c-%e2%80%8cfor%e2%80%8c-%e2%80%8cobject%e2%80%8c-%e2%80%8cdetection-in-%e2%80%8cairport%e2%80%8c-%e2%80%8crunway%e2%80%8c-%e2%80%8coperations%e2%80%8c/",
            linkLabel: "Read the paper",
            summary: "A comparative study of YOLOv3, Faster R-CNN, and SSD for detecting aircraft, birds, and vehicles in airport runway operations — published in IJARIIT.",
            tags: ["tensorflow", "computervision", "deeplearning", "research"],
            impact: [
                "Published in IJARIIT, Dec 2020",
                "YOLOv3 best at ~74% accuracy",
                "Custom 600+ image, 6-class dataset"
            ],
            details: {
                problem: "No suitable public dataset existed for airport-specific objects (e.g. baggage carriers, service vehicles), and it was unclear which detection architecture best fit runway operations.",
                approach: [
                    "Helped create and annotate a custom dataset of 600+ runway images across six classes using LabelImg.",
                    "Benchmarked YOLOv3, Faster R-CNN, and SSD Inception V2 in TensorFlow under a strict, consistent experimental protocol (same splits and metrics).",
                    "Evaluated on bounding-box accuracy (IoU), class-wise precision/recall, and inference time.",
                    "Co-authored the resulting research publication."
                ],
                stack: ["TensorFlow", "YOLOv3", "Faster R-CNN", "SSD Inception V2", "LabelImg"],
                results: [
                    "YOLOv3 outperformed the others at ~74% accuracy with the best speed/accuracy balance.",
                    "Findings published in the IJARIIT journal, December 2020."
                ]
            }
        }
    ],
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
    certifications: [
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            authority: "Oracle",
            url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=03DE9D859DE5356D583894261B1A592B516F0272BC0A966679DDEBC7E787AEAF"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
            authority: "Oracle",
            url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=C35C5C3FDB04AEA1405BA94BF6BE475800D87B35B3B631D23E1E6CA0F2436221"
        },
        {
            name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
            authority: "Microsoft",
            url: "https://www.credly.com/badges/237c6dc1-0759-4c8e-a530-c703ff4c56c4/public_url"
        },
        {
            name: "Foundation: Introduction to LangGraph",
            authority: "LangChain",
            url: "https://academy.langchain.com/certificates/czkjirt8rm"
        },
        {
            name: "Deep Learning Specialization",
            authority: "Coursera & deeplearning.ai",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/58HEKQHY537R"
        },
        {
            name: "TensorFlow Developer Professional Certificate",
            authority: "Coursera & deeplearning.ai",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/VA77GD6D27BD"
        },
        {
            name: "MTA: Introduction to Programming Using Python",
            authority: "Microsoft",
            url: "https://www.youracclaim.com/badges/f5bb6590-149c-4a8a-8c84-93f8bd847409/linked_i"
        }
    ],
    awards: [
        {
            name: "Star of the Month Award",
            desc: "For resolving a critical defect impacting 5k international customers within 12 hours."
        },
        {
            name: "Special Initiative Award",
            desc: "Recognized for dedication and quality in project delivery."
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
        "langgraph": "fas fa-diagram-project",
        "langchain": "fas fa-link",
        "crewai": "fas fa-users-gear",
        "azure sql db": "fas fa-database",
        "azure foundry": "fab fa-microsoft",
        "azure open ai": "fab fa-microsoft",
        "blandai": "fas fa-phone-volume",
        "langsmith": "fas fa-flask-vial",
        "mcp": "fas fa-plug",
        "rag": "fas fa-layer-group",
        "arize": "fas fa-chart-area",
        "chromadb": "fas fa-database",
        "docker": "fab fa-docker",
        "azure ml": "fab fa-microsoft",
        "pyspark": "fas fa-fire",
        "lightgbm": "fas fa-tree",
        "lambdamart": "fas fa-sort-amount-down",
        "kmeans": "fas fa-object-group",
        "prophet": "fas fa-chart-line",
        "power bi": "fas fa-chart-pie",
        "faster-rcnn": "fas fa-vector-square",
        "pytorch": "fas fa-fire-flame-curved",
        "collaborative-filtering": "fas fa-users"
    }
};
