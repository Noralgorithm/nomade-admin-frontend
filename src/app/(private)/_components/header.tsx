import { TiUser } from "react-icons/ti";

export function Header() {
  return (
    <div className="flex items-center justify-end h-16 w-full px-8">
      <TiUser size={35} className="text-slate-600" />
    </div>
  );
}
