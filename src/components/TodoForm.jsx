import { useState } from "react";
import Select from "react-select";
import "../App.css";

const options = [
  { value: "Trabalho", label: "Trabalho" },
  { value: "Pessoal", label: "Pessoal" },
  { value: "Estudos", label: "Estudos" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "0.5rem",
    border: "none",
    padding: "0.4rem 0.75rem",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "0.5rem",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#555" : "#333",
    color: "#fff",
    cursor: "pointer",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#fff",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#ccc",
  }),
};

const TodoForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category ) return;
    console.log(value, category);
  }

  return (
    <div className="todo-form">
      <h2>Criar Tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Digite o Título" onChange={(e) => setValue(e.target.value)}/>

        <Select
            options={options}
            styles={customStyles}
            placeholder="Selecione a Categoria"
            value={selectedCategory}
            onChange={(selected) => {
            setSelectedCategory(selected);
            setCategory(selected?.value || "");
            }}
/>

        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;