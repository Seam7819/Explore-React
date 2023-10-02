import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Friends () {

    const [friends, setFriend] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h3>
                Friend : {friends.length}
                {
                    friends.map(friend => <Friend friend = {friend} ></Friend>)
                }
            </h3>
        </div>
    )
}