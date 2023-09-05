const posts = [
  {
    title: "Sample Title 1",
    slug: "sample-title-1",
    content: "This is the content for Sample Title 1.",
  },
  {
    title: "Sample Title 2",
    slug: "sample-title-2",
    content: "This is the content for Sample Title 2.",
  },
  {
    title: "Sample Title 3",
    slug: "sample-title-3",
    content: "This is the content for Sample Title 3.",
  },
  {
    title: "Sample Title 4",
    slug: "sample-title-4",
    content: "This is the content for Sample Title 4.",
  },
  {
    title: "Sample Title 5",
    slug: "sample-title-5",
    content: "This is the content for Sample Title 5.",
  },
];

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(posts);
}