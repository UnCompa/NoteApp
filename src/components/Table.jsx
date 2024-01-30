/* eslint-disable react/prop-types */
const Table = ({ notas }) => {
  return (
    <div className="px-2">
      <h1 className="font-bold text-2xl py-2">Notas</h1>
      {notas.map((notas) => {
        return (
            <div key={notas.id} className="bg-zinc-50 shadow-lg my-2 p-2 border-l-2 border-black w-full">
            <h2 className="text-xl font-bold">{notas.title}</h2>
            <p className="truncate">{notas.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
