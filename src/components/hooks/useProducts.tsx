import getProducts from "@/helpers/api/getProductsData";
import { CategoryProps } from "@/types/categories";
import { ProductProps } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/router";

export const useProducts = (type_key: string, slug: string) => {
  const { locale } = useRouter();

  return useQuery({
    queryKey: ["get-products", slug],
    queryFn: async () =>
      (await getProducts(type_key, slug, locale as locale)) as ProductProps,
  });
};

export const useCategories = () => {
  const { locale } = useRouter();
  return useQuery({
    queryKey: ["get-categories"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://prodapp.lifepharmacy.com/api/web/categories?lang=${locale}`
      );

      return data as CategoryProps;
    },
  });
};
