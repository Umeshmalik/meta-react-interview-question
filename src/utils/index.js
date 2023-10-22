import { LEFT, RIGHT } from "../constants";

export const fxnToRemoveItems = (itemsToMove) => (prev) => [
  ...prev,
  ...itemsToMove
];
export const fxnToMergeNewItems = (itemsToMove) => (prev) =>
  prev.filter((item) => !itemsToMove.includes(item));

export const moveItems = ({
  moveTo,
  leftRef,
  rightRef,
  setRightList,
  setLeftList
}) => () => {
  switch (moveTo) {
    case LEFT: {
      const itemsToMove = leftRef.current.selectedValues();
      setRightList(fxnToRemoveItems(itemsToMove));
      setLeftList(fxnToMergeNewItems(itemsToMove));
      return;
    }
    case RIGHT: {
      const itemsToMove = rightRef.current.selectedValues();
      setRightList(fxnToMergeNewItems(itemsToMove));
      setLeftList(fxnToRemoveItems(itemsToMove));
      return;
    }
    default:
      return;
  }
};
