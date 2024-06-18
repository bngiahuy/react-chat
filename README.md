# Starter Chat App Starter 

Status: `ON HOLD`

## Tech stack

* ReactJS
* CSS
* Firebase

---

## Setup
First, you need to install npm packages by running:
`npm install` or `npm i`

Now you need to create a new project in Firebase to get these values to setup environment variables:

```
VITE_FIREBASE_API_KEY=<your_firebase_api_key>
VITE_FIREBASE_AUTH_DOMAIN=<your_firebase_auth_domain>
VITE_FIREBASE_PROJECT_ID=<your_firebase_project_id>
VITE_FIREBASE_STORAGE_BUCKET=<your_firebase_storage_bucket>
VITE_FIREBASE_MESSAGING_SENDER_ID=<your_firebase_messaging_sender_id>
VITE_FIREBASE_APP_ID=<your_firebase_app_id>
```

After that, you can run `npm run dev` to see the demo.

## About this App

**Completed**:

* Sign up
* Login/Logout
* Upload avatar
* Message to other users
* Search for username (strictly search because firebase does not support `LIKE` query operator)

**Not completed**:

* App does not support responsive design (tested on my Laptop, run fine on Edge and Chrome).
* Edit profile info (name, password, etc)
* Send images
* Chat gallery
* Phone call a user
* Video call a user
* Block a user
* Change avatar