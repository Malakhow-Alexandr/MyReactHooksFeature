import React from 'react';

import { ToDoDiscription, Button } from '../ToDoList.styled';

export const Todo = ({ onToggleCompleted, onDeleteTodo, text, completed }) => {
  return (
    <>
      <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
      <ToDoDiscription>{text}</ToDoDiscription>
      <Button type="button" onClick={onDeleteTodo}>
        Delete
      </Button>
    </>
  );
};
