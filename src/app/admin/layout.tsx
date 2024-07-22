import React from "react";
import AdminSideBar from "./AdminSideBar";

interface IAdminLayout {
  children: React.ReactNode;
}
const AdminLayout = ({ children }: IAdminLayout) => {
  return (
    <div className="overflow-height flex items-start justify-between overflow-hidden">
    <div className="overflow-height w-15 lg:w-1/5 bg-blue-900 text-white p-1 lg:p-5">
      <AdminSideBar />
    </div>
    <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll">
      {children}
    </div>
</div>
  );
};

export default AdminLayout;
