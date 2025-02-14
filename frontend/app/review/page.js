"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import axios from "axios";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

// Available languages
const languages = {
  jsx: "JavaScript (JSX)",
  java: "Java",
  python: "Python",
};

const Page = () => {
  useEffect(() => {
    import("prismjs").then((Prism) => {
      Prism.highlightAll();
    });
  }, []);

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [selectedLang, setSelectedLang] = useState("jsx");

  // Dynamically import the selected language
  useEffect(() => {
    import(`prismjs/components/prism-${selectedLang}`)
      .then(() => {
        Prism.highlightAll();
      })
      .catch(() => {
        console.warn(`Language ${selectedLang} not found in PrismJS.`);
      });
  }, [selectedLang]);

  async function handleSubmit() {
    setResponse("");
    const response = await axios.post(
      "https://auto-code-ai-backend.vercel.app/ai/get-review",
      {
        prompt,
        lang: selectedLang,
      }
    );
    setResponse(response.data);
  }

  return (
    <main className="container z-5 flex h-screen w-full mx-auto p-4">
      <div className="relative flex flex-col mx-6 w-1/3 rounded-lg">
        <select
          className="mb-2 p-2 bg-zinc-300 text-black rounded-lg"
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
        >
          {Object.entries(languages).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>

        <div className="w-full h-full rounded-lg">
          <Editor
            value={prompt}
            onValueChange={setPrompt}
            highlight={(code) =>
              Prism.languages[selectedLang]
                ? Prism.highlight(
                    code,
                    Prism.languages[selectedLang],
                    selectedLang
                  )
                : code
            }
            padding={15}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              color: "white",
              fontSize: 20,
              borderRadius: "10px",
              backgroundColor: "black",
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <Button
          className="absolute bottom-5 left-6 p-5 font-semibold text-xl rounded-lg"
          variant="destructive"
          onClick={() => setPrompt("")}
        >
          Clear
        </Button>
        <Button
          onClick={handleSubmit}
          className="absolute bottom-5 right-6 p-5 font-semibold text-xl rounded-lg"
          variant="outline"
        >
          Review ✨
        </Button>
      </div>

      <div className="w-2/3 bg-zinc-900  text-lg font-mono p-5 rounded-lg overflow-auto text-white">
        <Markdown rehypePlugins={[rehypeHighlight]}>{response}</Markdown>
      </div>
    </main>
  );
};

export default Page;
