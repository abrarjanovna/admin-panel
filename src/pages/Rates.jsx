import { Link } from "react-router-dom";
import { Sidebar } from "../components";
import { DataGrid } from "@mui/x-data-grid";
import { CgSearch } from "react-icons/cg";

const columns = [
  { field: "Name", headerName: "Филиалы", width: 550 },
  {
    field: "price",
    headerName: "Год основания",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    Name: "Venenatis Mollis",
    price: "50 000 сум",
  },
  {
    id: 2,
    Name: "Parturient Lorem",
    price: "50 000 сум",
  },
  {
    id: 3,
    Name: "Fringilla Fusce Elit",
    price: "50 000 сум",
  },
  {
    id: 4,
    Name: "Fermentum Venenatis Tortor",
    price: "50 000 сум",
  },
  {
    id: 5,
    Name: "Parturient Malesuada Sem",
    price: "50 000 сум",
  },
  {
    id: 6,
    Name: "Tortor Nullam Fringilla",
    price: "50 000 сум",
  },
  {
    id: 7,
    Name: "Ridiculus",
    price: "50 000 сум",
  },
  {
    id: 8,
    Name: "Lorem Ornare",
    price: "50 000 сум",
  },
  {
    id: 9,
    Name: "Vestibulum",
    price: "50 000 сум",
  },
  {
    id: 10,
    Name: "Malesuada Fermentum Tortor",
    price: "50 000 сум",
  },
  {
    id: 11,
    Name: "Ullamcorper",
    price: "50 000 сум",
  },
  {
    id: 12,
    Name: "Ullamcorper",
    price: "50 000 сум",
  },
  {
    id: 13,
    Name: "Malesuada Fermentum Tortor",
    price: "50 000 сум",
  },
  {
    id: 14,
    Name: "Vestibulum",
    price: "50 000 сум",
  },
  {
    id: 15,
    Name: "Lorem Ornare",
    price: "50 000 сум",
  },
];

const Rates = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[1292px]">
        <p className="p-5 text-2xl font-bold text-[#5B6871]">Тарифы</p>
        <div>
          <hr />
          <div className="h-[40px] bg-[#6E8BB70D] p-2 text-[#6E8BB7]">
            <Link
              to="/rates/fixed"
              className="ml-4 cursor-pointer hover:text-[#4094f7]"
            >
              Фиксированная
            </Link>
            <Link
              to="/rates/km"
              className="ml-8 cursor-pointer hover:text-[#4094f7]"
            >
              По километру
            </Link>
          </div>
        </div>
        <div className="flex h-[965px] w-[1292px] bg-[#4094F726]"></div>
        <div className="m-8 cursor-pointer bg-white">
          <div className="-mt-[78%] h-[32px] w-[400px] text-gray-500">
            <div className="flex p-2">
              <CgSearch />
              <input
                type="text"
                placeholder="Поиск..."
                className="h-1 p-2 focus:outline-none"
              />
            </div>
          </div>
          <Link to="/rates/fixed/about">
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 11 },
                },
              }}
              pageSizeOptions={[10, 20]}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rates;
