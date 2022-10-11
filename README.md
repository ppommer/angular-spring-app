# Angular Spring App

Example web app for personal training purposes featuring an Angular frontend, a Spring Boot backend, an authentication framework, and access to different APIs. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4 and [Spring Boot](https://spring.io/) version 2.3.4.

## Demo

![](src/assets/documentation/recording_hd.gif)

## Components

### Login and Registration

Before using the app, the user has to register. The authentication service sends username and password to the Spring backend. The backend adds a UUID and saves the user to the database.


The registration as well as the login component use validators to sanitize the inputs. 
They ensure valid formats for both the email address and the password.
Furthermore, the equalValueValidator function in the registration component ensures the exact match of password and confirmPassword.
**Angular Material** modules provide a clear input mask.


Once the registration is complete, the user is redirected to the login mask.
When the user has entered the login data, the authentication service sends it to the Spring backend which then returns an AuthStatus object. 

Login |  Registration | Validators
:---:|:---:|:---:
![](src/assets/documentation/Login.png) | ![](src/assets/documentation/Registration_Input.png) | ![](src/assets/documentation/Registration_Validators.png)


### Home, Jokes and Weather

The home component displays a simple user input and makes use of basic Angular directives like **ngClass** and **ngIf**.
When the user enters a string into the mask, ngClass selects the *@keyframes move* CSS property which lets the Chuck Norris image swing up and down.


The jokes component generates Chuck Norris jokes from the [Chuck Norris API](https://api.chucknorris.io/).
When the user clicks the **GENERATE JOKE** button, the joke service fetches a new random joke.
An array placed in the joke service saves the joke in order to conserve it even if the user switches between components. 


The weather component as well as the weather service are placed into a separate module to enable **lazy-loading**.
The weather service sends an API request to the Spring backend.
An interceptor adds an authorization field containing the active user's UUID token to the HTTP header.
After validation, the backend fetches current weather data of Munich from the [Open Weather Map API](https://openweathermap.org/api).

Home                                    |  Jokes                                   | Weather
:--------------------------------------:|:----------------------------------------:|:------------------------------------------:
![](src/assets/documentation/Home.png)  |  ![](src/assets/documentation/Jokes.png) | ![](src/assets/documentation/Weather.png)


## Spring Backend

The Spring backend consists of three layers: an API/controller layer, a service layer, and a data access layer.
Once a user registers, an array list mocking a database saves the data.
When a user enters the weather component, the authentication procedure depicted above takes action.
[Postman](https://www.postman.com/) can be used to interact with the server, e.g. to get a list of registered users.
![](src/assets/documentation/Postman.png)

## Run the App

Run `ng serve` in the angular-spring-app CLI to start the angular frontend. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run DemoApplication.java in the spring-app project to start the backend.
