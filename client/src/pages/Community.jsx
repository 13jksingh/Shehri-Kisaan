import React, { useState, useEffect } from "react";
import Ques from "../components/comunity/Ques";
import AskQues from "../components/comunity/AskQues";

export default function Commuinty() {
    const [ques, setQues] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/community/ques"

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                json.reverse();
                setQues(json);
                console.log(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <AskQues />
            {ques.map((q) => (
                <Ques quesId={q._id} quesTitle={q.Ques} quesDetail={q.Description} quesDate={q.Date} quesTag={q.Tags}  />
            ))}
        </div>
    )
}