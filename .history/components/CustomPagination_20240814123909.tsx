"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, usePathname } from "next/navigation";

const CustomPagination = () => {
  const router = useRouter();
  const currentPath = usePathname(); // Get the current path using usePathname

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() =>
              handleNavigation(
                currentPath === "/Funbooks"
                  ? "/Edubooks"
                  : currentPath === "/Edubooks"
                  ? "/"
                  : "/"
              )
            }
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handleNavigation("/")}
            isActive={currentPath === "/"} // Change 'active' to 'isActive'
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handleNavigation("/Edubooks")}
            isActive={currentPath === "/Edubooks"} // Change 'active' to 'isActive'
          >
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handleNavigation("/Funbooks")}
            isActive={currentPath === "/Funbooks"} // Change 'active' to 'isActive'
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handleNavigation(
                currentPath === "/"
                  ? "/Edubooks"
                  : currentPath === "/Edubooks"
                  ? "/Funbooks"
                  : "/Funbooks"
              )
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
