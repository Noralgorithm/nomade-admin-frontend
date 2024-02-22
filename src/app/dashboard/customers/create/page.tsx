import { CreateCustomerForm } from "./_components/create-customer-form";
import { CustomerCreationPageHeader } from "./_components/page-header";

export default function CustomerCreationPage() {
  return (
    <main className="flex flex-col items-center text-black gap-6 pb-8 mx-5">
      <CustomerCreationPageHeader />
      <CreateCustomerForm />
    </main>
  );
}
