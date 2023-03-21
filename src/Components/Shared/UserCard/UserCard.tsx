import moment from "moment";
import { ResultModel } from "../../../Models/Users";
import "./UserCard.css";

interface UserCarProps {
    result: ResultModel;
}
function UserCard(props: UserCarProps): JSX.Element {
    return (
        <div className="UserCard">
            <p>{props.result.name.title} {props.result.name.first} {props.result.name.last}</p>
            <p>({props.result.location.coordinates.latitude},{props.result.location.coordinates.longitude})</p>
            {/* <p>{props.result.dob.date.toString()}</p> */}
            <p>{moment(props.result.dob.date).format("DD/MM/yyyy - hh:mm:ss")}</p>
            <img src={props.result.picture.medium} alt={props.result.name.first} />
        </div>
    );
}

export default UserCard;
