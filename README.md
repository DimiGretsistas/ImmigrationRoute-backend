<h1>ImmigrationRoute - Visa Document Checklist Web Application </h1>

<h3> Introductions </h3>

<p>ImmigrationRoute is a web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack that assists users in preparing for their visa application process in Germany. Users can register, log in, and perform the following actions:</p>
<ul> 
<li>Select their country of residence.</li>
<li>Choose the purpose of their stay in Germany.</li>
<li>Access a list of required documents for their specific visa category.</li>
<li>Find a link to the official checklist of documents provided by the German</li>
 <li>Embassy in their country of residence.</li>
<li>Create, edit, and delete a journey to document their visa application progress<li>
<li>Manage their user profile.</li>
</ul>

<h3>Project Structure</h3>
<p>This project is organized into two main folders:</p>

<ul> 
<li>immigration-routes-client: Contains the React.js frontend of the application.</li>
</li>immigration-routes-server: Contains the Node.js and Express.js backend of the application.</li>
</ul>

<h3>Features</h3>
<ul>
<li>User Authentication: Users can register and log in to their accounts securely using JWT (JSON Web Token) based authentication.</li>
<li>Country Selection: Users can choose their country of residence from a predefined list.</li>
<li>Purpose of Stay Selection: Users can select the purpose of their stay in Germany, which will determine the visa category.</li>
<li>Document Checklist: After selecting the purpose of stay, users can view a list of required documents for their specific visa category.</li>
<li>Official Embassy Checklist: Users can access a link to the official checklist of documents provided by the German Embassy in their country of residence.</li>
<li>Journey Creation: Users can create a journey to document their visa application process. Each journey includes a title, description, and a list of tasks.</li>
<li>Journey Management: Users can edit and delete their journeys to keep track of their progress.</li>
<li>User Profile: Users can manage their profile, including updating their personal information and password.</li>
</ul>



<h3>Installation</h3>

To run this application locally, follow these steps:

Clone this repository to your local machine.
git clone <repository-url>


Navigate to the project directory.
<ol>
<li>cd immigrationRoute</li>

<li>cd immigration-routes-client</li>
<li>npm install</li>

<li>cd immigration-routes-server</li>
<li>npm install</li>
</ol>

<p>Set up your environment variables. Create a .env file in the immigration-routes-server directory and provide the necessary environment variables (e.g., database connection string, JWT secret).</p>

<h3>Start the server and client.</h3>

<p>cd immigration-routes-client</p>
<p>npm run dev</p>

<p>cd immigration-routes-server</p>
<p>npm run dev</p>

<p>The application should now be running locally.</p>

<h3>Usage</h3>
<ul>
<li>Register for an account or log in if you already have one.</li>
<li>Select your country of residence.</li>
<li>Choose the purpose of your stay in Germany.</li>
<li>View the required document checklist for your visa category.</li>
<li>Access the official checklist of documents from the German Embassy.</li>
<li>Create a journey to document your visa application progress.</li>
<li>Edit or delete journeys as needed.</li>
<li></li>Manage your user profile.
<ul>

<ol>
<li>Technologies Used </li>
<li>MongoDB</li>
<li>Express.js</li>
<li>React.js</li>
<li>Node.js</li>
<li>Passport.js (for JWT token-based authentication)</li>
<li>Axios (for making backend API requests)</li>
</ol>


<h3>License</h3>
<p>This project is licensed under the MIT License.</p>


<h3>Contributing</h3>
<p>Contributions are welcome! If you'd like to contribute to this project, please get in touch.</p>

