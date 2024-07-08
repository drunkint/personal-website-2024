export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Angus' personal webiste";
export const HOME_OG_IMAGE_URL = "/meta/cover-page.jpg";
export const PROJECT_BASE = "/projects/";
export const PROJECTS = [
  {
    title: "Cute Cat Vs. Ling Chieh - a Monopoly-like Board Game",
    slug: "cute-cat-vs-ling-chieh",
    imageLink: "/project-photos/cute-cat-vs-ling-chieh.png",
    imageCaption: "Cover of Project Slides",
    externalLink: "https://github.com/drunkint/Election-Monopoly-SFML",
    category: "C++, SFML, MakeFile, Agile, Git, Github",
    description:
      "In this project, I researched, architeched, and implemented all the non-UI code for building a 2D Monopoly-like Board Game app in C++, while coordinating with other 4 members. I learned about finite state machines, game engines, rendering, and C++ from a low level. If I were to make changes to the project, I'll use more advanced C++ features such as virtual base classes, or even create my own namespace.",
    date: "JAN 2021",
    content: [
      "Cute Cat Vs. Ling Chieh",
      "was my first project. It was a group project for the\
    &ldquo;Introduction to Programming&rdquo; course taught by Prof.\
    Kung LingChieh, and I am responsible for designing and\
    implementing all non-UI related code. Big up to 林宗勳, who\
    designed and implemented the UI design; 呂紀廷, our team leader;\
    and 劉頤憲 &amp; 游紫茵, who designed the rules of the game. ",
      "The challenging part was that we had only three weeks to build a\
    game from scratch with no prior experience, so effective\
    communication is required to make rapid changes. To do so, I\
    established a meeting schedule and planned to meet every three\
    days. In each meeting, we had a clear list of what to discuss and\
    finished each meeting within one hour. In addition, I also set up\
    a git workflow, allowing the UI designer to create branches and\
    update the graphics. In the end, our team was able to finish the\
    project before the due date, and all teammates gave positive\
    feedback of my effort in the team.",
      "Back then, I knew nothing about OOP, and there are a ton of things\
    that I would change if I were to redo the project. First of all, I\
    would make an abstract data type for players and locations, and\
    implement inheritance. Also, I&rsquo;ll break my code into several\
    header files and .c files for each class for modulability. This\
    project made me realize the importance of structuring code and\
    invoked my interest for game development.",
    ],
  },
  {
    title: "Laser and Lightning - a Horizontal Scrolling Game",
    slug: "laser-and-lightning",
    imageLink: "/project-photos/laser-and-lightning-laser.png",
    imageCaption: "Screenshot of Spacecraft Destroying Astroids",
    externalLink: "https://youtu.be/EktwFTGCgSk",
    category: "MIPS, Assembly (functions, conditional, constants, variables)",
    description:
      "In this project, I built a classic horizontal scrolling game using MIPS (Assembly). Features include: Collision Detection, HP/MP, Lightning Attack, pick-up-armo/health, score management, etc. In the process, I learned how functions, if-else statements, and memory works in a low level, and learned to modularize assembly code. In the end, this project earned full marks.",
    date: "AUG 2021",
    content: [
      "Laser and Lightning",
      "is a 256 * 512 bit horizontal scrolling game written in MIPS, anassembly language. It includes features such as collision detection, pickups(armo, health), shooting obstacles with laser beams, increased difficulty over time, and score tracking. Through this project, I implemented functions and conditional statements in assembly, and learned how to debug assembly code.",
      "The hardest part in this project is to modularize the code. To\
      cope with this, I created and followed my own coding style\
      standards. In addition, I also made good use of variables (stored\
      in memory) so different sections of code wouldn't intefere with\
      each other. Another difficult part is debugging. The solution,\
      apart from the aforementioned modularization, is to step through\
      the code and check how it flows, in addition to the value of the\
      registers. In the end, this project got full marks from the\
      professor. If I were to redo this project, I would create more\
      functions so that I won't need to copy code that much. In\
      addition, I would learn to incorporate different .asm files, since\
      that would also modularize the code better.",
    ],
  },
  {
    title: "Doctor App - an Appointment Scheduling Android App",
    slug: "doctor-app",
    imageLink: "/project-photos/doctor-app.png",
    imageCaption: "Screenshot of Home Page when Logging in as a Doctor",
    externalLink: "https://github.com/B07-R2D2/Doctor-App",
    category:
      "Java, Android Studio, Firebase, Agile, Unit Test, XML, Expresso Test",
    description:
      "We created a appointment booking app as a team of 5. Features include: sign in as different roles, search, tags, and saving to firebase as a JSON object. In this process we used MVC structure, created unit tests for login, and implemented agile by having daily standup meetings. In the end, this project got 18.5/20 ",
    date: "AUG 2021",
    content: [
      "The Being Seen App",
      "was made by R2D2, a group of 5. It was written and tested in Java,\
    and was developed using Android Studio. This project marks a\
    milestone for me because it was the first time that I used git as\
    a team. In addition, it revealed several new concepts: the MVC\
    model, Agile, unit tests, and the frontend-backend-database\
    structure.",
      "To tackle this project, I self-learned android studio, Spring Boot\
    for backend APIs, and used MongoDB for database. These skills\
    allowed me to design and implement the structure of the frontend,\
    backend, and the database. Also, when we were stuck on\
    implementing JWT token for the login and sign in features, in\
    addition to the logic of switching recycler views, I was the one\
    who volunteered to work on it and finished the feature. As a\
    result, the App we made was bug free, and our team was able to\
    achieve above 90 on the project.",
      "The second part that I spent a lot of time on is making the list\
    of available timeslots show. Having no experience on Android\
    Studio, it took me a while that we should use the newer Recycler\
    View instead of the older List View. Secondly, the Recycler View\
    was seperated into several different files for MVC, and this\
    caused a lot of confusion since I couldn't find a simple example\
    on the web. In the end I read the docs, my friends code, in\
    addition to some tutorials, and finally it worked. After this\
    experience, I became more capable of doing independent research,\
    and more confident when dealing with new technology.",
    ],
  },
  {
    title: "Being Seen - an Android App for the Homeless Youth",
    slug: "being-seen",
    imageLink: "/project-photos/being-seen.gif",
    imageCaption: "GIF of opening the App",
    externalLink: "https://github.com/UTSCCSCC01/projectf21-gmt-8-gang",
    category: "Java, MongoDB Atlas, Spring Boot, Android Studio, Stripe API",
    description:
      "We created an App for the Homeless Youth as a team of 7. Main features include: sign in as different roles, online payment, in-app currency, and donation goal tracking. In the end, the project scored over 90.",
    date: "DEC 2021",
    content: [
      "The Being Seen App",
      "is an app made for the homeless youth. The goal of this app is to make sure \
      the homeless youth uses the money for food and living essentials, instead of \
      goods that aren't beneficial to the individual. It works like this: First a \
      homeless youth signs up and sets a donation goal. Then a donor signs up \
      and transfers their money into an in-app currency, and uses that in-app \
      currency to donate to a homeless youth. The homeless youth then could use \
      that in-app currency to specific stores to buy Groceries.",
      "To tackle this project, I self-learned android studio, Spring Boot\
      for backend APIs, and used MongoDB for database. These skills\
      allowed me to design and implement the structure of the frontend,\
      backend, and the database. Also, when we were stuck on\
      implementing JWT token for the login and sign in features, in\
      addition to the logic of switching recycler views, I was the one\
      who volunteered to work on it and finished the feature. As a\
      result, the App we made was bug free, and our team was able to\
      achieve above 90 on the project.",
    ],
  },
  {
    title: "Last Minute Shop - a Web App for online shopping",
    slug: "last-minute-shop",
    imageLink: "/project-photos/last-minute-shop-cover.png",
    imageCaption: "Sign in prompt with 3D background using ThreeJS",
    externalLink: "https://www.youtube.com/watch?v=HQryfk_bl6M",
    category: "React.js, MongoDB, Three.js, StripeAPI, Material-UI, GraphQL, Docker",
    description:
      "We created the last minute shop in a team of three. We experimented new tools such as React.js, GraphQL, Three.js. Features include 3D responsive background, camera access, online payment, drag-and-drop, and more.",
    date: "APR 2022",
    content: [
      "The last minute shop",
      "is an app for online purchase made by a team of three. This was an important project because \
      this was my first react project, and the first time I used GraphQL (which is a whole \
      new way of doing APIs), \
      and docker for deployment. I also experimented a lot of new features, such as drag-and-drop, \
      photo upload, camera access, 3D responsive background, and more.",
      "There are a lot of things I would change if I were to restart the project. First, the UI \
      should be more consistent. I'll probably use Chakra-UI since this project is pretty time-limited. \
      Also, I would try to arrange my components better by creating a components folder instead of putting \
      everything into pages. In addition, I should write more comments and remove dead code, since it would \
      be easier for others to understand my code. Lastly, we should've picked a project that involves some WebRTC \
      or other more advanced technology, since that would make the project more challenging and fun to make."
  ]
  }
];
