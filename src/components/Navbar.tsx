import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Menu } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <nav className="flex bg-white py-4 drop-shadow-sm text-bold">
      <div className="mx-8">
        <Menu />
      </div>
    </nav>
  );
};
