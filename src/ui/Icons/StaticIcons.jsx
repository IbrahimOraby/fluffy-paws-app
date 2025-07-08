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

const createStaticIcon =
  (IconComponent) =>
  ({ size = 24, color = "var(--light-gray)" }) => {
    return (
      <IconComponent
        size={size}
        style={{
          color,
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
};
