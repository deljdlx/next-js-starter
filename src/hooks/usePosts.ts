// 📂 hooks/usePosts.ts
import { PostWithAuthor } from "../types/post";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchPosts, createPost, deletePost } from "../services/posts";



export const usePosts = (initialPosts?: PostWithAuthor[]) => {
  return useQuery<PostWithAuthor[]>({
      queryKey: ["posts"],
      queryFn: fetchPosts,
      initialData: initialPosts,
      staleTime: 60000,
  });
};

export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletePost,
        onSuccess: async (response) => {
            const deletedPostId = response.id;
            queryClient.setQueryData<PostWithAuthor[]>(["posts"], (oldPosts) => {
                return oldPosts ? oldPosts.filter(post => post.id !== deletedPostId) : [];
            });
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
}



export const useCreatePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createPost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
        },
    });
};
