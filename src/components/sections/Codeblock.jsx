"use client";

import React from "react";
import CodeBlock from "./ui/code-block";

const CodeBlockDemo = () => {
  const code = `import React from 'react';

const PortfolioHeader = () => {
  return (
    <div>
      <h1>Jestem Tomasz</h1>
      <p>Mam 17 lat i jestem Full Stack Developerem.</p>
      <p>Programuję w, między innymi:</p>
      <ul>
        <li>HTML</li>
        <li>JavaScript</li>
        <li>MERN stack:
          <ul>
            <li>Tailwind</li>
            <li>Vite</li>
            <li>React</li>
            <li>Mongoose</li>
            <li>Cloudinary</li>
            <li>i inne</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioHeader;
`;

  return (
    <div className="max-w-full">
      <CodeBlock
        language="jsx"
        filename="PortfolioHeader.jsx"
        highlightLines={[5, 6, 7, 8]}
        code={code}
      />
    </div>
  );
};

export default CodeBlockDemo;
