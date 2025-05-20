import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPen } from "lucide-react";
import { NavbarButton } from "./ui/resizable-navbar";
// import { useUserStore } from "@/store";

export default function DropDownMenu() {
  // const userAvatarUrl = useUserStore((state) => state.userAvatarUrl);
  return (
    <div className="dropdown-menu">
      <DropDownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {/* <AvatarImage src={userAvatarUrl} /> */}
            <AvatarFallback>
              <UserPen />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Profile</DropdownMenuLabel>
          <DropdownMenuItem>
            <NavbarButton
              variant="primary"
              onClick={() => console.log("logout")}
            >
              Logout
            </NavbarButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropDownMenu>
    </div>
  );
}
