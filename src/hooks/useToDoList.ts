import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { nanoid } from "nanoid";

interface Todo {
  id: string;
  text: string;
  createdAt: string;
}

export default function useToDoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo | undefined>(undefined);
  const [editText, setEditText] = useState<string>("");
  const currentDate = dayjs();

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = (text: string) => {
    // if (text.length > 200) return;
    const newTodo: Todo = {
      id: nanoid(),
      text,
      createdAt: currentDate.format("DD/MM/YYYY"),
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(newTodo);
  };

  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja apagar essa tarefa?"
    );
    if (confirmed) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    } else {
      alert("A tarefa não foi apagada!");
    }
  };

  const handleEdit = (id: string) => {
    setIsEditing(true);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setCurrentTodo(todoToEdit);
    setEditText(todoToEdit?.text || "");
  };

  const saveEdit = () => {
    if (editText.length >= 200 || !currentTodo) return;
    const confirmed = window.confirm(
      "Tem certeza que deseja salvar as alterações?"
    );
    if (confirmed) {
      const updatedTodos = todos.map((todo) =>
        todo.id === currentTodo.id
          ? {
              ...todo,
              text: editText,
              createdAt: currentDate.format("DD/MM/YYYY"),
            }
          : todo
      );
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setIsEditing(false);
      setCurrentTodo(undefined);
      setEditText("");
      console.log(currentTodo);
    } else {
      alert("As alterações não foram salvas!");
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentTodo(undefined);
    setEditText("");
  };

  return {
    todos,
    currentTodo,
    editText,
    setEditText,
    isEditing,
    addTodo,
    handleDelete,
    handleEdit,
    saveEdit,
    cancelEdit,
  };
}
