import React from 'react';
import Tools from './Tools';
function TodoList({
    listTodos,
    selectedItem,
    handleToolTodo,
    handleDeleteTodo,
    handleSaveChanges,
    handleInfoClick,
    isInfoClicked,
    selectedInfoItemId,
}) {
    return (
        <div className="todo-list">
            {listTodos.length > 0 ? (
                listTodos.map((item) => {
                    const isItemSelected = selectedItem === item.id;
                    return (
                        <div className="formTasks" key={item.id}>
                            <div className="formtodolist">
                                <div className="todo-child" onClick={() => handleToolTodo(item.id)}>
                                    <h1>{item.title}</h1>
                                    {item.about ? <a>{item.about}</a> : ''}
                                </div>
                                <span className="material-symbols-outlined" onClick={() => handleDeleteTodo(item)}>
                                    close
                                </span>
                            </div>

                            {isItemSelected && (
                                <Tools
                                    title={item.title}
                                    about={item.about}
                                    onSave={(editedTitle, editedAbout) =>
                                        handleSaveChanges(editedTitle, editedAbout, item.id)
                                    }
                                    onInfoClick={() => handleInfoClick(item.id)}
                                    isInfoClicked={isInfoClicked}
                                    itemId={item.id}
                                    selectedInfoItemId={selectedInfoItemId}
                                />
                            )}
                        </div>
                    );
                })
            ) : (
                <h3 className="notask">Notask</h3>
            )}
        </div>
    );
}

export default TodoList;
