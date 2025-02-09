import React from 'react';
import { useEffect } from "react";
import { usePanelStore } from "../../stores/usePanelStore";
import { useSession } from "next-auth/react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { TabDemo } from "../../components/TabDemo/TabDemo";
import { EditorDemo } from "../../components/EditorDemo/EditorDemo";
import { PostForm } from "../../components/PostForm/PostForm";
import { PostWithAuthor } from "../../types/post";

import { Resources } from "../../components/Resources/Resources";
import { Post } from "../../components/Post/Post";

import { usePosts } from "../../hooks/usePosts";



type HomeProps = {
  posts: PostWithAuthor[];
};


export const Home:React.FC<HomeProps> = ({
  posts = []
}) => {
  const { data: session } = useSession();

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

  const handleDeletePost = (id: string) => {
    console.log('%cHome.tsx::57::', 'color: #f00; font-size: 1rem', id);
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
          <h1>LEFT PANEL</h1>
          <div className="demo-block debug">
            <h2>MUI Tab Demo</h2>
            <TabDemo />
          </div>

          <div className="demo-block debug">
            <h2>Monaco Editor Demo</h2>
            <EditorDemo />
          </div>

          <div className="demo-block debug">
            <h2>Resources</h2>
            <Resources/>
          </div>
        </div>
      </Panel>
      <PanelResizeHandle className="w-2 bg-blue-800"/>

      <Panel defaultSize={rightPanelWidth}  className="panel panel_right">
        <div>
          <h1>RIGHT PANEL</h1>

          {session && (
            <div className="demo-block debug">
              <PostForm/>
            </div>
          )}
          <div className="demo-block debug">
            <h1>Posts</h1>
            {internalPosts && internalPosts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onDelete={handleDeletePost}
              />
            ))}
          </div>
        </div>
      </Panel>
    </PanelGroup>
  );
}


