import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  import { useRouter } from "next/navigation";
  
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
              isActive={pathname === "/"}  // Change 'active' to 'isActive'
            >
              1
            </PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleNavigation("/Edubooks")}
              isActive={pathname === "/Edubooks"}  // Change 'active' to 'isActive'
            >
              2
            </PaginationLink>
          </PaginationItem>
  
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handleNavigation("/Funbooks")}
              isActive={pathname === "/Funbooks"}  // Change 'active' to 'isActive'
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
  