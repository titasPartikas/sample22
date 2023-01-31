import { createGroceryItem } from './utils/createGroceryItem.js';
import { getDataFromLocalStorage } from './utils/storageManagement/getDataFromLocalStorage.js';
import { setupLocalStorage } from './utils/storageManagement/setupLocalStorage.js';
import { localStorageKeys } from './constants/localStorageKeys';

setupLocalStorage();

const addGroceryBtn = document.querySelector('#add');
const groceryInput = document.querySelector('#grocery-input');
addGroceryBtn.addEventListener('click', () => {
    createGroceryItem(groceryInput.value);
});

const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
groceriesFromLocalStorage.forEach((grocery) => {
    createGroceryItem(grocery);
})
