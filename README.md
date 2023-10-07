<div align="center">
<h1 align="center">
<img src="https://github.com/047pegasus/bookit/blob/92f771535d0a8c5988151efa987ef627624bf05d/bookit/public/favicon25.png" width="100" />
<br>bookit</h1>
<h3>◦ An Online Bookstore for all 📖</h3>
<h3>◦ Developed with MERN and other cutting edge tools.</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style&logo=MongoDB&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Node.js-43853D?style&logo=node.js&logoColor=white" alt="NodeJS"/>
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style&logo=Axios&logoColor=white" alt="Axios" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
  
</p>
<img src="https://img.shields.io/github/license/047pegasus/bookit?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/047pegasus/bookit?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/047pegasus/bookit?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/047pegasus/bookit?style&color=5D6D7E" alt="GitHub top language" />
</div>
<br/>
<div align="center">
  <img src="https://socialify.git.ci/047pegasus/bookit/image?description=1&font=Raleway&language=1&name=1&owner=1&pattern=Charlie%20Brown&theme=Dark" alt="bookit" width="640" height="320" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
    - [🔧 Installation](#-installation)
    - [🤖 Running bookit](#-running-bookit)
    - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview
Bookit is an online bookstore application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This web application allows users to list books for sale and purchase books from other users. The MongoDB database is deployed locally, and user authentication (login and signup) is powered by MongoDB Atlas.

---

## 📦 Features



---


## 📂 Repository Structure

```sh
└── bookit/
    ├── LICENSE
    ├── README.md
    └── bookit/
        ├── .gitignore
        ├── README.md
        ├── package-lock.json
        ├── package.json
        ├── public/
        └── src/
```


---

## ⚙️ Modules

<details closed><summary>Src</summary>

| File                                                                                               | Summary                   |
| ---                                                                                                | ---                       |
| [App.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/App.js)                         | Contains all Routes to the pages using React-Router along with a private route that encapsulates all other feature routes for logged in users. |

</details>

<details closed><summary>Contexts</summary>

| File                                                                                                  | Summary                   |
| ---                                                                                                   | ---                       |
| [user.context.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/contexts/user.context.js) | Captures User context when user is logged in as well as contains signup and signin SDK methods from Realm in Mongo. |

</details>

<details closed><summary>Components</summary>

| File                                                                                          | Summary                   |
| ---                                                                                           | ---                       |
| [NavBar.css](https://github.com/047pegasus/bookit/blob/main/bookit/src/components/NavBar.css) |   Styling Sheet for Navbar |
| [NavBar.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/components/NavBar.js)   | Navbar implementation for the App |

</details>

<details closed><summary>Backend</summary>

| File                                                                                     | Summary                   |
| ---                                                                                      | ---                       |
| [server.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/backend/server.js) | Actual Backend Logic; Houses all API endpoints and thier logic.|

</details>

<details closed><summary>Realm</summary>

| File                                                                                         | Summary                   |
| ---                                                                                          | ---                       |
| [constants.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/realm/constants.js) | Realm SDK Application URI Connection String |

</details>

<details closed><summary>Pages</summary>

| File                                                                                                         | Summary                   |
| ---                                                                                                          | ---                       |
| [Profile.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Profile.page.js)           | Profile Page for logged in user. |
| [Login.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Login.page.js)               | Login Page for user.|
| [UserListings.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/UserListings.js)           | Page where user can biew all his/her  made listings on the webstore. |
| [Listbook.css](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Listbook.js)                  | Page where user can list a book by filling a simple form with details about the book. |
| [History.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/History.page.js)           | Page to atore all history and transactions made by user.  |
| [Home.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Home.page.js)                 | Default landing page for logged in users.|
| [Cart.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Cart.page.js)                 | Basic Cart functionality page.|
| [PrivateRoute.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/PrivateRoute.page.js) | Component housing logic to redirect and route to home page if user is logged in. |
| [Reset.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Reset.page.js)               | Page meant to reset user forgotten password.|
| [Signup.page.js](https://github.com/047pegasus/bookit/blob/main/bookit/src/pages/Signup.page.js)             | SignUp page for user.|

</details>

---

## 🚀 Getting Started

***Dependencies***

Please ensure you have the following dependencies installed on your system:

`- ℹ️ NodeJS`

`- ℹ️ MongoDB Client`

`- ℹ️ Mongo Compass`

### 🔧 Installation

1. Clone the bookit repository:
```sh
git clone https://github.com/047pegasus/bookit
```

2. Change to the project directory:
```sh
cd bookit
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Running Bookit:
<b> Before running make sure to set the APP_ID= "application-0-tgmfc" in "src/realm/constants.js".</b>
<b> Also make sure to login in to the application using given sample email id and password only for current time until next update to the app. </b>
<br/>
<b> <i> After that you are ready to roll the application!! ✅🚀 </i> </b>

```
Email ID: tanishqoct11@gmail.com
Password: Test@123
```

   In a terminal open two sessions and run each command group in a separate session.
```sh
npm start
```
```sh
cd src/backend
node server.js
```

---

## 🛣 Roadmap

> - [ ] `ℹ️  Task 1: Fix Bug on Login/SignUp/Reset Page (problems due to improper documentation availability of New Realm SDK for MongoDB Apps)`
> - [ ] `ℹ️  Task 2: Fix Bug on Cart Page (error in app when deleting a bok from cart)`
> - [ ] `ℹ️  Task 3: Implement Book Cover addition feature while listing a book.`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  LICENSE-TYPE` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

`- ℹ️ https://www.mongodb.com/`
`- ℹ️ https://www.mongodb.com/docs/realm/web/manage-email-password-users/`
`- ℹ️ https://www.mongodb.com/try/download/community`
`- ℹ️ https://www.mongodb.com/try/download/compass`
`- ℹ️ https://www.mongodb.com/try/download/shell`

[↑ Return](#Top)

---
