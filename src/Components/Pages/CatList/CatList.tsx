import { useEffect, useState } from "react";
import "./CatList.css";
import { CatModel } from "../../../Models/Cat";
import axios from "axios";
import CatCard from "../../Shared/CatCard/CatCard";
import notifyService from "../../../Services/NotificationService";


function CatList(): JSX.Element {
    const [cats, setCats] = useState<CatModel[]>([]);




    // Mounting ~ componentDidMount
    useEffect(() => {
        axios.get<CatModel[]>('https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json')
            .then(res => {
                setCats(res.data);
                notifyService.success('Meou Chtula!!!!!!')
            })
            .catch(err => {
                notifyService.error(err.message + " " + "kokoriko");
                notifyService.error('Opps I did it again!!!')

                // alert(123);
                // alert(456);
            })

    }, []);

    return (
        <div className="CatList">

            <button onClick={() => alert("Woho!!!!")}>Click Me</button>
            <h1>Cat List</h1>
            {/* {cats.map(c => <p key={'cat'+c.id}> {c.id},{c.name},{c.color},{c.birthday},{c.weight},{c.image}</p>)} */}

            <div className="cards-display">
                {cats.map(c => <CatCard key={'cat' + c.id} cat={c} />)}
            </div>

        </div>
    );
}

export default CatList;
