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
  TiPlane,
} from "react-icons/ti";
import Link from "next/link";

const ICONS_SIZE = 25;

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <RPSidebar
      breakPoint="xl"
      collapsed={collapsed}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className="font-semibold fixed"
    >
      <div className="pl-[17px] mt-5 text-sky-600 ">
        <TiPlane size={40} />
      </div>
      <Menu className="mt-5">
        <MenuItem
          component={<Link href="/dashboard" />}
          icon={<TiThLarge size={ICONS_SIZE} />}
        >
          Panel
        </MenuItem>
        <MenuItem
          component={<Link href="/dashboard/customers" />}
          icon={<TiGroup size={ICONS_SIZE} />}
        >
          Clientes
        </MenuItem>
        <MenuItem icon={<TiUser size={ICONS_SIZE} />}>Empleados</MenuItem>
        <SubMenu label="Servicios" icon={<TiTag size={ICONS_SIZE} />}>
          <MenuItem component={<Link href="/dashboard/hotels-per-night" />}>
            Hotel por noches
          </MenuItem>
          <MenuItem>Alquiler de autos</MenuItem>
          <MenuItem>Pasaje de colectivo</MenuItem>
          <MenuItem>Pasaje de avión</MenuItem>
          <MenuItem>Pasaje de tren</MenuItem>
          <MenuItem>Excursión</MenuItem>
          <MenuItem>Entrada a evento</MenuItem>
        </SubMenu>
        <MenuItem
          component={<Link href="/dashboard/packages" />}
          icon={<TiTags size={ICONS_SIZE} />}
        >
          Paquetes
        </MenuItem>
      </Menu>
    </RPSidebar>
  );
}
