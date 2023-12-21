import Container from "../Container";
import CategoryBox from "../CategoryBox";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
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
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (label) => {
    let currentQuery = {};
    if (searchParams) {
      currentQuery = queryString.parse(searchParams.toString());
    }

    const updatedQuery = {
      ...currentQuery,
      category: label,
    };

    if (searchParams.get("category") == label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    navigate(url);
  };

  const isMainPage = location.pathname == "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <div
            onClick={() => handleClick(item.label)}
            key={item.label}
            className={`
                flex 
                flex-col 
                items-center 
                justify-center 
                gap-2
                p-3
                border-b-2
                 hover:text-neutral-800
                transition
                cursor-pointer
                ${category == item.label ? "border-b-neutral-800" : "border-transparent"}
                ${category == item.label ? "text-neutral-800" : "text-neutral-500"}
            `}
          >
            <CategoryBox label={item.label} icon={item.icon} />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Categories;
