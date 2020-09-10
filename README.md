# RESTful Blog

## Few Notes on REST
> This is a part of Colt Steele's The Web Developer Bootcamp Course on Udemy
> Section 31: RESTful Routing

- REST stands for REpresentational State Transfer
- REST is a Pattern of defining routes: 
    - A mapping between HTTP routes and CRUD
    - CRUD: CREATE, READ, UPDATE and DESTROY
    - RESTful routes is conventional and reliable over our own defined routes

#### RESTful Routes Table
*The 7 RESTful routes with a* :dog: *example*
| Name | Path | HTTP Verb | Purpose |
|------|------|-----------|---------|
| Index | ```/dogs``` | GET | List all dogs |
| New | ```/dogs/new``` | GET | Show new dog form |
| Create | ```/dogs``` | POST | Create a new dog then redirect somewhere |
| Show | ```/dogs/:id``` | GET | Show info about one specific dog |
| Edit | ```/dogs/:id/edit``` | GET | Show edit form for one specific dog |
| Update | ```/dogs/:id``` | PUT | Update a particular dog, then redirect somewhere |
| Destroy | ```/dogs/:id``` | DELETE | Delete a particular dog, then redirect somewhere |

