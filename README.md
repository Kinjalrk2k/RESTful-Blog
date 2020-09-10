# RESTful Blog
A simple Blog application based on RESTful routing and Semantic UI
> This is a part of Colt Steele's The Web Developer Bootcamp Course on Udemy
> Section 31: RESTful Routing

## Objectives
> Using Semantic UI
- Blog Index
    - Setup the Blog App
    - Create the blog model
    - Add INDEX route and the template
    - Add Simple Navbar
- Basic Layout
    - Add Header and Footer Partials
    - Include Semantic UI
    - Add Simple Nav
- Putting C in CRUD
    - Add NEW route
    - Add NEW template
    - Add CREATE route
    - Add CREATE template
- SHOWtime xD
    - Add SHOW route
    - Add SHOW template
    - Add links to show page
    - Style the show template
- Edit/Update
    - Add EDIT route
    - Add EDIT form
    - Add UPDATE route
    - Add UPDATE form
    - Add Method-Override 
- Destroy
    - Add Destroy Route
    - Edit and Destroy Links
- Final Updates
    - Sanitize Blog body
    - Style Index

## Notes on REST

- REST stands for REpresentational State Transfer
- REST is a Pattern of defining routes: 
    - A mapping between HTTP routes and CRUD
    - CRUD: CREATE, READ, UPDATE and DESTROY
    - RESTful routes is conventional and reliable over our own defined routes

**Note:** HTML forms don't support PUT request. They only support POST and GET request.

*Workraound?*
**Method-Override**: In the form-action, put the query string ```?_method=PUT```. This overries the ```method=POST``` in the form.

```npm install method-override -- save```
```js
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
```


#### RESTful Routes Table
*The 7 RESTful routes with a* :dog: *example*
| Name | Path | HTTP Verb | Purpose | Mongoose Methods |
|------|------|-----------|---------|-----------------|
| Index | ```/dogs``` | GET | List all dogs | ```Dog.find()``` |
| New | ```/dogs/new``` | GET | Show new dog form |  |
| Create | ```/dogs``` | POST | Create a new dog then redirect somewhere | ```Dog.create()``` |
| Show | ```/dogs/:id``` | GET | Show info about one specific dog | ```Dog.findById()``` |
| Edit | ```/dogs/:id/edit``` | GET | Show edit form for one specific dog | ```Dog.findById()``` |
| Update | ```/dogs/:id``` | PUT | Update a particular dog, then redirect somewhere | ```Dog.findByIdAndUpdate()``` |
| Destroy | ```/dogs/:id``` | DELETE | Delete a particular dog, then redirect somewhere | ```Dog.findByIdAndRemove()``` |

