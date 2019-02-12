# Aerospace React Native Boilerplate

_Note_: This documentation is slightly outdated and updating it is not relevant to the aerospace projects since we have no need for react native right now.

# Comments With Regards to IAR/Personalization

- This version of the boilerplate is for React Native, not web. You'll see the elements used are not HTML tags and minor differences than what you are used to. However, the usage of libraries and the strure of the application is the same.

_Everything below this point is outdated_

# React Native Boilerplate

- Mobile application code is in the `App` folder. The top level `package.json` is the package file for the mobile application
- Server code is in the `server` folder. `server/package.json` is the package file for the server.

_NOTE_: If you can't make requests to your local server from the app, [see this post](https://stackoverflow.com/questions/36289125/react-native-fetch-from-https-server-with-self-signed-certificate)

## Installation

1. Follow the steps under the Building Projects with Native Code section on the [React Native Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) page
1. Clone the repo `git clone git@bitbucket.org:aero/aero.git`
1. Enter the cloned folder via `cd aero`
1. Install the mobile application dependences with `npm i` or `yarn`
1. Enter the server folder via `cd server`
1. Install the server dependences with `npm i` or `yarn`
1. Build the server docker images with `docker-compose build`

## Running the App

1. From the repository base directory run `cd server && docker-compose up` to start the server.
1. Launch the iOS React Native application via `react-native run-ios` or through VSCode via the [React Native Tooling](https://marketplace.visualstudio.com/items?itemName=vsmobile.vscode-react-native)

## References

### Mobile Application

The mobile application is built with React Native through the [Ignite CLI](https://github.com/infinitered/ignite) using the [Infinite Red Andross Boilerplate](https://github.com/infinitered/ignite-ir-boilerplate-andross)

### Server
