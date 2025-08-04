import {
  Search,
  Mail,
  Heart,
  Dog,
  Cat,
  User,
  Building,
  Store,
  PawPrint,
  Star,
  Plus,
  Minus,
  KeyRound,
  Eye,
  EyeOff,
  ShieldCheck,
  Share,
  Navigation,
  CalendarDays,
  LogIn,
  LogOut,
  X,
  Menu,
  FileIcon,
  Check,
  Instagram,
  Phone,
  Award,
  Baby
} from "lucide-react";

const createStaticIcon =
  (IconComponent) =>
  ({ size = 24, color = "var(--light-gray)", fill = "none" }) => {
    return (
      <IconComponent
        size={size}
        style={{
          color,
          fill: fill
        }}
      />
    );
  };

// static icons
const StaticSearchIcon = createStaticIcon(Search);
const StaticStoreIcon = createStaticIcon(Store);
const StaticMailIcon = createStaticIcon(Mail);
const StaticHeartIcon = createStaticIcon(Heart);
const StaticDogIcon = createStaticIcon(Dog);
const StaticCatIcon = createStaticIcon(Cat);
const StaticUserIcon = createStaticIcon(User);
const StaticBuildingIcon = createStaticIcon(Building);
const StaticMapIcon = createStaticIcon(Navigation);
const StaticCalendarIcon = createStaticIcon(CalendarDays);
const StaticPawIcon = createStaticIcon(PawPrint);
const StaticStarIcon = createStaticIcon(Star);
const StaticVerifiedIcon = createStaticIcon(ShieldCheck);
const StaticShareIcon = createStaticIcon(Share);
const StaticPlusIcon = createStaticIcon(Plus);
const StaticMinusIcon = createStaticIcon(Minus);
const StaticPasswordIcon = createStaticIcon(KeyRound);
const StaticEyeIcon = createStaticIcon(Eye);
const StaticEyeOffIcon = createStaticIcon(EyeOff);
const StaticLogInIcon = createStaticIcon(LogIn);
const StaticLogOutIcon = createStaticIcon(LogOut);
const StaticXIcon = createStaticIcon(X);
const StaticMenuIcon = createStaticIcon(Menu);
const StaticFileIcon = createStaticIcon(FileIcon);
const StaticCheckIcon = createStaticIcon(Check);
const StaticInstagramIcon=createStaticIcon(Instagram);
const StaticPhoneIcon = createStaticIcon(Phone);
const StaticAwardIcon = createStaticIcon(Award);
const StaticBabyIcon=createStaticIcon(Baby)

//! Google Icon --- Not included by lucid

export const GoogleStaticIcon = ({ width = "25", height = "25" }) => {
  return (
    <svg
      aria-label="Google logo"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <g>
        <path d="m0 0H512V512H0" fill="#fff"></path>
        <path
          fill="#34a853"
          d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
        ></path>
        <path
          fill="#4285f4"
          d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
        ></path>
        <path
          fill="#fbbc02"
          d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
        ></path>
        <path
          fill="#ea4335"
          d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
        ></path>
      </g>
    </svg>
  );
};
export {
  StaticSearchIcon,
  StaticStoreIcon,
  StaticMailIcon,
  StaticHeartIcon,
  StaticDogIcon,
  StaticCatIcon,
  StaticUserIcon,
  StaticBuildingIcon,
  StaticMapIcon,
  StaticCalendarIcon,
  StaticPawIcon,
  StaticStarIcon,
  StaticVerifiedIcon,
  StaticShareIcon,
  StaticPlusIcon,
  StaticMinusIcon,
  StaticPasswordIcon,
  StaticEyeIcon,
  StaticEyeOffIcon,
  StaticLogInIcon,
  StaticLogOutIcon,
  StaticXIcon,
  StaticMenuIcon,
  StaticFileIcon,
  StaticCheckIcon,
  StaticInstagramIcon,
  StaticPhoneIcon,
  StaticAwardIcon,
  StaticBabyIcon

};
