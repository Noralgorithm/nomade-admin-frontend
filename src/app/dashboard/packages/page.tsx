import { Suspense } from "react";
import { PackagesTable } from "./_components/packages-table";
import { PackagesPageHeader } from "./_components/page-header";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function ClientsPage({ searchParams: { page = "1" } }: Props) {
  return (
    <main className="flex flex-col px-5 pb-8 items-center gap-6">
      <PackagesPageHeader />
      <Suspense fallback={<h1>Loading...</h1>}>
        <PackagesTable page={+page} />
      </Suspense>
    </main>
  );
}
