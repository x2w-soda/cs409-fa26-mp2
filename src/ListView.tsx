import {useData} from './Request'
import { useMemo, useState } from "react";
import { Link } from 'react-router-dom';

export default function ListView() {
  const [filterText, setFilterText] = useState("");
  const [asc, setAsc] = useState(true);
  const [key, setKey] = useState(0);

  const data = useData();
  if (!data) {
      return (<h1>Data Unavailable</h1>)
  }

  const items = useMemo(() => {
      const query = filterText.trim().toLowerCase();
      let filtered = data;
      if (query)
          filtered = data.filter((item) => item.name.toLowerCase().includes(query));

      const sorted = filtered.toSorted((lhs, rhs) => {
          if (key == 0) // sort by key
              return asc ? (rhs.id - lhs.id) : (lhs.id - rhs.id);
          // sort by name text
          return asc ? (rhs.name.localeCompare(lhs.name)) : (lhs.name.localeCompare(rhs.name));
      });

      return sorted;
  }, [data, filterText, key, asc]);

  // console.log(typeof items, items);
  return (
    <>
      <h1> List View </h1>
      <div className="filter-buttons">
        <button onClick={() => setKey(0)}>
          Sort by ID
        </button>
        <button onClick={() => setKey(1)}>
          Sort by Name
        </button>
        <button onClick={() => setAsc((value) => !value)}>
          Sort {asc ? "Descending" : "Ascending"}
        </button>
      </div>
      <div>
        <input type="text" value={filterText}
             onChange={(e) => setFilterText(e.target.value)}
             placeholder="Filter" />
      </div>
      <div className="List">
        {items.map(item => (<div>
            <h3><Link to={`/detail/${item.id}`}>{item.name} ({item.id})</Link></h3>
          </div>))}
      </div>
    </>
  );
}
