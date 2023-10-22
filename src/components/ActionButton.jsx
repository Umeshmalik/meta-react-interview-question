import { LEFT } from "../constants";
import { moveItems } from "../utils";

const ActionButton = ({ button, leftRef, rightRef, setRightList, setLeftList }) => (<button
    key={button}
    className="button"
    onClick={moveItems({
        moveTo: button,
        leftRef,
        rightRef,
        setRightList,
        setLeftList
    })}
>
    {button === LEFT ? <>&gt;</> : <>&lt;</>}
</button>)

export default ActionButton;
