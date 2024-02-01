import { HOST } from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay Debug",
  openGraph: {
    title: "Jay Debug",
    images: [`${HOST}/OG (1).png`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${HOST}/OG (1).png`,
    "fc:frame:post_url": `${HOST}/api/vote?id=1`,
    "fc:frame:button:1": "Terrible 😠",
    "fc:frame:button:2": "Dissatisfied 🙁",
    "fc:frame:button:3": "Neutral 😐",
    "fc:frame:button:4": "Satisfied 😃",
    "fc:frame:button:5": "Awesome 🤩",
  },
};

export default function Polls() {
  return (
    <main className="w-screen h-screen p-10">
      <p>This is Polls page.</p>
    </main>
  );
}

// https://fc-polls.vercel.app/polls/f444cc23-5a8c-43b5-806b-0cc7b791bc6e
// https://jayjay1024.github.io/scroll-test/polls
