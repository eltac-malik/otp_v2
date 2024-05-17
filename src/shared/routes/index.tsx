import React from "react";

import { roles } from "../core";
import { PATH } from "./path";

import { IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { TfiAnnouncement } from "react-icons/tfi";
import { MdExplore, MdOutlineIntegrationInstructions } from "react-icons/md";
import { LiaIndustrySolid, LiaFileContractSolid } from "react-icons/lia";
import { FaPersonWalkingLuggage, FaPeopleGroup } from "react-icons/fa6";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
import { VscGitPullRequest } from "react-icons/vsc";
import { TbDeviceAnalytics } from "react-icons/tb";
import { FaRegUserCircle } from "react-icons/fa";
import { RiPriceTag3Fill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";

export const sideList = [
  {
    id: 1,
    title: "Şəxsi kabinet",
    permission: [roles.AGENCY, roles.BROKER, roles.ADMIN, roles.USER],
    icon: () => <FaRegUserCircle size={17} />,
    path: "/profile",
  },
  {
    id: 2,
    title: "Yeni Elan sorğusu",
    permission: [roles.ADMIN],
    icon: () => <VscGitPullRequest size={17} />,
    path: "/announce-request",
  },
  {
    id: 3,
    title: "Yeni Makler sorğusu",
    permission: [roles.ADMIN],
    icon: () => <LiaFileContractSolid />,
    path: "/bloker-request",
  },
  {
    id: 4,
    title: "Yeni Şirkət sorğusu",
    permission: [roles.ADMIN],
    icon: () => <SiRelianceindustrieslimited />,
    path: "/company-request",
  },
  {
    id: 5,
    title: "Elanlarım",
    permission: [roles.AGENCY, roles.BROKER, roles.USER],
    icon: () => <TfiAnnouncement size={17} />,
    path: "/dashboard",
  },
  {
    id: 6,
    title: "Kəşfet",
    permission: [roles.ADMIN, roles.BROKER],
    icon: () => <MdExplore size={17} />,
    path: PATH.EXPLORE,
  },
  {
    id: 7,
    title: "Statistika",
    permission: [roles.ADMIN, roles.BROKER],
    icon: () => <TbDeviceAnalytics size={17} />,
    path: "/statistics",
  },
  {
    id: 8,
    title: "Bildiriş sistemi",
    permission: [roles.USER, roles.BROKER],
    icon: () => <IoMdNotifications size={17} />,
    path: PATH.NOTIFICATION,
  },
  {
    id: 9,
    title: "Parametrlər",
    permission: [roles.AGENCY, roles.ADMIN, roles.BROKER, roles.USER],
    icon: () => <IoSettingsSharp size={17} />,
    path: "/settings",
  },
  {
    id: 10,
    title: "Şirkətlər",
    permission: [roles.ADMIN],
    icon: () => <LiaIndustrySolid size={17} />,
    path: "/companies",
  },
  {
    id: 11,
    title: "İşçilər",
    permission: [roles.AGENCY],
    icon: () => <FaPeopleGroup size={17} />,
    path: "/employee",
  },
  {
    id: 12,
    title: "Maklerlər",
    permission: [roles.ADMIN],
    icon: () => <FaPersonWalkingLuggage size={17} />,
    path: "/bloker",
  },
  {
    id: 13,
    title: "Userlər",
    permission: [roles.ADMIN],
    icon: () => <PiUsersThreeFill size={17} />,
    path: "/users",
  },
  {
    id: 15,
    title: "Qeydlərim",
    permission: [roles.BROKER, roles.USER],
    icon: () => <CgNotes size={17} />,
    path: "/notes",
  },
  {
    id: 16,
    title: "Təlimatlar",
    permission: [roles.AGENCY, roles.ADMIN, roles.BROKER, roles.USER],
    icon: () => <MdOutlineIntegrationInstructions size={17} />,
    path: "/instructions",
  },
  {
    id: 14,
    title: "Qiymət və Planlar",
    permission: [roles.AGENCY, roles.ADMIN, roles.BROKER, roles.USER],
    icon: () => <RiPriceTag3Fill size={17} />,
    path: "/pricing",
  },
];
