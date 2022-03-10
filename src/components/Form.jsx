import React from "react";

function Form() {
  return (
    <div className="form-g">
      <label>Endereço:</label>
      <br />
      <div className="buttonInside">
        <input
          type="text"
          id="endereco"
          disabled={disable}
          value={""}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          id="editNome"
          className="buttonInput"
          type="button"
          onClick={enableEditing}
        >
          {" "}
          <img src={lapiz} alt="" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Form;
