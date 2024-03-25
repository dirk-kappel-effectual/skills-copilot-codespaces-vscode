// Create web server
// Create an Express web server and serve the files in the public directory.
// Path: server.js
// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;
// app.use(express.static(path.join(__dirname, 'public')));
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Path: public/index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1>Welcome</h1>
// </body>
// </html>
// Create a route
// Create a route that sends the data from the skillsMember function in JSON format.
// Path: server.js
// const express = require('express');
// const path = require('path');
// const app = express();
// const port = 3000;
// function skillsMember() {
//   return {
//     skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Express', 'MongoDB'],
//     bio: 'I am a full-stack developer with a passion for learning.',
//     experience: 'I have 2 years of experience in web development.',
//     projects: [
//       {
//         name: 'Project 1',
//         description: 'This is a project that I worked on.',
//         technologies: ['HTML', 'CSS', 'JS'],
//       },
//       {
//         name: 'Project 2',
//         description: 'This is another project that I worked on.',
//         technologies: ['React', 'Node', 'Express', 'MongoDB'],
//       },
//     ],
//   };
// }
// app.use(express.static(path.join(__dirname, 'public')));
// app.get('/skills', (req, res) => {
//   res.json(skillsMember());
// });
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// Create a route
// Create a route that sends the data from the skills