import { TodoCounter } from './todoItems/TodoCounter';
import { TodoSearch } from './todoItems/TodoSearch';
import { TodoList } from './todoItems/TodoList';
import { CreateTodoButton } from './todoItems/CreateTodoButton';
import { TodoItem } from './todoItems/TodoItem';
import React from 'react';


const defatultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React.js', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALALALALALA', completed: false },
  { text: 'probando', completed: false }
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={2} total={3} />
      <TodoSearch />
      <TodoList>

        {defatultTodos.map(todo => (
          <TodoItem key={todo.text} completed={todo.completed} text={todo.text} />
        ))
        }
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
