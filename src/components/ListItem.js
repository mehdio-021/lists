import React from "react";

const ListItem = ({ id, title, delHandler, doneHandler, done }) => {
  return (
    <div>
      <li
        className={`list-group-item d-flex justify-content-between ${
          done ? "bg-success text-white" : ""
        }`}
      >
        {done ? (
          <h5 style={{ textDecoration: "line-through" }}>{title}</h5>
        ) : (
          title
        )}
        <div>
          <button
            className="btn btn-small bg-danger text-white ms-2 "
            onClick={() => delHandler(id)}
          >
            <i className="fas fa-trash"></i>
          </button>
          <button
            className={`btn btn-small  text-white ${
              done ? " bg-warning" : "bg-success"
            }`}
            onClick={() => doneHandler(id)}
          >
            {done ? (
              <i className="fas fa-undo-alt "></i>
            ) : (
              <i className="fas fa-check "></i>
            )}
          </button>
        </div>
      </li>
    </div>
  );
};

export default ListItem;
