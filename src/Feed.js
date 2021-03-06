import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from "@material-ui/icons/Create";
import InputOption from './InputOption.js';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from './Post.js';
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const[input, setInput] = useState('');
    const[posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
    }, [])

    const sendPost = e => {
        e.preventDefault();

        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            //Usamos server time stamp para que la diferencia horaria no este entre paises
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        setInput("");
    };

    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />    
                    <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E" />
                    <InputOption Icon={EventNoteIcon} title='Event' color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E" />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl } }) =>
                (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            <Post name='Namey Name' description='This is a test' message='This works'/>
            </FlipMove>

        </div>
    )
}

export default Feed
