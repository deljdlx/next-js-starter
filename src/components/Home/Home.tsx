import React from 'react';


import { useEffect } from "react";
import {  usePanelStore } from "../../stores/usePanelStore";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { TabDemo } from "../../components/TabDemo/TabDemo";
import { EditorDemo } from "../../components/EditorDemo/EditorDemo";
import { PostForm } from "../../components/PostForm/PostForm";

// import { Post } from "@prisma/client";

import { PostWithAuthor } from "../../types/post";
// import { Post, User } from "@prisma/client";


import { usePosts } from "../../hooks/usePosts";



type HomeProps = {
  posts: PostWithAuthor[];
};


export const Home:React.FC<HomeProps> = ({
  posts = []
}) => {

  const {
    leftPanelWidth,
    rightPanelWidth,
    setSizes
  } = usePanelStore();

  const {
    data: internalPosts,
    error,
    isLoading
  } = usePosts(posts);


  useEffect(() => {
    console.log('%cApp.tsx::71', 'color: #f00; font-size: 1rem', 'Render Home.tsx');
  });


  let resizeTimeout: NodeJS.Timeout | null = null;

  const handleResize = (sizes: number[]) => {
    if (resizeTimeout) clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {
      setSizes({ leftPanelWidth: sizes[0], rightPanelWidth: sizes[1] });
    }, 300);
  };

  return (
    <PanelGroup
      direction="horizontal"
      onLayout={(sizes) =>
        handleResize(sizes)
      }
    >
      <Panel defaultSize={leftPanelWidth} className="panel panel_left">

        <div>
          LEFT PANEL
          <div>
            <h2>MUI Tab Demo</h2>
            <TabDemo />
          </div>

          <div>
            <h2>Monaco Editor Demo</h2>
            <EditorDemo />
          </div>
        </div>
      </Panel>
      <PanelResizeHandle className="w-2 bg-blue-800"/>

      <Panel defaultSize={rightPanelWidth}  className="panel panel_right">
        <div>
          RIGHT PANEL
          <div>
            <PostForm/>
          </div>
          <div>
            <h1>Liste des posts</h1>
            {internalPosts && internalPosts.map((post) => (
              <div key={post.id} className="card">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <small>Publié par {post.author?.email}</small>
              </div>
            ))}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  );
}


