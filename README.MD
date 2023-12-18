
# DEVELOPMENT using Docker

## Setup
- **requirements**: 
	- docker installed **and** running in background
	- git installed 

1) Clone repo `git clone https://github.com/Mission-Ready-Mission-5-Group/mission-5-mern.git`

2) Change directory into the repo: `cd mission-5-mern`

3) Install packages for intellisense: `npm install && npm install --prefix ./client && npm install --prefix ./server`

4) To prevent potential conflicts with old docker run: `docker system prune -a`

5) run: `docker-compose up`

6) Done! Client running on: `localhost:5173` Server running on: `localhost:8000`

# DEVELOPMENT (old version)

## Setup
- The current setup requires you to use **TWO** separate terminal windows. One for the frontend vite server, and one for the backend express server.

1) Clone repo `git clone`
2) Create another terminal for your client or server
3) **Client Setup**

	3.1) move into client folder: `cd client`

	3.2) `npm i`

	3.3) Run dev server: `npm run dev`
4) **Server Setup**

	4.1) move into backend folder: `cd server`

	4.2) create a `.env` with these settings:

	```ts
	PORT=8000
	MONGO_HOST=127.0.0.1
	NODE_ENV=development
	```

	4.3) `npm i`

	4.4) Run dev server: `npm run dev`
