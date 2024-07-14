import Image from 'next/image'
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

type Props = {}

const CardComponent = (props: Props) => {
    const [people, setPeople] = useState([
        {name: "Elon Musk", url: "/images/image1.jpg"},
        {name: "Walter White", url: "/images/image2.jpg"},
        {name: "John Snow", url: "/images/image3.jpg"},
        {name: "Jesse Pinkman", url: "/images/image4.jpg"},
        {name: "Bruce Wayne", url: "/images/image5.jpg"}
    ])

    const swiped = (direction: any, nameToDelete: string) => {
        console.log("receiving" + nameToDelete);
    }

    const outOfFrame = (name: string) => {
        console.log(name + " left the screen")
    }

    return (
        
        <div className='tinderCards flex flex-col'>
            <div className='tinderCards__container flex justify-center relative w-full max-w-[90vw]'>
                {people.map(person => (
                    <TinderCard
                        className='swipe absolute w-full'
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={dir => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div className='relative w-[100vw] h-[78vh]'>
                            <Image 
                                src={person.url} 
                                className='card w-full h-full bg-cover bg-center' 
                                width={100} 
                                height={200} 
                                alt={person.name} 
                            />
                            <h2 className='absolute bottom-0 left-0 w-[50vw] flex text-left text-white text-[1.2rem] font-bold p-[2vh] mb-[25vh]'>{person.name}</h2>
                        </div>
                    </TinderCard>
                    
                ))}
            </div>
        </div>
    )
}

export default CardComponent
