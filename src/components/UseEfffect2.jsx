import React, { useState, useEffect } from "react";

const FetchedItems = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setItems(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(filteredItems)

  useEffect(() => {
    if (showCompleted === null) {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.completed === showCompleted);
      setFilteredItems(filtered);
    }
  }, [items, showCompleted]);

  const handleShowCompleted = (value) => {
    setShowCompleted(value);
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <button
          className={`btn ${showCompleted === null ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleShowCompleted(null)}
        >
          Show All
        </button>
        <button
          className={`btn ${showCompleted === true ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleShowCompleted(true)}
        >
          Show Completed
        </button>
        <button
          className={`btn ${showCompleted === false ? "btn-primary" : "btn-secondary"}`}
          onClick={() => handleShowCompleted(false)}
        >
          Show Incomplete
        </button>
      </div>
      <ul className="list-group mt-3">
        {filteredItems.map((item) => (
          <li key={item.id} className="list-group-item">
                 <div id='ok' className='p-2 d-flex gap-5'>
                <div>{item.id}</div>
                <div>{item.title}</div>
                             
                
            </div>        
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchedItems;
