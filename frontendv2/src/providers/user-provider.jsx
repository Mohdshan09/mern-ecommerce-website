import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useUserStore } from "@/store";

export default function UserProvider({ children }) {
  const setUser = useUserStore((state) => state.setUser);
  const resetUserData = useUserStore((state) => state.resetUserData);

  useEffect(() => {
    console.log("inside use effect of user provider (Zustand)");
    const accessToken = Cookies.get("accessToken");
    console.log("access token from cookies:", accessToken);

    if (accessToken) {
      try {
        const userPayload = jwtDecode(accessToken);
        console.log("user payload:", userPayload);

        setUser({
          userId: userPayload.id,
          userEmail: userPayload.email,
          userFirstName: userPayload.firstName,
          userLastName: userPayload.lastName,
          userAvatarUrl: userPayload.avatarUrl,
        });
      } catch (error) {
        console.error("Failed to decode access token:", error);
        Cookies.remove("accessToken");
        resetUserData();
      }
    } else {
      resetUserData();
    }
  }, [setUser, resetUserData]);

  return <>{children}</>;
}
