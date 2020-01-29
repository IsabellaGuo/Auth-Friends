import React from "react";
import { Link } from "react-router-dom";

function FriendsCard(props) {
    return (
        <div>
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <Link to={`/api/friends/${props.friend.id}`}><button>Modify</button></Link>
        </div>
    )
}

export default FriendsCard;