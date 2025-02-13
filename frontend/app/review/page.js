"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";

const Page = () => {
  useEffect(() => {
    import("prismjs").then((Prism) => {
      Prism.highlightAll();
    });
  }, []);

  const [prompt, setPrompt] = useState("");

  return (
    <main className="container flex min-h-screen w-full mx-auto p-4">
      <div className="relative flex w-1/2 rounded-lg">
        <div className="w-full">
          <Editor
            value={prompt}
            onValueChange={setPrompt}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.jsx, "jsx")
            }
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              color: "white",
              fontSize: 20,
              backgroundColor: "#212121",
              height: "100%",
              width: "100%",
            }}
          />
        </div>

        <Button
          className="absolute bottom-3 right-6 p-5 font-semibold text-xl rounded-lg"
          variant="outline"
        >
          Review ✨
        </Button>
      </div>

      <div className="w-1/2 bg-gray-300 rounded-lg"></div>
    </main>
  );
};

export default Page;
