import { useEffect, useRef, useState } from "react";

import Actions from "./components/Actions";
import List from "./components/List";

import { fetchDate } from "./api";

import "./App.css";

export default function App() {
  const [leftList, setLeftList] = useState([]);
  const [rightList, setRightList] = useState([]);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    fetchDate().then(res => setLeftList(res));
  }, []);

  return (
    <main className="app">
      <List items={leftList} ref={leftRef} />
      <Actions {...{ leftRef, rightRef, setRightList, setLeftList }} />
      <List items={rightList} ref={rightRef} />
    </main>
  );
}
