import ToDo from "../ToDo";
import AddTodo from "../AddToDo";
import { Row, Col } from "antd";
import useToDoList from "../../hooks/useToDoList";

const ToDoList: React.FC = () => {
  const {
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
  } = useToDoList();

  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} md={12} lg={8}>
        <AddTodo onAdd={addTodo} />
      </Col>
      {todos.map((todo) => (
        <Col xs={24} md={12} lg={8} key={todo.id}>
          <ToDo
            id={todo.id}
            text={todo.text}
            createdAt={todo.createdAt}
            onDelete={handleDelete}
            onEdit={handleEdit}
            isEditing={isEditing}
            currentTodo={currentTodo}
            editText={editText}
            setEditText={setEditText}
            saveEdit={saveEdit}
            cancelEdit={cancelEdit}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ToDoList;
