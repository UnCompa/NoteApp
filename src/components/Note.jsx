/* eslint-disable react/prop-types */
import { useNotesStore } from './../store/notesStore';

export const Note = ({ note }) => {
  const { deleteNote } = useNotesStore((state) => state);

  const handleDelete = () => {
    deleteNote(note.id);
  };

  return (
    <div key={note.id} className="bg-zinc-50 shadow-lg my-2 p-2 border-l-2 border-black">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p className="truncate">{note.content}</p>
      <button onClick={handleDelete} className="bg-red-500 text-white px-2 py-1 mt-2">
        Eliminar
      </button>
    </div>
  );
};

export default Note;
