import { Post, User } from "@prisma/client";

// ✅ Type avec l'auteur inclus
export type PostWithAuthor = Post & {
    author: User;
};
