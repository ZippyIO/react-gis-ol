import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps: () => {
    return {
      titleTemplate: "%s | React GIS-OL",
    };
  },
  logo: <span>React GIS-OL</span>,
  project: {
    link: "https://github.com/ZippyIO/react-gis-ol",
  },
  docsRepositoryBase: "https://github.com/ZippyIO/react-gis-ol",
  footer: {
    text: "React GIS-OL Documentation",
  },
};

export default config;
