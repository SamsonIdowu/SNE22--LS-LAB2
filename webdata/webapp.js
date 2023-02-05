const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <title>LS lab 2 - Infrastructure as Code (IaC)</title>
      <style>
        body {
          background-color: black;
          color: white;
          font-family: Arial, sans-serif;
          text-align: center;
        }
  
        button {
          background-color: white;
          color: black;
          padding: 10px 20px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          margin: 10px;
        }
      </style>
    </head>
    <body>
      <h1>LS lab 2 - Infrastructure as Code (IaC)</h1>
      <p>This project was done by Samson Idowu as a lab task.</p>
      <button>Button 1</button>
      <button>Button 2</button>
    </body>
  </html>
  `);
});

app.listen(9000, () => {
  console.log('Server listening on port 9000!');
});