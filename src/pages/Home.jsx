import Note from "../components/Note";
import { useNotesStore } from "./../store/notesStore";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
const Home = () => {
  const { notas, setNotas, darkMode } = useNotesStore((state) => state);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    const oldIndex = notas.findIndex((nota) => nota.id === active.id);
    const newIndex = notas.findIndex((nota) => nota.id === over.id);
    const newOrder = arrayMove(notas, oldIndex, newIndex);
    setNotas(newOrder);
  };
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className={`${darkMode ? 'bg-slate-900 w-full border-l-4 border-blue-500 h-full p-4' : 'w-full border-l-4 border-blue-500 h-full p-4'}`}>
        <h1 className={`${darkMode ? ' font-bold text-2xl py-2 text-white' : 'font-bold text-2xl py-2'}`}>Inicio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SortableContext items={notas} strategy={verticalListSortingStrategy}>
          {notas.length === 0 ? (
            <p>No hay notas.</p>
          ) : (
            notas.map((note) => {
              return <Note note={note} key={note.id} />;
            })
          )}
        </SortableContext>
        </div>
      </div>
    </DndContext>
  );
};

export default Home;
