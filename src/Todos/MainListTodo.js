import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ConfirmDelete from './ConfirmDelete';
import TodoList from './TodoList';

function MainListTodo() {
    const [listTodos, setListTodos] = useState([
        {
            id: 'todo01',
            title: 'ăn sáng',
            about: '20 cá',
        },
        {
            id: 'todo02',
            title: 'tư bản',
        },
        {
            id: 'todo03',
            title: 'ăn trưa',
            about: '20 cá',
        },
        {
            id: 'todo04',
            title: 'không làm gì',
            about: 'chil chill',
        },
    ]);

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletingItemId, setDeletingItemId] = useState(null);

    const addNewTodo = (todo) => {
        setListTodos([...listTodos, todo]);
    };

    const handleToolTodo = (itemId) => {
        setSelectedItem((prevSelectedItem) => (prevSelectedItem === itemId ? null : itemId));
    };

    const handleDeleteTodo = (todo) => {
        setIsModalOpen(true);
        setDeletingItemId(todo.id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setDeletingItemId(null);
    };

    const deleteTodo = () => {
        if (deletingItemId !== null) {
            const updatedList = listTodos.filter((item) => item.id !== deletingItemId);
            setListTodos(updatedList);
            closeModal();
        }
    };

    const handleSaveChanges = (editedTitle, editedAbout, taskId) => {
        const updatedTodos = listTodos.map((todo) => {
            if (todo.id === taskId) {
                return {
                    ...todo,
                    title: editedTitle,
                    about: editedAbout,
                };
            }
            return todo;
        });

        setListTodos(updatedTodos);
    };

    const [isInfoClicked, setIsInfoClicked] = useState(false);
    const [selectedInfoItemId, setSelectedInfoItemId] = useState(null);
    const [preInfo, setpreInfo] = useState();

    const handleInfoClick = (itemId) => {
        setSelectedInfoItemId(itemId);
        setpreInfo(itemId);
        setIsInfoClicked(isInfoClicked ? itemId !== preInfo : true);
    };

    return (
        <div className="app">
            <AddTodo
                addNewTodo={addNewTodo}
                isInfoClicked={isInfoClicked}
                title={listTodos.find((item) => item.id === selectedInfoItemId)?.title || ''}
                about={listTodos.find((item) => item.id === selectedInfoItemId)?.about || ''}
                onSave={(editedTitle, editedAbout) => handleSaveChanges(editedTitle, editedAbout, selectedInfoItemId)}
            />

            <TodoList
                listTodos={listTodos}
                selectedItem={selectedItem}
                handleToolTodo={handleToolTodo}
                handleDeleteTodo={handleDeleteTodo}
                handleSaveChanges={handleSaveChanges}
                handleInfoClick={handleInfoClick}
                isInfoClicked={isInfoClicked}
                selectedInfoItemId={selectedInfoItemId}
            />

            {isModalOpen && <div className="modal-background" onClick={closeModal}></div>}
            {isModalOpen && (
                <div className="dialog-delete">
                    <ConfirmDelete onDelete={deleteTodo} closeModal={closeModal} />
                </div>
            )}
        </div>
    );
}

export default MainListTodo;
