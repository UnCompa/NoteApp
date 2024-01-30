import Note from "../components/Note";
import { useNotesStore } from "./../store/notesStore";
const Home = () => {
  const { notas } = useNotesStore((state) => state);
  return (
    <div className="w-full border-l-4 border-blue-500 h-full p-2">
      <h1 className="font-bold text-2xl py-2">Inicio</h1>
      <div className="w-full">
        {notas.length === 0 ? (
          <p>No hay notas.</p>
        ) : (
          notas.map((note) => <Note note={note} key={note.id} />)
        )}
      </div>
    </div>
  );
};

export default Home;
