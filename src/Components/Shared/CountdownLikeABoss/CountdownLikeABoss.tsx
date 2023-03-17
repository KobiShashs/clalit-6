import { useEffect, useState } from "react";
import "./CountdownLikeABoss.css";

interface CountdownLikeABossProps {
    num: number;
    removeFC: Function;
}
function CountdownLikeABoss(props: CountdownLikeABossProps): JSX.Element {
    let timerId: any;
    const [num, setNum] = useState<number>(props.num);
    const [name, setName] = useState<string>('Moshe');
    const [flag, setFlag] = useState<boolean>(true);


    useEffect(() => {

        //Mounting
        if (flag) {
            timerId = setInterval(() => {
                setNum(x => x - 1);
            }, 1000);
            console.log(timerId);
            setFlag(false);
        }

        //Updating
        if (num === 0) {
            props.removeFC();
        }

        //Unmounting
        if (num === 0) {
            return () => {
                clearInterval(timerId);
            }
        }
    }, [num]);


    return (
        <div className="CountdownLikeABoss">
            <h1>BOSS FC</h1>
            <h2>{num}</h2>
            <h2>{name}</h2>
        </div>
    );
}

export default CountdownLikeABoss;
