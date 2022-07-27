import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { jobsController } from "./Controllers/JobsController.js";

class App {
  // valuesController = new ValuesController();
  carsController = new CarsController()

  housesController = new HousesController()

  jobsController = new jobsController()
}

window["app"] = new App();
