import React from 'react';

function ConfirmDelete({ closeModal, onDelete }) {
    const handleYesClick = () => {
        onDelete();
        closeModal();
    };

    const handleNoClick = () => {
        closeModal();
    };

    return (
        <div className="dialog-content">
            <h2>Delete this Task?</h2>
            <div>
                <button className="yes" onClick={handleYesClick}>
                    Yes
                </button>
                <button className="no" onClick={handleNoClick}>
                    No
                </button>
            </div>
        </div>
    );
}

export default ConfirmDelete;
