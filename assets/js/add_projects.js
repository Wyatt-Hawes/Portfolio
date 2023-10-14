//Add projects to the interesting_projects.html in a more data-driven way (cause im tired of copy and pasting)
// First link in Links will be added to hyperlinks in the title and image
// All links will have individual buttons below the description
console.log("adding projects");
const projects = [
  {
    date: "2022 - 2023",
    title: "Disposable",
    imgSrc: "images/Disposable.png",
    description:
      "A game that was made in collaboration with three other teammates as we worked through the challenge of learning an entirely new game engine and programming language all while managing a production timeline which included storyboarding, prototyping, task delegation, and weekly progress reports. The entire project was made in three weeks.",

    links: [
      {
        name: "Itch.io Page",
        link: "https://metatoshi.itch.io/disposable",
      },
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/ARTG120-Final-Project-Trash-Game",
      },
    ],
  },
  {
    date: "2022 - 2023",
    title: "Time Defender",
    imgSrc: "images/time-defender.png",
    description:
      "A game that was made in collaboration with two other teammates as we worked through the challenge of creating a game in JavaScript which included procedurally generated video and audio to keep the size of the game under 1mb. We accomplished this all while managing a production timeline which included storyboarding, prototyping, task delegation, and weekly progress reports. The entire project was made in two weeks. More project specifications can be found in the README in the GitHub Repository.",

    links: [
      {
        name: "Playable Link",
        link: "https://wyatt-hawes.github.io/Time-Defender/",
      },
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/Time-Defender",
      },
    ],
  },
  {
    date: "2021",
    title: "Battleship Board Game",
    imgSrc: "images/Battleship.png",
    description:
      "A board game where I cut and painted the ships, board, and islands by hand. It was a challenge to accurately depict the digital gameplay experience of the popular warship battling game into a physical board game. I believe I was able to accurately portray ship customization, strategy, ship speed, maneuvering, modular damage, and visibility in a physical form. I found that the most challenging aspect was efficiently managing my time so I could create all the essential pieces for the game in a reasonable amount of time.",

    links: [],
  },
  {
    date: "2023",
    title: "Youtube 'Adblockers not allowed' blocker",
    imgSrc: "images/Adblockers Not Allowed.png",
    description:
      "A simple Chrome extension made in javascript that blocks the youtube popup that states Adblockers are not allowed on youtube. I made this in a couple of days because I was annoyed with how the popup would make you wait ~5 seconds and pause your video.  It does this by searching for the 'style-scope ytd-app' tag and deleting the element. After it is deleted, the video player is grabbed and the 'resume' command is given which gives a seamless blocking experience",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/Youtube-Adblock-Not-Allowed-Blocker",
      },
    ],
  },
  {
    date: "2023",
    title: "Facial Recognition TicTacToe",
    imgSrc: "images/Neural_Network.jpg",
    description:
      "Using a self-trained neural network based off Kaggle dataset of faces allows. The user can play Tic Tac Toe using facial expressions to select where to play. The neural network employs convolution layers, maxpooling layers, dense layers, dropout layers, and data augmentation to minimize overfitting to the relatively small data set.",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/Facial-Recognition-TicTacToe",
      },
    ],
  },

  {
    date: "2022 - 2023",
    title: "Huffman Encoding",
    imgSrc: "images/C_Programming_Language.png",
    description:
      "A C program that compresses and decompresses files using Huffman encoding. The biggest challenge that I encountered was making each data structure robust. I had to be certain that they would handle every case accurately so when I added data structures that depended on it, I would be able to easily debug and find the source of any issues. I also found it quite interesting to be able to create functions that would allow me to read and write singular bits. All the datastructures used were created by myself.",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/Huffman-Encoding-Decoding",
      },
    ],
  },
  {
    date: "2022 - 2023",
    title: "RSA Encryption/Decryption",
    imgSrc: "images/RSA_Logo.png",
    description:
      "A C program that encrypts, decrypts, and generates public/private keys using RSA algorithms. Just like the Huffman Encoding, I had to make sure that each underlying data structure was robust so I could easily debug. However, I found that the hardest part was figuring out how to use the GNU Bignum MPZ library. I was not used to using it so it was a challenge to discover and learn all the different possibilities I had access to with the library. All the datastructures used were created by myself.",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/RSA-Encryption-Decryption",
      },
    ],
  },
  {
    date: "2012-Current",
    title: "My Personal Computer",
    imgSrc: "images/Personal-Computer.jpg",
    description:
      "My personal computer is an ongoing project that I originally built over 10 years ago and continued to work on and upgrade ever since. I've troubleshot and fixed all sorts of issues which has given me a large amount of knowledge and practice with computer building. I keep the stickers of new and replacement parts as I get them to serve as reminders of the progress I have made over the years.",

    links: [],
  },
  {
    date: "2023",
    title: "Do you mind bugs.",
    imgSrc: "images/Title Screen (more bugs).png",
    description:
      "A small game made with a couple of friends as a group using the free version of the Construct 3 creation engine and then hosted on Itch.io. The biggest challenge was managing the restrictions imposed by the free version of Construct that severely limits the functionality of the engine. This essentially only gave us 50 'if statements' to create a game with. Despite this, we were able to make a game with multiple cutscenes, 6 different weapons, multiple enemy types, and a boss!",

    links: [
      {
        name: "Itch.io Page",
        link: "https://wyatt-hawes.itch.io/doyoumindbugs",
      },
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/do-you-mind-bugs",
      },
    ],
  },
  {
    date: "2022 - Current",
    title: "Portfolio Website",
    imgSrc: "images/portfolio.JPG",
    description:
      "The website you are currently on! The website was based off of a HTML5up template but I have added my own custom Javacript scripts to allow me to easily add Projects and Completed Coursework. I have also slightly modified the formatting",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes/Portfolio",
      },
    ],
  },
  {
    date: "2021-Current",
    title: "Data Structures and Algorithms I've Made",
    imgSrc: "images/DataStructuresAlgorithms.jpg",
    description:
      "View my GitHub to view the code of the many kinds of data structures I have made mostly in C and C++. Some Data Structures include: Bloom filter, Bit Vector, Hash Table, Doubly Linked List, Priority Queue, Stack, Set, Sparse Matrix, Graph, List, Big Integer, Binary Search Tree Dictionary, and Red Black Tree Dictionary. Some Algorithms in C/C++ include: Bubble sort, Heap sort, Quick sort, Shell sort, RSA Encryption and Decryption, Huffman encoding, DFS, BFS, Bi-Directional A*, and Monte-Carlo Tree Search",

    links: [
      {
        name: "Github Repository",
        link: "https://github.com/Wyatt-Hawes#data-structures--algorithms-ive-created",
      },
    ],
  },
];

//Grab project posting container
const projectContainer = document.getElementById("projectPostSection");

projects.forEach((project) => {
  createProjectElement(project);
});

function createProjectElement(project) {
  //Set up the structure of a post
  /*
     <article>
		<header>
			<span class="date"></span>
				<h2><a href="link" target = "_blank">Title</a></h2>
		</header>
		<a  class="image fit" href="" target = "_blank"><img src="" alt=""  /></a>
		<p>Description</p>
		<ul class="actions special">
		    <li><a href="Link1" target = "_blank" class="button">GitHub Repository</a><a href="link2" target = "_blank" class="button">Itch.io Page</a></li>
		</ul>
	</article>
    */
  //
  const article = document.createElement("article");
  const header = document.createElement("header");
  const span_date = document.createElement("span");
  const h2 = document.createElement("h2");
  const a_title = document.createElement("a");
  const a_image = document.createElement("a");
  const img = document.createElement("img");
  const description = document.createElement("p");
  const ul = document.createElement("ul");

  const li = document.createElement("li");

  //Set correct class names
  span_date.className = "date";
  a_image.className = "image fit";
  ul.className = "actions special";

  //Set date
  span_date.textContent = project.date;

  //Give the title a link to the first link if it exists
  if (project.links.length > 0) {
    a_title.setAttribute("href", project.links[0].link);
    a_title.setAttribute("target", "_blank");
  }

  //Set project title
  a_title.textContent = project.title;

  //Create Project image and give it a link if it exists
  if (project.links.length > 0) {
    a_image.setAttribute("href", project.links[0].link);
    a_image.setAttribute("target", "_blank");
  }
  img.src = project.imgSrc;
  img.setAttribute("alt", "");

  //Set description
  description.textContent = project.description;

  project.links.reverse().forEach((data) => {
    const element = document.createElement("a");
    element.setAttribute("href", data.link);
    element.setAttribute("target", "_blank");
    element.className = "button";
    element.textContent = data.name;
    li.appendChild(element);
  });

  article.appendChild(header);
  header.appendChild(span_date);
  span_date.appendChild(h2);
  h2.appendChild(a_title);
  a_image.appendChild(img);
  article.appendChild(a_image);
  article.appendChild(description);
  article.appendChild(ul);
  ul.appendChild(li);
  projectContainer.appendChild(article);
}
