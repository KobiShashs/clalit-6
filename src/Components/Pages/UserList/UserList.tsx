import { useEffect, useState } from "react";
import "./UserList.css";
import { ResultModel, RootObject } from "../../../Models/Users";
import axios from "axios";
import notifyService from "../../../Services/NotificationService";
import UserCard from "../../Shared/UserCard/UserCard";

function UserList(): JSX.Element {
    const [results, setResults] = useState<ResultModel[]>([]);


    //Mounting ~ componentDidMount
    useEffect(() => {
        axios.get<RootObject>('https://randomuser.me/api/?results=10')
            .then(res => { setResults(res.data.results); })
            .catch(err => { notifyService.error('Ha Ha Ha...'); })
    }, []);

    return (
        <div className="UserList">
            <h1>User List using Cards</h1>
            {/* {results.map(r => <p key={'r'+r.email}>{r.id.name},{r.email},{r.gender}</p>)} */}
            <div className="displayUsers">
                {results.map(r => <UserCard key={'r' + r.email} result={r} />)}
            </div>

        </div>
    );
}

export default UserList;
