"use client";

import { useTheme } from "next-themes";
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore";
import { useState, useEffect, useMemo } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import Modal from "./Modal";

interface IProps {
  users: DocumentData[];
}

export default function DataTable({ users }: IProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState("");
  const { theme } = useTheme();
  const [mount, setMount] = useState(false);

  const columns: any = useMemo(() => {
    return [
      { field: "id", headerName: "ID", width: 310 },
      {
        field: "profile",
        headerName: "Profile",
        width: 250,
        renderCell: (params: GridValueGetterParams) => (
          <div className="flex items-center gap-7 min-w-[100px]">
            <img
              src={params.row.profile}
              alt="img"
              className="w-8 h-8 object-cover rounded-full"
            />
            <p>{params.row.name}</p>
          </div>
        ),
      },
      {
        field: "age",
        headerName: "Age",
        width: 80,
      },
      {
        field: "email",
        headerName: "Email",
        width: 230,
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 120,
        renderCell: (params: GridValueGetterParams) => (
          <button
            className="px-3 py-2 text-center bg-rose-500  min-w-[90px] rounded-md font-bold text-white"
            onClick={() => {
              setSelectedRow(params.row.id);
              setShowModal(true);
            }}
          >
            Delete
          </button>
        ),
      },
    ];
  }, []);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  const handlePress = async () => {
    await deleteDoc(doc(db, "users", selectedRow));
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const newRow: DocumentData[] = users.map((user) => ({
    ...user,
    delete: "delete",
  }));

  return (
    <div className="mx-auto w-[80%] h-[500px]">
      <DataGrid
        className="text-black dark:text-white"
        rows={newRow}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        sx={{
          "& .MuiCheckbox-root svg": {
            width: 16,
            height: 16,
            backgroundColor: "transparent",
            border: `1px solid ${
              theme === "light" ? "#d9d9d9" : "rgb(67, 67, 67)"
            }`,
          },
        }}
        // onSelectionModelChange={(ids) => {
        //   console.log(ids);

        //   // const selectedIDs = new Set(ids);
        //   // const selectedRowData = users.filter((users) =>
        //   //   selectedIDs.has(row.id.toString());
        //   // );
        //   // console.log(selectedRowData);
        // }}
      />
      {showModal && (
        <Modal>
          <div className="bg-white/80 dark:bg-black/80 flex flex-col py-8 px-5 justify-between">
            <h1 className="text-center font-bold text-base">
              Are you sure to delete ?
            </h1>
            <div className="flex justify-between">
              <button
                onClick={handleCancel}
                className="px-3 py-1 text-center bg-rose-600  min-w-[90px] rounded-md font-bold text-white"
              >
                Cancel
              </button>
              <button
                onClick={handlePress}
                className="px-3 py-1 text-center bg-slate-600  min-w-[90px] rounded-md font-bold text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
