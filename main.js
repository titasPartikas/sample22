import { createGroceryItem } from './utils/createGroceryItem.js';
import { getDataFromLocalStorage } from './utils/storageManagement/getDataFromLocalStorage.js';
import { setupLocalStorage } from './utils/storageManagement/setupLocalStorage.js';
import { localStorageKeys } from './constants/localStorageKeys.js';
import { setDataToLocalStorage } from './utils/storageManagement/setDataToLocalStorage.js';
import { store } from './storage/store.js';

setupLocalStorage();

const addGroceryBtn = document.querySelector('#add');
const groceryInput = document.querySelector('#grocery-input');
addGroceryBtn.addEventListener('click', () => {
    if (store.editableGroceryIndex >= 0) {
        console.log('edit mode')
    } else {
        const grocery = {
            id: Math.random(),
            name: groceryInput.value,
        };
        createGroceryItem(grocery);
        const groceries = getDataFromLocalStorage(localStorageKeys.groceries);
        setDataToLocalStorage(localStorageKeys.groceries, [...groceries, grocery])
    }
});

const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
groceriesFromLocalStorage.forEach((grocery) => {
    createGroceryItem(grocery);
})
