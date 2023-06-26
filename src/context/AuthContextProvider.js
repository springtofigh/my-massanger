import React, {useEffect , useState , children} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

export const AuthContext = React.createContext({children});

const AuthContextProvider = () => {

    const [loading , setLoading] = useState(true);
    const [user , setUser] = useState(false);
    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user);
            setLoading(false);
            if (user) history.push('/chats');
            
        })
    }, [user , history])


    return (
        <div>
            <AuthContext.Provider value={user}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;