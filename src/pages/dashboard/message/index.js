import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRemoveFormat } from "react-icons/fa";
import DashboardLayout from "../DashboardLayout";
import { AuthContext } from "@/pages/Authentication/Authcontext";

const MessagesTable = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("https://usama-mir-server.vercel.app/message");
        const data = await response.json();
        if (Array.isArray(data)) {
          setMessages(data);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(`https://usama-mir-server.vercel.app/messages/${id}`, {
        method: "DELETE",
      })
        .then((deleted) => console.log("deleted successfully"))
        .catch((error) => console.log("error"));
      router.reload();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {user ? (
        <>
          <div className="min-h-screen max-w-[1000px] mx-auto">
            <h1 className="text-center font-bold text-3xl my-4">
              User Messages
            </h1>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Manage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {messages.length > 0 ? (
                    messages.map((msg) => (
                      <tr key={msg._id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button onClick={() => handleDelete(msg._id)}>
                            <AiFillDelete className="text-2xl text-red-500" />
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {format(msg.uploadedTime, "h:mm:ss a, MMM d, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {msg.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {msg.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {msg.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {msg.message}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="4"
                        className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500"
                      >
                        No messages available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen text-center">
            <h1 className="text-red-500">please login first to Manage a message</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default MessagesTable;

MessagesTable.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
