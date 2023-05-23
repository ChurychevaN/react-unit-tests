import { useState } from "react";

const Greeting = () => {
const [changeText, setChangeText] = useState();

const changeTextHandler = () => {
    setChangeText(true);
};

    return (
        <div>
            <h2>Hello!</h2>
            {!changeText && <p>It is good to see you!</p>}
            {changeText && <p>Changed!!!</p>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
    );
};

export default Greeting;