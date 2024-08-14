import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { useRouter } from "next/router";
  
  const CustomPagination = () => {
    const router = useRouter();
    const { pathname } = router;
  
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
                  pathname === "/Funbooks"
                    ? "/Edubooks"
                    : pathname === "/Edubooks"
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
              active={pathname === "/"}
            >
              1
            </PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleNavigation("/Edubooks")}
              active={pathname === "/Edubooks"}
            >
              2
            </PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleNavigation("/Funbooks")}
              active={pathname === "/Funbooks"}
            >
              3
            </PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() =>
                handleNavigation(
                  pathname === "/"
                    ? "/Edubooks"
                    : pathname === "/Edubooks"
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
  