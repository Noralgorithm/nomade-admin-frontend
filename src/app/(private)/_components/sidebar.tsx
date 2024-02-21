"use client";

import { useState } from "react";
import {
  Menu,
  MenuItem,
  Sidebar as RPSidebar,
  SubMenu,
} from "react-pro-sidebar";
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
      className="text-sky-600 font-semibold"
    >
      <div className="pl-5 mt-5">
        <TiSocialSkype size={40} />
      </div>
      <Menu className="mt-5">
        <MenuItem icon={<TiThLarge size={ICONS_SIZE} />}>Panel</MenuItem>
        <MenuItem icon={<TiGroup size={ICONS_SIZE} />}>Clientes</MenuItem>
        <MenuItem icon={<TiUser size={ICONS_SIZE} />}>Empleados</MenuItem>
        <SubMenu label="Servicios" icon={<TiTag size={ICONS_SIZE} />}>
          <MenuItem>Hotel por noches</MenuItem>
          <MenuItem>Alquiler de autos</MenuItem>
          <MenuItem>Pasaje de colectivo</MenuItem>
          <MenuItem>Pasaje de avión</MenuItem>
          <MenuItem>Pasaje de tren</MenuItem>
          <MenuItem>Excursión</MenuItem>
          <MenuItem>Entrada a evento</MenuItem>
        </SubMenu>
        <MenuItem icon={<TiTags size={ICONS_SIZE} />}>Paquetes</MenuItem>
      </Menu>
    </RPSidebar>
  );
}
