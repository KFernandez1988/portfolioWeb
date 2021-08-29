

import { useState } from "react";

const Auth = function (props) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    const subHandler = async () => {
        await props.Auth(user, password);
        console.log(user, password);
        setUser("");
        setPassword("");
    }
    return (
         <>
            <form onSubmit={subHandler}>
                <input value={user} onChange={ (e) => setUser(e.target.value)} type="text" placeholder="admin user" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="" id="" placeholder="password" />
                <input type="submit" value="submit" />
            </form>
        </>
    );
};

export default Auth;