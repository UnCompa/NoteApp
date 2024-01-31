/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import NavBar from "../components/NavBar";
import Table from "../components/Table";
import { useNotesStore } from "../store/notesStore";
import "./../styles/layout.css";
const Layout = ({ children }) => {
    const { notas, darkMode } = useNotesStore(state => state)
  return (
    <div className={`${darkMode ? 'layout bg-slate-900' : 'layout'}`}>
      <section className="[grid-area:navigate] h-full w-full">
        <div className={`${darkMode ? 'h-full w-full bg-zinc-900 p-4' : 'h-full w-full bg-zinc-100 p-4'}`}>
          <div className="h-[50%] bg-blanco shadow-lg overflow-auto">
            <Table notas={notas}/>
          </div>
          <NavBar />
        </div>
      </section>
      <section className={`${darkMode ? '[grid-area:main] bg-zinc-900 h-full w-full p-2' : '[grid-area:main] bg-zinc-100 h-full w-full p-2'}`}>
        {children}
      </section>
    </div>
  );
};

export default Layout;
