# Socially Social

![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [License Section](#license)

- [Tests](#tests)
- [Contact Me](#contact-me)

## Description

The objective of this application was to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list

## Technologies Used

- MongoDB
- Mongoose
- Express.js
- Node.js
- Moment.js
- Nodemon

## Installation Instructions

### Node.js Installation

Make sure that you have Node.js downloaded. If you don't, follow this link: https://nodejs.org/en/ and click on the LTS version to download node.js to your entire computer. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### MongoDB Installation

Make sure that you also have MongoDB downloaded. If you don't, follow this link: https://docs.mongodb.com/manual/installation/, find the correct operating system under "MongoDB Installation Tutorials" and follow the instructions to install.

### Clone the code

Once node.js is downloaded, click on the green code button and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory.

## Usage Instructions

1. After following the installation steps, run `npm i` to install all the necessary dependencies.

2. Then run `npm start` to start the server.

3. Go to Insomnia and follow the instructions in the "Tests" section to test out the routes. You could also look in the screenshots folder inside the images folder in the public folder to see screenshots of all the routes, or watch the screencastify video below.

### Screencastify

Screencastify Link: https://drive.google.com/file/d/1y7-om1vzb2JfM9I3BcgEF6aiE4jNC1HV/view
## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Tests

### Insomnia

1. To test the application, download insomnia. For more information on Insomnia, follow this link: https://docs.insomnia.rest/.

2. Run `npm start` to start the server

3. Go to Insomnia and test for the route you want to test. Make sure to change the route from GET to POST, PUT, Or DELETE depending on what you want to test for.

4. The routes will be as follows (change users to posts or comments if you would like to test those routes and change :id to the id of the route you are testing for):

#### Insomnia Screenshots

- `/api/users`

  **GET (all users)**

  ![Get All Users](https://user-images.githubusercontent.com/88728912/157934216-fb89073e-a3df-45d6-879d-1ffc989845ba.png)

  **POST (user)**

  ![Post User](https://user-images.githubusercontent.com/88728912/157934148-b74034b9-cf60-4b43-a948-83748a682d4c.png)

- `/api/users/:userid`

  **GET (one user)**

  ![Get User Id](https://user-images.githubusercontent.com/88728912/157934077-14f4b4de-08f9-40b4-9631-11013a9f6c06.png)

  **PUT (user)**

  ![Put User](https://user-images.githubusercontent.com/88728912/157934016-acc126cf-0107-4b6f-816f-b29f41939c01.png)

  **DELETE (user)**

  ![Delete User](https://user-images.githubusercontent.com/88728912/157933898-1557ceb6-a081-403d-a6c8-5c5162842ac1.png)

- `/api/users/:userId/friends/:friendId`

  **POST (friend)**

  ![Post Friend](https://user-images.githubusercontent.com/88728912/157933787-f9e855bd-8b37-4111-ba11-1d1516cfa162.png)

  **DELETE (friend)**

  ![Delete Friend](https://user-images.githubusercontent.com/88728912/157933705-5bc6acbd-9cfd-4793-8e18-440ad37a42c7.png)

- `/api/thoughts`

  **GET (all thoughts)**

  ![Get All Thoughts](https://user-images.githubusercontent.com/88728912/157933593-279dcc8a-6988-4728-85a1-e69ddb984b87.png)

  **POST (thought)**

  ![Post Thoughts](https://user-images.githubusercontent.com/88728912/157933492-63f1b326-e5e5-4c49-80d2-e253b4358135.png)

- `/api/thoughts/:thoughtId`

  **GET (one thought)**

  ![Get Thought Id](https://user-images.githubusercontent.com/88728912/157933410-bc0c9972-93cf-4c26-ad37-ed0fdc11b170.png)

  **PUT (thought)**

  ![Put Thought](https://user-images.githubusercontent.com/88728912/157933292-e5784d2c-1cf1-4b61-81ef-db762c347c07.png)

  **DELETE (thought)**

  ![Delete Thought](https://user-images.githubusercontent.com/88728912/157933176-5dee7f56-e8dd-4f47-9f56-df7b65b26acd.png)

- `/api/thoughts/:thoughtId/reactions`

  **POST (reaction)**

  ![Post Reaction](https://user-images.githubusercontent.com/88728912/157933079-f45fb8dc-3e22-4a0d-9207-abaab2fd7783.png)

- `/api/thoughts/:thoughtId/reactions/:reactionId`

  **DELETE (reaction)**

  ![Delete Reaction](https://user-images.githubusercontent.com/88728912/157932988-3a98a4dc-1352-4823-81d6-60f2bf10a97a.png)

## Contact Me

GitHub Link: (https://github.com/nicnolen)<br>
Email Address: <nicnolen@ymail.com>
