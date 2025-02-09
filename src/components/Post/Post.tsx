import React from 'react';

import { useSession } from "next-auth/react";
import { useDeletePost } from "../../hooks/usePosts";
import type { PostWithAuthor } from "../../types/post";

type PostProps = {
  post: PostWithAuthor
  onDelete?: (id: string) => void
};

export const Post: React.FC<PostProps> = ({
  post,
  onDelete
}) => {

  const deletePostMutation = useDeletePost();

  const handleDeletePost = async () => {
    await deletePostMutation.mutate(post.id);
    if(onDelete) {
      await onDelete(post.id);
    }
  };

  const { data: session } = useSession();

  return (
    <div className="post debug">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>By {post.author?.email}</small>
      <div>
        {session && (
          <button
            className="btn btn-sm"
            onClick={() => handleDeletePost()}
          >Delete</button>
        )}
      </div>
    </div>
  );
};
