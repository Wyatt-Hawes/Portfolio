//Add projects to the interesting_projects.html in a more data-driven way (cause im tired of copy and pasting)
// First link in Links will be added to hyperlinks in the title and image
// All links will have individual buttons below the description
{
  const projects = [
    {
      date: '2024',
      title: 'Custom Visual Taskboard',
      imgSrc: 'images/2023-2024/taskboard.png',
      description:
        'Created a custom visual taskboard (similar to Trello) to grant technicians access to the tools of a Visual Taskboard while integrating automatic ticket organization and routing. Uses the ServiceNow API, React, Node.js, and Express to host a local server allowing for technicians to organize and categorize tickets with a point and click menu. Enables automatic organization of client responses & stale tickets without technician input. This project was created as the current visual taskboard used in the ResNet office was frustrating for technicians to use so I created this taskboard to fix the issues we encountered and implement the features we wished were present. Some details are blurred',
      links: [
        {
          name: 'Respository Link',
          link: 'https://github.com/Wyatt-Hawes/ResNet-Visual-Taskboard',
        },
      ],
    },
    {
      date: '2024',
      title: 'Distributed System in Go',
      imgSrc: 'images/2023-2024/distributed.jpg',
      description:
        'A Replicated Key-Value Store Distributed System made in GO. Replicates data to all available replicas in the system, automatically detects downed replicas (and notifies all other replicas of this info). Enforces Causal Consistency through the use of Causal Meta-data with a test-suite to ensure functionality.',
      links: [],
    },
    {
      date: '2024',
      title: 'Published Game: 3 Bulky Bears',
      imgSrc: 'images/2023-2024/3BB.jpg',
      description:
        'Publishing of a finished project as a team (16 people) collaboration across multiple sub-teams (Programmers, Gameplay Designers, Story Designers, Artists, Sound Designers, and ‘Investors’). Completed the full product life cycle. Private repository available upon request. I was a lead developer responsible for creating many of the in-game mechanics. Some include, movement, wind that blows the player, soft-body mushrooms, re-bindable controls, menu selection, and more! Private repository available upon request.',
      links: [
        {
          name: 'Steam Store Listing',
          link: 'https://store.steampowered.com/app/2957270/Three_Bulky_Bears/',
        },
        {
          name: 'Github Repository [Private]',
          link: 'https://github.com/SpaceDoddyssey/ThreeBulkyBears',
        },
      ],
    },
    {
      date: '2024',
      title: 'Full-Stack E-commerce App',
      imgSrc: 'images/2023-2024/slugmart.png',
      description:
        'Developed a full-stack web application mirroring the functionalities of Amazon. Using technologies like React, MaterialUI, Node.js, Express, Docker, PostgreSQL, AWS, Microservices, and GraphQL. The project comprised a desktop and mobile UI front end, a Node.js server, and a PostgreSQL database all containerized and hosted on the cloud. Development followed an incremental test-driven development approach utilizing Jest, Vitetest, ReactTest, and Puppeteer. I ensured 100% code coverage across frontend, backend, and end-to-end tests for all implemented functionality. I created an internal GraphQL API for the project to handle internal requests for the main site, Vendor site and API, and Administration site. Implements accessibility features such as ARIA attributes and accommodating limited input and reaction times, aligning with inclusive design principles. Private repository available upon request.',
      links: [
        {
          name: 'Github Repository [Private]',
          link: 'https://github.com/Wyatt-Hawes/SlugMart',
        },
      ],
    },
    {
      date: '2024',
      title: 'Multithreaded HTTP Server in C',
      imgSrc: 'images/2023-2024/httpserver.jpg',
      description:
        'A multi-threaded HTTP server in C (storing and retrieving files) made without using the stdio library. Instead using only system calls as I wanted to understand what really really needs to happen when creating an HTTP server.',
      links: [],
    },
    {
      date: '2024',
      title: 'Full-Stack Messaging App',
      imgSrc: 'images/2023-2024/Diligent.jpg',
      description:
        'Developed a full-stack web application mirroring the functionalities of the popular ‘Slack’ messaging platform. Using technologies like React, MaterialUI, Node.js, Express, Docker, and PostgreSQL. The project comprised a desktop and mobile UI front end, a Node.js server, and a PostgreSQL database. Development followed an incremental test-driven development approach utilizing Jest, Vitetest, ReactTest, and Puppeteer. I ensured 100% code coverage across frontend, backend, and end-to-end tests for all implemented functionality. I created a RESTful API for the project to handle CRUD-style requests. Implements accessibility features such as ARIA attributes and accommodating limited input and reaction times, aligning with inclusive design principles. Private repository available upon request.',
      links: [
        {
          name: 'Github Repository [Private]',
          link: 'https://github.com/Wyatt-Hawes/Diligint',
        },
      ],
    },
    {
      date: '2024',
      title: 'Full-Stack `Facebook` Clone',
      imgSrc: 'images/2023-2024/Diligent.jpg',
      description:
        'Developed a full-stack web application mirroring the functionalities facebook. Uses similar technologies and methodologies as the Slack clone.',
      links: [],
    },
    {
      date: '2024',
      title: 'Ticketing Dashboard',
      imgSrc: 'images/2023-2024/Dashboard.PNG',
      description:
        'Enhanced the UCSC Resnet ticket management dashboard, which uses the ServiceNow, WhenIWork, Trello, and Google Calendar APIs.  I developed a bash script to automate the startup and connection of the ticketing system & open ticket dashboard between offices, which reduced a daily 10-20 minute task down to several seconds. ',
      links: [],
    },
    {
      date: '2024',
      title: 'Chess & Chess AI',
      imgSrc: 'images/2023-2024/Chess.jpg',
      description:
        'Created the game of Chess in C++. Implemented a Chess AI that follows the common UCI interface allowing shareability in addition to Bot VS Bot matchups.',
      links: [],
    },
    {
      date: '2024',
      title: 'Lethal Company: Scaled Penalties',
      imgSrc: 'images/2023-2024/lethal.png',
      description:
        "A mod created for the game 'Lethal Company'. It modifies the game so players recieved a scaled penalty when they fail to recover a body in large multiplayer lobbies. This was created when I realized that when my friends and I played, the penalty felt much too harsh. So I created a mod that we used to make the game more enjoyable for us. For ease of distribution, I hosted the game to Thunderstore (an online mod manager) and the mod now has over 16,000 downloads!",
      links: [
        {
          name: 'Thunderstore Page',
          link: 'https://thunderstore.io/c/lethal-company/p/MigisFring/ScaledPenalties/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Lethal-Company-Scaled-Penalties',
        },
      ],
    },
    {
      date: '2024',
      title: 'Discord Infraction Bot',
      imgSrc: 'images/2023-2024/discord.jpg',
      description:
        "A simple Discord bot made for my friends and I to use. After setting up a trigger command, any user can check the amount of moderation actions another user has performed. This mainly includes mutes of other users, disconnects of other users, and moving users into different voice channels. The bot reads through the Discord 'audit log' using the Discord API and sends a message back to the user with the statistics that were found.",
      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/discord-audit-eye',
        },
      ],
    },
    {
      date: '2023',
      title: 'Facial Recognition TicTacToe',
      imgSrc: 'images/Neural_Network.jpg',
      description:
        'Using a self-trained neural network based off Kaggle dataset of faces allows. The user can play Tic Tac Toe using facial expressions to select where to play. The neural network employs convolution layers, maxpooling layers, dense layers, dropout layers, and data augmentation to minimize overfitting to the relatively small data set.',

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Facial-Recognition-TicTacToe',
        },
      ],
    },
    {
      date: '2023',
      title: "Youtube 'Adblockers not allowed' blocker",
      imgSrc: 'images/Adblockers Not Allowed.png',
      description:
        "A simple Chrome extension made in javascript that blocks the youtube popup that states Adblockers are not allowed on youtube. I made this in a couple of days because I was annoyed with how the popup would make you wait ~5 seconds and pause your video.  It does this by searching for the 'style-scope ytd-app' tag and deleting the element. After it is deleted, the video player is grabbed and the 'resume' command is given which gives a seamless blocking experience",

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Youtube-Adblock-Not-Allowed-Blocker',
        },
      ],
    },
    {
      date: '2024',
      title: 'Online Bouquet Creator',
      imgSrc: 'images/2023-2024/bouquet.png',
      description:
        'An online bouquet creator that I made as a gift. It is not pushing any knowledge boundaries but I believe that relaxing and programming something enjoyable is just as important. It comes with size and rotation control as well as an unlimited amount of undo/redos. You can also export your bouquet in a 4x upscale.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://',
        },
        {
          name: 'Github Repository',
          link: 'https://',
        },
      ],
    },
    {
      date: '2022 - 2023',
      title: 'Disposable',
      imgSrc: 'images/Disposable.png',
      description:
        'A game that was made in collaboration with three other teammates as we worked through the challenge of learning an entirely new game engine and programming language all while managing a production timeline which included storyboarding, prototyping, task delegation, and weekly progress reports. The entire project was made in three weeks.',

      links: [
        {
          name: 'Itch.io Page',
          link: 'https://metatoshi.itch.io/disposable',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/ARTG120-Final-Project-Trash-Game',
        },
      ],
    },
    {
      date: '2022 - 2023',
      title: 'Time Defender',
      imgSrc: 'images/time-defender.png',
      description:
        'A game that was made in collaboration with two other teammates as we worked through the challenge of creating a game in JavaScript which included procedurally generated video and audio to keep the size of the game under 1mb. We accomplished this all while managing a production timeline which included storyboarding, prototyping, task delegation, and weekly progress reports. The entire project was made in two weeks. More project specifications can be found in the README in the GitHub Repository.',

      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Time-Defender/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Time-Defender',
        },
      ],
    },
    {
      date: '2021',
      title: 'Battleship Board Game',
      imgSrc: 'images/Battleship.png',
      description:
        'A board game where I cut and painted the ships, board, and islands by hand. It was a challenge to accurately depict the digital gameplay experience of the popular warship battling game into a physical board game. I believe I was able to accurately portray ship customization, strategy, ship speed, maneuvering, modular damage, and visibility in a physical form. I found that the most challenging aspect was efficiently managing my time so I could create all the essential pieces for the game in a reasonable amount of time.',

      links: [],
    },
    {
      date: '2022 - 2023',
      title: 'Huffman Encoding',
      imgSrc: 'images/C_Programming_Language.png',
      description:
        'A C program that compresses and decompresses files using Huffman encoding. The biggest challenge that I encountered was making each data structure robust. I had to be certain that they would handle every case accurately so when I added data structures that depended on it, I would be able to easily debug and find the source of any issues. I also found it quite interesting to be able to create functions that would allow me to read and write singular bits. All the datastructures used were created by myself.',

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Huffman-Encoding-Decoding',
        },
      ],
    },
    {
      date: '2022 - 2023',
      title: 'RSA Encryption/Decryption',
      imgSrc: 'images/RSA_Logo.png',
      description:
        'A C program that encrypts, decrypts, and generates public/private keys using RSA algorithms. Just like the Huffman Encoding, I had to make sure that each underlying data structure was robust so I could easily debug. However, I found that the hardest part was figuring out how to use the GNU Bignum MPZ library. I was not used to using it so it was a challenge to discover and learn all the different possibilities I had access to with the library. All the datastructures used were created by myself.',

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/RSA-Encryption-Decryption',
        },
      ],
    },
    {
      date: '2012-Current',
      title: 'My Personal Computer',
      imgSrc: 'images/Personal-Computer.jpg',
      description:
        "My personal computer is an ongoing project that I originally built over 10 years ago and continued to work on and upgrade ever since. I've troubleshot and fixed all sorts of issues including an elusive memory bug and network card issues. This has given me a large amount of knowledge and practice with computer building. I keep the stickers of new and replacement parts as I get them to serve as reminders of the progress I have made over the years.",

      links: [],
    },
    {
      date: '2023',
      title: 'Do you mind bugs.',
      imgSrc: 'images/Title Screen (more bugs).png',
      description:
        "A small game made with a couple of friends as a group using the free version of the Construct 3 creation engine and then hosted on Itch.io. The biggest challenge was managing the restrictions imposed by the free version of Construct that severely limits the functionality of the engine. This essentially only gave us 50 'if statements' to create a game with. Despite this, we were able to make a game with multiple cutscenes, 6 different weapons, multiple enemy types, and a boss!",

      links: [
        {
          name: 'Itch.io Page',
          link: 'https://wyatt-hawes.itch.io/doyoumindbugs',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/do-you-mind-bugs',
        },
      ],
    },
    {
      date: '2022 - Current',
      title: 'Portfolio Website',
      imgSrc: 'images/portfolio.JPG',
      description:
        'The website you are currently on! The website was based off of a HTML5up template but I have added my own HTML and custom Javacript scripts to allow me to easily add Projects and Completed Coursework. I have also slightly modified the formatting',

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Portfolio',
        },
      ],
    },
    {
      date: '2023',
      title: 'Garden Simulator',
      imgSrc: 'images/2023-2024/garden_simulator.PNG',
      description:
        'This was a project where the primary focus was on shifting and changing requirements. This meant that our code had to be flexible and easily modifiable. We additionally focused on internationalization and making our game a downloadable web app that could be played offline. This introduced many challenges that required unique and interesting solutions. More info in code README.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Garden-Simulator/',
        },
        {
          name: 'Github Repository - Source Code',
          link: 'https://github.com/Wyatt-Hawes/Garden-Simulator/tree/main',
        },
        {
          name: 'Github Repository - Web App Code',
          link: 'https://github.com/Wyatt-Hawes/Garden-Simulator/tree/Downloadable-Version',
        },
      ],
    },
    {
      date: '2021-Current',
      title: "Data Structures and Algorithms I've Made",
      imgSrc: 'images/DataStructuresAlgorithms.jpg',
      description:
        'View my GitHub to view the code of the many kinds of data structures I have made mostly in C and C++. Some Data Structures include: Mutexes, Barriers, Concurrent Queue, Bloom filter, Bit Vector, Hash Table, Doubly Linked List, Priority Queue, Stack, Set, Sparse Matrix, Graph, List, Big Integer, Binary Search Tree Dictionary, and Red Black Tree Dictionary. Some Algorithms in C/C++ include: Bubble sort, Heap sort, Quick sort, Shell sort, RSA Encryption and Decryption, Huffman encoding, DFS, BFS, Bi-Directional A*, and Monte-Carlo Tree Search',

      links: [
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes#data-structures--algorithms-ive-created',
        },
      ],
    },
  ];

  //Grab project posting container
  const projectContainer = document.getElementById('projectPostSection');

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

    //Create all tags needed for the above structure
    const article = document.createElement('article');
    const header = document.createElement('header');
    const span_date = document.createElement('span');
    const h2 = document.createElement('h2');
    const a_title = document.createElement('a');
    const a_image = document.createElement('a');
    const img = document.createElement('img');
    const description = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    //Set correct class names
    span_date.className = 'date';
    a_image.className = 'image fit';
    ul.className = 'actions special';

    //Set date
    span_date.textContent = project.date;

    //Give the title a link to the first link if it exists
    if (project.links.length > 0) {
      a_title.setAttribute('href', project.links[0].link);
      a_title.setAttribute('target', '_blank');
    }

    //Set project title
    a_title.textContent = project.title;

    //Create Project image and give it a link if it exists
    if (project.links.length > 0) {
      a_image.setAttribute('href', project.links[0].link);
      a_image.setAttribute('target', '_blank');
    }
    img.src = project.imgSrc;
    img.setAttribute('alt', '');

    //Set description
    description.textContent = project.description;

    project.links.reverse().forEach((data) => {
      const element = document.createElement('a');
      element.setAttribute('href', data.link);
      element.setAttribute('target', '_blank');
      element.className = 'button';
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
}
