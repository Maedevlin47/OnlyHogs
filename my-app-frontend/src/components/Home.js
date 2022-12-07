import {React } from 'react';
import HogContainer from './HogContainer'


function Home ({hogs}) {

    
    return(
        <div>
            <HogContainer hogs={hogs}/>
        </div>
        
    )
}

export default Home;