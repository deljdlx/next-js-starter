import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await prisma.post.findMany({
        include: { author: true },
    });

    return { props: { posts } };
};

export default function PostsPage({ posts }: { posts: any[] }) {
    return (
        <div>
            <h1>Liste des posts</h1>
            {posts.map((post) => (
                <div key={post.id} className="card">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <small>Publié par {post.author?.email}</small>
                </div>
            ))}
        </div>
    );
}
