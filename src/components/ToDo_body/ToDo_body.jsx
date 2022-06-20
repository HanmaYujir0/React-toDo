import React from "react";
import style from "./ToDo_body.module.css";
import { useState } from "react";

export default function Body() {
  const [toDos, settoDos] = useState([
    {
      text: "Закончить intocode",
      favorite: true,
    },
    {
      text: "Заработать много денег",
      favorite: false,
    },
    {
      text: "Купить PS5",
      favorite: false,
    },
    {
      text: "Купить игры для PS5",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const deleteTodos = (i) => {
    const filtered = toDos.filter((todo, index) => {
      if (index === i) {
        return false;
      }
      return true;
    });
    settoDos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = toDos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    settoDos(newTodos);
  };

  const newTodos = toDos.map((todo, index) => {
    let container = todo.favorite
      ? style.content_container
      : style.content_container1;

    let buttonFavorite = todo.favorite
      ? style.content_buttonCompleate
      : style.content_buttonCompleate1;

    return (
      <div className={container}>
        <button className={buttonFavorite} onClick={() => makeFavorite(index)}>
          ★
        </button>
        <div className={style.content_text}>{todo.text}</div>
        <button
          className={style.content_buttonRemove}
          onClick={() => deleteTodos(index)}
        >
          ❌
        </button>
      </div>
    );
  });

  const addTodo = () => {
    if (text !== "" && text[0] !== " ") {
      settoDos([
        {
          text: text,
          favorite: false,
        },
        ...toDos,
      ]);
      setText("");
    }
  };

  const addEnter = (e) => {
    if (e.key === "Enter" && text !== "" && text[0] !== " ") {
      settoDos([
        {
          text: text,
          favorite: false,
        },
        ...toDos,
      ]);
      setText("");
    }
  };

  return (
    <div className={style.ToDo_body}>
      <div className={style.ToDo_InputAndButton}>
        <input
          type="text"
          placeholder="Введите текст..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => addEnter(e)}
        />
        <button
          className={style.buttonAdd}
          onClick={() => {
            addTodo();
          }}
        >
          Добавить
        </button>
      </div>
      {newTodos}
    </div>
  );
}
