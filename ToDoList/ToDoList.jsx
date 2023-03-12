import React from 'react';
import { Todo } from './ToDoItem/TodoItem';
import { TodoListStyled, TodoListStyledItem } from './ToDoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <TodoListStyled>
      {todos.map(({ id, text, completed }) => (
        <TodoListStyledItem
          style={{
            outline: completed && '1px solid green',
            border: completed && '1px solid transparent',
          }}
          key={id}
        >
          <Todo
            onToggleCompleted={() => {
              onToggleCompleted(id);
            }}
            onDeleteTodo={() => {
              onDeleteTodo(id);
            }}
            text={text}
            completed={completed}
          />
        </TodoListStyledItem>
      ))}
    </TodoListStyled>
  );
};

export default TodoList;
