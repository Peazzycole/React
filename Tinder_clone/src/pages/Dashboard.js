import React from "react";
import ChatContainer from "../components/ChatContainer";
import TinderCard from "react-tinder-card";


export default function Dashboard() {

    const [lastDirection, setLastDirection] = React.useState()

    const characters = [
        {
            name: "peace",
            url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGluZGVyJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "colt",
            url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGluZGVyJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "promise",
            url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGluZGVyJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Savage",
            url: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGluZGVyJTIwcHJvZmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        }
    ]

    const swiped = (direction, nameToDelete) => {

        setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
    }







    return (
        <>
            <div className="dashboard">
                <ChatContainer />
                <div className="swipe-container">
                    <div className="card-container">
                        {characters.map(character =>
                            <TinderCard
                                className="swipe"
                                key={character.name}
                                onSwipe={(dir) => swiped(dir, character.name)}
                                onCardLeftScreen={() => outOfFrame(character.name)}>
                                <div
                                    style={{ backgroundImage: "url(" + character.url + ")" }}
                                    className="card">
                                    <h3>{character.name}</h3>
                                </div>
                            </TinderCard>
                        )}
                        <div className="swipe-info">
                            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
