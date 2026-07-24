export const pExperience = [
    {
        img: '/assets/Experience/Home.jpg',
        title: 'RoboCup @Home',
        description: [
            'Vision & Manipulation Lead, RoBorregos · May 2025 – Present',
            '9th Place at RoboCup 2026 in Incheon, Korea and 1st Place at the Mexican Robotics Tournament 2026',
            'Engineered an ML pipeline with FastAPI and Docker automating dataset labeling with Grounding DINO + SAM, synthetic dataset generation, and multi-GPU YOLO training from a web UI',
            'Designed a computer vision architecture with Docker, gRPC and ROS2, integrating face recognition, pose estimation, object detection, and Moondream modules for real-time robot tasks',
            'Developed an adaptive grasp-pose estimator from ZED2 point clouds for a MoveIt/ROS2 pipeline',
        ],
        gitRepo: 'https://github.com/RoBorregos/home2',
    },
    {
        img: '',
        title: 'Smart Parking IoT',
        description: [
            'Software Developer for the ITESM “Expo Ingenierías” · Sep 2025 – Dec 2025',
            'Implemented a smart-parking system with automatic license plate recognition in Python and FastAPI',
            'Integrated ESP32 and ESP32-CAM sensors with a Node.js server over MQTT, persisting data to PostgreSQL via Prisma',
            'Built a real-time dashboard to monitor parking availability and live sensor data',
        ],
    },
    {
        img: '/assets/Experience/Candidates.jpg',
        title: 'Candidates Dashboard',
        description: [
            'Full-Stack Developer for RoBorregos Web Projects · May 2025 – Present',
            'Created a T3 Stack platform to manage the team’s annual recruiting competition for 100+ participants and staff',
            'Featured a live scoreboard, automated round scheduling, and a judging system',
            'Built with TypeScript, React, Tailwind, Next.js, tRPC and Prisma over PostgreSQL',
        ],
    },
    {
        img: '/assets/Experience/Dash-tec.png',
        title: 'Dashboard-Tec',
        description: [
            'Full stack developer for a community web platform to discover and share events at ITESM',
            'Developed the event submission, calendar and admin pages using Prisma over PostgreSQL',
            'Developed backend services with tRPC and user authentication',
            'Built the frontend using TypeScript, React, Tailwind, and Next.js',
        ],
    },
    {
        img: '/assets/Experience/swe-training.png',
        title: 'SWE Training by RoBorregos',
        description: [
            'Full-Stack Developer for a platform managing LeetCode resources and leaderboards',
            'Launched with the T3 Stack, handling weekly problems, resources and leaderboard rankings',
            'Developed using TypeScript, React, Tailwind and Next.js',
            'Supported 35+ students in solving 650+ technical problems, strengthening their skills for professional growth',
        ],
        gitRepo: 'https://github.com/RoBorregos/swe-training',
        pageLink: 'https://swe-training.roborregos.com/',
    },
    {
        img: '/assets/Experience/HackMTY.jpg',
        title: 'HackMTY 2025',
        description: [
            'Project for Smart Cities Banorte challenge',
            'Developed CoRide app, a carpooling solution to reduce traffic and pollution in Monterrey',
            'Best security as it is between Banorte users',
            'Using T3 stack, Leaflet for maps, and optimization algorithms for route planning',
        ],
        gitRepo: 'https://github.com/biweep863/hackmty2025',
    },
    {
        img: '/assets/Experience/Maze.jpg',
        title: 'RoboCup Jr. Rescue Maze',
        description: [
            'Team Captain, RoBorregos · Nov 2024 – May 2025',
            'Achieved 1st place at Regionals and 2nd place at the Mexican Robotics Tournament',
            'Developed a TensorFlow vision pipeline for victim detection on a Jetson Nano, with an ESP32 communication system',
            'Architected an autonomous navigation system in C++ using PID control and DFS/Dijkstra path planning',
            'Led the project as team captain, coordinating development and competition',
        ],
        gitRepo: 'https://github.com/RoBorregos/robocup-rescuemaze-2025',
    },
    {
        img: '/assets/Experience/Candidates.jpg',
        title: 'Candidates by Roborregos',
        description: [
            'Developed an autonomous robot, earned 1st place in the annual RoBorregos contest',
            'Robot focused on navigating mazes, grabbing objects, and following lines',
            'Implemented Arduino with multiple sensors such as encoders, gyroscope, infrared sensors, color sensor, and ultrasonic sensor',
        ],
        gitRepo: 'https://github.com/samu0805/Roborregos',
    },
];

export const pWorkExperience = [
    {
        img: '/assets/Experience/epicor.png',
        title: 'Epicor Software',
        description: [
            'Software Engineering Intern · Dec 2025 – Jun 2026',
            'Contributed to Prism, Epicor’s new multi-agent AI assistant for the Eclipse ERP, presented as a beta at the company’s international Insights conference',
            'Built Python sub-agents for inventory queries, business summaries, and Solar ERP UI actions, using OpenAI calls',
            'Created C#/.NET endpoints exposing ERP data and business logic as agent tools',
            'Integrated the Angular chatbot UI into the Java-based Solar ERP application',
        ],
    },
    {
        img: '/assets/Experience/Oasis.jpg',
        title: 'distritotec',
        description: [
            'Software Engineering Intern · Aug 2025 – Feb 2026',
            'Engineered an end-to-end pipeline tracking 500+ people/day for crowd estimation and person registration at ITESM’s Central Park, using YOLO and ByteTrack for multi-object tracking',
            'Trained a PyTorch classification model using ResNet18 and Attention Pooling to extract temporal embeddings for child vs. adult inference via an MLP, achieving 90% accuracy',
            'Built scalable backend services using PostgreSQL, PostGIS, and Docker within a microservices architecture deployed on Azure cloud infrastructure',
        ],
    },
];
