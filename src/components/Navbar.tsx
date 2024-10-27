"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Navbar = ({
  searchQuery,
  handleChange,
  handleSearch,
  searchState,
}: {
  searchState?: boolean;
  searchQuery?: string;
  handleChange?: (event: { target: { value: string } }) => void;
  handleSearch?: () => void;
}) => {
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 width-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold text-green-600">
            Dashboard
          </Link>
          {
            <div className="flex w-full max-w-sm items-center justify-end space-x-2">
              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
              <Input
                value={searchQuery}
                onChange={handleChange}
                type="text"
                className="w-56"
                placeholder="Enter keyword to search..."
                disabled={searchState}
              />
              <Link href="/">
                <Button
                  variant={!searchState ? "default" : "destructive"}
                  onClick={handleSearch}
                  disabled={!searchQuery}
                >
                  {!searchState ? "Search" : "Clear"}
                </Button>
              </Link>
            </div>
          }
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
