import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/products`);
            return response.data;
        },
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5,
    })
    const products = data?.products || [];

    return {
        products,
        isLoading,
        isError,
        error,
        refetch, // To manually refetch if needed
    };
};

export default useProducts;