 const quizData = {
        1: [
            {
                question: "What does CPU stand for?",
                answers: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Core Processing Unit"],
                correct: 0
            },
            {
                question: "Which of these is an operating system?",
                answers: ["Microsoft Word", "Linux", "Google Chrome", "Adobe Photoshop"],
                correct: 1
            },
            {
                question: "What is the default shell in most Linux distributions?",
                answers: ["zsh", "csh", "bash", "fish"],
                correct: 2
            },
            {
                question: "Which command lists files in a directory in Linux?",
                answers: ["ls", "dir", "list", "show"],
                correct: 0
            },
            {
                question: "What does RAM stand for?",
                answers: ["Read Access Memory", "Random Access Memory", "Run Anywhere Memory", "Rapid Application Memory"],
                correct: 1
            },
            {
                question: "Which protocol is used to send email?",
                answers: ["HTTP", "FTP", "SMTP", "SSH"],
                correct: 2
            },
            {
                question: "What is a variable in programming?",
                answers: ["A fixed value", "A storage location with a name", "A type of loop", "A function argument"],
                correct: 1
            },
            {
                question: "What does HTML stand for?",
                answers: ["HyperText Markup Language", "High Tech Modern Language", "HyperTool Multi Language", "Home Tool Markup Language"],
                correct: 0
            },
            {
                question: "Which device connects a computer to a network?",
                answers: ["Monitor", "Keyboard", "NIC", "USB hub"],
                correct: 2
            },
            {
                question: "Which of these is a cloud storage service?",
                answers: ["Apache", "Dropbox", "Nginx", "MySQL"],
                correct: 1
            }
        ],
        2: [
            {
                question: "What is the primary function of an operating system?",
                answers: ["Run applications", "Manage hardware and software resources", "Connect to the internet", "Edit text files"],
                correct: 1
            },
            {
                question: "Which Linux command prints the current working directory?",
                answers: ["cd", "pwd", "ls", "cat"],
                correct: 1
            },
            {
                question: "What is the binary representation of decimal 10?",
                answers: ["1111", "1010", "1100", "1001"],
                correct: 1
            },
            {
                question: "What does IP stand for?",
                answers: ["Internet Provider", "Internal Protocol", "Internet Protocol", "Interconnected Program"],
                correct: 2
            },
            {
                question: "Which of these is a NoSQL database?",
                answers: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
                correct: 2
            },
            {
                question: "What does Git help with?",
                answers: ["Word processing", "Version control", "Image editing", "Spreadsheet management"],
                correct: 1
            },
            {
                question: "Which component stores data long-term?",
                answers: ["RAM", "CPU", "SSD", "GPU"],
                correct: 2
            },
            {
                question: "What is an API?",
                answers: ["Application Programming Interface", "Apple Program Integration", "Advanced Platform Input", "Automated Process Instruction"],
                correct: 0
            },
            {
                question: "Which of the following is a Python data type?",
                answers: ["integer", "varchar", "string", "Both integer and string"],
                correct: 3
            },
            {
                question: "What does SSH provide?",
                answers: ["File transfer", "Secure remote login", "Email encryption", "Web hosting"],
                correct: 1
            }
        ],
        3: [
            {
                question: "In Linux, what does 'chmod 755 file.txt' do?",
                answers: ["Removes file.txt", "Makes file.txt readable and writable", "Sets read, write, execute for owner, and read, execute for group and others", "Compresses file.txt"],
                correct: 2
            },
            {
                question: "Which HTML tag creates a hyperlink?",
                answers: ["<link>", "<a>", "<href>", "<url>"],
                correct: 1
            },
            {
                question: "What is a subnet mask used for?",
                answers: ["Encrypt network traffic", "Identify network and host portions of an IP address", "Assign a MAC address", "Speed up internet"],
                correct: 1
            },
            {
                question: "Which command creates a new directory in Linux?",
                answers: ["mkfile", "mkdir", "newdir", "md"],
                correct: 1
            },
            {
                question: "What does SQL stand for?",
                answers: ["Simple Query Language", "Structured Question Language", "Structured Query Language", "Sequential Query Logic"],
                correct: 2
            },
            {
                question: "Which of these is a frontend JavaScript framework?",
                answers: ["Django", "Flask", "React", "Laravel"],
                correct: 2
            },
            {
                question: "What is the purpose of a firewall?",
                answers: ["Speed up network", "Block unauthorized access", "Manage emails", "Store passwords"],
                correct: 1
            },
            {
                question: "What does 'ping' command test?",
                answers: ["Disk speed", "Network connectivity", "CPU performance", "Memory usage"],
                correct: 1
            },
            {
                question: "Which Python keyword defines a function?",
                answers: ["func", "define", "def", "function"],
                correct: 2
            },
            {
                question: "What does CPU cache do?",
                answers: ["Increases storage space", "Speeds up data access for the processor", "Manages network traffic", "Encrypts data"],
                correct: 1
            }
        ],
        4: [
            {
                question: "In JavaScript, what does 'typeof null' return?",
                answers: ["'null'", "'undefined'", "'object'", "'boolean'"],
                correct: 2
            },
            {
                question: "Which SQL clause filters groups?",
                answers: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
                correct: 1
            },
            {
                question: "What is the default port for HTTP?",
                answers: ["443", "21", "80", "25"],
                correct: 2
            },
            {
                question: "Which Linux command shows running processes?",
                answers: ["ps", "ls", "run", "show"],
                correct: 0
            },
            {
                question: "In Python, what does 'list.append(x)' do?",
                answers: ["Inserts x at the beginning", "Adds x to the end of the list", "Removes x from the list", "Sorts the list with x"],
                correct: 1
            },
            {
                question: "Which protocol assigns IP addresses automatically?",
                answers: ["DNS", "DHCP", "FTP", "SMTP"],
                correct: 1
            },
            {
                question: "What is a container in cloud computing?",
                answers: ["A virtual machine", "A lightweight, standalone executable package of software", "A storage bucket", "A firewall rule"],
                correct: 1
            },
            {
                question: "Which Git command downloads a repository?",
                answers: ["git push", "git commit", "git clone", "git branch"],
                correct: 2
            },
            {
                question: "What does a router do?",
                answers: ["Connects different networks and forwards data packets", "Provides power to devices", "Stores files", "Manages emails"],
                correct: 0
            },
            {
                question: "Which data structure uses LIFO?",
                answers: ["Queue", "Stack", "Array", "Linked list"],
                correct: 1
            }
        ],
        5: [
            {
                question: "In Linux, what is the purpose of 'grep'?",
                answers: ["Search for patterns in files", "Download packages", "Change file permissions", "List processes"],
                correct: 0
            },
            {
                question: "Which JavaScript method converts a JSON string to an object?",
                answers: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
                correct: 1
            },
            {
                question: "What does ACID stand for in databases?",
                answers: ["Atomicity, Consistency, Isolation, Durability", "Automated, Concurrent, Integrated, Distributed", "Asynchronous, Cached, Indexed, Decoupled", "Atomic, Consistent, Isolated, Durable"],
                correct: 0
            },
            {
                question: "Which cloud service model provides virtual machines?",
                answers: ["SaaS", "PaaS", "IaaS", "FaaS"],
                correct: 2
            },
            {
                question: "In Python, what is the output of '3 * 'abc'?",
                answers: ["'abcabcabc'", "'abc3'", "Error", "'abcabc'"],
                correct: 0
            },
            {
                question: "What does DNS do?",
                answers: ["Translates domain names to IP addresses", "Encrypts web traffic", "Assigns IP addresses", "Manages routing tables"],
                correct: 0
            },
            {
                question: "Which protocol is used for secure web communication?",
                answers: ["HTTP", "FTP", "HTTPS", "SMTP"],
                correct: 2
            },
            {
                question: "What is a foreign key in SQL?",
                answers: ["A key from another country", "A column that references a primary key in another table", "A unique identifier for a row", "A key used for encryption"],
                correct: 1
            },
            {
                question: "Which DevOps tool automates infrastructure provisioning?",
                answers: ["Jenkins", "Docker", "Terraform", "Nagios"],
                correct: 2
            },
            {
                question: "What does 'npm' stand for?",
                answers: ["Node Package Manager", "Network Protocol Module", "New Project Manager", "Non-Persistent Memory"],
                correct: 0
            }
        ],
        6: [
            {
                question: "Which Linux command shows disk usage in human-readable format?",
                answers: ["du -h", "df -h", "ls -lh", "free -h"],
                correct: 1
            },
            {
                question: "In OOP, what is encapsulation?",
                answers: ["Hiding internal state and requiring all interaction through methods", "Inheriting properties from a parent class", "Creating multiple instances", "Converting data types"],
                correct: 0
            },
            {
                question: "What is the time complexity of binary search?",
                answers: ["O(n)", "O(n^2)", "O(log n)", "O(1)"],
                correct: 2
            },
            {
                question: "Which SQL command removes a table?",
                answers: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "TRUNCATE TABLE"],
                correct: 1
            },
            {
                question: "What is a VPN used for?",
                answers: ["Increasing internet speed", "Creating a secure connection over a public network", "Blocking websites", "Storing passwords"],
                correct: 1
            },
            {
                question: "In JavaScript, what is a closure?",
                answers: ["A function that has access to its own scope, outer function's scope, and global scope", "A way to close the browser", "A loop that never ends", "A module system"],
                correct: 0
            },
            {
                question: "Which protocol is connection-oriented?",
                answers: ["UDP", "TCP", "ICMP", "ARP"],
                correct: 1
            },
            {
                question: "What is Docker used for?",
                answers: ["Containerization", "Virtual machines", "Monitoring", "Database management"],
                correct: 0
            },
            {
                question: "In Python, what is a decorator?",
                answers: ["A design pattern that allows modification of a function or class", "A way to delete files", "A sorting algorithm", "A database connection tool"],
                correct: 0
            },
            {
                question: "What does a load balancer do?",
                answers: ["Encrypts data", "Distributes network traffic across servers", "Stores backups", "Monitors logs"],
                correct: 1
            }
        ],
        7: [
            {
                question: "What is the Linux kernel responsible for?",
                answers: ["User interface", "Core system functions like memory and process management", "Package installation", "Web serving"],
                correct: 1
            },
            {
                question: "In networking, what is BGP?",
                answers: ["Border Gateway Protocol, used for routing between autonomous systems", "Basic Gateway Procedure", "Binary Global Protocol", "Broadband Gateway Process"],
                correct: 0
            },
            {
                question: "Which data structure is used for recursion?",
                answers: ["Queue", "Stack", "Heap", "Tree"],
                correct: 1
            },
            {
                question: "In JavaScript, what does 'this' refer to in a regular function?",
                answers: ["The global object", "The object that calls the function", "The function itself", "The window object"],
                correct: 1
            },
            {
                question: "What is a SQL injection?",
                answers: ["A method to insert data quickly", "A security vulnerability that allows manipulation of database queries", "A way to back up SQL databases", "A type of JOIN"],
                correct: 1
            },
            {
                question: "What is the CAP theorem?",
                answers: ["Consistency, Availability, Partition tolerance - you can only have two of three", "Computer, Application, Platform model", "Cloud, Automation, Programming", "Capacity, Availability, Performance"],
                correct: 0
            },
            {
                question: "Which Linux command changes file ownership?",
                answers: ["chmod", "chown", "chgrp", "usermod"],
                correct: 1
            },
            {
                question: "What is a race condition?",
                answers: ["When two or more threads access shared data and try to change it at the same time", "A type of networking issue", "A CPU performance metric", "A loop with conditions"],
                correct: 0
            },
            {
                question: "In Python, what is a generator?",
                answers: ["A function that returns an iterable set of items, one at a time, using yield", "A tool to create random numbers", "A class that manages files", "A module for encryption"],
                correct: 0
            },
            {
                question: "What does a reverse proxy do?",
                answers: ["Sends requests from clients to backend servers", "Blocks all incoming traffic", "Hosts static websites", "Manages domain names"],
                correct: 0
            }
        ],
        8: [
            {
                question: "In Linux, what is an inode?",
                answers: ["A network interface", "A data structure storing file metadata", "A type of user", "A package manager"],
                correct: 1
            },
            {
                question: "What is a VLAN?",
                answers: ["Virtual Local Area Network, logically separating network segments", "Very Large Area Network", "Voice over LAN", "Video LAN protocol"],
                correct: 0
            },
            {
                question: "Which sorting algorithm has O(n log n) average time complexity?",
                answers: ["Bubble sort", "Insertion sort", "Merge sort", "Selection sort"],
                correct: 2
            },
            {
                question: "In JavaScript, what is event bubbling?",
                answers: ["An event propagating from the target element up through the ancestors", "A method to create bubbles on screen", "A database event", "A loop for events"],
                correct: 0
            },
            {
                question: "What does 'kubectl' manage?",
                answers: ["Docker containers", "Kubernetes clusters", "Git repositories", "Cloud storage"],
                correct: 1
            },
            {
                question: "In SQL, what does a FULL OUTER JOIN do?",
                answers: ["Returns rows with matching values in both tables", "Returns all rows when there is a match in either table", "Returns only rows from the left table", "Returns the Cartesian product"],
                correct: 1
            },
            {
                question: "What is a zero-day exploit?",
                answers: ["A vulnerability unknown to the vendor with no patch available", "A DDoS attack", "A firewall bypass", "A type of encryption"],
                correct: 0
            },
            {
                question: "In system design, what is sharding?",
                answers: ["Encrypting data", "Splitting a large database into smaller, faster, more easily managed parts", "Caching queries", "Replicating data"],
                correct: 1
            },
            {
                question: "Which Python library is commonly used for data analysis?",
                answers: ["NumPy", "Pandas", "Flask", "Requests"],
                correct: 1
            },
            {
                question: "What does a CI/CD pipeline automate?",
                answers: ["Code integration, testing, and deployment", "Network configuration", "User authentication", "Database backups"],
                correct: 0
            }
        ],
        9: [
            {
                question: "In Linux, what is a kernel panic?",
                answers: ["A user login error", "A fatal error from which the operating system cannot safely recover", "A network disconnect", "A disk full warning"],
                correct: 1
            },
            {
                question: "What is the purpose of a Spanning Tree Protocol?",
                answers: ["To prevent loops in Ethernet networks", "To increase bandwidth", "To manage IP addresses", "To compress data"],
                correct: 0
            },
            {
                question: "In JavaScript, what is the event loop?",
                answers: ["A loop that iterates over events", "The mechanism that handles asynchronous callbacks", "A way to loop through arrays", "A browser extension"],
                correct: 1
            },
            {
                question: "What is a Bloom filter?",
                answers: ["A probabilistic data structure for set membership testing", "A sorting algorithm", "A database index type", "An encryption method"],
                correct: 0
            },
            {
                question: "Which cloud service provides serverless compute?",
                answers: ["Amazon EC2", "AWS Lambda", "Google Kubernetes Engine", "Azure VM"],
                correct: 1
            },
            {
                question: "What does 'terraform state' do?",
                answers: ["Manages the mapping between resources in configuration and real-world infrastructure", "Runs virtual machines", "Stores logs", "Encrypts data"],
                correct: 0
            },
            {
                question: "In Python, what is a metaclass?",
                answers: ["A class of a class that defines how a class behaves", "A superclass for all objects", "A library for metadata", "A type of iterator"],
                correct: 0
            },
            {
                question: "What is a man-in-the-middle attack?",
                answers: ["An attack where the attacker secretly relays and possibly alters communications", "A brute force password attack", "A phishing email", "A denial-of-service attack"],
                correct: 0
            },
            {
                question: "In databases, what is a clustered index?",
                answers: ["An index where the logical order of the key values determines the physical order of rows", "An index on multiple columns", "A non-unique index", "An index stored in memory"],
                correct: 0
            },
            {
                question: "What is the Linux 'oom-killer'?",
                answers: ["A process that terminates processes when the system is out of memory", "A virus scanner", "A firewall tool", "A user management tool"],
                correct: 0
            }
        ],
        10: [
            {
                question: "What is an XSS attack?",
                answers: ["Cross-Site Scripting, injecting malicious scripts into webpages", "Extreme Security Scan", "XML Site Sitemap", "Cross-System Sharing"],
                correct: 0
            },
            {
                question: "How does a hash table handle collisions?",
                answers: ["By ignoring duplicates", "Chaining or open addressing", "By resizing the table", "By sorting entries"],
                correct: 1
            },
            {
                question: "In Linux, what does 'strace' do?",
                answers: ["Traces system calls and signals", "Monitors network traffic", "Debugs shell scripts", "Measures disk performance"],
                correct: 0
            },
            {
                question: "What is the purpose of the OSI model?",
                answers: ["To standardize networking functions into layers", "To define operating system interfaces", "To manage cloud resources", "To encrypt data"],
                correct: 0
            },
            {
                question: "In Python, what is the Global Interpreter Lock?",
                answers: ["A mutex that protects access to Python objects, preventing multiple native threads from executing at once", "A lock on files", "A database lock", "A network security feature"],
                correct: 0
            },
            {
                question: "What is a service mesh?",
                answers: ["A dedicated infrastructure layer for facilitating service-to-service communications", "A VPN configuration", "A database cluster", "A type of firewall"],
                correct: 0
            },
            {
                question: "Which algorithm solves the shortest path in a weighted graph?",
                answers: ["BFS", "Dijkstra's algorithm", "Quick sort", "Binary search"],
                correct: 1
            },
            {
                question: "What is the difference between symmetric and asymmetric encryption?",
                answers: ["Symmetric uses one key; asymmetric uses public and private key pair", "Symmetric is slower", "Asymmetric is only used for emails", "They are the same"],
                correct: 0
            },
            {
                question: "In system design, what is eventual consistency?",
                answers: ["A consistency model where updates propagate gradually, all replicas will be consistent eventually", "Immediate consistency", "No consistency", "Strong consistency"],
                correct: 0
            },
            {
                question: "What does a Kubernetes Operator do?",
                answers: ["Automates application-specific operational knowledge", "Runs containers only", "Manages network switches", "Encrypts secrets"],
                correct: 0
            }
        ],
    };