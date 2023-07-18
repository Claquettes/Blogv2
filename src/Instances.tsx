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
];

export default instances;
