const { App } = require("@slack/bolt");

const TOKEN = "xoxb-"; // Replace me!
const SIGNING_SECRET = ""; // At time of writing, it's on the "Basic Information page"
const APP_TOKEN = "xapp-"; // Replace me!

const USERGROUP_ID = ""; // The ID of the user group that we'll ping every time!
const CHANNEL_ID = ""; // The ID of channel we operate in, which was #surroundings for us

// Initializes your app with your bot token and signing secret
const app = new App({
  token: TOKEN,
  signingSecret: SIGNING_SECRET,
  appToken: APP_TOKEN,
  socketMode: true,
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  // Uncomment this block for pinging

  /*
  let users = await app.client.usergroups.users.list({
    usergroup: USERGROUP_ID,
  });

  let userlist = "";
  users.users.map((user) => (userlist += `<@${user}> `));

  app.client.chat.postMessage({
    channel: CHANNEL_ID,
    text:
      "⚠️ *Time to be undeniably true!* ⚠️\n\nYour prompt is: gratitude.\n\n" +
      userlist,
  });
  */

  // Uncomment this for ending the session

  /*
  app.client.chat.postMessage({
    channel: CHANNEL_ID,
    text: "Tiiimes up! Congratulations to everyone who was :undeniablytrue: today. Feel free to still send something — I'd love to see it! :)",
  });
  */

  console.log("⚡️ Bolt app is running!");
})();

// For pinging the user group directly (may be less reliable than pinging individual users), use this format:
// `<!subteam^${USERGROUP_ID}>`
