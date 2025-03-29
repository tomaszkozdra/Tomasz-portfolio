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
      <ul>
        <li>HTML</li>
        <li>JS</li>
        <li>MERN stack:</li>
        <ul>
          <li>Tailwind</li>
          <li>Vite</li>
          <li>React</li>
          <li>Mongoose</li>
          <li>Cloudinary</li>
          <li>i inne</li>
        </ul>
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
