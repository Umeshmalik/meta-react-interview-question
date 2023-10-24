import { forwardRef, useImperativeHandle, useState } from "react";
import Item from "./Item";

const List = forwardRef(({ items = [] }, ref) => {
  const [selectedValues, setSelectedValues] = useState([]);

  useImperativeHandle(ref, () => ({
    selectedValues: () => {
      const values = selectedValues;
      setSelectedValues([]);
      return values;
    }
  }));

  const selectValue = (value) => (e) => {
    if (e.target.checked) {
      setSelectedValues((prev) => [...prev, value]);
    } else {
      setSelectedValues((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <section className="listBox">
      {items.map((item) => (<Item key={item} {...{ item, selectValue }} />))}
    </section>
  );
});

export default List;
