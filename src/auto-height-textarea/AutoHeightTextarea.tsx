// see https://developer.mozilla.org/en-US/docs/Web/API/HTMLTextAreaElement#Autogrowing_textarea_example
// and https://stackoverflow.com/questions/39401504/javascript-react-dynamic-height-textarea-stop-at-a-max

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import "./style.css";

type Props = { minHeight?: number };

const AutoHeightTextarea: React.FC<Props> = ({ minHeight = 34 }) => {
  const [content, setContent] = useState("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const textarea = ref.current!;
    textarea.style.height = `${minHeight}px`; // important!
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [content, minHeight]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  return (
    <textarea
      className="auto-height-textarea"
      value={content}
      onChange={handleChange}
      ref={ref}
    />
  );
};

export default memo(AutoHeightTextarea);
