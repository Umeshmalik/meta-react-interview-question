const Item = ({ item, selectValue }) => (
  <section>
    <input id={item} type="checkbox" onChange={selectValue(item)} />
    <label htmlFor={item}>{item}</label>
  </section>
);

export default Item;
