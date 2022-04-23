import React, {useState, useEffect} from "react";
import "./Polling.css";

function Poll() {

    const[voteData, setVoteData] = useState();
    const[totalVotes, setTotalVotes] = useState(0);
    const[voted, setVoted] = useState(false);

    const pollQ = "Are you understanding the lecture?";
    const answers = [
        { option : "Yes", votes: 6}, 
        { option: "No", votes: 3}, 
        { option: "Somewhat", votes:5}
    ];


    return (
        <div>
            <Poll
            question={pollQ}
            />
        </div>
    )
}

export default Poll