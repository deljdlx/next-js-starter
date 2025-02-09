// 📂 services/posts.ts
export const fetchPosts = async () => {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Erreur de récupération des posts");
  return res.json();
};

export const createPost = async ({ title, content }: { title: string; content: string }) => {
  const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Impossible de créer le post");
  return res.json();
};


export const deletePost = async (id: string) => {
  const res = await fetch("/api/posts", {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Cannot delete post");
  return res.json();
};
