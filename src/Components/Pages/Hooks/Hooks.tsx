import { useState } from "react";
import CountdownCC from "../../Shared/CountdownCC/CountdownCC";
import CountdownFC from "../../Shared/CountdownFC/CountdownFC";
import "./Hooks.css";
import CountdownLikeABoss from "../../Shared/CountdownLikeABoss/CountdownLikeABoss";

function Hooks(): JSX.Element {
    const [cc, setCC] = useState<boolean>(true);
    const [fc, setFC] = useState<boolean>(true);
    const [boss, setBoss] = useState<boolean>(true);
    return (
        <div className="Hooks">
            Good Morning!

            {fc && <CountdownFC
                num={5}
                removeFC={() => { setFC(false) }} />}

            {cc && <CountdownCC
                num={5}
                removeCC={(() => { setCC(false) })} />}

            { boss && <CountdownLikeABoss num={5} removeFC={() => {setBoss(false) }} />}


        </div>
    );
}

export default Hooks;
