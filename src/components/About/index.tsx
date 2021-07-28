import { useRef } from "react";

import router from "next/router";

import Content from "@components/Shared/Content";

const About = ({ page }) => {
  const test = useRef({});
  console.log(router);
  return (
    <div className="prose md:prose-md lg:prose-lg max-w-none">
      {page.content.map((content) => (
        <div
          key={content.title}
          ref={(ref) => {
            test.current[content.title] = ref;
          }}
        >
          <Content {...content} />
        </div>
      ))}
    </div>
  );
};

export default About;
