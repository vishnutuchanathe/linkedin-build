import React, {useState, useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOption from './InputOption';
import Post from './Post';
import {db} from "./firebase";
import firebase from 'firebase';
import { log } from 'async';

function Feed() {
    const [input, SetInput] = useState('');
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timeStamp", "desc").onSnapshot((snapshot) => 
                setPosts(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    data: doc.data(),
                }))
                )
                );
            }, []);
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Vishnu S Mani',
            description: 'this is a test',
            message: input,
            photoUrl: '',
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        SetInput('');
       
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon/>
                <form action="">
                <input value={input} onChange={e => SetInput(e.target.value)} type="text" placeholder="Start a post"/>
                <button onClick={sendPost} type="submit">Send</button>
                </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E"/>
                    <InputOption Icon={EventNoteIcon} title="Event" color="#E7A33E"/>
                    <InputOption Icon={CalendarViewDayIcon} title="write article" color="#F89297"/>
                </div>
            </div>
            {/* Posts */}
            {posts.map(({id,data:{name, description, message, photUrl}}) => (
            <Post key={id} name={name} description={description} message={message}/>
                
            ))}

        </div>
    )
}

export default Feed
