/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import NavBar from "../components/NavBar";
import Table from "../components/Table";
import { useNotesStore } from "../store/notesStore";
import "./../styles/layout.css";
const Layout = ({ children }) => {
    const { notas } = useNotesStore(state => state)
  return (
    <div className="layout">
      <section className="[grid-area:navigate] bg-red-300 h-full w-full">
        <div className="h-full w-full bg-zinc-100 p-4">
          <div className="h-[50%] bg-blanco shadow-lg">
            <Table notas={notas}/>
          </div>
          <NavBar />
        </div>
      </section>
      <section className="[grid-area:main] bg-zinc-100 h-full w-full p-2">
        {children}
      </section>
    </div>
  );
};

export default Layout;
