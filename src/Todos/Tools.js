// Tools.js
import React, { useState } from 'react';
import EditTodo from './EditTodo';
import Sharebox from './Sharebox';

function Tools({ title, about, onSave, onInfoClick }) {
    const [editOpen, setEditOpen] = useState(false);
    const [shareboxOpen, setShareboxOpen] = useState(false);

    const handleSaveChanges = (editedTitle, editedAbout) => {
        onSave(editedTitle, editedAbout);
        setEditOpen(false);
    };

    const handleInfoClick = () => {
        onInfoClick(true);
    };

    const handleShare = () => {
        setShareboxOpen(!shareboxOpen);
    };

    const closeModal = () => {
        setEditOpen(false);
        setShareboxOpen(false);
    };

    return (
        <div className="tools ">
            <div className="share">
                <span className="material-symbols-outlined" onClick={handleShare}>
                    share
                </span>
                {shareboxOpen && <div className="modal-background" onClick={closeModal}></div>}
                {shareboxOpen && (
                    <Sharebox
                        closeShare={() => {
                            setShareboxOpen(false);
                        }}
                        onSave={handleShare}
                    />
                )}
            </div>
            <div className="info">
                <span className="material-symbols-outlined" onClick={handleInfoClick}>
                    info_i
                </span>
            </div>

            <div className="edit">
                <span className="material-symbols-outlined" onClick={() => setEditOpen(true)}>
                    edit
                </span>
                {editOpen && <div className="modal-background" onClick={closeModal}></div>}
                {editOpen && (
                    <EditTodo
                        closeEdit={() => {
                            setEditOpen(false);
                        }}
                        title={title}
                        about={about}
                        onSave={handleSaveChanges}
                    />
                )}
            </div>
        </div>
    );
}

export default Tools;
