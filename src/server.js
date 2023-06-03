const app = require("./app");
const connectDB = require("./config/db");
const { serverPort } = require("./secret");

app.listen(serverPort, async () => {
  console.log(`Your server is ready in ${serverPort} port`);
  await connectDB();
});
