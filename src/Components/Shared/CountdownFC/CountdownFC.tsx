import { useEffect, useState } from "react";
import "./CountdownFC.css";
interface CountdownFCProps{
    num: number;
    removeFC: Function;
}

function CountdownFC(props: CountdownFCProps): JSX.Element {
    let timerId: any;
    const [num, setNum] = useState<number>(props.num);
    const [name, setName] = useState<string>('Moshe');

    //Mounting ~ Will happened only once!
    useEffect(() => {
        timerId = setInterval(() => {
            setNum(x => x - 1);
        }, 1000);
    },[]);

    //Updating - Will happened only when "num" change in the State
    useEffect(() => {
        if (num === 0) {
            props.removeFC();
        }
    }, [num]);


    //UnMounting - "Do you have any last words"
    useEffect(() => {
        return (() => {
            clearInterval(timerId);
        });
    },[]);

    return (
        <div className="CountdownFC">
            <h1>FC</h1>
            <h2>{num}</h2>
            <h2>{name}</h2>
        </div>
    );
}

export default CountdownFC;
