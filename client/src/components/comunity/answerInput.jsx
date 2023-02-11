import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
export default function AnswerInput() {
    const [ans, setAns] = useState("");
    let { quesId } = useParams();
    const url = "http://localhost:5000/community/ques/addAns/" + quesId 
    return (
        <form action={url} method="POST">
            <input type="text" name="answer" placeholder="Answer" />
            <button type="submit">Submit</button>
        </form>
    )
}