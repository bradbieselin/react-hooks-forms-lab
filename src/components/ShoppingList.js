import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [inputText, setInputText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange (e) {
    setInputText(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const filteredItems = itemsToDisplay.filter(item => {
    
    if(item.name === "") {
      return true;
    }

    return item.name.toLowerCase().includes(inputText)
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} addItem={addItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={inputText} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
