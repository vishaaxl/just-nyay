interface Props {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <span className="filter">
      Global Filter{" "}
      <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
    </span>
  );
};

export default GlobalFilter;
