import React from "react";

export default function AskQues() {
    return (
        <div>
            <form action="http://localhost:5000/community/upload" method="POST">
                <input type="text" name="QuesTitle" placeholder="Ask Your Ques" />
                <input type="text" name="QuesDetail" placeholder="More details" />
                <input type="text" name="Tags" placeholder="tags" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}