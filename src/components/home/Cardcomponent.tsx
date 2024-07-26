"use client";
import { getUsers, postSwipedUserId } from "@/services/infoServices";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { useRouter } from "next/navigation";

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
        await postSwipedUserId(id);
        console.log(`Successfully posted swiped user ID: ${id}`);
      } catch (error) {
        console.error(`Failed to post swiped user ID: ${id}`, error);
      }
    }
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen");
  };

  const handleImageClick = (id: number) => {
    router.push(`/profile/${id}`);
  };

  return (
    <div className="tinderCards flex flex-col">
      <div className="tinderCards__container flex justify-center relative w-full max-w-[90vw]">
        {people.map((person) => (
          <TinderCard
            className="swipe absolute w-full"
            key={person.id} // Use person.id as key for better performance
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, person.id)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className="relative w-[100vw] h-[78vh] px-[1vw]" onClick={() => handleImageClick(person.id)}>
              <Image
                src={person.url}
                className="card w-full h-full bg-cover bg-center rounded-[2vh] mt-[1vh]"
                width={100}
                height={200}
                alt={person.name}
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
