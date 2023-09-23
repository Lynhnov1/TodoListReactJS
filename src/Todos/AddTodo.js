import React, { useState, useEffect, useRef } from 'react';
import EditTodo from './EditTodo';

function AddTodo({ addNewTodo, isInfoClicked, title: initialTitle, about: initialAbout, onSave }) {
    const [title, setTitle] = useState(initialTitle || '');
    const [about, setAbout] = useState(initialAbout || '');
    const [editOpen, setEditOpen] = useState(false);
    const [buttonText, setButtonText] = useState(isInfoClicked ? 'edit' : 'add');

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleOnChangeAbout = (event) => {
        setAbout(event.target.value);
    };

    let handleAddClick = () => {
        if (isInfoClicked) {
            setEditOpen(true);
        } else {
            if (!title) {
                return;
            }

            const todo = {
                id: Math.floor(Math.random() * 10000),
                title: title,
                about: about,
            };

            addNewTodo(todo);

            setTitle('');
            setAbout('');

            inputValue1.current.focus();
        }
    };

    const handleSaveChanges = (editedTitle, editedAbout) => {
        onSave(editedTitle, editedAbout);
        closeModal();
    };

    const inputValue1 = useRef();

    useEffect(() => {
        if (isInfoClicked) {
            setButtonText('edit');
        } else {
            setButtonText('add');
        }
    }, [editOpen, isInfoClicked]);

    const closeModal = () => {
        setTitle('');
        setAbout('');

        setEditOpen(false);
    };

    return (
        <div className="formInput">
            <div className="add-todo">
                <input
                    ref={inputValue1}
                    value={isInfoClicked ? initialTitle || '' : title}
                    type="text"
                    placeholder="Title..."
                    onChange={handleOnChangeTitle}
                />
                <input
                    value={isInfoClicked ? initialAbout || '' : about}
                    type="text"
                    placeholder="About..."
                    onChange={handleOnChangeAbout}
                />
            </div>

            <span className="material-symbols-outlined" onClick={handleAddClick}>
                {buttonText}
            </span>

            {editOpen && <div className="modal-background" onClick={closeModal}></div>}
            {editOpen && (
                <EditTodo
                    closeEdit={() => {
                        setEditOpen(false);
                    }}
                    title={initialTitle}
                    about={initialAbout}
                    onSave={handleSaveChanges}
                />
            )}
        </div>
    );
}

export default AddTodo;
