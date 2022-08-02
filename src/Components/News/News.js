import React from "react";
import { TopSection } from "./TopSection";
import { TopSideSection } from "./TopSideSection";
import { MidSection } from "./MidSection";
import { LowerMidSection } from "./LowerMidSection";
import { LowerSection } from "./LowerSection";
import { LowerSection2 } from "./LowerSection2";
import { Footer } from "./Footer";

export const News = () => {
  return (
    <div style={{ display: "block" }}>
      <TopSection />
      <TopSideSection />
      <MidSection />
      <LowerMidSection />
      <LowerSection />
      <LowerSection2 />
      <Footer />
    </div>
  );
};
