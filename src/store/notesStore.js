import {create} from 'zustand'

export const useNotesStore = create((set) => {
    const storedNotes = localStorage.getItem('notes');
    const initialNotes = storedNotes ? JSON.parse(storedNotes) : [];
  
    return {
      notas: initialNotes,
      addNote: (note) => set((state) => ({ notas: [...state.notas, note] })),
      deleteNote: (noteId) =>
      set((state) => {
        const updatedNotes = state.notas.filter((note) => note.id !== noteId);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        return { notas: updatedNotes };
      }),
    };
  });