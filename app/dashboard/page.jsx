"use client"; 

import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function DashboardPage() {
  const [users, setUsers] = useState([
    {
      id: "hmimed1234r55",
      name: "hmimed",
      email: "hmimed@gmail.com",
      company: "Hmimed&Co",
      message: "salam alaykom, kayn khoubz yabes?",
      createdate: "2024-06-01T00:00:00Z",
      status: "new",
      remarks: "No remarks"
    },
    {
      id: "kdidour1234r55",
      name: "9didour",
      email: "9didourr@gmail.com",
      company: "9didourSales",
      message: "Khorchef! khorchef! khorchef!",
      createdate: "2024-07-01T00:00:00Z",
      status: "new",
      remarks: "No remarks"
    }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 text-center">
        <h1 className="text-5xl font-extrabold text-black">Dashboard</h1>
        <p className="text-red-500 mt-2 text-2xl">
          Visualisation et gestion des utilisateurs Contact Us
        </p>
      </header>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-red-500 text-white uppercase text-sm tracking-wider">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Company</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Created Date</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Remarks</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="p-3 font-medium text-gray-700">{user.name}</td>
                <td className="p-3 text-gray-600">{user.email}</td>
                <td className="p-3 text-gray-600">{user.company}</td>
                <td className="p-3 text-gray-600">{user.message}</td>
                <td className="p-3 text-gray-600">{new Date(user.createdate).toLocaleDateString()}</td>
                <td className="p-3 text-gray-600">{user.status}</td>
                <td className="p-3 text-gray-600">{user.remarks}</td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
