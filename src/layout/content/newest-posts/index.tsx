import React, { Fragment, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import Prism from "react-syntax-highlighter/dist/esm/prism";
import styled from "styled-components";
import { PostApi } from "../../../apis/post";
import Button from "../../../component/button";
import PostCard from "../../../component/card/post";
import Header from "../../../component/Header";

const renderers = {
  code: (options: { language: string; value: any }) => {
    return <Prism language={"javascript"} children={options.value} />;
  },
};

export default function NewestPost(props: {}) {
  const [posts, setPosts] = useState([] as any[]);
  const [currentPost, setCurrentPost] = useState(undefined as any);
  const [postContent, setPostContent] = useState("");
  const md = useRef(null as any);

  useEffect(() => {
    PostApi.get().then((res) => setPosts(res));
  }, []);

  useEffect(() => {
    if (currentPost && currentPost.slug) {
      PostApi.getPostContent(currentPost.slug)
        .then((res) => setPostContent(res))
        .catch(console.log);
    }
  }, [currentPost]);

  function render() {
    if (currentPost) {
      return (
        <Fragment>
          <Custom renderers={renderers}>{postContent}</Custom>
          <Button
            onClick={() => {
              setCurrentPost(undefined);
              setPostContent("");
            }}
            style={{ marginBottom: 12, marginRight: 12 }}
          >
            ⬅ Back{" "}
          </Button>
          <Button
            onClick={() => {
              if (md && md.current) md.current.scrollTop = 0;
            }}
          >
            ⬆ Up to top
          </Button>
        </Fragment>
      );
    } else
      return posts.map((post) => {
        return (
          <PostCard
            {...post}
            key={post.id}
            onClick={() => {
              setCurrentPost(post);
            }}
          />
        );
      });
  }

  function renderHeader() {
    if (currentPost) {
      return (
        <Header>
          <h1>{currentPost.title} </h1>
          <p>
            Origin post: <a href={currentPost.url}>Viblo.asia</a>
          </p>
        </Header>
      );
    }
    return (
      <Header>
        <h1>Today Posts 📰 </h1>
        <p>Here is your today posts</p>
      </Header>
    );
  }

  return (
    <Fragment>
      {renderHeader()}
      <Container ref={md}>{render()}</Container>
    </Fragment>
  );
}

const Custom = styled(ReactMarkdown)`
  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bolder;
  }

  & h1 {
    font-size: 2em;
  }
  & h2 {
    font-size: 1.5em;
  }
  & h3 {
    font-size: 1.17em;
  }
  & h4 {
    font-size: 1em;
  }
  & h5 {
    font-size: 0.8em;
  }
  & h6 {
    font-size: 0.7em;
  }
`;

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 40px;
  scroll-behavior: smooth;
`;
