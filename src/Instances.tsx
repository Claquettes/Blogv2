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
  IsAWebsite: boolean;
  IsAGame: boolean;
  IsAnApp: boolean;
  IsAScolarProject: boolean;
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
  },
  //6th instance
  {
    name: "PolyDarts",
    Author: "Mathieu Ponton | Maxime Antoine",
    Content: `Made using react-native with <a href="https://www.maxime-antoine.fr/">Maxime Antoine</a>, Polydarts is a mobile application that helps dart players to keep track of their scores. The user can choose between different games (301, 501, Cricket, etc...) but also between "fun modes" (golden carrot, catch the rabbit, etc...). The application also contains stats about the player's games. The goal is to help players keep track of their scores, stats, and also to create a new way to play darts with the fun modes.`,
    Date: "2023-01-17",
    Language: "React-Native",
    Image1Link: "https://claq.fr/host/Polydarts.png",
    Image2Link: "",
    GithubRepoLink: "https://github.com/Claquettes/Polydarts",
    HostLink: "",
    IsAWebsite: false,
    IsAGame: false,
    IsAnApp: true,
    IsAScolarProject: false,
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
    IsAWebsite: true,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: true,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: true,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: true,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: false,
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
    IsAWebsite: false,
    IsAGame: true,
    IsAnApp: false,
    IsAScolarProject: true,
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
    IsAWebsite: false,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: true,
  },
  //16th instance
  {
    name: "TodoList",
    Author: "Mathieu Ponton",
    Content:
      "This project was my first using angular. The goal was to create a todo list, to make us of angular's components. The user can add tasks, delete them, and mark them as done. I implemented a dark mode using 'providers' and services.",
    Date: "2023-05",
    Language: "Angular",
    Image1Link: "https://claq.fr/host/list1.png",
    Image2Link: "https://claq.fr/host/listd.png",
    GithubRepoLink: "",
    HostLink: "",
    IsAWebsite: true,
    IsAGame: false,
    IsAnApp: false,
    IsAScolarProject: false,
  },
];

export default instances;
