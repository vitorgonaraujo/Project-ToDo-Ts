// hooks/useAddToDo.ts
import { useState } from "react";

export default function useAddToDo(onAdd: (text: string) => void) {
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

  return { text, charLimit, handleChange, handleAdd };
}
