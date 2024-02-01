import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay Debug",
  openGraph: {
    title: "Jay Debug",
    images: ["https://jayjay1024.github.io/scroll-test/BeerGuy.jpeg"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://jayjay1024.github.io/scroll-test/BeerGuy.jpeg",
    "fc:frame:button:1": "👍",
    "fc:frame:button:2": "👍👍",
    "fc:frame:button:3": "👍👍👍",
    "fc:frame:button:4": "👍👍👍👍",
    "fc:frame:button:5": "👍👍👍👍👍",
  },
};

export default function Polls() {
  return (
    <main>
      <p>This is Polls page.</p>
    </main>
  );
}

// https://fc-polls.vercel.app/polls/f444cc23-5a8c-43b5-806b-0cc7b791bc6e
// https://jayjay1024.github.io/scroll-test/polls
