import type { IconType } from "react-icons";
import { BsSnow } from "react-icons/bs";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
export type TCategories = {
  label: string;
  icon: IconType;
  description?: string | null;
};
export type TCategoriesData = Array<TCategories>;
export interface ICategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}
export const categoriesData: TCategoriesData = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is close to the windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is close to the modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is close to the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This property is close to the pools",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is close to the islands",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is close to the lake",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is close to the castles",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property is close to the camping",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is close to the arctic",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This property is close to the cave",
  },
  {
    label: "Desert",
    icon: GiBarn,
    description: "This property is close to the desert",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is close to the luxurious",
  },
];
