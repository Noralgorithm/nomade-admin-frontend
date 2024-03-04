import { Suspense } from "react";
import { HotelsPerNightPageHeader } from "./_components/page-header";
import { HotelsTable } from "./_components/hotels-table";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function HotelsPerNightPage({
  searchParams: { page = "1" },
}: Props) {
  return (
    <main className="flex flex-col px-5 pb-8 items-center gap-6">
      <HotelsPerNightPageHeader />
      <Suspense fallback={<h1>Loading...</h1>}>
        <HotelsTable page={+page} />
      </Suspense>
    </main>
  );
}
