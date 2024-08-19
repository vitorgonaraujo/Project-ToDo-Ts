import React from "react";
import styles from "./styles.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Input, Flex, Typography, Button } from "antd";

interface ToDoProps {
  id: string;
  text: string;
  createdAt: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  isEditing: boolean;
  currentTodo?: { id: string };
  editText: string;
  setEditText: (text: string) => void;
  saveEdit: () => void;
  cancelEdit: () => void;
}

const ToDo: React.FC<ToDoProps> = ({
  id,
  text,
  createdAt,
  onDelete,
  onEdit,
  isEditing,
  currentTodo,
  editText,
  setEditText,
  saveEdit,
  cancelEdit,
}) => {
  const charLimit = 200;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditText(e.target.value);
  };

  const { TextArea } = Input;
  const { Text } = Typography;

  return (
    <Flex vertical justify="space-between" className={styles.todo}>
      {isEditing && currentTodo && currentTodo.id === id ? (
        <Flex vertical>
          <TextArea
            value={editText}
            onChange={handleChange}
            maxLength={charLimit}
            autoSize={{
              minRows: 8,
              maxRows: 8,
            }}
            variant="borderless"
          />

          <Flex justify="space-between" align="center">
            <Text>{charLimit - editText.length} caracteres restantes</Text>
            <Button onClick={saveEdit} icon={<FaCheck />} />
            <Button
              onClick={cancelEdit}
              icon={<IoClose />}
              danger
              type="text"
            />
          </Flex>
        </Flex>
      ) : (
        <span>{text}</span>
      )}
      <Flex justify="space-between" align="center">
        <Text>{createdAt}</Text>
        <Flex gap={5}>
          {!isEditing && (
            <Button onClick={() => onEdit(id)} icon={<HiMiniPencilSquare />} />
          )}
          <Button
            onClick={() => onDelete(id)}
            icon={<FaRegTrashAlt />}
            danger
            type="text"
          />
        </Flex>
      </Flex>

      {/*Footer da Lista */}
    </Flex>
  );
};

export default ToDo;
