import React from "react";
import style from "./header.module.css";

export default function Header() {
  return (
    <div className={style.ToDos_header}>
      <h1>Список дел</h1>
      <hr />
    </div>
  );
}
