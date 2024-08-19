import React, { useState} from "react";
import styles from "../ToDo/styles.module.css";
import { FaCheck } from "react-icons/fa";
import { Input, Flex, Typography, Button } from "antd";

interface AddTodoProps {
  onAdd: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");
  const charLimit = 200;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim() === "") {
      alert("O lembrete não pode estar vazio.");
      return;
    }

    onAdd(text);
    setText("");
  };

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
