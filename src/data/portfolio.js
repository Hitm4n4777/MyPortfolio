export const projects = [
  // =========================================================
  // 1. MYSHOP
  // =========================================================
  {
    id: 1,
    title: "MyShop",
    category: "Mobile",
    description:
      "A modern e-commerce mobile application built to provide a smooth and intuitive shopping experience across mobile devices.",

    overview:
      "MyShop is a React Native e-commerce application focused on creating a clean and engaging mobile shopping experience. The application is structured around product discovery, product details, wishlist management, cart interaction, and user preferences. The interface was designed with a mobile-first approach, combining reusable components with a polished navigation system.",

    features: [
      "Product browsing through a responsive two-column product grid",
      "Dedicated product detail screens",
      "Product search and discovery experience",
      "Wishlist functionality for saving products",
      "Shopping cart interface",
      "Profile section for user preferences",
      "Dark and light theme support",
      "Persistent theme preference",
      "Custom floating bottom-tab navigation",
      "Reusable product and interface components",
      "Responsive mobile-first layout",
    ],

    challenge:
      "The main challenge was creating an interface that feels visually polished without making the shopping experience complicated. The application needed clear navigation between products, search, wishlist, cart, and profile while remaining comfortable to use on a smaller mobile screen.",

    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "React Navigation",
      "Expo Blur",
      "Ionicons",
    ],

    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 2. WEATHER APP
  // =========================================================
  {
    id: 2,
    title: "Weather App",
    category: "Mobile",
    description:
      "A location-aware weather application that provides current conditions, detailed weather information, forecasts, and location search.",

    overview:
      "The Weather App was built with React Native and Expo to explore API integration, device location services, reusable components, and dynamic application themes. The application can use the device location to retrieve weather information and also allows users to search for other locations.",

    features: [
      "Current weather information",
      "Location-based weather detection",
      "Search for weather by location",
      "Forecast information",
      "Detailed weather conditions",
      "Reusable weather display components",
      "Dark and light theme support",
      "Theme-aware status bar",
      "Mobile-friendly weather cards",
      "Separated API and application logic",
    ],

    challenge:
      "The biggest challenge was presenting a large amount of changing weather information without making the interface feel crowded. The application required a clear hierarchy between current conditions, detailed information, and forecast data while also handling location and API-based data dynamically.",

    technologies: [
      "React Native",
      "Expo",
      "JavaScript",
      "Weather API",
      "Expo Location",
      "React Context API",
    ],

    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 3. FRANKLIN CLOCK SHOP
  // =========================================================
  {
    id: 3,
    title: "Franklin Clock Shop",
    category: "Web",
    description:
      "A refined business website created for a clock shop, combining traditional visual styling with a modern responsive web experience.",

    overview:
      "Franklin Clock Shop is a single-page business website designed around the character of a traditional clock and restoration business. The visual identity uses a navy and gold color palette, elegant typography, glass-style navigation, and structured content sections to present the shop, its clocks, restoration work, and location.",

    features: [
      "Elegant business-focused landing page",
      "Fixed glass-style navigation",
      "Dedicated About section",
      "Grandfather Clocks showcase",
      "Clock restoration section",
      "Business location information",
      "Traditional navy and gold visual identity",
      "Responsive page structure",
      "Integrated restoration video content",
      "Clear business information hierarchy",
    ],

    challenge:
      "The main design challenge was balancing the traditional character of an antique clock business with a modern web interface. The site needed to feel elegant and established while keeping navigation, content, and business information easy to access.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Web Design",
      "Google Fonts",
    ],

    image:
      "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 4. DEVELOPER PORTFOLIO
  // =========================================================
  {
    id: 4,
    title: "Developer Portfolio",
    category: "Web",
    description:
      "A personal developer portfolio designed to showcase projects, technical skills, development experience, and creative work.",

    overview:
      "This portfolio was built as a central platform for presenting my development work across mobile applications, websites, automation, desktop software, and creative projects. The interface uses a component-based React architecture with Vite and focuses on responsive layouts, project presentation, visual effects, and a consistent modern design system.",

    features: [
      "Responsive portfolio layout",
      "Hero and introduction section",
      "About section",
      "Technical skills showcase",
      "Interactive project collection",
      "Individual project detail pages",
      "Project categories",
      "Dark visual design",
      "Animated visual background",
      "Reusable React components",
      "GitHub-based project management",
      "Vercel-ready production build",
    ],

    challenge:
      "The challenge was creating a portfolio that could represent several different areas of development without feeling disconnected. Mobile development, web development, automation, desktop applications, and design all needed to fit into one consistent visual experience.",

    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS",
      "React Router",
      "Lucide React",
    ],

    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 5. PYTHON AUTOMATION
  // =========================================================
  {
    id: 5,
    title: "Python Automation",
    category: "Automation",
    description:
      "A collection of Python-based automation workflows created to reduce repetitive browser tasks and streamline routine processes.",

    overview:
      "This work focuses on using Python and browser automation to turn repetitive manual workflows into programmable processes. The automation projects involve browser interaction, page navigation, data handling, and task execution through scripted workflows.",

    features: [
      "Automated browser interaction",
      "Script-driven task execution",
      "Automated page navigation",
      "Repetitive workflow reduction",
      "Web element interaction",
      "Data extraction and processing",
      "Task-specific automation scripts",
      "Reusable automation logic",
    ],

    challenge:
      "Browser automation can become unreliable when websites change their layouts, loading behavior, or element structure. The challenge was designing scripts that could perform repetitive actions consistently while keeping the automation logic maintainable.",

    technologies: [
      "Python",
      "Selenium",
      "Web Automation",
      "Web Scraping",
    ],

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 6. WEB CRAWLER
  // =========================================================
  {
    id: 6,
    title: "Web Crawler",
    category: "Crawlers",
    description:
      "A Python-based web crawling and scraping project focused on collecting and organizing information from online sources.",

    overview:
      "The Web Crawler project explores automated data collection from websites. Instead of manually visiting pages and collecting information, the crawler handles website navigation and extraction through programmed workflows, allowing information to be processed in a more structured and repeatable way.",

    features: [
      "Automated website navigation",
      "Targeted web crawling",
      "Automated information extraction",
      "Structured data collection",
      "Browser-based scraping workflows",
      "Reusable crawling logic",
      "Processing of extracted information",
    ],

    challenge:
      "Different websites structure their content in different ways. The main challenge was dealing with changing page structures and inconsistent content while keeping the crawler organized and efficient.",

    technologies: [
      "Python",
      "Selenium",
      "Web Scraping",
      "Web Crawling",
      "Data Processing",
    ],

    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 7. JAVA PACMAN
  // =========================================================
  {
    id: 7,
    title: "Java Pacman",
    category: "Desktop",
    description:
      "A desktop Pacman-style game developed in Java as a project focused on graphical interfaces, game logic, and interactive programming.",

    overview:
      "Java Pacman is a desktop game project built to explore Java GUI programming and interactive application logic. The project recreates the core structure of a classic arcade-style game while providing practical experience with graphical rendering, user input, game states, and application flow.",

    features: [
      "Pacman-style game interface",
      "Interactive keyboard controls",
      "Desktop graphical interface",
      "Game movement and interaction",
      "Game-state based application flow",
      "Java-based GUI development",
      "Arcade-inspired visual presentation",
    ],

    challenge:
      "The project required several independent systems to work together smoothly, including user input, graphical updates, movement, collision behavior, and the overall game loop. Keeping those systems synchronized was a key development challenge.",

    technologies: [
      "Java",
      "Java Swing",
      "GUI Programming",
      "Game Development",
    ],

    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 8. C++ / QT DESKTOP APPLICATION
  // =========================================================
  {
    id: 8,
    title: "Desktop Application",
    category: "Desktop",
    description:
      "A C++ desktop application developed with Qt, focused on graphical interfaces, usability, and practical application workflows.",

    overview:
      "This desktop application project combines C++ programming with Qt to create a graphical desktop experience. The project provided practical experience with desktop UI development, application structure, user interaction, and connecting interface elements to application logic.",

    features: [
      "Graphical desktop interface",
      "C++ application logic",
      "Qt-based UI development",
      "Interactive interface elements",
      "Structured application workflow",
      "Desktop-focused user experience",
    ],

    challenge:
      "The key challenge was connecting the graphical interface with the underlying C++ application logic while keeping the application structure organized and the user experience straightforward.",

    technologies: [
      "C++",
      "Qt",
      "Qt Widgets",
      "Desktop Development",
    ],

    image:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 9. AI WILDFIRE PREDICTOR
  // =========================================================
  {
    id: 9,
    title: "AI Wildfire Predictor",
    category: "AI / ML",
    description:
      "An artificial intelligence project exploring the use of data-driven methods to identify and predict wildfire-related risks.",

    overview:
      "The AI Wildfire Predictor explores how machine learning can be applied to environmental data to identify patterns associated with wildfire risk. The project combines data processing and predictive modeling concepts to demonstrate how historical information can be used to support wildfire-risk analysis.",

    features: [
      "Environmental data analysis",
      "Machine learning-based prediction",
      "Data preprocessing workflow",
      "Risk-oriented prediction concept",
      "Data-driven environmental analysis",
    ],

    challenge:
      "The main challenge in predictive environmental projects is working with data that can vary significantly across locations and conditions. Preparing useful data and identifying meaningful patterns are important parts of building a reliable prediction workflow.",

    technologies: [
      "Python",
      "Machine Learning",
      "Data Analysis",
      "Artificial Intelligence",
    ],

    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80",

    github: "",
    demo: "",
  },

  // =========================================================
  // 10. GRAPHIC DESIGN
  // =========================================================
  {
    id: 10,
    title: "Graphic Design",
    category: "Design",
    description:
      "A collection of graphic and visual design work focused on composition, typography, branding, and digital presentation.",

    overview:
      "This collection represents the creative side of my work, covering digital graphics and visual compositions designed around clear communication and strong visual identity. The work combines layout, typography, imagery, and visual hierarchy to create polished digital designs.",

    features: [
      "Digital graphic composition",
      "Typography-focused layouts",
      "Visual hierarchy",
      "Brand-oriented design",
      "Creative digital artwork",
      "Modern visual presentation",
      "UI and visual design concepts",
    ],

    challenge:
      "The challenge across visual design work is maintaining a strong visual identity while keeping the final composition clear and purposeful. Every element needs to support the overall message rather than compete for attention.",

    technologies: [
      "Graphic Design",
      "UI Design",
      "Visual Design",
      "Digital Composition",
    ],

    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",

    github: "",
    demo: "",
  },
];