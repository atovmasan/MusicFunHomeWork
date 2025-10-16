import { useState, useEffect } from "react";

export function InputTitle() {
  const [text, setText] = useState("");

  // useEffect для обновления заголовка вкладки
  useEffect(() => {
    if (text.trim()) {
      // Если есть введенный текст - показываем его
      document.title = text;
    } else {
      // Если текст пустой - показываем текст по умолчанию
      document.title = "Введите текст";
    }
  }, [text]); // Эффект срабатывает при каждом изменении text

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "500px",
        margin: "20px auto",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ marginTop: 0, color: "#333" }}>
        Изменение заголовка вкладки
      </h2>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="title-input"
          style={{
            display: "block",
            marginBottom: "8px",
            fontWeight: "500",
            color: "#555",
          }}
        >
          Введите текст для заголовка:
        </label>

        <input
          id="title-input"
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder="Начните вводить текст..."
          style={{
            padding: "10px 12px",
            width: "100%",
            border: "2px solid #007bff",
            borderRadius: "6px",
            fontSize: "16px",
            boxSizing: "border-box",
          }}
        />
      </div>

      <button
        onClick={handleClear}
        disabled={!text}
        style={{
          padding: "8px 16px",
          backgroundColor: text ? "#dc3545" : "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: text ? "pointer" : "not-allowed",
          fontSize: "14px",
        }}
      >
        Очистить
      </button>

      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: "5px 0", color: "#666" }}>
          <strong>Текущий ввод:</strong> {text || "пусто"}
        </p>
        <p style={{ margin: "5px 0", color: "#666" }}>
          <strong>Заголовок вкладки:</strong> {text || "Введите текст"}
        </p>
      </div>

      <p
        style={{
          fontSize: "12px",
          color: "#888",
          marginTop: "15px",
          fontStyle: "italic",
        }}
      >
        Попробуйте ввести текст и посмотрите на заголовок вкладки браузера!
      </p>
    </div>
  );
}
