import React, { useState, useEffect } from "react";
import Ques from "../components/Ques";
import AskQues from "../components/AskQues";

export default function Commuinty() {
    const [ques, setQues] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/community/ques"

        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
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
            <Ques />
            {ques ? ques[0].Author:null}
        </div>
    )
}