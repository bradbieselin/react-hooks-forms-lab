import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleSubmit (e) {
    e.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: itemName,
      category: itemCategory,
    };
    props.onItemFormSubmit(newItem)
    setItemName("");
    setItemCategory("Produce")
    props.addItem(newItem);
  }

  const handleNameChange = (e) => {
    setItemName(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} value={itemName} />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={itemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
