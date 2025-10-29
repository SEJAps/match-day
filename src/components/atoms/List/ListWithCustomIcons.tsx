const ListWithCustomIcons: React.FC = () => {
  return (
    <ul className="list-image-[var(--list-image-soccer-x16)] pl-5 text-dark">
      <li className="p-2 w-full">
        <article className="flex items-baseline justify-baseline bg-red-100 text-lg">
          Estadísticas en tiempo real
        </article>
      </li>
      <li className="p-2 w-full">
        <article className="flex items-baseline justify-baseline">
          Seguimiento de jugadores
        </article>
      </li>
    </ul>
  );
};

export default ListWithCustomIcons;
