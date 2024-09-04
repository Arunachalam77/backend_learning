
let items = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 25
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    age: 35
  },
];

  
  exports.getAllItems = (req, res) => {
    res?.send({
      success: true,
      message: "Data Fetched Successfully!",
      data: items,
    });
  };
  
  exports.getItemById = (req, res) => {
    const { id } = req?.params;
    const item = items?.find((i) => i?.id === parseInt(id));
    if (!item) {
      return res?.status(400).send({
        success: false,
        message: "Item Not Found",
      });
    }
    res?.status(200).send({
      success: true,
      message: "Data Fetch Successfully!",
      data: item,
    });
  };
  
  exports.createItem = (req, res) => {
    const { name, email, age } = req?.body;
  
    if (!name || !email || !age) {
      return res?.status(400)?.send({
        success: false,
        errors: [
          { field: "name", message: "Name field is required" },
          { field: "email", message: "Email field is required" },
          { field: "age", message: "Age field is required" },
        ],
      });
    }
  
    const newItem = {
      id: items?.length + 1,
      name,
      email,
      age,
    };
    items?.push(newItem);
  
    res?.status(200)?.send({
      success: true,
      message: "Data Added Successfully!",
    });
  };
 
  
  exports.updateItem = (req, res) => {
    const { id } = req?.params;
    const { name, email, age } = req?.body;
    const item = items?.find((i) => i?.id === parseInt(id));
  
    if (!item) {
      return res?.status(404)?.send({
        success: false,
        message: "Item Not Found",
      });
    }
  
    // Validate that at least one field is present for updating
    if (!name && !email && !age) {
      return res?.status(400)?.send({
        success: false,
        message: "At least one field (name, email, or age) must be provided",
      });
    }
  
    // Update fields only if provided
    if (name) item.name = name;
    if (email) item.email = email;
    if (age) item.age = age;
  
    res?.status(200).send({
      success: true,
      message: "Item Updated Successfully!",
    });
  };
  
  
  
  // DELETE an item by ID
  exports.deleteItem = (req, res) => {
    const { id } = req?.params;
    const itemIndex = items?.findIndex((i) => i?.id === parseInt(id));
  
    if (itemIndex === -1) {
      return res?.status(404)?.send({
        success: false,
        message: "Item Not Found",
      });
    }
  
    items?.splice(itemIndex, 1);
  
    res?.status(200)?.send({
      success: true,
      message: "Data Deleted Successfully!",
    });
  };
  