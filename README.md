# Code-Sync

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socketdotio&logoColor=white) ![CodeMirror](https://img.shields.io/badge/Editor-CodeMirror-D30707)

A real-time collaborative code editor. Create a room, share its ID, and everyone in the room edits the same code live, then compiles and runs it in Python, C++, Java or JavaScript without leaving the browser.

**Live demo:** [code-sync.onrender.com](https://code-sync.onrender.com) (free tier, the first load can take a few seconds)

![Code-Sync home](https://user-images.githubusercontent.com/78805153/194740808-026f8a6d-3ed9-48ed-b41b-211f0115ce60.png)
![Code-Sync editor](https://user-images.githubusercontent.com/78805153/227757217-46f671db-75cf-4e3e-82a7-376cb1c847ee.png)

## Features

- **Rooms:** generate a unique room ID (UUID) or join an existing one, and copy the ID to share it.
- **Live editing:** every keystroke is broadcast to the room over Socket.IO, and new joiners are synced to the current code.
- **Presence:** see who is in the room, with toasts when people join or leave.
- **Run code:** compile and execute Python, C++, Java or JavaScript with custom stdin, through a code-compiler API on RapidAPI.
- **Editor:** CodeMirror with the Dracula theme, line numbers and auto-closing brackets and tags.

## Tech stack

React · React Router · CodeMirror · Socket.IO · Node.js and Express (serves the build and the socket server) · RapidAPI code compiler

## Run locally

```bash
git clone https://github.com/tanwarAalok/Code-Sync.git
cd Code-Sync
npm install
```

Create a `.env` file:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the socket server and the React dev server in two terminals:

```bash
npm run server:dev     # Express + Socket.IO
npm run start:front    # React on http://localhost:3000
```

For a production-style run, `npm run build` and then `npm run server:pod` serves the build from Express.
