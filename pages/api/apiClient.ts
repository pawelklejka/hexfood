import axios from "axios";

export default axios.create({
    baseURL: "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes",
    headers: {
        "Content-type": "application/json"
      }
})