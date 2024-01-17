# GithubApiApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Folder Structure

1. AuthGaurd : This component contains authentication guard for restricting user to visit homepage without signing in.

2. components : This folder contains two components
    - 1. repo : This component holds the repository of user 
    - 2. user-card: This component holds the user details

3. layout : This folder contains two components 
    - 1. header : This component contains header which is used in homepage, signin and signup page 
    - 2. footer : This component contains footer for all pages.

4. pages : This folder contains four components
    - 1. home : This is the home page component 
    - 2. signin : This is the signin page component 
    - 3. signup : This is the signup page component
    - 4. pagenotfound : This is page not found component

5. services : This folder contains three services 
    - 1. firebase service : This service used to authenticate user with firebase signin or signup authentication 
    - 2. github service : This service provides the APIs for user details and repositories. 
    - 3. shared service : This service used to reload the child components on button click

## Steps to run application

- Step 1. You need to create an account using an email and password in signup page.
  or
  If you have already created an account then signin with email and password. For testing, I have created an account which is saved in firebase database

  Credentials- (email: test@test.com, password: 12345678)

- Step 2. After signin or signup you will be redirected to home page where a search bar is given. You need to provide a github username of a person then double click on "Find User" button then data will be displayed in form of user details and user repository. You can search for other users as well

- Step 3. To logout, you need to click on the logout button in the header.

## Thank you
