import { Typography, ConfigProvider } from "antd";

import ToDoList from "./components/TodoList";

function App() {
  const { Title } = Typography;
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          fontFamily: "Montserrat",

          // Alias Token
        },
        components: {
          Input: {
            colorTextPlaceholder: "#666",
          },
          Button: {
            defaultHoverColor: "#071cd4",
            colorError: "#000",
            colorErrorHover: "#f00",
            defaultBg: "transparent",
            colorErrorBg: "transparent",
            defaultHoverBg: "transparent",
            defaultBorderColor: "transparent",
            defaultHoverBorderColor: "transparent",
            contentFontSize: 20,
            defaultActiveBg: "rgba(0, 0, 0, 0.25)",
            defaultActiveBorderColor: "transparent",
            defaultActiveColor: "#071cd4",
          },
        },
      }}
    >
      {/* Utilizar Grid ou Flex */}
      <div className="container">
        <Title level={1}>Minha Lista de Tarefas</Title>
        <ToDoList />
      </div>
    </ConfigProvider>
  );
}

export default App;
