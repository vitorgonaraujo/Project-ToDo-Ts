// components/AddTodo.tsx
import React from "react";
import styles from "../ToDo/styles.module.css";
import { FaCheck } from "react-icons/fa";
import { Input, Flex, Typography, Button } from "antd";
import useAddToDo from "../../hooks/useAddToDo";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const { text, charLimit, handleChange, handleAdd } = useAddToDo(onAdd);

  const { TextArea } = Input;
  const { Text } = Typography;

  return (
    <Flex
      vertical
      justify="space-between"
      className={`${styles.addTodo} ${styles.todo}`}
    >
      <TextArea
        placeholder="Escreva aqui o seu lembrete..."
        maxLength={charLimit}
        value={text}
        onChange={handleChange}
        autoSize
        variant="borderless"
      />
      <Flex justify="space-between" align="center">
        <Text>{charLimit - text.length} caracteres restantes</Text>
        <Button onClick={handleAdd} icon={<FaCheck />} />
      </Flex>
    </Flex>
  );
};

export default AddTodo;
