import { useRef, useEffect } from "react";

import { useRouter } from "next/router";

import Content from "@components/Shared/Content";

const About = ({ page }) => {
  const sections = useRef({});
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.match(/#([a-z0-9-]+)/g);
    if (hash) {
      const section = hash[0].replace("#", "");
      sections.current[section].scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <div className="prose md:prose-md lg:prose-lg max-w-none">
      {page.content.map((content) => (
        <div
          key={content.title}
          ref={(ref) => {
            sections.current[content.title.toLowerCase()] = ref;
          }}
        >
          <Content {...content} />
        </div>
      ))}
    </div>
  );
};

export default About;
