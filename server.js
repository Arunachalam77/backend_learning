const express = require("express");
const app = express();
const PORT = 6000;

// Import the items controller.js
const itemsController = require("./controller");

app.use(express.json());

// Routes
app.get("/items", itemsController.getAllItems);
app.get("/items/:id", itemsController.getItemById);
app.post("/items", itemsController.createItem);
app.put("/items/:id", itemsController.updateItem);
app.delete("/items/:id", itemsController.deleteItem);

app.listen(PORT, () => {
  console.log(`Server is running  port ${PORT}`);
});
