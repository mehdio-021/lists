import React from "react";

const Form = ({ todo, change, submit, error }) => {
  return (
    <form className="py-3 " onSubmit={submit}>
      <div className="form-group row">
        <div className="col-4">
          <button type="submit" className="btn btn-primary">
            افزودن کار
          </button>
        </div>
        <div className="col-8">
          <input
            value={todo}
            onChange={change}
            type="text"
            className="form-control-plaintext  mb-2 border-bottom "
          />
          {error && <small className="text-danger">{error}</small>}
        </div>
      </div>
    </form>
  );
};

export default Form;
