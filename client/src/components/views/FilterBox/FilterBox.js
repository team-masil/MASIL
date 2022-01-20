import React, { useState } from "react";

const FilterBox = () => {
  const [isChecked, setIsChecked] = useState("false");

  return (
    <>
      <div>
        <from>
          <h2>Filter</h2>
          <input type="checkbox" checked={isChecked} value="궁금해요" />
        </from>
      </div>
    </>
  );
};

export default FilterBox;
