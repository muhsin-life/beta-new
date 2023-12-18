import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { Input } from "./ui/input";
import { NavItems } from "./NavItems";
import { SearchIcon } from "lucide-react";
import { MainNav } from "./Categories";
import { siteConfig } from "@/config";

export const Navbar = () => {
  return (
    <div className="bg-primary sticky z-50 top-0 inset-x-0 ">
      <header className="relative bg-primary w-full">
        <MaxWidthWrapper>
          <div className="flex items-center h-20 gap-7 ">
            <div className="ml-4 flex lg:ml-0">
              <Link href="/">
                <Icons.logo className="h-16 w-72" />
              </Link>
            </div>
            <div className="w-full relative">
              <Input
                placeholder="Search for products..."
                className="w-full rounded-lg h-10 ps-10"
              />
              <SearchIcon className="absolute inset-y-0 start-0 my-auto ms-3 w-5 h-5 text-slate-500" />
            </div>
            <NavItems  />
          </div>
        </MaxWidthWrapper>
        <MainNav items={siteConfig.mainNav}/>
      </header>
    </div>
  );
};
