import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'https://us-central1-webclone-b9eb0.cloudfunctions.net/api'
     

    // For testing purposes below
    //   localhost address here
})

export default instance;