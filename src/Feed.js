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
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState('');
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
        console.log(user.photoURL);
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoURL || "" ,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
       
    };
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                <CreateIcon/>
                <form action="">
                <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Start a post"/>
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
            {posts.map(({id,data:{name, description, message, photoUrl}}) => (
            <Post key={id} name={name} photoUrl={photoUrl} description={description} message={message}/>
                
            ))}

        </div>
    )
}

export default Feed
