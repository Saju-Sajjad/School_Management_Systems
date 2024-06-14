import {
  Home,
  SupervisorAccount,
  People,
  Print,
  AccountBalance,
  Event,
  Settings,
  Logout,
} from "@mui/icons-material";

const MenuData = [
  { label: "Dashboard", icon: <Home />, path: "/admin/dashboard" },
  {
    label: "Admission Management",
    icon: <SupervisorAccount />,
    path: "/admission",
    children: [
      {
        label: "Admit Student",
        icon: <People />,
        path: "/admission/admit-student",
      },
      {
        label: "Print Admission Form",
        icon: <Print />,
        path: "/admission/print-form",
      },
    ],
  },
  {
    label: "Accounting Management",
    icon: <AccountBalance />,
    path: "/accounting",
  },
  { label: "Events", icon: <Event />, path: "/events" },
  { label: "Settings", icon: <Settings />, path: "/settings" },
  { label: "Logout", icon: <Logout />, path: "/logout" },
];

export default MenuData;
