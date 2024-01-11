const CarController = require("../controllers/cars.controller");


module.exports = app => {
app.get("/api/cars", CarController.findAllCars);
app.get("/api/cars/count", CarController.countAllCars);
app.get("/api/cars/:id", CarController.findOneCar);
app.patch("/api/cars/:id", CarController.updateExistingCar);
app.post("/api/cars", CarController.createNewCar);
app.delete("/api/cars/:id", CarController.DeleteOneCar);
};
