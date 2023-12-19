
# Getting Started

## DEVELOPMENT using Docker

### ❗ Onboarding Notes ❗ 
#### General
- If you see any code with or relating to `workouts`, that's old code from the template. Currently it only exists as a means of testing that our client, server and database still work as expected, but we'll phase it out with our own code
- Remember to `git pull` or `git fetch` before `git push`ing to master branch, to check and resolve any conflicts. Master branch should be free of errors. 

#### Server
- Define your routes in: `server/routers`
- Schemas, models, validators and types go into: `server/validatorsmodelstypes`
#### Client
- Define your client pages in `client/src/pages`
- Define your client components in `client/src/components`
- If you do any fetch requests from the client to the server do so like this `fetch("/api/properties/")` . Do NOT add the `localhost:8000` part. Don't do this: `fetch("localhost:8000/api/properties/")` as it will cause a network error
### ⭐ Setup ⭐
- You have these tools installed: 
	- Docker 
	- git  
	- npm  

1) Clone repo `git clone https://github.com/Mission-Ready-Mission-5-Group/mission-5-mern.git`

2) Change directory into the repo: `cd mission-5-mern`

3) Install packages for intellisense: 
```
npm install
npm install --prefix ./client
npm install --prefix ./server

 ```

4) Check that Docker Desktop is opened and not paused. You will get an error in the next step if it is not currently running.

5) To prevent potential conflicts with old docker resources run: `docker system prune -a`

6) Type `y` and press enter to accept

7) Run: `docker-compose up` You may get an error when running this command, if so run it again.

8) Done! You can view the vite client running on `localhost:5173` on your browser. You can also interact with the server at `localhost:8000` and the mongodb server on `localhost:27017` (though to interact with mongodb you must turn off your mongodb service in Window's services.msc)

NOTE: Docker sometimes caches resources, so if you've made changes but they don't seem to be appearing try running `docker system prune -a` then `docker-compose up`
