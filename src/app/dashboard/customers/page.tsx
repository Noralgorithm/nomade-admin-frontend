import { Suspense } from "react";
import { CustomersTable } from "./_components/customers-table";
import { SearchCard } from "./_components/search-card";
import { CustomersPageHeader } from "./_components/page-header";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function ClientsPage({ searchParams: { page = "1" } }: Props) {
  return (
    <main className="flex flex-col px-5 pb-8 items-center gap-6">
      <CustomersPageHeader />
      <SearchCard />
      <Suspense fallback={<h1>Loading...</h1>}>
        <CustomersTable page={+page} />
      </Suspense>
    </main>
  );
}
