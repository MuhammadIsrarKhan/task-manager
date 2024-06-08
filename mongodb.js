const { MongoClient } = require("mongodb");

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "task-manager";

const client = new MongoClient(connectionUrl);
async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const result = await db
    .collection("users")
    .insertOne({ name: "Muhammad Israr khan", age: 25 });
  console.log(result);
  return "done.";
}
main().then(console.log).catch(console.error);
// .finally(() => client.close());
