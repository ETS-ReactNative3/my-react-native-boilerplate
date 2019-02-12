# Bare Installation

How to install from a clean machine

1. Install xcode via tha app store
1. Install brew `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
1. Install the following brew packages

```bash
brew cask install google-chrome
brew install watchman
```

1. Install Node via nvm

```bash
touch ~/.bash_profile
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash -l
nvm install 10.11.0
nvm use 10.11.0
nvm alias default 10.11.0
npm install -g npm
```

1. Install Docker via the Community Store
1. Install the React Native CLI `npm install -g react-native-cli`
1. Install Cocoapods `sudo gem install cocoapods`
1. Clone the Aero Repo `git clone git@bitbucket.org:aero/aero.git && cd aero`
1. Install all pods `cd ios/ && pod install`
1. Open the xcode workspace file `open ios.Aero.xcworkspace`
1. Open Preferences -> Accounts and add your apple developer account
