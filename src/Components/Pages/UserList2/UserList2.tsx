import { useEffect, useState } from "react";
import "./UserList2.css";
import { ResultModel, RootObject } from "../../../Models/Users";
import axios from "axios";
import notifyService from "../../../Services/NotificationService";
import moment from "moment";

function UserList2(): JSX.Element {
    const tableHeaders = ["Title", "First Name", "Last Name", "Geo Location", "DOB", "Image"];
    const [results, setResults] = useState<ResultModel[]>([]);

    //Mounting ~ componentDidMount
    useEffect(() => {
        axios.get<RootObject>('https://randomuser.me/api/?results=100')
            .then(res => {
                setResults(res.data.results);
                notifyService.success('Woho!!! I got my users!!!!');
            })
            .catch(err => { notifyService.error('Ha Ha Ha'); });
    }, []);
    return (
        <div className="UserList2">
            <h1>User List using Table</h1>
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map(str => <th key={str}>{str}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {results.map(r =>
                        <tr key={'r'+r.email}>
                            <td>{r.name.title}  </td>
                            <td>{r.name.first}</td>
                            <td>{r.name.last}</td>
                            <td>({r.location.coordinates.latitude},{r.location.coordinates.longitude})</td>
                            <td>{moment(r.dob.date).format("DD/MM/yyyy - hh:mm")}</td>
                            <td>
                                <img src={r.picture.thumbnail} alt={r.name.first} />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserList2;
