import { Suspense } from "react";
import { CustomersTable } from "./_components/customers-table";
import { SearchCard } from "./_components/search-card";

interface Props {
  searchParams: {
    page: string;
  };
}

export default function ClientsPage({ searchParams: { page = "1" } }: Props) {
  return (
    <main className="flex flex-col px-5 pb-8 items-center gap-6">
      <h1 className="ml-8 text-left w-full max-w-7xl font-semibold text-4xl">
        Customers
      </h1>
      <SearchCard />
      <Suspense fallback={<h1>Loading...</h1>}>
        <CustomersTable page={+page} />
      </Suspense>
    </main>
  );
}
