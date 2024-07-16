import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
const {
    setOpenModal,
    addTodo,
} = React.useContext(TodoContext);

const [newTodoValue, setNewTodoValue] = React.useState('');

const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
setOpenModal(false);
};
const onCancel = () => {
setOpenModal(false);
};

const onChange = (event) => {
    setNewTodoValue(event.target.value);
    };
    



return (
    <div className="TodoForm-modalBackground">
    <form onSubmit={onSubmit}>
        <label>Ingresa tarea a realizar</label>
        <textarea
            placeholder="Ir a comprar"
            value={newTodoValue}
            onChange={onChange}
        />
        <div className="TodoForm-buttonContainer">
        <button
        type="button"
        className="TodoForm-button
        TodoForm-button--cancel"
        onClick={onCancel}
        >Cancelar</button>
        <button
        type="submit"
        className="TodoForm-button
        TodoForm-button--add"
        >Añadir</button>
        </div>
    </form>
    </div>
);
}

export {TodoForm};