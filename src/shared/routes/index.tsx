import { LuMonitorPlay } from "react-icons/lu";
import { GrHistory } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

import { PATH } from "./path";

export const sideList = [
  {
    id: 1,
    title: "monitoring",
    permission: [],
    icon: () => <LuMonitorPlay size={17} />,
    path: PATH.MONITORING,
  },
  {
    id: 2,
    title: "history",
    permission: [],
    icon: () => <GrHistory size={17} />,
    path: PATH.HISTORY,
  },
  {
    id: 3,
    title: "users",
    permission: [],
    icon: () => <FaUsers size={17} />,
    path: PATH.USERS,
  },
  {
    id: 4,
    title: "check",
    permission: [],
    icon: () => <FaListCheck size={17} />,
    path: PATH.CHECK,
  },
];
