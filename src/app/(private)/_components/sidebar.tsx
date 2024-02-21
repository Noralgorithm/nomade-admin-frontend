"use client";

import { useState } from "react";
import { Menu, MenuItem, Sidebar as RPSidebar } from "react-pro-sidebar";
import {
  TiThLarge,
  TiUser,
  TiGroup,
  TiTag,
  TiTags,
  TiSocialSkype,
} from "react-icons/ti";

const ICONS_SIZE = 25;

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <RPSidebar
      breakPoint="xl"
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
    >
      <div className="pl-5 mt-5">
        <TiSocialSkype size={40} className="text-sky-600" />
      </div>
      <Menu className="mt-5">
        <MenuItem
          icon={<TiThLarge size={ICONS_SIZE} className="text-sky-600" />}
        >
          {" "}
          Panel{" "}
        </MenuItem>
        <MenuItem icon={<TiGroup size={ICONS_SIZE} className="text-sky-600" />}>
          {" "}
          Clientes{" "}
        </MenuItem>
        <MenuItem icon={<TiUser size={ICONS_SIZE} className="text-sky-600" />}>
          {" "}
          Empleados{" "}
        </MenuItem>
        <MenuItem icon={<TiTag size={ICONS_SIZE} className="text-sky-600" />}>
          {" "}
          Servicios{" "}
        </MenuItem>
        <MenuItem icon={<TiTags size={ICONS_SIZE} className="text-sky-600" />}>
          {" "}
          Paquetes{" "}
        </MenuItem>
      </Menu>
    </RPSidebar>
  );
}
