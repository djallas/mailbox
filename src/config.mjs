let config = {};
const location = window.location;
config.url = 'http://localhost:3000/api/v2/';
if(location.host != '127.0.0.1:5500') config.url = "https://epicmailbox.herokuapp.com/api/v2/";
export default config;