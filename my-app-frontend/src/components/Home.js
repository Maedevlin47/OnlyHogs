import React, { useEffect, useState } from 'react';
import HogContainer from './HogContainer'
import NavBar from './NavBar';
function Home () {

    const [hogs, setHogs] = useState([]);
    const addHog = (newHog) => {setHogs([...hogs, newHog])};
    useEffect(() => {
        fetch("http://localhost:9292/allposts")
        .then((r) => r.json())
        .then((data) => setHogs(data))
        }, [])
    
    return(
        <div>
            <NavBar addHog ={addHog}/>
            <HogContainer hogs={hogs}/>

        </div>
        
    )
}

export default Home;