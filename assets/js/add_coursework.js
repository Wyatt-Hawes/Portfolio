//Add classes to the completed_coursework.html in a more data-driven way (cause im tired of copy and pasting)
console.log('adding projects');
{
  const courses = [
    {
      date: 'Fall 2024',
      title: 'Parallel Programming (CSE - 113)',
      description:
        'Introduction to parallel and concurrent programming. Topics include: types of parallel computers and programming platforms; design, implementation, and optimization of programs for parallel and multicore processors; basic and advanced programming techniques; performance analysis and load balancing; and selected parallel algorithms.',
    },
    {
      date: 'Fall 2024',
      title: 'Principles of Computer Systems Design (CMPM - 130)',
      description:
        'Covers the principles governing computer-systems design and complexity; familiarity with memory, storage, and networking; concurrency and synchronization; layering (abstraction and modularity); naming; client-server and virtualized system models; and performance.',
    },
    {
      date: 'Fall 2024',
      title: 'Design Practicum II (CMPM - 179)',
      description:
        'Provides the opportunity to practice the creation of novel computer games. Students learn a new game-making technology, then create three games using this technology.',
    },
    {
      date: 'Summer 2024',
      title: 'Design Practicum (CMPM - 179)',
      description:
        'Provides the opportunity to practice the creation of novel computer games. Students learn a new game-making technology, then create three games using this technology.',
    },
    {
      date: 'Spring 2024',
      title: 'Capstone: Full Stack Web Development II (CSE-187)',
      description:
        'This course continues the examination of current uses of the World-Wide Web for delivery of the sophisticated interactive applications we use daily. Advanced development techniques are examined with continued emphasis on automated testing. A sizable team project is undertaken to introduce topics including, but not limited to, automated build pipelines, penetration testing, API versioning, and deployment at scale.',
    },
    {
      date: 'Spring 2024',
      title: 'Capstone: Game Production Studio (CMPM-172)',
      description:
        'Students work in teams to produce fully functional games based on previously developed game subsets. Focus on production including scaling, long-term player experience, teaching mechanics through interaction, developing multi-stage narratives/scenarios, and varying gameplay as players develop new understandings and abilities.',
    },
    {
      date: 'Winter 2024',
      title: 'Full Stack Web Development I (CSE-186)',
      description:
        'This course examines current uses of the World-Wide Web for delivery of the sophisticated interactive applications we use daily. Web Applications offer several advantages over traditional, locally installable binaries including heterogeneous deployment, instantaneous access, continuous updates, and the possibility of collaboration at scale. These Full Stack Web Applications are typically more complex than their traditional counterparts, requiring the seamless integrating of numerous related technologies if end users are to have a productive experience and the system is to remain robust, performant, and secure.',
    },
    {
      date: 'Winter 2024',
      title: 'Advanced Programming II (CMPM-123)',
      description:
        'Course introduces students to current and emerging advanced programming methods used in building complex, high-performance, and networked interactive media systems. Students use tools like debuggers and profiles to inspect and resolve software performance bottlenecks in a compiled language.',
    },
    {
      date: 'Winter 2024',
      title: 'Game Design Studio II - Vertical Slice (CMPM - 171)',
      description:
        'Students work in teams to produce fully functional games based on previously developed game subsets. Focus on production including scaling, long-term player experience, teaching mechanics through interaction, developing multi-stage narratives/scenarios, and varying gameplay as players develop new understandings and abilities.',
    },
    {
      date: 'Fall 2023',
      title: 'Development Patterns (CMPM-121)',
      description:
        'Advanced programming focused on software design patterns and refactoring. Introduces classic software design patterns, as well as game programming patterns. Introduces software refactoring, including code smells and widely used refactoring patterns.',
    },
    {
      date: 'Fall 2023',
      title: 'Game Design Studio I - Rapid Prototyping (CMPM-170)',
      description:
        'Students in CMPM 170 “Rapid Prototyping” will learn how to evaluate their visions for larger projects by first creating smaller prototypes. Teams will create different prototypes in three development “sprints” with the aim of quickly arriving at, executing, and testing the validity of project ideas. This class is meant to emphasize process over product and experimentation over polish. Therefore, skills core to process and professionalization will also be addressed. Particular emphasis will be placed on the importance of core interpersonal skills in teamwork and production. Practicing these core skills will better prepare students to transition into professional team settings.',
    },
    {
      date: 'Fall 2023',
      title: 'Game Systems (CMPM-176)',
      description:
        'Presents game design as the interplay of multiple interacting game systems. Surveys various game systems: movement, combat, reward, economic, logistics, quest, information visibility, narrative. Students explore systems via study, design, and play of board, card, and computer games.',
    },
    {
      date: 'Summer 2023',
      title: 'AI (CMPM-146)',
      description:
        'This class examines the use of Artificial Intelligence (AI) in games. It covers core AI technologies for searching through graph search algorithms, behavior control through state machines and behavior trees, and learning through neural networks and evolutionary learning. Application is relating to the use of AI to improve game design, development, and game play. It examines the AI content in multiple commercial games.',
    },
    {
      date: 'Spring 2023',
      title: 'Advanced Programming (CSE-111)',
      description:
        'An introduction to object-oriented techniques of software development including data abstraction, inheritance, polymorphism, and object-oriented design. Extensive practice using a computer to solve problems, including construction of graphical user interfaces and a multithreaded client/server applications.',
    },
    {
      date: 'Spring 2023',
      title: 'Game Development Experience  (CMPM-120)',
      description:
        'Teaches the concrete programming and collaboration skills associated with making a digital game from start to finish, including but not limited to: establishing a team, concepting, storyboarding, prototyping, producing, and testing a game for release. Students are organized into groups and work together to create and produce a playable game.',
    },
    {
      date: 'Spring 2023',
      title: 'Game Design Experience (ARTG-120)',
      description:
        'Teaches the concrete skills associated with making a digital game, from start to finish. Activities include establishing a team, concepting, storyboarding, prototyping, producing, and testing a game for release. Students are organized into groups and work together to create and produce a playable game.',
    },
    {
      date: 'Winter 2023',
      title: 'Introduction to Data Structures and Algorithms  (CSE-101)',
      description:
        'Introduction to abstract data types and basics of algorithms. Linked lists, stacks, queues, hash tables, trees, heaps, and graphs will be covered. Students will also be taught how to derive big-Oh analysis of simple algorithms. All assignments will be in C/C++.',
    },
    {
      date: 'Winter 2023',
      title: 'Foundations of Video Game Design (CMPM-80k)',
      description:
        'A generally accessible course in which students explore how video games (and games generally) shape experiences and express ideas. Students develop novel games, engage in game interpretation, and survey related topics (e.g., game history, technology, narrative, and ethics)',
    },
    {
      date: 'Winter 2023',
      title: 'Video Games as Visual Culture (FILM-80V)',
      description:
        'Through aesthetic, medium-specific and critical theories of electronic games, course introduces histories, ideas, and debates that inform critical game studies. Themes include: games and cinema; race, class, gender, sexuality and representation; visual/cultural studies approaches; topical issues in games.',
    },
    {
      date: 'Fall 2022',
      title: 'Computer Systems and C Programming (CSE-13S)',
      description:
        'C programming, command line, shell programming, editors, debuggers, source code control, and other tools. Basic computer systems, algorithm design and development, data types, program structures. Develops understanding of process model, compile-link-execute build cycle, language-machine interface, memory, and data representation.',
    },
    {
      date: 'Fall 2022',
      title: 'Multivariate Calculus for Engineers (AM-30)',
      description:
        'Advanced multivariate calculus for engineering majors. Coordinate systems, parametric curves, and surfaces; partial derivatives, gradient, Taylor expansion, stationary points, constrained optimization; integrals in multiple dimensions; integrals over curves and surfaces. Applications to engineering form an integral part of the course.',
    },
    {
      date: 'Spring 2022',
      title: 'Computer Systems and Assembly Language (CSE-12)',
      description:
        'Introduction to computer systems and assembly language and how computers compute in hardware and software. Topics include digital logic, number systems, data structures, compiling/assembly process, basics of the system software, and computer architecture.',
    },
    {
      date: 'Spring 2022',
      title: 'Mathematical Methods For Engineers (AM-10)',
      description:
        'Applications-oriented course on complex numbers and linear algebra integrating Matlab as a computational support tool. Introduction to complex algebra. Vectors, bases and transformations, matrix algebra, solutions of linear systems, inverses and determinants, eigenvalues and eigenvectors, and geometric transformations.',
    },
    {
      date: 'Winter 2022',
      title: 'Applied Discrete Mathematics (CSE-16)',
      description:
        'Introduction to applications of discrete mathematical systems. Topics include sets, functions, relations, graphs, predicate calculus, mathematical proof methods (induction, contraposition, contradiction), counting methods (permutations, combinations), and recurrences. Examples are drawn from computer science and computer engineering.',
    },
    {
      date: 'Fall 2021',
      title: 'Programming Abstractions in Python (CSE-30)',
      description:
        'Introduction to software development in Python focusing on structuring software in terms of objects endowed with primitive operations. Introduces concepts and techniques via a sequence of concrete case studies.',
    },
    {
      date: 'Fall 2021',
      title: 'Visual Communication and Interaction Design <br> (ARTG-80G)',
      description:
        'Survey of the basics of visual communication and interaction design, focusing on communicating designs of interactive systems. Covers techniques from a breadth of visual communication traditions; how to choose, use, and innovate; and how to structure dialogue around them.',
    },
    {
      date: 'Tested Out',
      title: 'Intro to Python (CSE-20)',
      description:
        'Provides students with Python programming skills and the ability to design programs and read Python code. Topics include data types, control flow, methods and advanced functions, built-in data structures, and introduction to OOP. No prior programming experience is required.',
    },
    {
      date: 'Tested Out',
      title: 'Honors Calculus B (MATH-20B)',
      description:
        "Orbital mechanics, techniques of integration, and separable differential equations. Taylor expansions and error estimates, the Gaussian integral, Gamma function and Stirling's formula. Series and power series, numerous applications to physics.",
    },
    {
      date: 'Tested Out',
      title: 'Honors Calculus A (MATH-20A)',
      description:
        'Methods of proof, number systems, binomial and geometric sums. Sequences, limits, continuity, and the definite integral. The derivatives of the elementary functions, the fundamental theorem of calculus, and the main theorems of differential calculus.',
    },
  ];

  //Grab project posting container
  const projectContainer = document.getElementById('courseworkPostSection');

  courses.forEach((course) => {
    createProjectElement(course);
  });

  function createProjectElement(course) {
    //Set up the structure of a post
    /*
     <article>
		<header>
			<span class="date"></span>
				<h2><a href="link" target = "_blank">Title</a></h2>
		</header>
		<p>Description</p>
	</article>
    */
    //
    const article = document.createElement('article');
    const header = document.createElement('header');
    const span_date = document.createElement('span');
    const h2 = document.createElement('h2');
    const description = document.createElement('p');

    //Set correct class names
    span_date.className = 'date';

    //Set date
    span_date.textContent = course.date;

    //Set project title
    h2.innerHTML = course.title;

    //Set description
    description.innerHTML = course.description;

    article.appendChild(header);
    header.appendChild(span_date);
    span_date.appendChild(h2);
    article.appendChild(description);
    projectContainer.appendChild(article);
  }
}
