type Instance = {
  name: string;
  Author: string;
  Content: string;
  Date: string;
  Language: string;
  Image1Link: string;
  Image2Link: string; // Make Image2Link optional using `?`
  GithubRepoLink: string; // Make GithubRepoLink optional using `?`
  HostLink: string;
};

const instances: Instance[] = [
  //1st instance
  {
    name: "Dinau'tt",
    Author: "Mathieu Ponton",
    Content:
      "Well, this is where we start. One afternoon I was bored so I tried looking for tutorials on how to make simple web games. I found a tutorial to make an infinite runner in Js and that's how i started learning it. Weeks later, as the project became more ambitous, i was joined by other students from Polytech Lyon and we started the AuttGames Team. The Dinautt is obviously inspired by the dino game by google. I learnt the basics of canvas, and arrays. I also learnt setInterval and setTimeOut functions. We later implemented a leaderboard to keep track of the better scores, using php and a database.",
    Date: "2022-11-10",
    Language: "Js",
    Image1Link: "https://claq.fr/host/dinautt.png",
    Image2Link: "",
    HostLink: "https://claq.fr/host/dinautt",
    GithubRepoLink: "https://github.com/Claquettes/auttgames/tree/main/dinautt",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  //2nd instance
  {
    name: "2048x",
    Author: "Mathieu Ponton",
    Content:
      "A 2048 game I made in JS. I learnt how to use the canvas and how to make a game loop. I also learnt how to use the keyboard to control the game.",
    Date: "2022-12-02",
    Language: "Js",
    Image1Link: "https://claq.fr/host/2048.png",
    Image2Link: "",
    GithubRepoLink:
      "https://github.com/Claquettes/auttgames/tree/main/views/2048",
    HostLink: "https://claq.fr/2048",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  //3rd instance
  {
    name: "Envoie!",
    Author: "Mathieu Ponton",
    Content:
      "A simple meme generator made in Js with others members of the AuttGames Team. The user can easily add text to a meme and download it. He can also just send the link to his friends. Made using Sharp.js.",
    Date: "2022-12-10",
    Language: "Js",
    Image1Link: "https://media.giphy.com/media/tEN32Ko5PGfdkYhtif/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://claq.fr/envoie",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  //4th instance
  {
    name: "Snak",
    Author: "Mathieu Ponton",
    Content:
      "A minimalist Snake game playable in the browser, created in Html, CSS and Javascript. The goal is to eat as many apples as possible without touching the walls or the snake's body. The game was developed in 3 days, it was a personal challenge to see if I could create a game in such a short time. The player has the option to choose the speed of the snake as well as a safety distance (which prevents apples from appearing too close to the edges).",
    Date: "2023-01-04",
    Language: "Js",
    Image1Link: "https://claq.fr/host/snak.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Snak-autt",
    HostLink: "https://claquettes.github.io/Snak-autt/",
  },
  //5th instance
  {
    name: "Casse-Brik",
    Author: "Mathieu Ponton",
    Content:
      "A Recreation of the classic Breakout game, created in Html, CSS and Javascript. The goal is to destroy all the bricks by bouncing the ball on the paddle. The player can choose to play differents levels, currently there are 6 levels. ",
    Date: "2023-01-10",
    Language: "Js",
    Image1Link: "https://media.giphy.com/media/lbmgZRIYHm5sEyZvqE/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/casse-briques",
    HostLink: "https://claq.fr/casse-briques",
  },
  //6th instance
  {
    name: "PolyDarts",
    Author: "Mathieu Ponton | Maxime Antoine",
    Content: `Made using react-native with Maxime Antoine, Polydarts is a mobile application that helps dart players to keep track of their scores. The user can choose between different games (301, 501, Cricket, etc...) but also between "fun modes" (golden carrot, catch the rabbit, etc...). The application also contains stats about the player's games. The goal is to help players keep track of their scores, stats, and also to create a new way to play darts with the fun modes.`,
    Date: "2023-01-17",
    Language: "ReactNative",
    Image1Link: "https://claq.fr/host/Polydarts.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Polydarts",
    HostLink: "",
    CoAuthors: ["Maxime Antoine"],
  },
  //7th instance
  {
    name: "Polyressources",
    Author: "Mathieu Ponton | More",
    Content:
      "A website to help students from Polytech Lyon find useful resources for their courses. The website is made in Html, CSS and Javascript. The user can choose between differents courses and then he will be redirected to a page with all the resources for this course. The goal is to help students find resources easily.",
    Date: "2023-02-16",
    Language: "Js",
    Image1Link:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDVjMzgxYmIyYWFjYzdjMGM1ZmJmODI5ZjU0NTg2Y2JiYzZhMjlkYiZjdD1n/VKQiOKDIrKL2KxaNj3/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Polyressources",
    HostLink: "https://claq.fr/polyressources",
    CoAuthors: ["Guillaume Calderon", "Romain Rochebloine", "Clément Viris"],
  },
  //8th instance
  {
    name: "Personal Webpage",
    Author: "Mathieu Ponton",
    Content:
      "My personnal webpage, built using Anime.js and Particle.js. The goal was to have a simple webpage to present myself and my projects. It was made when i was looking for an internship.",
    Date: "2023-03-10",
    Language: "Js",
    Image1Link:
      "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjhhZjY3ODk5NjViOGNlYWNiNGMwY2ZjNWQ5NDAzNWE4NjA2YjllZSZjdD1n/dBsQOnzNymwm64RixT/giphy.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/mathi.eu",
    HostLink: "https://ponton-mathi.eu",
  },
  //9th instance
  {
    name: "Ratio-Generateur",
    Author: "Mathieu Ponton | Uku3lig",
    Content:
      "A python script to generate -ratios-. It will generate a sentence starting with -ratio +- and then a random word from a list of words. The goal is to make a funny sentence. The library of words is composed of popular internet references, memes, french expressions and inside jokes from Polytech Lyon's students. Uku3lig helped me to tweak the script to make it work better. The GUI was made using Tkinter.",
    Date: "2023-03-13",
    Language: "Python",
    Image1Link: "https://claq.fr/host/ratio.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/ratio-generateur",
    HostLink: "",
    CoAuthors: ["Uku3Lig"],
  },
  //10th instance
  {
    name: "Claquettix",
    Author: "Mathieu Ponton | Antonin Sylverstre",
    Content:
      "A script made with Selenium in Python to help the player wins at the game Pedantix using brute force. The script imput a selection of words to fill the blanks and give the player a huge boost at the beginning of the game. Antonin Sylvestre helped me by writting a script to pick the best words from a 600 000 words dictionnary. The GUI was made using Tkinter, and it allows the user to choose the number of words he wants to input and start the script.",
    Date: "2023-03-20",
    Language: "Python",
    Image1Link: "https://claq.fr/host/claquetix.png",
    Image2Link: "https://media.giphy.com/media/8mjdhnujKhJRdK5BwM/giphy.gif",
    GithubRepoLink: "https://github.com/Claquettes/Claquetix",
    HostLink: "",
    CoAuthors: ["Antonin Sylvestre"],
  },
  //11th instance
  {
    name: "Claquipedia",
    Author: "Mathieu Ponton",
    Content:
      "Another Python script with a gui made with Tkinter. This script is a Wikipedia scraper that allows the user to search for a word and then the script will return the text from the Wikipedia page. The script also allows the user to copy and paste in one click the text from the Wikipedia page. The user can choose between 8 languages. It was designed to troll my friends on Discord.",
    Date: "2023-03-25",
    Language: "Python",
    Image1Link: "https://claq.fr/host/claquipedia.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Claquipedia",
    HostLink: "",
  },
  //12th instance
  {
    name: "AuttGarden",
    Author: "Mathieu Ponton | AuttGames",
    Content:
      "It's a calm and relaxing game where you can make your own tiny island/garden. You have the ability to export/import every creation you make, and share it with your friends. The project was started by myself, but other members (FlashOnFire, Sun and Tibouyou) of the AuttGames Team joined me later. Together we added more than 100 differents tiles, the ability to change the size of the island, a day night cycle, and way more! It was made using Js canvas. The exemple island you see above was made by Sun. The site also has a lofi playlist embeded, using a soundcloud iframe.",
    Date: "2023-04-12",
    Language: "Js",
    Image1Link: "https://claq.fr/host/garden.png",
    Image2Link: "https://claq.fr/host/garden-creation.png",
    GithubRepoLink: "https://github.com/AuttGamesTeam/Autt-Garden",
    HostLink: "https://claq.fr/garden",
    CoAuthors: ["Guillaume Calderon", "Alexandre Honoré"],
  },
  //13th instance
  {
    name: "Planetarium",
    Author: "Mathieu Ponton",
    Content:
      "A fork from The Garden. This is a 0 player game inspired by Conway's Game of Life. The game randomly generate a planet with a random quantity of water, grass, mountains and sand. The player has the capacity to place 5 populations tiles, that will evolve and grow depending on the quantity of water, grass, mountains and sand around them. The goal is to create a planet with a maximum of population.It's still in developpement.",
    Date: "2023-05-06",
    Language: "Js",
    Image1Link: "https://claq.fr/host/planet-empty.png",
    Image2Link: "https://claq.fr/host/planet.png",
    GithubRepoLink: "https://github.com/Claquettes/Planetarium",
    HostLink: "https://claquettes.github.io/Planetarium/",
  },
  //14th instance
  {
    name: "Miso Mania!",
    Author: "Mathieu Ponton | Jules Ginhac | Romain Rochebloine",
    Content:
      " Project carried out as part of the EU LIFAP4 at the University Claude Bernard Lyon 1, as part of our second year of preparatory courses for Polytech engineering schools (Peip). The lectures for this teaching unit were provided by Alexandre Meyer and Nicolas Pronost, both researchers at LIRIS, a CNRS laboratory. Miso Mania is a 2D platform game. This game is at the crossroads, between platform game and die and retry. The player controls a character who must reach the end of the level. The game feature a level editor, a level sharing system as well as a leaderboard. Miso Mania allows the player to create an user inside of the game, and this user can purchase skins for the character, and can also purchase particles. The coins are earned by completing levels, and the closer the player is to the top of the leaderboard, the more coins he will earn. The game is distributed on WSL, Mac and Linux. The game was created using SDL2 library and C++ by Romain Rochebloine, Jules Ginhac and myself. For this project, we were ranked 3rd out of 68 groups, with a grade of 18.42/20.",
    Date: "2023-01/2023-05",
    Language: "C++",
    Image1Link: "https://claq.fr/host/miso1.gif",
    Image2Link: "https://claq.fr/host/miso2.gif",
    GithubRepoLink: "https://github.com/Miso-Mania/Game",
    HostLink: "",
    CoAuthors: ["Jules Ginhac", "Romain Rochebloine"],
  },
  //15th instance
  {
    name: "Info4",
    Author: "Mathieu Ponton | Jules Ginhac | Maxime Antoine | Pablo Verchère",
    Content:
      " Project carried out as part of my studies at Polytech Lyon, with Maxime Antoine,Jules Ginhac and Pablo Verchère under the supervision of M. Bonnevay Stéphane. The goal of the project was to develop a python program to find the shortest path between 100 points on a map. This project was a version of The Salesman problem (TSP). The program allowed the user to choose between 1 truck to deliver all of the points, or multiple trucks. The program was developed using the python library Turtle, and the algorithm used was the nearest neighbor algorithm for the initial solution, and 2-opt, relocate and swap for the local search. All of the algorithms were developed by us. The program had a GUI, that showed in real time the current best path. All of the data was saved in .xlsx files to allow us to analyze the results. For this project, we were ranked 1 out of 40 groups, with a grade of 19/20.",
    Date: "2023-04/2023-05",
    Language: "Python",
    Image1Link: "https://claq.fr/host/info.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Jules Ginhac", "Maxime Antoine", "Pablo Verchère"],
  },
  //16th instance
  {
    name: "TodoList",
    Author: "Mathieu Ponton",
    Content:
      "This project was my first using angular. The goal was to create a todo list, to make us of angular's components. The user can add tasks, delete them, and mark them as done. I implemented a dark mode using 'providers' and services.",
    Date: "2023-05",
    Language: "Angular",
    Image1Link: "https://claq.fr/host/listl.png",
    Image2Link: "https://claq.fr/host/listd.png",
    GithubRepoLink: "",
    HostLink: "",
  },
  //17th instance
  {
    name: "CatWisdom",
    Author: "Mathieu Ponton",
    Content:
      "My first venture into creating a Visual Studio Code (VSCode) extension. Leveraging boilerplate code from Yeoman and VSCode templates. To develop CatWisdom, I utilized webviews, a powerful component of VSCode extensions. With webviews, I created a dedicated window within the explorer tab that presents users with a delightful experience upon launching VSCode. This window features a random cat image and an accompanying quote about programming",
    Date: "2023-05",
    Language: "Typescript",
    Image1Link: "https://claq.fr/host/cw1.png",
    Image2Link: "https://claq.fr/host/cw2.png",
    GithubRepoLink: "",
    HostLink:
      "https://marketplace.visualstudio.com/items?itemName=Claquettes.cat-wisdom",
  },
  //18th instance
  {
    name: "BDanse",
    Author: "Mathieu Ponton | Jules Ginhac ",
    Content:
      "Project carried out as part of the EU LIFABDW at the University Claude Bernard Lyon 1, as part of our second year of preparatory courses for Polytech engineering schools (Peip). The lectures for this teaching unit were provided by Nicolas Lumineau and Mohand-Saïd HACID, both researchers at the CNRS. This project was realised with Jules Ginhac.This project is a website, created using the MVC architecture, which allows the management of a dance school. It allows the management of the school's students, teachers, courses, rooms, etc. It also allows the management of a dance federation, with the management of the dancers, the competitions, the results, etc. This project was made using PHP, HTML, CSS, JS and MySQL. For this project, we were ranked 9 out of 59 groups, with a grade of 16.25/20.",
    Date: "2023-05",
    Language: "PHP",
    Image1Link: "https://claq.fr/host/bdanse.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Jules Ginhac"],
  },
  //19th instance
  {
    name: "DevBlog v1",
    Author: "Mathieu Ponton",
    Content:
      "This blog serves as a platform where I share my projects, thoughts, learning process, and experiences as a developer. It aims to document my journey and provide a space for me to easily share my work with others, beyond GitHub or a traditional resume. My personal dev blog is a place where I showcase my projects, reflect on my progress, and share insights into my development journey. Through this blog, I aim to engage with a wider community, gather feedback, and continue learning from others. The blog is built using simple HTML and CSS for the design, while JavaScript handles the logic. The posts are stored as HTML files, and the site is dynamically generated using the data from these files. This setup allows for easy maintenance and scalability.It was really fun to build this blog, and I am excited to continue adding new features and posts to it.",
    Date: "2023-05",
    Language: "Js",
    Image1Link: "https://claq.fr/host/blog.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://ponton-mathi.eu/blog",
  },
  //20th instance
  {
    name: "PolyNetwork",
    Author: "Mathieu Ponton | Maxime Antoine ",
    Content:
      " A project done with Maxime Antoine in 48h. Polynetwork is a social network for Polytech students. Polynetwork allows students to create an account, add their socials, portefolio, GitHub, Linkedin and personnal website. They can, if they want, share the major they are in and their year of study. The Goal behind this website is to allow students to easily create a network, and to allow recruiters to easily find students. This project was made using PHP, HTML, CSS, JS and MySQL.",
    Date: "2023-06",
    Language: "PHP",
    Image1Link: "https://claq.fr/host/pnetwork.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
    CoAuthors: ["Maxime Antoine"],
  },
  //21th instance
  {
    name: "Untilted Rythm Game",
    Author: "Mathieu Ponton",
    Content:
      "A Rythm game made from scratch in C++ using SDL2. It is heavily inspired by the franchise -Taiko no Tatsujin- and by the game -osu!-The game is still in development, but the core gameplay is done. The game is playable, there are menus, animations, and a scoring system.<br>What needs to be done is the implementation of a level editor, that will allow the player to create their own levels, and some more animations.<br>I havent yet implemented graphics, so everything is done using SDL2's primitives.The game is still in development. The lastest thing added was a fully working level creator and editor, including a GUI. The game is now playable, and the player can create their own levels. The next step is to add graphics, and to add more animations.",
    Date: "2023-06",
    Language: "C++",
    Image1Link: "https://claq.fr/host/Rythm.gif",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/RythmClaq-",
    HostLink: "",
  },
  //22th instance
  {
    name: "Cookin'",
    Author: "Mathieu Ponton",
    Content:
      "Cookin is an app build with React Native. It allows user to interract with websites Marmiton, a site that contains a lot of recipes. The user can search for recipes, use filters, or ask for a random recipe. The next features to implement are the ability to mark a recipe as favorite, and to create a shopping list from a recipe. The app is available in french and english. It is published in the Expo Store. The app is still in development.",
    Date: "2023-06",
    Language: "ReactNative",
    Image1Link: "https://claq.fr/host/cookin.png",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "",
  },
  //23th instance
  {
    name: "ElementBox",
    Author: "Mathieu Ponton",
    Content:
      "A SandBox game made with JavaScript and HTML5 Canvas. This project was inspired by the game -The Powder Toy-.Currently, the user can place solids, liquids, powders, explosives and gases. The goal is also to add a lot of different elements, and to add a lot of interactions between them. The latest verion introduces electricity, and the ability to create circuits by placing wires and logic gates. The game is still in development, and I'm working on it from time to time.",
    Date: "2023-06",
    Language: "Js",
    Image1Link: "https://claq.fr/host/elementbox1.gif",
    Image2Link: "https://claq.fr/host/elementbox2.gif",
    GithubRepoLink: "https://claquettes.github.io/ElementBox/",
    HostLink: "https://github.com/Claquettes/SandBox",
  },
  //24th instance
  {
    name: "ProdByFzu's Website",
    Author: "Mathieu Ponton",
    Content:
      " A website I made for my friend ProdByFzu, who is a really talented producer and beatmaker. To make the site, I used HTML, CSS, and JavaScript. I used the template i made the index page of this site, and modified it to fit his needs. This time, I used Anime.js to animate clouds and the background.",
    Date: "2023-07",
    Language: "Js",
    Image1Link: "https://claq.fr/host/fzu.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://prodbyfzu.fr",
  },
  //25th instance
  {
    name: "LeTacoToque's Website",
    Author: "Mathieu Ponton",
    Content:
      "A website I made for LeTacoToqué, a french streaming group and e-sport Team which I co-founded. They are really great people, and they needed a website to easily share all of their social media and content. To make the site, I used HTML, CSS, and JavaScript. I used the template i made the index page of this site, and modified it to fit their needs. This time, I made a simple css animation for the background, and a Js script that randomly create a grid of emojis that fits the screen size.",
    Date: "2023-07",
    Language: "Js",
    Image1Link: "https://claq.fr/host/tacotoque.gif",
    Image2Link: "",
    GithubRepoLink: "",
    HostLink: "https://letacotoque.fr",
  },
];

export default instances;
