# poet
Angular application that analyzes response from poet API

a. Using Angular, complete the following and be ready to execute and explain your work during the interview
b. Review the https://poetrydb.org/ api
c. Write a script or webpage to make rest calls to the server (author and title endpoint) and inspect the response
d. The script should throw an error if a 200 is not received
e. Enhance the script to retrieve both author and title by name and log all relevant data
f. Be prepared to expand the functionality of your solution during the interview

This application consists of two pages:
- Basic API call
- Enhanced API call

The basic page consists of buttons that call either the /title or /author endpoint. No arguments are passed with those calls.
When the button is pressed, the entire response is displayed on the screen.

The enhanced page contains a dropdown list for search type, a value field, and a submit button.
When the button is pressed, the data from the response is displayed on the bottom of the screen.

A service was called poet-api.service is used to retrieve the data from the API.

To run the application:
  - Run `npm install` on the ./poet directory
  - Run `ng serve --open` on the ./poet directory