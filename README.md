# LokkerRoom - Front-end

LokkerRoom is a chat application designed to facilitate real-time communication between users in various chat rooms, also known as lobbies. This front-end application is part of a client-server architecture, with the server-side implemented in Node.js and the front-end in React.

## Installation

To install LokkerRoom locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/your/repository).
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.

## Usage

Once installed, you can start LokkerRoom by running `npm run dev`. This will launch the application in your default web browser.

## Features


### Finished Features
- Create new lobby
- Send messages to lobby
- Sign up

### Work in progress
- Log In :
    The login component send a request to the back and and receive a JWT that's stored in localStorage. It also store nickname and email in useAuth.
    Problem :For the moment, when the user try to reache a page, it checks if there's an email in useAuth, if not, it's redirected to log in page. 
    This implies that everytime the page is refreshed the user need to log in again.

- add user to a lobby : 
    the 'add Member' button is created
    a UserList component is created as well as a useUserList and Context this would alow to switch between displaying the list of member of a lobby and
    a list of all user to add to the lobby. We could also add a search bar

### To do
- Private message
- Add sockets or other way to update message list when a new message is send from another user.


## Back-End Integration

LokkerRoom front-end communicates with the back-end server using RESTful APIs. The back-end handles user authentication, lobby management, and message routing.
see endpoint in Readme file of the API

## Authentication

The front-end application handles user authentication by sending requests to the back-end server and storing the received JWT token in local storage. However, there's a current issue where users are redirected to the login page upon page refresh, requiring them to log in again.

## Contributing

We welcome contributions from the community to help improve LokkerRoom. If you'd like to contribute, please follow these guidelines:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request with a detailed description of your changes.

