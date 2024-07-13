import Image from 'next/image'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
type Props = {}

const Cardcomponent = (props: Props) => {
    const [people, setPeople] = useState([
        {name: "Elon mask", url:"/images/image1.jpg"},
        {name: "Walter white", url:"/images/image2.jpg"},
        {name: "John snow", url:"/images/image3.jpg"},
        {name: "Jesse pinkman", url:"/images/image4.jpg"},
        {name: "Bruce wayne", url:"/images/image5.jpg"}
    ])

    const swiped = (direction:any, nameToDelete :string) => {
        console.log("receiving" + nameToDelete);
    }

    const outOfFrame = (name: string) => {
        console.log(name + "left thescreen")
    }
  return (
    <div className='tinderCards'>
        <div className='tinderCards__container flex justify-center mt-[2vh]'>
            {people.map(person => (
                <TinderCard
                    className='swipe absolute'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={dir => swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <h3 className='absolute '>{person.name}</h3>
                    <Image src={ `${person.url}`} className='card relative w-[90vw] h-[80vh] bg-cover bg-center' width={100} height={200} alt='Elon'/>
                        
                   
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default Cardcomponent