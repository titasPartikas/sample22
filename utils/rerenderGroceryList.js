import { displayExistingGroceries } from "./displayExistingGroceries.js";
import { removeGroceriesFromUI } from "./removeGroceriesFromUI.js";

export const rerenderGroceryList = () => {
  removeGroceriesFromUI();
  displayExistingGroceries()
};
