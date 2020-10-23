# API endpoints

### HOME

```
https://syeda-recipe-api.herokuapp.com/
```

### USERS ENDPOINT

#### Create new user

POST `https://syeda-recipe-api.herokuapp.com/api/users/register`

#### Login

POST `https://syeda-recipe-api.herokuapp.com/api/users/login`

#### Logout

GET `https://syeda-recipe-api.herokuapp.com/api/users/logout`

#### Get all users

GET `https://syeda-recipe-api.herokuapp.com/api/users/all`

#### Get one user by id

GET `https://syeda-recipe-api.herokuapp.com/api/users/:id`

#### Get current user by id

GET `https://syeda-recipe-api.herokuapp.com/api/users/user_profile`

#### Delete one user by id

DELETE `https://syeda-recipe-api.herokuapp.com/api/users/:id`

---

### POSTS ENDPOINT

#### Add new post

POST `https://syeda-recipe-api.herokuapp.com/api/posts/`

#### Get all posts

GET `https://syeda-recipe-api.herokuapp.com/api/posts/`

#### Get one users all post by id

GET `https://syeda-recipe-api.herokuapp.com/api/posts/user/:userId`

#### Get current users all post by id

GET`https://syeda-recipe-api.herokuapp.com/api/posts/user/usersPosts`

#### Get one post by id

GET `https://syeda-recipe-api.herokuapp.com/api/posts/:id`

#### Update one post by id

PUT `https://syeda-recipe-api.herokuapp.com/api/posts/:id`

#### Delete one post by id

DELETE `https://syeda-recipe-api.herokuapp.com/api/posts/:id`

#### Add comments on a post by id

POST `https://syeda-recipe-api.herokuapp.com/api/posts/:id/comments`
