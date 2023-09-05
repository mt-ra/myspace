export const dynamic = "force-static";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media company',
};

function AboutPage() {
  return (
    <main className="h-screen bg-slate-800 text-white px-32 py-4">
      <div className="">
       <h1>We are the next facebook</h1>
      </div>
    </main>
  );
}

export default AboutPage;
