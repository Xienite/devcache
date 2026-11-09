import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import Home from "./pages/Home";
import ConceptPage from "./pages/ConceptPage";
import Heading from "./components/markdown/Heading";
import type { ComponentPropsWithoutRef } from "react";
import Code from "./components/markdown/Code";
import Wrapper from "./components/markdown/Wrapper";
import Paragraph from "./components/markdown/Paragraph";
import List from "./components/markdown/List";
import Table from "./components/markdown/Table";
import Header from "./components/Header";

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => <Heading level="h1" {...props} />,
  h2: (props: ComponentPropsWithoutRef<'h2'>) => <Heading level="h2" {...props} />,
  h3: (props: ComponentPropsWithoutRef<'h3'>) => <Heading level="h3" {...props} />,
  p: Paragraph,
  ol: (props: ComponentPropsWithoutRef<'ol'>) => <List listType="ol" {...props} />,
  ul: (props: ComponentPropsWithoutRef<'ul'>) => <List listType="ul" {...props} />,
  pre: (props: ComponentPropsWithoutRef<'code'>) => <Code {...props} />,
  table: Table,
  wrapper: Wrapper
};

function App() {
  return (
    <MDXProvider components={mdxComponents}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/concepts/:slug" element={<ConceptPage />} />
        </Routes>
      </BrowserRouter>
    </MDXProvider>
  );
}

export default App;
