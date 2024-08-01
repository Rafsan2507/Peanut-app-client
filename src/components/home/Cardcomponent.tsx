"use client";
import { getUsers, postSwipedUserId } from "@/services/cardServices";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useRouter } from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';

type Props = {};

interface Person {
  id: number;
  name: string;
  url: string;
}

const CardComponent = (props: Props) => {
  const [people, setPeople] = useState<Person[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setPeople(users.map((user: { id: number; firstname: string; image: string }) => ({
          id: user.id,
          name: user.firstname,
          url: user.image,
        })));
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const swiped = async (direction: string, nameToDelete: string, id: number) => {
    console.log("receiving " + nameToDelete);
    if (direction === 'right') {
      try {
        const response = await postSwipedUserId(id);
        console.log(`Successfully posted swiped user ID: ${id}`);

        if (response.matchFound) {
          toast.success("You got a new match!", {
            duration: 20000,
            icon: '😍',
            style: {
              background: '#212042',
              color: '#FF6D00',
            },
          });
        }
      } catch (error) {
        console.error(`Failed to post swiped user ID: ${id}`, error);
      }
    }
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen");
  };

  const handleImageClick = (id: number) => {
    router.push(`/profile/${id}`);
  };

  return (
    <div className="tinderCards flex flex-col">
      <Toaster position="top-center"/>
      <div className="tinderCards__container flex justify-center relative w-full max-w-[90vw]">
        {people.map((person) => (
          <TinderCard
            className="swipe absolute w-full"
            key={person.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, person.id)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            
          >
            <div className="relative w-[100vw] h-[76vh] px-[1vw]" >
              <Image
                src={person.url}
                className="card w-full h-[76vh] bg-cover bg-center rounded-[2vh] border border-2 border-fuchsia-200 pressable"
                width={100}
                height={200}
                alt={person.name}
                onClick={() => handleImageClick(person.id)}
              />
              <h2 className="absolute bottom-0 left-0 w-[50vw] flex text-left text-white text-[1.2rem] font-bold p-[2vh] mb-[25vh]">
                {person.name}
              </h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
