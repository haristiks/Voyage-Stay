import axios from "axios";

// Create the instance with settings
const instance = axios.create({
  baseURL: "http://localhost:8000",
});
// instance.defaults.withCredentials = true;
instance.defaults.headers.common['Content-Type'] = 'application/json';

// Export the instance for use elsewhere
export default instance;
