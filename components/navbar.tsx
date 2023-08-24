import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import Link from "next/link";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center ">
          <Link href="/" className="flex lg:ml-0 gap-x-2">
            <p className="font-bold text-lg sm:text-xl md:text-2xl">MaRk</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
