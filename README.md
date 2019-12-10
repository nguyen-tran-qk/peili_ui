# PEILI - MIRROR project (UI implementation) [![Build Status](https://travis-ci.com/nguyenkevtran/peili_ui.svg?branch=develop)](https://travis-ci.com/nguyenkevtran/peili_ui)
![cover image](https://www.metropolia.fi/fileadmin/_processed_/csm_UnelmienKartta_0e53a65d75.jpg)

## The idea
**Peili** is a project, initiated and back by Metropolia University of Applied Sciences (Metropolia UAS), to support the life management of young men at risk of exclusion. More information about this project can be read here: https://www.metropolia.fi/tutkimus-kehittaminen-ja-innovaatiot/hankkeet/peili-loydavahvuutesi/

## The team - VNT, and the mission
We are team VNT, consisting of 3 IT students from Metropolia UAS, with the responsibility to build a progressive web application that serves as a front-end in the **Peili** system. The goal is to provide a back-end independent and reliable proof of concept, but still represent the core features of Peili application coming in the near future.

#### VNT team member:
* [@tranhuyviet](https://github.com/tranhuyviet)
* Me - nguyentran
* [@ductoanthanh](https://github.com/ductoanthanh)

## Setup
To fire this up and run it in development environment:
1. Clone this repo then `cd` to the repo directory
2. In terminal, run `npm install` to install dependencies.
2. Run `npm run start` to start the dev server and the application will be serve at [http://localhost:3000](http://localhost:3000)

#### Other commands:
* `npm run test`: to run unit test cases. Unfortunately, we're not having many test cases at the moment.
* `npm run build`: to make an optimized production build that can be deployed.

## CI/CD
We use Travis to do the pipelines [https://travis-ci.com/nguyenkevtran/peili_ui](https://travis-ci.com/nguyenkevtran/peili_ui)

## Live demo
We have set up our develop branch as the auto-deploy branch on Heroku. You can see the app live here: [https://peili-vnt.herokuapp.com/](https://peili-vnt.herokuapp.com/)
