import React from 'react';
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import { PostWithAuthor } from "../types/post";

// not used, but here for reference
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useEffect, } from "react";
import { Home } from "../components/Home/Home";



console.clear();

const prisma = new PrismaClient();
export const getServerSideProps: GetServerSideProps = async () => {
    const posts = await prisma.post.findMany({
        include: { author: true },
    });
    return { props: { posts } };
};

// generate static pages at build time
// export const getStaticProps = async () => {
//   const posts = await prisma.post.findMany(); // Fetch 1 seule fois au build
//   return { props: { posts } };
// };


// generate static pages at build time and revalidate every 10 seconds
// export const getStaticProps = async () => {
//   const posts = await prisma.post.findMany();
//   return { props: { posts }, revalidate: 10 };
// };

export default function IndexPage({ posts }: { posts: PostWithAuthor[] }) {

  useEffect(() => {
    console.log('%cApp.tsx::71', 'color: #f00; font-size: 1rem', 'Render index.tsx');
  });


  return (
    <>
      <Home posts={posts}/>

      {/*
        BrowserRouter exemple
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        </Router>
      */}
    </>
  );
}
