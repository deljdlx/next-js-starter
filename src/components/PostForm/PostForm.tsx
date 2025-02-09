import React from 'react';

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useCreatePost } from "../../hooks/usePosts";



export const PostForm: React.FC = () => {

  const { data: session } = useSession();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [message, setMessage] = useState("");

  const createPostMutation  = useCreatePost();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log('%cPostForm.tsx::16::', 'color: #f00; font-size: 1rem', session?.user?.id);

    if (!session?.user?.id) {
      setMessage("Vous devez être connecté pour publier un post.");
      return;
    }

    createPostMutation.mutate({
      title,
      content
    });
  };

  return (
    <form className="component postForm" onSubmit={(e) => {handleSubmit(e)}}>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Title</span>
        </div>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs"
        />
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text">Content</span>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="textarea textarea-bordered h-24"
          placeholder="Content"></textarea>
      </label>
      <button className="btn btn-primary" type="submit">Publish</button>
    </form>
  );
};