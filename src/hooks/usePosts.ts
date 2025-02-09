// 📂 hooks/usePosts.ts
import { PostWithAuthor } from "../types/post";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, createPost } from "../services/posts";



export const usePosts = (initialPosts?: PostWithAuthor[]) => {
  return useQuery<PostWithAuthor[]>({
      queryKey: ["posts"], // Clé pour identifier la requête
      queryFn: fetchPosts,  // Fonction de récupération des posts
      initialData: initialPosts, // Utiliser les posts SSR comme base
      staleTime: 60000, // Optionnel : évite le re-fetch immédiat
  });
};



export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] }); // 🔥 Met à jour la liste
        },
    });
};
