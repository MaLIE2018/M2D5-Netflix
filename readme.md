LINK: https://m5d10-benchmark-netflix.vercel.app/Movies

FEATURES:

/ Create a backoffice page for inserting, editing and removing movies

/ Every movie will have a category
/ On the main page you should create, programmatically, a number of “lists” equal to the number of categories you have created


EXTRA FEATURES:

/ Add form validation in the backoffice page

/ Show loading indicators on the main page while waiting for the info from the APIs


EVERY REST API CALL SHOULD BE AUTHENTICATED. 
Every request to the API should use Token Based Authentication to secure access to the contents.
You can get your token by registering on: strive.school/studentlogin

Authorization: Bearer ###########

Where ######### is the access_token returned by the endpoint.
You can refresh the token (expires every 14 days) with 

POST https://striveschool-api.herokuapp.com/api/account/login
{
    "username": "testusername",
    "password":"pass"
}   


API ENDPOINT:

//------------------------------------------------------------------------------------
GET https://striveschool-api.herokuapp.com/api/movies/ 

return an array with the available categories
[ "drama", "comedy" ... ] //N.B.: The category list is not fixed, it's generated FROM your movies and therefore until movies are added this list will be []

//------------------------------------------------------------------------------------


GET on https://striveschool-api.herokuapp.com/api/movies/{category}

will return an array of movies from the given {category}.

Ex:
[
    {
        "_id": "5d3598a3a38caa57a0272d33", //SERVER GENERATED
        "name": "Random drama movie",
        "description": "A description of the movie",
        "category": "drama",
        "imageUrl": "https://bit.ly/3bVHHZ4",
        "userId": "admin",  //SERVER GENERATED
        "createdAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
        "updatedAt": "2019-07-22T11:06:11.784Z",  //SERVER GENERATED
        "__v": 0  //SERVER GENERATED
    }
]

//------------------------------------------------------------------------------------
POST on https://striveschool-api.herokuapp.com/api/movies/

creates a new movie.

{
    "name": "Strive School",
    "description": "Horror movie about coding 10 hours per day",
    "category": "horror",
    "imageUrl": "https://bit.ly/3cMc2IH",
}

//------------------------------------------------------------------------------------
PUT on https://striveschool-api.herokuapp.com/api/movies/{id}

for EDITING the movie with the given {id}.


//------------------------------------------------------------------------------------
DELETE on https://striveschool-api.herokuapp.com/api/movies/{id}

for DELETING the movie with the given {id}.


//------------------------------------------------------------------------------------
HINTS:
- Start from the back office page (for adding new movies with the POST method)
- GET the categories from the "home page" and for each category, fetch and display the corresponding info
- Add PUT and DELETE capabilities to your web application
- Add loader indicators and form validation
- Starting from the previous Netflix project, use the very same code for template literals (cards, containers etc.)

In the main page:

1) Get all the categories ==> [ "drama", "fantasy", "comedy"]
2) For each category, you are gonna FETCH the corresponding movies ==>  iteration 0 : GET https://strive-school-testing-apis.herokuapp.com/api/movies/drama 
                                                                        iteration 1 : GET https://strive-school-testing-apis.herokuapp.com/api/movies/fantasy
                                                                        etc.
3) Use some template literals to display them ==> for each one of them, create a container to wrap all the movies
