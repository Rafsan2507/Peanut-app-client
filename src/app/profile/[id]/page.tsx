"use client";
import Connections from "@/components/profile/Connections";
import Hobbies from "@/components/profile/Hobbies";
import Profile from "@/components/profile/Profile";
import RecentPost from "@/components/profile/RecentPost";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const page = (props: Props) => {
  /* const searchParams = useSearchParams();
  const id = searchParams.get('id'); */

 /*  const router = useRouter();
  const { id } = router.query; */

  const { id } = useParams();

  return (
    <>
    <div className="bg-gradient-to-b from-[#d4a4fa] to-[#6e7df0]">
      <Profile id={Number(id)}/>
      <Hobbies id={Number(id)}/>
      <RecentPost />
      <Connections />
      </div>
    </>
  );
};

export default page;