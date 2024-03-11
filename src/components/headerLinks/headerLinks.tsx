"use client";

import React from "react";
import { CreateVideoIcon, BellIcon } from "@/ui/icons";
import Link from "next/link";

const headerLinks = () => {
  return (
    <>
      <div className="flex gap-x-[20px] items-center">
        <Link legacyBehavior href={"/"}>
          <a>
            <CreateVideoIcon />
          </a>
        </Link>
        <Link legacyBehavior href={"/"}>
          <a>
            <BellIcon />
          </a>
        </Link>
        <Link legacyBehavior href={"/"}>
          <a>
            <div className="w-[36px] h-[36px] rounded-full flex justify-center items-center text-white bg-[#323132]">
              A
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default headerLinks;
