# Build Express, Mongo, Nodew App with  Passport authentication and view with EXpresshandlebars

---

## 1. Repository on Local mechine and on the Github




| **Steps to follow** | Codes to write | |
| -------- | -------- | -------- |
| Create local directory. For example blog | **```mkdir blog && cd blog```** | |
|  | **`npm init`** | |
| create main server file | **`touch server.js`** ||
| Setting up **package.json** | Set the **main** entry point to **server.js** instead of the default **index.js** | ![](https://i.imgur.com/Ci5SezK.png) |
| Install necessary packages|**`yarn add express express-handlebars express-session handlebars body-parser mongoose mongoose-bcrypt connect-mongo nodemon cors dotenv passport passport-local`**|![](https://i.imgur.com/YsExRsE.png)|
| create **.gitignore** file and **.env**, **.env.example** file    | **```touch .gitignore .env .env.example```** ||
| within **`.gitignore`**| add **`.env`** and **`/node_modules`** to avoid uploading this to github|![](https://i.imgur.com/CAto2qj.png)

* **.gitignore** file to avoid uploading sensetive information on git hub


## *Description of each package and the function:*

* **`bcryptjs`**: used to hash passwords before we store them in our database

* **`body-parser`**: used to parse incoming request bodies in a middleware

* **`cors`**: tells the browser to run web app at one origin with the access to selected resource from different origine by using additional HTTP headers
* **`dotenv`**: loads environment variables from a .env file into process.env
* **`express`**: sits on top of Node to make the routing, request handling, and responding easier to write
* **`express-handlebars`**: HTML page wrapper that can be reused for different views of the app
* **`express-session`**: stores the session data and gives a session ID to access the session data
* **`handlebars`**: provides additional metadata, such as Hash arguments, to helpers as a final parameter
* **`mongoose`**: used to interact with MongoDB
* **`connect-mongo`**: creates a connection to a MongoDB instance and returns the reference to the database
* **`mongoose-bcrypt`**: encrypts the file when it is created or saved using regular static or instance method
* **`nodemon`**: automatically restarts the node application when file changes 
* **`passport`**: used to authenticate requests, which it does through an extensible set of plugins known as strategies
* **`passport-local`**: a strategy to authenticate with username and password

---

### package.json file final look:

![](https://i.imgur.com/4ZUskJ4.png)




---

## 2. Setup MongoDb database

| **Steps to follow** | Codes to write | 
| -------- | -------- | 
| sign up to mongo atlas    | Text     | 
| create an organization(optional)     | Text     | Text     |
| create a new project | Text     | Text     |
| ceate a free cluster with AWS/Google Cloud | Text     | Text     |
| set up connection sequrity | Text     | Text     |
| whitelist network access to required IP address | Text     | Text     |
| add admin and password | Text     | Text     |
| choose connection method | | |
| copy the connection string and paste it in the **.env** file as a variable **ATLAS_URI** | | |
|put **admin** password inthe string|||
|add **dbname** in the string|||
| at the **root** of the project: within **`.env.example`** file  add **ATLAS_URI** |![](https://i.imgur.com/H1ELOzA.png)|



---

## 3. Setup Server with Node.js and Express

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| pull in required dependencies    |  | ![](https://i.imgur.com/xCSp8pU.png)|
| initialize app using **expresss()**|`const app = express();`| ![](https://i.imgur.com/F4zvDM8.png)|
| pull in ATLAS_URI from .env file|`const uri = process.env.ATLAS_URI;` |![](https://i.imgur.com/JGDDZLK.png)|
|connect to mongodb using mongoose | | ![](https://i.imgur.com/LP2VD6v.png)|
| set the port to run the server|`const port = process.env.PORT || 8000;`|![](https://i.imgur.com/cCyUh6t.png)|
|listen the app on the port|| ![](https://i.imgur.com/3CRbEAF.png)|



---

## 4. Create "User" Schema for registration and login purposes

| location | steps to do | snippets |
| -------- | -------- | -------- |
| on the **root**| create **models** folder  | **`mkdir models && cd models`** |
| inside **models**| create **User.model.js** file | **`touch User.model.js`** | 
| inside **User.model.js**| pull in required dependencies and set **schema variable** |![](https://i.imgur.com/ZBdgw70.png)|
||create User schema, defining fields and types as object of the schema|![](https://i.imgur.com/LU2uPCv.png)|
| |pull in **mongoose-bcrypt** plugin to hash password|**`User.plugin(require("mongoose-bcrypt"));`**
| |export the model to have access outside|**`module.exports = mongoose.model("User", User);`**|


### the final User.model.js file:
![](https://i.imgur.com/EWsE74M.png)



---

## 5. passport local strategy and express-session

| location | snippets |
| -------- | -------- |
| in **server.js**: for express-session add this part of code with required value for the keys| ![](https://i.imgur.com/YurOsQL.png)|
|in **server.js**: to get the current user add this part of code|![](https://i.imgur.com/z7u8mIy.png)|
| on the **root**: create a folder **middleware** and add **passport.js** file in it| **`mkdir middleware && touch passport.js`**|
|in **passport.js**: add this codes | ![](https://i.imgur.com/z8NSuIN.png)|
| config passport strategy| ![](https://i.imgur.com/tADWAY1.png)|



---


## 6. Set up User utilities

 | location | steps to do ||
 | -------- | -------- |-|
 | on the **root**| create **utils** folder  | **`mkdir utils && cd utils`** |
 | inside **utils**| create **user_utilities.js** file | **`touch user_utilities.js`** |
 |  Within **user_utilities.js** |* require user model||
 ||* set variable for:| get all user from database |
 | ||get one user by id from database|
 | ||delete one user by id from database|
 ||* export model||
 
  ## at the end user_utilities.js file:
 ![](https://i.imgur.com/amDgVk2.png)


 
 



---

## 7. Set up user/auth controller

| loaction | steps to do ||
| -------- | -------- |-|
| on the **root**| create **controllers** folder  | **`mkdir controllers && cd controllers`** |
| inside **controllers**| create **auth_controller.js** file | **`touch auth_controller.js`** |
| inside **auth_controller.js** file|require user_utilities, passport, user model   |![](https://i.imgur.com/obPj72s.png)|
|inside **auth_controller.js** file|set function for ⬇️| |
|  | * GET all users |![](https://i.imgur.com/58Xc4fr.png)|
|| * GET one user |![](https://i.imgur.com/cdEV5pU.png)|
||* GET current user |![](https://i.imgur.com/xOf1d6m.png)|
||* DELETE one user |![](https://i.imgur.com/hgeSZ5l.png)|
||* Create new registration |![](https://i.imgur.com/Wr1f8qK.png)|
||* Login user |![](https://i.imgur.com/f9526Dp.png)
||* Logout user |![](https://i.imgur.com/ZwCdGFa.png)|
||* Login form |![](https://i.imgur.com/2YwRBSG.png)|
||* registration form |![](https://i.imgur.com/4m3fQmZ.png)|



* later we will add **express-handlebars** templates to **render** in **registration form** and **login form** *



---

## 8. Set up user routes

| steps to do |  |||
| -------- | -------- |-|-|
| on the **root**| create **routes** folder  | **`mkdir routes && cd routes`** |
| inside **routes**| create **authRoutes.js** file | **`touch authRoutes.js`** |
| inside **authRoutes.js** file| set variable for express router | ![](https://i.imgur.com/Pp4ysoM.png)|
| | require auth_controller functions| ![](https://i.imgur.com/sIaxCHM.png)|
| | set all CRUD routes | ![](https://i.imgur.com/QhOfM3d.png)|
| | export module  | ![](https://i.imgur.com/1q3nS8G.png)|

* we will set *home route* later with **express-handlebars**


---


## 9. Add public and View file on roote for frontend

| location | steps to do | snippets and terminal commands |
| -------- | -------- | -------- |
| on **root** of the folder| create **public** folder for **css** and **images**  | **`mkdir public`** |
| on **root** of the folder | create **views** folder for **templates**  | **`mkdir views && cd views`**|
| within **views** folder| create **home.handlebars** file for body template| ![](https://i.imgur.com/h46zG66.png)|
| within **views** folder  | create **partials** folder| **`mkdir partials && cd partials`**|
| within **partials** folder| create **header.handlebars**, **footer.handlebars** file for navigation bar and footer | **`touch header.handlebars && footer.handlebars`** |
| within **header.handlebars** file | add html form for navigation bar  |![](https://i.imgur.com/blSfDSI.png)|
|within **footer.handlebars** file | add html form for footer |![](https://i.imgur.com/xciPpZs.png)|
| within **views** folder  | create **layouts** folder| **`mkdir layouts && cd layouts`**|
| within **layouts** folder| create **main.handlebars** file for main template | **`touch main.handlebars`** |
|within **main.handlebars** file| add the main template HTML | ![](https://i.imgur.com/7Psmu1Q.png)|
| within **views** folder  | create **auth** folder| **`mkdir auth && cd auth`**|
| within **auth** folder | create template file for **login form** and **registration form** | **`touch login.handlebars && register.handlebars`** |
| within **register.handlebars** file | add html form for regitration  | ![](https://i.imgur.com/4DazMxS.png)|
| within **login.handlebars** file | add html form for login | ![](https://i.imgur.com/DJ4K1WB.png)|
| within **views** folder| create **users.handlebars** file for showing all users |![](https://i.imgur.com/NA9r5T5.png)|
| within **views** folder| create **user_profile.handlebars** file for showing current logged in users profile|![](https://i.imgur.com/ma19A6w.png)|


___


## 10.  Express-handlebars 

|location |steps to do | snippets |
| -------- | -------- | -------- |
|  in **server.js**   | after setting our app variable: add this part of code | ![](https://i.imgur.com/b9y8Yy8.png)|
|  | after passport strategy code: add this part of code | ![](https://i.imgur.com/CCu9EGT.png)|




---





## 11. Pull in routes in the server

| steps to do |  |  |
| -------- | -------- | -------- |
| in **server.js** | require **authRoutes.js** file  | ![](https://i.imgur.com/DTU2vBu.png)|
|  |  before app.listen:  | ![](https://i.imgur.com/nJc1QgD.png)|




---




## 12. Test API end points on insomnia/postman

| steps | urls | snippets |
| -------- | -------- | -------- |
| home    | GET `http://localhost:8000` | Text     |
| registration form     | GET `http://localhost:8000/register`    | Text     |
| register new user     | POST `http://localhost:8000/register`    | Text     |
| login form     | GET `http://localhost:8000/login`    | Text     |
| login user    | POST `http://localhost:8000/login`    | Text     |
| get all users     | GET `http://localhost:8000/users`     | Text     |
| get one user    | GET `http://localhost:8000/:id` | Text     |
| get current user  | GET `http://localhost:8000/user_profile`  | Text     |
| logout user    | GET `http://localhost:8000/logout`    | Text     |
| delete one user    | DELETE `http://localhost:8000/:id`    | Text     |




---



