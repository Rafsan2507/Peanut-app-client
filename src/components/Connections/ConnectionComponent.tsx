"use client";
import { getConnections } from '@/services/chatServices';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

interface Connection {
    id: number;
    name: string;
    url: string;
}

const ConnectionComponent = () => {
    const [connections, setConnections] = useState<Connection[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchConnections = async () => {
            try {
                const matches = await getConnections();
                setConnections(matches.map((match: { id: number; firstname: string; image: string }) => ({
                    id: match.id,
                    name: match.firstname,
                    url: match.image,
                })));
            } catch (error) {
                console.error("Failed to fetch connections:", error);
            }
        };

        fetchConnections();
    }, []);

    const handleChatClick = (receiver_Id: number) => {
        router.push(`/chat/${receiver_Id}`);
      };

    return (
        <div className='w-[100vw]'>
            <div className="text-[1.2rem] text-pink-100 font-semibold text-[1.5rem] mb-[5vh] pt-[4vh] pl-[8vw]">
                <h2>Chats</h2>
            </div>
            <div className="ml-[5vw] flex flex-col space-y-4">
                {connections.map(connection => (
                    <div key={connection.id} className="flex items-center space-x-5">
                        <div className="relative">
                            <Image 
                                src={connection.url} 
                                alt={connection.name} 
                                className={`card w-[18vw] h-[9vh] rounded-full`}
                                height={50}
                                width={50}
                                onClick={() => handleChatClick(connection.id)}
                            />
                        </div>
                        <span className="text-lg font-semibold">{connection.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ConnectionComponent;
