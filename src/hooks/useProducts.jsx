import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await axiosPublic.get(`/products`);
            return response.data; // This directly contains the array of products
        },
        keepPreviousData: true,
        staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });

    // Assuming response.data is directly an array of products
    const products = data || []; // Ensure it's an array, fallback to an empty array if not defined

    return {
        products,
        loading: isLoading,
        error: isError ? error : null,
        refetch, // For manual refetching
    };
};

export default useProducts;
