# cs465-fullstack
Functional MEAN full stack application for CS-465


**Architecture**
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

This application was built using a MEAN stack architecture. The components that comprise the MEAN stack are MongoDB, Express, Angular, and Node.js. The MEAN stack architecture includes a RESTApi that feeds a single-page application (SPA). The API was built with MongoDB, Express and Node.js, and the SPA was built in AngularJS.

All of the stack components can be coded with Javascript, allowing the same language to be used on both the front and back end. This is possible because Node.js is used, which brings JavaScript to the backend. Node.js is the web server/platform that allows developers to build their own web server and web application. With Node.js, the server is configured as the application is created.

Express is a framework that set up a web server to listen to incoming requests and return responses delivered to the server. Express provides simple interfaces to router URL responses, supports numerous templating engines like handlebars and jade to render HTML to the browswer, and can use sessions to identify and remember users.

Why did the backend use a NoSQL MongoDB database?
MongoDB is used in the MEAN stack architecture for a few reasons. MongoDB documents are stored as BSON, which is very compatible and closely related with JSON. JSON stands for JavaScript Serialized Object Notation, and it's JavaScripts way of holding data. MongoDB also supports secondary indexing and rich queries, making searching much faster. 

**Functionality**
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a text format that makes sharing data between clients and servers easier. JSON syntax is similar to a JavaScript object, but they are different.

JSON can be created and used by other programming languages, while JavaScript Objects can only be used ion JavaScript.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

During development, HTML was first installed as a static web file for testing. The code was refactored to create an MVC acrchitecture to separate the data, display and logic. The  purpose of the MVC is removing any coupling between the components, making them more maintainable and reusable.  Creating a RESTful API was done at a later stage to allow the client and server to exchange information over the internet so data isn't stored in the controllers. Creating an API allows for data to be used in a native mobile application, and the AngularJS front end that was created.


**Testing**
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

API endpoints are the point where an API connects with the software program. The REST API transmits data over HTTP, so HTTP methods and protocols are used to transfer information between server and client. REST API methods include, GET, POST, PUT, DELETE. The GET and POST methods were tested for this application using Postman. The GET method was used to pull data from the trips page to ensure the correct trip information was being displayed. POST was used to add, and update trip listing to the webpage. 

Security for the application was built by adding authentication to the SPA when requesting data from the API. Using an SPA can create difficulties to secure since the application code is delivered to the browser. JSON web tokens were used to manage user data in the browser. Postman was used to test the creation of a new user/password, authentication of existing users, as well as the POST method to return data from the API. 

**Reflection**
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has helped me gain a greater understanding of how a web application is developed. In previous classes, I have touched on individual topics like databases, programming languages, client-server architecture. Understanding what goes into a project and development provided me with a greater appreciation for what it takes to get an applicaiton into production. 
I learned several new skills during this development including: Angular, Node.js, Express, Mongoose, MongoDB, Javascript, HTML, CSS, handlbars, Jade, node dependencies, creating RESTful API, testing API methods, Postman, implementing authentication and authorization protocols, creating MVC architectures, and much more. 
