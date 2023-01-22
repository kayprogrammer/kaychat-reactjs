# KayChat React Application 

This is a simple realtime chat application built with ReactJs and Firebase. 

![alt text](https://github.com/kayprogrammer/kaychat-reactjs/blob/main/display.png?raw=true)

### How to Test Locally...

* Download this repository

Run:
* `npm install` to install all dependencies
* `npm start` to start the local server.

Check [http://localhost:3000](http://localhost:3000) to view application on your browser.

### Live application.
[Kaychat Live](https://kaychat.netlify.app)

## What I've Done

- Fixed alembic configuration
- Worked on auth routes (Register, Token-login, Refresh-Token, Google-login, Facebook-login)
- Worked on schemas for each routes
- Worked on managers for some models (User, Country, Jwt)

## How to check

* Clone repo, setup env, install requirements, copy variables in .env.example to .env file and fill those variables properly and run the server with: 

```bash
    $ uvicorn app.main:app --reload
```

* Make migrations and migrate like this:

```bash
    $ alembic revision --autogenerate -m "Initial migration"
```
```bash
    $ alembic upgrade head
```

## Endpoints

- Docs: `/` 
- Auth
    * Register: `/api/v1/auth/register/`
    * Login: `/api/v1/auth/login/`
    * Refresh token: `/api/v1/auth/refresh/`
    * Google: `/api/v1/auth/google/`
    * Facebook: `/api/v1/auth/facebook/`

## How each endpoints works

### Register
    User fills in the required fields as implemented by the schema (first_name, last_name, email, phone, password, country_id, is_creator).
    
    Ensure that no user with the entered email hasn't been created
    
    Ensure that no user with the entered phone number hasn't been created
    
    Ensure that the a country with the entered country_id exist in our db
    
    Create user, hash their password and return the user details as response

### Login
    User fills in the required fields as implemented by the schema (email, password).
    
    Ensure that the entered email has a user in the database
    
    Ensure that the auth provider is email so as to prevent user that logged in with socials from logging in directly from our login endpoint

    Verify the entered password with the user plain password
    
    Delete any previous existing jwt object assigned to that user
    
    Create new access token with the user credentials
    
    Create new refresh token
    
    Create new jwt object with the user details and tokens and return the tokens as response

### Refresh token
    User fills in the required fields as implemented by the schema (refresh).
    
    Ensure that the entered refresh token exists in our Jwt table in the database
    
    Ensure that the refresh token has not expired

    Create new access token with the user credentials from the jwt object
    
    Create new refresh token
    
    Update jwt object with the tokens and return the tokens as response

### Google Auth
    Get auth token from a response in client when signin is initiated, Here's a link I created you can use to generate auth_token... [Creator Africa Google](https://creators-africa-test.netlify.app/google-auth). You find the auth_token as 'credential' in the browser's console.

    Fill in the required fields as implemented by the schema (auth_token, is_creator). is_creator is optional because of login.
    
    Validate the auth token using a python google library.
    
    Compare google client ids to ensure the client_id in frontend is same as backend
    
    Register or login user based on the returned data (email, name). This works by checking for the user with that email in our db. 
    
    If user exists: 
        * Check if the auth_provider column is google, and if not, return an error. If no error: 
        * Set auth_provider to google, delete existing jwt, create new tokens and jwt object, and return the tokens
    If user doesn't exist:
        * Create user with the credentials. The password will be a defined social secret we created for all social auth users.
        * Create new tokens, jwt object, return tokens as response

### Facebook Auth
    Get auth token from a response in client when signin is initiated, Here's a link I created you can use to generate auth_token... [Creator Africa Facebook](https://creators-africa-test.netlify.app/fb-auth) You find the auth_token as 'accessToken' in browser's the console.

    Fill in the required fields as implemented by the schema (auth_token, is_creator). is_creator is optional because of login.
    
    Validate the auth token using a python facebook library.
    
    Register or login user based on the returned data (email, name). This works by checking for the user with that email in our db. 
    
    If user exists: 
        * Check if the auth_provider column is facebook, and if not, return an error. If no error:
        * Set auth_provider to facebook, delete existing jwt, create new tokens and jwt object, and return the tokens
    
    If user doesn't exist:
        * Create user with the credentials. The password will be a defined social secret we created for all social auth users.
        * Create new tokens, jwt object, return tokens as response
