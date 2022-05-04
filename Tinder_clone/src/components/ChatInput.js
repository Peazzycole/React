import React from "react";

export default function ChatInput() {
    const [textArea, setTextArea] = React.useState(null)

    return (
        <div className="chat-input">
            <textarea value={textArea} onChange={(e) => setTextArea(e.target.value)} />
            <button className="secondary-button">Submit</button>
        </div>
    )
}