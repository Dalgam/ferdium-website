import React from "react";
import CodeBlock from "./CodeBlock";
import styles from "styles/components/CodeBlockSection.module.scss";

type Props = {
  title: string;
  text?: string;
  blocks?: CodeBlock[];
};

type CodeBlock = {
  comment?: string;
  text: string;
};

const CodeBlockSection = (props: Props) => {
  return (
    <article className={styles.codeblocksection}>
      <h3>{props.title}</h3>
      {props?.blocks?.map((block) => (
        <>
          <CodeBlock code={block.text} comment={block.comment} />
          <br />
        </>
      )) ?? <CodeBlock code={props.text ?? ""} />}
    </article>
  );
};

export default CodeBlockSection;
