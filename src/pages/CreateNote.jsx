import { useState } from "react";
import { useNotesStore } from "./../store/notesStore";
import { v4 as uuidv4 } from "uuid";
import "easymde/dist/easymde.min.css";

const CreateNote = () => {
  const { addNote, notas } = useNotesStore((state) => state);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();

    const newNote = {
      id: uuidv4(),
      title: title,
      content: content,
    };

    addNote(newNote);
    saveNotesToLocalStorage(notas.concat(newNote));
    alert('Enviado');
  };

  const saveNotesToLocalStorage = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  return (
    <div className="border-l-4 border-green-500 h-full p-4">
      <h1 className="font-bold text-2xl">Crear tu nota!</h1>
      <form className="flex flex-col" onSubmit={(e) => handleSumbit(e)}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Contenido:</label>
        <textarea onChange={(e) => setContent(e.target.value)}></textarea>
        <input
          type="submit"
          value="Enviar"
          className="bg-green-500 my-4 px-4 py-2"
        />
      </form>
    </div>
  );
};

export default CreateNote;
