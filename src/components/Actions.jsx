import ActionButton from "./ActionButton";

import { BUTTONS } from "../constants";

const Actions = ({ leftRef, rightRef, setRightList, setLeftList }) => (
    <section className="buttons">
        {BUTTONS.map(button => <ActionButton key={button} {...{ button, leftRef, rightRef, setRightList, setLeftList }} />)}
    </section>
);


export default Actions;
