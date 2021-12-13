import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline,
    MdCheckBox
} from 'react-icons/md';
import './TodoListItem.css';

const TodoListItem = (props) => {
    const { id, text, checked } = props.todo;
    return (
        <div className="TodoListItem">
            <div className={checked ? 'checkbox checked' : 'checkbox'}
                onClick={() => props.onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => {
                props.onRemove(id);
            }}>
            <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};
export default TodoListItem;