"use client";
import Connections from "@/components/profile/Connections";
import Hobbies from "@/components/profile/Hobbies";
import Profile from "@/components/profile/Profile";
import RecentPost from "@/components/profile/RecentPost";
import React from "react";

type Props = {};

const page = (props: Props) => {

  return (
    <>
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0]">
      <Profile />
      <Hobbies />
      <RecentPost />
      <Connections />
      </div>
    </>
  );
};

export default page;