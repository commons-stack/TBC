import React from "react";

function Input({ handler, name }) {
  return (
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">{name}</span>
      </div>
      <input
        type="number"
        class="form-control"
        placeholder="Reserve"
        value={handler[0]}
        onChange={e => handler[1](e.target.value)}
      />
    </div>
  );
}

export default Input;
