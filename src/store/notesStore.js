import {create} from 'zustand'

export const useNotesStore = create((set) => {
  const storedNotes = localStorage.getItem('notes');
  const initialNotes = storedNotes ? JSON.parse(storedNotes) : [];
  const initialDarkMode = false
  return {
    notas: initialNotes,
    darkMode: initialDarkMode,
    toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      setNotas: (newNotas) => set({ notas: newNotas }),
      addNote: (note) => set((state) => ({ notas: [...state.notas, note] })),
      deleteNote: (noteId) =>
      set((state) => {
        const updatedNotes = state.notas.filter((note) => note.id !== noteId);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return { notas: updatedNotes };
      }),
      editNote: (editedNote) =>
      set((state) => {
        const updatedNotes = state.notas.map((note) =>
          note.id === editedNote.id ? editedNote : note
        );
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return { notas: updatedNotes };
      }),
    };
  });