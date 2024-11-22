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
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    const products = data?.products || []; // Make sure products exist

    return {
        products,
        isLoading,
        isError,
        error,
        refetch, // For manual refetching
    };
};

export default useProducts;
