import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="">
      <div className="text-center">
        <Link href={"/dashboard/blog"}>
          <button className="btn btn-outline ml-2 mt-3">Write Blog</button>
        </Link>
        <Link href={"/dashboard/blog/remove"}>
          <button className="btn btn-outline ml-2 mt-3">Delete Blog</button>
        </Link>
        <Link href={"/dashboard/message"}>
          <button className="btn btn-outline ml-2 mt-3">Messages</button>
        </Link>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;
