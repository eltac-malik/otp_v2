import { LuMonitorPlay } from "react-icons/lu";
import { GrHistory } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";

import { PATH } from "./path";

export const sideList = [
  {
    id: 1,
    title: "Monitoring",
    permission: [],
    icon: () => <LuMonitorPlay size={17} />,
    path: PATH.MONITORING,
  },
  {
    id: 2,
    title: "Tarixçə",
    permission: [],
    icon: () => <GrHistory size={17} />,
    path: PATH.HISTORY,
  },
  {
    id: 3,
    title: "İstifadəçilər",
    permission: [],
    icon: () => <FaUsers size={17} />,
    path: PATH.USERS,
  },
];
