/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNotesStore } from "./../store/notesStore";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const Note = ({ note }) => {
  const { deleteNote, editNote, darkMode } = useNotesStore((state) => state);

  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: note.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    editNote({
      ...note,
      title: editedTitle,
      content: editedContent,
    });
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div className={`bg-zinc-50 ${darkMode ? 'dark-mode' : ''} border-l-2 border-black flex flex-col p-2 gap-y-2 shadow-xl`}>
          <input
            className="border-2 border-blue-500 rounded px-1"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="border-2 border-blue-500 rounded px-1"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button
            className="bg-red-500 text-white font-bold rounded py-2"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      ) : (
        <div
          style={style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          className={`${darkMode ? 'bg-slate-800 shadow-lg my-2 p-2 border-l-2 border-white w-full h-52' : 'bg-zinc-50 shadow-lg my-2 p-2 border-l-2 border-black w-full h-52'}`}
        >
          <div className="h-36">
            <h2 className={`${darkMode ? 'text-white text-xl font-bold border-b-2 border-blue-500 py-1' : 'text-xl font-bold border-b-2 border-blue-500 py-1'}`}>
              {note.title}
            </h2>
            <p className="truncate w-full py-2">{note.content}</p>
          </div>
          <div className="flex gap-x-2 items-center my-2">
            <button className="bg-green-500 text-white px-2 py-1" onDoubleClick={handleEdit}>Editar</button>
            <button
              onDoubleClick={handleDelete}
              className="bg-red-500 text-white px-2 py-1"
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
