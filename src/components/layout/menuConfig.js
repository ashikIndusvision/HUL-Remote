// menuConfig.js

import { dashboard, tables, smartView, billing, camera, rtl } from "./icons"; // Update with your actual icon imports

const menuConfig = [
  {
    key: "1",
    label: "Dashboard",
    path: "/dashboard-home",
    icon: dashboard,
    id: "dashboard-home",
  },
  {
    key: "2",
    label: "Reports",
    path: "/reports",
    icon: tables,
    id: "reports",
  },
  {
    key: "3",
    label: "AI Smart View",
    path: "/ai-smart-view",
    icon: smartView,
    id: "ai-smart-view",
  },
  {
    key: "4",
    label: "Machine Parameter",
    path: "/machine-parameter",
    icon: billing,
    id: "machine-parameter",
  },
  {
    key: "5",
    label: "System Status",
    path: "/system-status",
    icon: camera,
    id: "system-status",
  },
  {
    key: "6",
    label: "Settings",
    path: "/settings",
    icon: billing,
    id: "settings",
    fontWeightId: "organization", // Optional special case
  },
  {
    key: "7",
    label: "Plant",
    path: "/plant",
    icon: rtl,
    id: "plant",
  },
];

export default menuConfig;
