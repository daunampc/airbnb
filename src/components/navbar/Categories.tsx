"use client";
import { categoriesData } from "@/types/categories";
import Container from "../Container";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

const Categories = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categoriesData.map((item, index) => {
          return (
            <CategoryBox
              selected={category === item.label}
              icon={item.icon}
              label={item.label}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
};
export default Categories;
