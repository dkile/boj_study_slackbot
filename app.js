const { WebClient } = require("@slack/web-api");
const dotenv = require("dotenv");

dotenv.config();
const web = new WebClient(process.env.SLACK_TOKEN);

const currentTime = new Date().toTimeString();

(async () => {
  try {
    await web.chat.postMessage({
      channel: "#boj_test",
      text: `The current time is ${currentTime}`,
    });
    console.log("Message posted");
  } catch (err) {
    console.error(err);
  }
})();
