import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  columns: GridColDef[];
  items: any[];
  itemsCount: number;
}

export function Table({ columns, items, itemsCount }: Props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function updateSearchParamsInURL(page: number) {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set("page", String(page));

    replace(`${pathname}?${newSearchParams}`);
  }

  return (
    <Paper className="w-full max-w-7xl">
      <DataGrid
        columns={columns}
        rows={items}
        rowCount={itemsCount}
        pagination
        pageSizeOptions={[8]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        rowSelection={false}
        paginationMode="server"
        onPaginationModelChange={(paginationModel) => {
          updateSearchParamsInURL(paginationModel.page + 1);
        }}
      />
    </Paper>
  );
}
