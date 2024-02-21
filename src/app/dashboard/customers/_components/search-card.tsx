"use client";

import { Card, TextInput } from "@tremor/react";
import { RiSearchFill } from "react-icons/ri";

export function SearchCard() {
  return (
    <Card className="max-w-7xl">
      <TextInput icon={RiSearchFill} placeholder="Busca un cliente..." />
    </Card>
  );
}
