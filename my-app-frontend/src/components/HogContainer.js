import HogCard from './HogCard';

function HogContainer({hogs, setChange}){

    

    return(
        <div className='card_container'>
            {
            hogs.map(hog => <HogCard setChange={setChange} key={hog.id} hog={hog}/>)
            }
        </div>
    )
}

export default HogContainer;
