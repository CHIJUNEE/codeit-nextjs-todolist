import React from "react";
import Link from "next/link";
const header = () => {
  return (
    <div className="flex space-between">
      <Link href="/">
        <p>home</p>
      </Link>
      <nav className="flex">
        <Link href="/todolist">
          <p>todolist</p>
        </Link>

        <Link href="/new-todo">
          <p>new-todo</p>
        </Link>
      </nav>
    </div>
  );
};

export default header;
