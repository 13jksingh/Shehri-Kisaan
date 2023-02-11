import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Ques from "../components/comunity/Ques";
import OneQues from "../components/comunity/OneQues";
import AskQues from "../components/comunity/AskQues";
import axios from "axios";
import AnswerInput from "../components/comunity/answerInput";

export default function Commuinty() {
    const [ques, setQues] = useState([]);
    let { quesId } = useParams();
    const url = "http://localhost:5000/community/ques/q/" + quesId ;

    useEffect(() => {
        axios.get(url).then((response) => {
            setQues(JSON.parse(response.data));
        });
    }, []);

    return (
        <div>
            <OneQues quesTitle={ques.Ques} quesDetail={ques.Description} quesDate={ques.Date} quesTag={ques.Tags} />
            <AnswerInput/>
        </div>
    )
}