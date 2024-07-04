'use client'

import React from 'react';
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";

const BackButton = () => {
  const router = useRouter();
  return (
    <button className="flex items-center gap-2 self-start text-lg font-semibold" onClick={() => router.back()}>
      <IoArrowBack size={20}/>
      <span>Back</span>
    </button>
  )
};

export default BackButton;
