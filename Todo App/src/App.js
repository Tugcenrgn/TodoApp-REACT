import React from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";

function Todo({ todo, index, checkTodo, removeTodo }) {
  return (
    <div className="todo">
      <span
        className="span-item"
        style={{ textDecoration: todo.isCheck ? "line-through" : "" }}
      >
        {todo.text}
      </span>
      <div>
        <Button onClick={() => checkTodo(index)}> ✔ </Button>
        <Button onClick={() => removeTodo(index)}> ✖ </Button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b className="header2">AddTodo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="add new todo"
        />
      </Form.Group>
      <Button className="submitButton" type="submit">
        {" "}
        Submit{" "}
      </Button>
    </Form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "first todo",
      isCheck: false
    }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const checkTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCheck = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text">TODO LİST</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  checkTodo={checkTodo}
                  removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
