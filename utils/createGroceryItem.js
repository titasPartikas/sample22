import { localStorageKeys } from "../constants/localStorageKeys.js";
import { store } from "../storage/store.js";
import { getDataFromLocalStorage } from "./storageManagement/getDataFromLocalStorage.js";

const groceriesList = document.querySelector('.groceries');

export const createGroceryItem = (grocery) => {
    const itemContainer = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const actionsContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    const editIcon = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('span');

    itemContainer.classList.add('grocery');
    nameParagraph.textContent = grocery.name;
    editBtn.classList.add('edit');
    editIcon.classList.add('material-symbols-outlined');
    editIcon.textContent = 'edit';
    deleteBtn.classList.add('remove');
    deleteIcon.classList.add('material-symbols-outlined');
    deleteIcon.textContent = 'delete';

    editBtn.addEventListener('click', () => {
        const groceries = getDataFromLocalStorage(localStorageKeys.groceries);
        const editableGroceryIndex = groceries.findIndex((groceryFromLocalStorage) => {
            if (groceryFromLocalStorage.id === grocery.id) {
                return true;
            }
        });
        store.editableGroceryIndex = editableGroceryIndex;
    })
    deleteBtn.addEventListener('click', () => {
        console.log(grocery);
    })

    editBtn.append(editIcon);
    deleteBtn.append(deleteIcon);
    actionsContainer.append(editBtn, deleteBtn);
    itemContainer.append(nameParagraph, actionsContainer);
    groceriesList.append(itemContainer);
}