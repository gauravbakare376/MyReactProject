import React from 'react'

const Card = (props) => {
    console.log(props);
    return (
        <div>
            <div className='card'>
                <img src={props.img} />
                <h1>{props.name} {props.age}</h1>
                <p>{props.des}</p>
                <button>view Profile</button>
            </div>
        </div>
    )
}

export default Card
