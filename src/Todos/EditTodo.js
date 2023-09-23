import React, { useState } from 'react';

function EditTodo({ closeEdit, title, about, onSave }) {
    const [editedTitle, setEditedTitle] = useState(title);
    const [editedAbout, setEditedAbout] = useState(about);

    const handleTitleChange = (e) => {
        setEditedTitle(e.target.value);
    };

    const handleAboutChange = (e) => {
        setEditedAbout(e.target.value);
    };

    const saveChanges = () => {
        if (editedTitle != '') {
            onSave(editedTitle, editedAbout);
            closeEdit();
        }
    };

    return (
        <div className="dialog-edit">
            <input
                className="edit-title"
                type="text"
                placeholder="Title..."
                value={editedTitle}
                onChange={handleTitleChange}
            />
            <input
                className="edit-about"
                type="text"
                placeholder="About..."
                value={editedAbout}
                onChange={handleAboutChange}
            />
            <div className="edit-confirm">
                <button onClick={closeEdit}>Cancel</button>
                <button onClick={saveChanges}>Save</button>
            </div>
        </div>
    );
}

export default EditTodo;
