import React from "react";

function Search({ onCheckClick, onSearch, isChecked }) {


  const handleCheck = () => {
    onCheckClick()
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearch} className="prompt" />
        <i className="search icon" />
      </div>
      <div>
      <label>hp
          <input 
            type="checkbox"
            value={isChecked}
            onChange={handleCheck}
          />
        </label>
      </div>
    </div>
  );
}

export default Search;
