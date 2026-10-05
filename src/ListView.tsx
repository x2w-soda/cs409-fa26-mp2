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
      let filtered = data.data;
      if (query)
          filtered = data.data.filter((item) => item.title.toLowerCase().includes(query));

      const sorted = filtered.toSorted((lhs, rhs) => {
          if (key == 0) // sort by key
              return asc ? (rhs.id - lhs.id) : (lhs.id - rhs.id);
          // sort by title text
          return asc ? (rhs.title.localeCompare(lhs.title)) : (lhs.title.localeCompare(rhs.title));
      });

      return sorted;
  }, [data, filterText, key, asc]);

  // console.log(typeof items, items);
  return (
    <>
      <h1> List View </h1>
      <div>
        <button onClick={() => setKey(0)}>
          Sort by ID
        </button>
        <button onClick={() => setKey(1)}>
          Sort by Title
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
            <h3><Link to={`/detail/${item.id}`}>{item.title}</Link></h3>
            <h4>{item.id}</h4>
          </div>))}
      </div>
    </>
  );
}
