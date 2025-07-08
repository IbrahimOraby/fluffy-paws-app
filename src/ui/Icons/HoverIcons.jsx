import React, { useState } from "react";
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
} from "lucide-react";

const createHoverIcon =
  (IconComponent) =>
  ({
    size = 24,
    color = "var(--light-gray)",
    hoverColor = "var(--primary-color)",
  }) => {
    const [isHover, setIsHover] = useState(false);
    return (
      <IconComponent
        size={size}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          color: isHover ? hoverColor : color,
          transition: "0.3s",
          cursor: "pointer",
        }}
      />
    );
  };

// hover icons
const HoverSearchIcon = createHoverIcon(Search);
const HoverStoreIcon = createHoverIcon(Store);
const HoverMailIcon = createHoverIcon(Mail);
const HoverHeartIcon = createHoverIcon(Heart);
const HoverDogIcon = createHoverIcon(Dog);
const HoverCatIcon = createHoverIcon(Cat);
const HoverUserIcon = createHoverIcon(User);
const HoverBuildingIcon = createHoverIcon(Building);
const HoverMapIcon = createHoverIcon(Navigation);
const HoverCalendarIcon = createHoverIcon(CalendarDays);
const HoverPawIcon = createHoverIcon(PawPrint);
const HoverStarIcon = createHoverIcon(Star);
const HoverVerifiedIcon = createHoverIcon(ShieldCheck);
const HoverShareIcon = createHoverIcon(Share);
const HoverPlusIcon = createHoverIcon(Plus);
const HoverMinusIcon = createHoverIcon(Minus);
const HoverPasswordIcon = createHoverIcon(KeyRound);
const HoverEyeIcon = createHoverIcon(Eye);
const HoverEyeOffIcon = createHoverIcon(EyeOff);

export {
  HoverSearchIcon,
  HoverStoreIcon,
  HoverMailIcon,
  HoverHeartIcon,
  HoverDogIcon,
  HoverCatIcon,
  HoverUserIcon,
  HoverBuildingIcon,
  HoverMapIcon,
  HoverCalendarIcon,
  HoverPawIcon,
  HoverStarIcon,
  HoverVerifiedIcon,
  HoverShareIcon,
  HoverPlusIcon,
  HoverMinusIcon,
  HoverPasswordIcon,
  HoverEyeIcon,
  HoverEyeOffIcon,
};
