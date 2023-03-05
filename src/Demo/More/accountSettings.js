import PersonOutline from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";

const accountSettings = [
  {
    title: "Edit Profile",
    icon: PersonOutline,
    link: "/account/edit-profile",
  },
  {
    title: "Change Password",
    icon: LockIcon,
    link: "/account/change-password",
  },
  {
    title: "Notifications",
    icon: NotificationsIcon,
    link: "/account/notifications",
  },
  {
    title: "About",
    icon: InfoIcon,
    link: "/account/about",
  },
  {
    title: "Privacy Policy",
    icon: LockIcon,
    link: "/account/privacy",
  },
  {
    title: "Language",

    icon: LanguageIcon,
    link: "/account/language",
  },
  {
    title: "Dark Mode",
    icon:  DarkModeIcon,
    link: "/account/dark-mode",
  },
  {
    title: "Help Center",
    icon: HelpIcon,
    link: "/account/help-center",
  },
  {
    title: "Log Out",
    icon: LogoutIcon,
    link: "/account/logout",
  },
];

export default accountSettings;
