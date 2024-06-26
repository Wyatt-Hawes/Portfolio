//Add projects to the interesting_projects.html in a more data-driven way (cause im tired of copy and pasting)
// First link in Links will be added to hyperlinks in the title and image
// All links will have individual buttons below the description

console.log('adding demos');
{
  const demos = [
    // {
    //   date: "xxxx - xxxx",
    //   title: "Demo - Under construction",
    //   imgSrc: "images/pic01.jpg",
    //   description:
    //     "This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. This is a test of the demo section. ",
    //   links: [
    //     {
    //       name: "Playable Link",
    //       link: "https://",
    //     },
    //     {
    //       name: "Github Repository",
    //       link: "https://",
    //     },
    //   ],
    // },
    {
      date: '2023',
      title: 'Snake Buddies: Managing External Constraints as a Team',
      imgSrc: 'images/Demos/Snake.png',
      description:
        'This demo is fairly similar to the Flytrap demo as they both use the `crisp-game` library which is intentionally quite restrictive. Despite this, my team and I were able to create a prototype to discover if it was possible to create an engaging multiplayer experience with only a single-input. My biggest takeaway is that communication is key for a team that is heavily constrained as everyone should be in sync with their ideas. I also discovered constraints heavy constraints force successful collaboration and teamwork.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://spacedoddyssey.github.io/170-Prototype-2/?Group21Prototype2',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/SpaceDoddyssey/170-Prototype-2',
        },
      ],
    },
    {
      date: '2023',
      title: 'Flytrap: Managing External Constraints',
      imgSrc: 'images/Demos/Flytrap.JPG',
      description:
        'A demo made in the `crisp-game` library which is extremely limited in terms of capability as it only allows for a single user input in the form of a button press. This demo served as a way to learn a new library but also how to work around constraints. My biggest takeaway from this demo is that constraints can often lead to creative and clever solutions that push the boundaries of what is possible.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/170-Personal-Prototype/?PersonalPrototype',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/170-Personal-Prototype',
        },
      ],
    },
    {
      date: '2023',
      title: 'Geocoins: Programming Pattern Practice',
      imgSrc: 'images/Demos/Geocoin.JPG',
      description:
        'This demo was mainly focused on creating code that is flexible and can be easily changed to meet changing requirements. It also served as practice for multiple types of design patterns while learning a new library. Those being the Flyweight Pattern, Singleton Pattern, and the Momento Pattern. The demo also uses the browsers local storage to save your progress between sessions. My biggest take away from this demo is that there are many ways to solve the same problem and one way is not always necessarily better than another. You must take in the context surrounding the problem and select a solution that works the best for you as well as the problem.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/cmpm-121-demo-3/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/cmpm-121-demo-3',
        },
      ],
    },
    {
      date: '2023',
      title: 'Clicker Game: Incremental Development',
      imgSrc: 'images/Demos/Clicker.JPG',
      description:
        'A practice of creating a product through incremental changes and development, ensuring that you are delivering a useable product at every step along the way. A main focus was also good coding practices, ensuring that you are coding in a scalable and efficient manner. Creating upgrades in a data-driven manner allows designers to not have to understand the inner workings of the program, rather just how they interface with it.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/CMPM-121-demo-1/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/CMPM-121-demo-1',
        },
      ],
    },
    {
      date: '2023',
      title: 'Prototype: Rotary Phone',
      imgSrc: 'images/2023-2024/rotary.PNG',
      description:
        "What's the best way to make people uncomfortable or paranoid by using phones? Can the act of using a phone be dreadful? We wanted to create a digital experience that included a rotary phone. We wanted to discover if even using a rotary phone could be an engaging activity, let alone inflict paranoia. We managed to create an engaging rotary phone that felt surprisingly good to fiddle with. Visit the links below for more info.",
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Digital_Phone_Prototype/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Digital_Phone_Prototype',
        },
      ],
    },
    {
      date: '2023',
      title: 'Prototype: Phone Demon',
      imgSrc: 'images/2023-2024/demon.PNG',
      description:
        "What's the best way to make people uncomfortable or paranoid by using phones? Can the act of using a phone be dreadful? This prototype helped us answer that question by attempting to inflict paranoia through slightly unsettling fortunes that would be received by texting a real life phone number. We found this prototype to be quite successful because of the anonymous nature of texting. Visit the links below for more info.",
      links: [
        {
          name: 'Playable Instructions',
          link: 'https://github.com/Wyatt-Hawes/Phone_Demon_Prototype',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Phone_Demon_Prototype',
        },
      ],
    },
    {
      date: '2023',
      title: 'Prototype: Paranoid Phone',
      imgSrc: 'images/2023-2024/paranoid.PNG',
      description:
        "What's the best way to make people uncomfortable or paranoid by using phones? Can the act of using a phone be dreadful? This prototype aimed to help us answer that question. We wanted to test different types of paranoia and this prototype focused on attempting to create a paranoid feeling whenever you received a notification on your phone. We discovered that engaging in this game did lead to paranoia when receiving a notification on your phone. Visit the links below for more info.",
      links: [
        {
          name: 'Rules Link',
          link: 'https://github.com/Wyatt-Hawes/Paranoid_Phone_Prototype',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Paranoid_Phone_Prototype',
        },
      ],
    },
    {
      date: '2023',
      title: 'Paint: Programming Pattern Demo',
      imgSrc: 'images/Demos/Sketchpad.JPG',
      description:
        "In addition to continuing the practice of incremental development, this demo serves as an application of the 'Command Design Pattern' which separates a command call from the command itself allowing for ease in implementing undo and redo capabilities. By abstracting commands in such a manner, it allows them to be easily tested and applied to different targets which is used to easily implement an high definition export of your drawing. There is also still a focus on data-driven design by allowing users to add as many custom stickers as they want.",
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/cmpm-121-demo-2/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/cmpm-121-demo-2',
        },
      ],
    },
    {
      date: '2022',
      title: 'Plink: Phaser Physics Demo',
      imgSrc: 'images/Demos/Plinko.JPG',
      description:
        'A demo made to practice the use of scenes in the Phaser game engine as well as learn how to use and apply a physics engine. I mainly learned that being able to work with the restrictions placed upon you by a specific engine or library can be both a positive and negative experience. On one hand, it may be overly challenging to complete your idea, but restrictions lead to additional creativity which more often than not, outweighs the pain of figuring out a new library.',
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Physics-Demo_Phaser/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Physics-Demo_Phaser',
        },
      ],
    },
    {
      date: '2023',
      title: 'Shade: Command Pattern Practice',
      imgSrc: 'images/Demos/Shade.JPG',
      description:
        "A demo focused on practicing the Command Design Pattern to create a prototype. The character movements are abstracted to commands which allows their actions to be replayed by 'shades' that can still influence the game world in the same way the player could. The main takeaway that I had from this demo is just how much easier following `good coding practices` can speed up development time.",
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Shade-Prototype/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Shade-Prototype',
        },
      ],
    },
    {
      date: '2022',
      title: 'iSpy: Phaser Demo',
      imgSrc: 'images/Demos/iSpy.JPG',
      description:
        "A demo created to put together all the skills from previous demo's to create a more complete experience. Combining animation, scenes, and interaction to create a playable experience. The main takeaway from this demo was that it is extremely important to test interactions as there are many edge-cases that can cause the entire experience to break.",
      links: [
        {
          name: 'Playable Link',
          link: 'https://wyatt-hawes.github.io/Simple_Adventure-i-spy/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/Simple_Adventure-i-spy',
        },
      ],
    },
    {
      date: '2022',
      title: 'Cinematic: Phaser Scene Demo',
      imgSrc: 'images/Demos/Animation.JPG',
      description:
        "A demo made to practice creating simple assets and 'tween-based' animation. Tweens are a large part of Phaser and many other engines so gaining the knowledge on how they work as well as their use cases is extremely helpful. I learned that it is often very useful to spend the time looking for tools that can do the task that you are looking for instead of focusing on creating it all by yourself.",
      links: [
        {
          name: 'Viewable Link',
          link: 'https://wyatt-hawes.github.io/simple_cinematic/',
        },
        {
          name: 'Github Repository',
          link: 'https://github.com/Wyatt-Hawes/simple_cinematic',
        },
      ],
    },
  ];

  //Grab project posting container
  const projectContainer = document.getElementById('demoPostSection');

  demos.forEach((demo) => {
    createProjectElement(demo);
  });

  function createProjectElement(demo) {
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

    //Create all tags needed for the above structure, yea its kinda messy
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
    span_date.textContent = demo.date;

    //Give the title a link to the first link if it exists
    if (demo.links.length > 0) {
      a_title.setAttribute('href', demo.links[0].link);
      a_title.setAttribute('target', '_blank');
    }

    //Set project title
    a_title.textContent = demo.title;

    //Create Project image and give it a link if it exists
    if (demo.links.length > 0) {
      a_image.setAttribute('href', demo.links[0].link);
      a_image.setAttribute('target', '_blank');
    }
    img.src = demo.imgSrc;
    img.setAttribute('alt', '');

    //Set description
    description.textContent = demo.description;

    demo.links.reverse().forEach((data) => {
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
