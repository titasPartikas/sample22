const groceriesList = document.querySelector('.groceries');

export const createGroceryItem = (name) => {
    const itemContainer = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const actionsContainer = document.createElement('div');
    const editBtn = document.createElement('button');
    const editIcon = document.createElement('span');
    const deleteBtn = document.createElement('button');
    const deleteIcon = document.createElement('span');

    itemContainer.classList.add('grocery');
    nameParagraph.textContent = name;
    editBtn.classList.add('edit');
    editIcon.classList.add('material-symbols-outlined');
    editIcon.textContent = 'edit';
    deleteBtn.classList.add('remove');
    deleteIcon.classList.add('material-symbols-outlined');
    deleteIcon.textContent = 'delete';

    editBtn.append(editIcon);
    deleteBtn.append(deleteIcon);
    actionsContainer.append(editBtn, deleteBtn);
    itemContainer.append(nameParagraph, actionsContainer);
    groceriesList.append(itemContainer);
}