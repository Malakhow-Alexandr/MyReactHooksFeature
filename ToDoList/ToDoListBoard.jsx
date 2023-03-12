import React, { Component } from 'react';
import TodoList from './ToDoList';
import initialTodos from '../../todos.json';
import {
  TodolistBoardContainer,
  BoardDescription,
} from './ToDoListBoard.styled';
import { TodoEditor } from 'components/ToDoList/TodoEditor/TodoEditor';
import { TodoFilter } from 'components/ToDoList/TodoFilter/TodoFilter';
import { Modal } from 'components/Modal/Modal';
import { IconButton } from 'components/IconButton/IconButton';
import { ReactComponent as Pacman } from '.././Icons/pacman.svg';
import { nanoid } from 'nanoid';

export class TodoListBoard extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };

  componentDidMount() {
    const saveTodos = localStorage.getItem('todos');
    if (saveTodos !== null) {
      const parsedTodos = JSON.parse(saveTodos);
      this.setState({ todos: parsedTodos });
      return;
    }
    this.setState({ todos: initialTodos });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
    this.toggleModal();
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { todos, filter } = this.state;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredTodos = this.state.todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
    return (
      <TodolistBoardContainer>
        <BoardDescription>Todos quantity: {todos.length}</BoardDescription>
        <BoardDescription>Completed Todo: {completedTodos}</BoardDescription>
        <IconButton onClick={this.toggleModal}>
          <Pacman width="20" height="20"></Pacman>
        </IconButton>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo}></TodoEditor>
            <IconButton onClick={this.toggleModal}>
              <Pacman width="20" height="20"></Pacman>
            </IconButton>
          </Modal>
        )}

        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </TodolistBoardContainer>
    );
  }
}
