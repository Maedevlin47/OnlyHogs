import HogCard from './HogCard';

function HogContainer({hogs}){

    return(
        <div className='card_container'>
            {
            hogs.map(hog => <HogCard key={hog.id} hog={hog}/>)
            }
        </div>
    )
}

export default HogContainer;
