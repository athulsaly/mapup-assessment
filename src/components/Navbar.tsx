"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = ({
  searchQuery,
  handleChange,
  handleSearch,
}: {
  searchQuery: string;
  handleChange: (event: { target: { value: string } }) => void;
  handleSearch: () => void;
}) => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 width-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-green-600">
            Dashboard
          </Link>

          <div className="flex w-full max-w-sm items-center justify-end space-x-2">
            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
            <Input
              value={searchQuery}
              onChange={handleChange}
              type="search"
              className="w-56"
              placeholder="Enter keyword to search..."
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
