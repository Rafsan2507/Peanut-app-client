"use client";
import { getHobbyList, postPreferences } from "@/services/preferenceServices";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {};

const AddHobbies = (props: Props) => {
  const [activities, setActivities] = useState<{ id: number, activity: string }[]>([]);
  const [preferences, setPreferences] = useState<number[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<{ id: number, activity: string }[]>([]);

  const router = useRouter();

  useEffect(() => {
    const getAllActivities = async () => {
      try {
        const activityList = await getHobbyList();
        setActivities(activityList);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };
    getAllActivities();
  }, []);

  const handleSelectActivity = (activityId: number, activityName: string) => {
    setPreferences((prevPreferences) => {
      if (prevPreferences.includes(activityId)) {
        setSelectedActivities(selectedActivities.filter((activity) => activity.id !== activityId));
        return prevPreferences.filter((id) => id !== activityId);
      } else {
        setSelectedActivities([...selectedActivities, { id: activityId, activity: activityName }]);
        return [...prevPreferences, activityId];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await postPreferences(preferences);
      router.push("/home");
    } catch (error) {
      console.error("Error submitting preferences:", error);
    }
  };

  const pathname = usePathname()

  return (
    <>
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] h-[100vh] w-[100vw]">
    <div className="h-[90vh] w-[100vw] flex flex-col items-center pt-[6vh]">
      <div className="text-[1.2rem] text-pink-50 font-semibold mb-[5vh]">
        <h2>Preferences</h2>
      </div>
      <div className="grid grid-cols-3 gap-[4vw] mb-[15vh]">
        {activities.map(({ id, activity }) => (
          <button
            key={id}
            onClick={() => handleSelectActivity(id, activity)}
            className={`text-[1.8vh] font-semibold h-[5.5vh] border border-purple-300 w-[28vw] rounded-[5vh] shadow-[5px_12px_20px_-6px_rgba(120,50,255,1)] ${
              preferences.includes(id)
                ? "bg-[#7559aa] text-green-100"
                : " text-purple-900"
            }`}
          >
            {activity}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-[4vw]">
        {selectedActivities.map(({ id, activity }) => (
          <div
            key={id}
            className="text-[1.8vh] font-semibold h-[5.5vh] w-[26vw] rounded-[15vh] bg-blue-600 text-yellow-200 flex items-center justify-center shadow-[5px_12px_20px_-8px_rgba(0,0,0,1)]"
          >
            {activity}
          </div>
        ))}
      </div>
      
      
    </div>
    <div className="h-[10vh]">
    <button
      onClick={handleSubmit}
      className="bg-slate-800 h-[5vh] w-[18vw] ml-[70vw] rounded-[1.5vw] shadow-[5px_12px_15px_-6px_rgba(180,60,244,1)]"
    >
      <Link
            className={`link ${pathname === '/home' ? 'active' : ''}`}
            href="/home"
          >
      <HiOutlineChevronDoubleRight className="size-[5vh] ml-[4vw]" color="#FB16FA"/>
      </Link>
    </button>
    </div>
    </div>
    </>
    
  );
};

export default AddHobbies;

/* bg-gradient-to-r from-indigo-800 to-pink-600
bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0] */
