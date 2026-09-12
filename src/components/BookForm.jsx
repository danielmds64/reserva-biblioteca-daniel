import { useState } from "react";

const initialForm = { title: "", author: "" };

export default function BookForm({ onAddBook }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim() || !form.author.trim()) {
      setError("Preencha o título e o autor.");
      return;
    }

    onAddBook({
      id: crypto.randomUUID(),
      title: form.title,
      author: form.author,
      available: true,
    });

    setForm(initialForm);
    setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="field">
        <label htmlFor="title">Título</label>
        <input
          id="title"
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="author">Autor</label>
        <input
          id="author"
          name="author"
          type="text"
          value={form.author}
          onChange={handleChange}
        />
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">Cadastrar</button>
    </form>
  );
}