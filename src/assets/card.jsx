export const Card=({imgsrc,model,oldprice,newprice}) =>
{return(
    <div className='card-styling'>
        <img className='card-pic' src={imgsrc} />
        <h1 className='card-title'>{model}</h1>
    <div className='pricing'>
    <strike><h3>{oldprice}</h3></strike>
    <h2 className='card-pricing'>{newprice}</h2>
    
    </div>
    
    <button className='card-button'>BUY</button>
    </div>
);
}

export default Card;