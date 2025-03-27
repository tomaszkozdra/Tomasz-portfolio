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
