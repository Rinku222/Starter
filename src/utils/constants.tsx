import Arcade from "../assets/images/icon-arcade.svg";
import Pro from "../assets/images/icon-pro.svg";
import Advanced from "../assets/images/icon-advanced.svg";

export const STEPPER_VALUES = [
  { name: "Your Info", number: 1 },
  { name: "Selected Plan", number: 2 },
  { name: "ADD-ONS", number: 3 },
  { name: "Summary", number: 4 },
];

export const PLAN_OPTIONS = [
  { name: "Arcade", amount: 9, icon: Arcade },
  { name: "Advanced", amount: 12, icon: Advanced },
  { name: "Pro", amount: 15, icon: Pro },
];

export const ADD_ONS = [
  {
    name: "Online service",
    description: "Access to  multiplayer games",
    amount: 1,
  },
  { name: "Large storage", description: "Extra 1TB of cloud Save", amount: 2 },
  {
    name: "Customizable profile",
    description: "Custom theme on your profile",
    amount: 2,
  },
];
