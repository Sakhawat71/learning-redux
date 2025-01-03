import { ModeToggle } from "@/providers/mode-toggle";

const Navbar = () => {
    return (
        <nav className="bg-gray-300 max-w-full h-16 flex items-center py-4 px-8">
            <div className="flex items-center w-16 h-auto">
                <img
                    src="https://i.ibb.co.com/CnyPN5K/logo-portfolio-removebg-preview.png"
                    alt="logo"
                    className="ml-5 w-full h-full"
                />
            </div>
            <div className=" ml-auto" >
                <ModeToggle />
            </div>
        </nav>
    );
};

export default Navbar;