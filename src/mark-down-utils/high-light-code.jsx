import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

const HighLightCode = ({ code, language }) => {
  return (
    <Highlight {...defaultProps} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre className={className} style={style}>
            {tokens.map((line, i) => {
              return (
                <div {...getLineProps({ line,
                  key : i })}
                >
                  {line.map((token, key) => {
                    return (
                      <span {...getTokenProps({ token,
                        key })}
                      />
                    );
                  })}
                </div>
              );
            })}
          </pre>
        );
      }}
    </Highlight>
  );
};

export default HighLightCode;
