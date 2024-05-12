Keiths-nc-news

link to hosted version: https://keiths-nc-news.netlify.app
A front-end web application that renders a set of news articles. The user can list all articles or choose a topic and just list the articles under that topic. They can also comment on or vote for an article. The articles can be ordered by most/least recent, most/least popular or most/least commented on. The code is available on github at https://github.com/keithbeacham/keiths-nc-news.

The site uses the keiths-be-nc-news backend which is deployed using Render for the API and elephantSQL for the database. The API is available at https://keiths-be-nc-news.onrender.com/api/ and can be viewed at https://github.com/keithbeacham/keiths-be-nc-news. The project readme gives more detail on the project and the API endpoints.

The site is built using React + Vite and axios, and deployed using netlify. It uses React routing to enable navigation using the URLs. Available endpoints are:
/ - the home page, a list of all the current articles showing their title and topic, number of votes and comments. The list can be sorted and ordered via dropdown menus. The user can click on an article in the list to be taken to the corresponding /article/:article_id page (see below).
/articles - as above.
/articles/:topic - as above but filtered according to topic
/article/:article_id - a single article page displays the complete article including text and lists all the comments for that article. The user may vote or add/delete comments: in order to do this, they have to be logged-in (see below). A user may only add one comnent or vote but may delete the comment/vote that they have just made and then comment/vote again. To prevent confusion, dis-allowed option buttons are not displayed.
/login - login authentication has not been attempted for this project. Instead the login page offers the user the chance to log-in as a pre-determined user.
/profile - this page is available once the user has logged in and displays the user profile including name and avatar. Profile editing has not been attempted for this project.
/topics - the topics page lists all the available topics plus the titles of the articles listed under each topic. The user may select a topic and be taken to the /articles/:topic page; or they may select an individual article title and be taken to the corresponding /article/:article_id page.
There is a common header available on every page which allows the user to navigate to the /articles or /topics pages. Also on the header is a link to the /login page. Once the user has logged-in, this link changes to the /profile page.

Error handling includes incorrect URLs, incorrect :article_id or :topic. All calls to the API are rendered optimistically, with a loading message displayed and an error message if there is a problem.

The application is built as a series of React Components. State is distributed through a combination of Component props, React Context and URL parameters. Communication with the backend API uses CORS cross origin resource sharing.

The application has been developed mobile-first as part of the Northcoders software development bootcamp. The development took place over 4 days and is entirely my own work.

Wireframes and a component tree can be viewed under ./Planning. Code is under ./src in subdirectories api, components, contexts, utils.

To set up and run a local version:
requires node v21.6.2, vite v5.2.0, axios v1.6.8, react v18.2.0, react-dom v18.3.1, react-router v6.23.0, react-router-dom v6.23.0, @vitejs/plugin-react v4.2.1.

Clone the repository from github "git clone https://github.com/keithbeacham/keiths-nc-news" then "cd keiths-nc-news" and run "npm install" then "npm install cors" and then "npm run dev" to start up the local host: the localhost URL will be displayed for access.
