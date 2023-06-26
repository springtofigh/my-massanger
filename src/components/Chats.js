import React, { useState , useEffect , useContext } from 'react';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { Avatar, ChatEngine } from "react-chat-engine";
import axios from 'axios';


// Components
import Navbar from './Navbar';

//Styles
import styles from './Chats.module.css'

// Context
import { AuthContext } from '../context/AuthContextProvider'

const Chat = () => {

    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext)
    const history = useHistory();

    useEffect(() => {
        if (!user) {
            history.push('/');
            return
        }

        axios.get("https://api.chatengine.io/users/me" , {
            headers: {
                "project-id":"6d549c2a-9da2-438f-8cfc-ef6f60b8a5b7",
                "user-name":user.email,
                "user-secret":user.uid
            }
        })
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formData = new FormData();
            formData.append("email" , user.email);
            formData.append("username" , user.email);
            formData.append("secret" , user.uid);
            //Image Function 
            getFile(user.photoURL)
            .then(avatar => {
                formData.append("avatar" , Avatar , avatar.name);
                axios.post("https://api.chatengine.io/users" , formData, {
                    headers: {
                        "private-key": "1ba51a4e-18cd-4028-868f-d6b2b670965c"
                    }
                })
                .then(() => setLoading(false))
                .catch(error => console.log(error))
            })
        })
    }, [user , history])

    const getFile = async url => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data] , "userphoto.jpg" , {type:"Image/jpg"})
    }

    const logoutHandler = async () => {
        await auth.signOut();
        history.push("/")
    }

    if (!user || loading) return 'Loading...';

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler} />
            <ChatEngine 
            height='calc(100vh - 50px)'
            projectID='6d549c2a-9da2-438f-8cfc-ef6f60b8a5b7'
            userName={user.email}
            userSecret={user.uid}
            />
        </div>
    );
};

export default Chat;