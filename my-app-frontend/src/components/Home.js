import {React } from 'react';
import HogContainer from './HogContainer'


function Home ({hogs,setChange}) {

    
    return(
        <div>
            <HogContainer setChange={setChange} hogs={hogs}/>
        </div>
        
    )
}

export default Home;