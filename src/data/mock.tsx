import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  PencilIcon,
  UserCircleIcon,
  LockClosedIcon,
  RefreshIcon,
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

export const userNavigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: false },
  { name: "Profile", href: "/profile", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

export const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Edit Profile", href: "#", icon: PencilIcon, current: false },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Privacy", href: "#", icon: LockClosedIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Recover playlists", href: "#", icon: RefreshIcon, current: false },
];
