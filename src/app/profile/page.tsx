import Connections from "@/components/profile/Connections";
import Hobbies from "@/components/profile/Hobbies";
import Profile from "@/components/profile/Profile";
import RecentPost from "@/components/profile/RecentPost";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Profile />
      <Hobbies />
      <RecentPost />
      <Connections />
    </>
  );
};

export default page;
