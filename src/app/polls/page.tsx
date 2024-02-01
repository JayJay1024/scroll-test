import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jay Debug",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/BeerGuy.jpeg",
    "fc:frame:button:3": "Jay 3",
    "fc:frame:button:4": "Jay 4",
    "fc:frame:button:5": "Jay 5",
    "fc:frame:button:6": "Jay 6",
  },
};

export default function Polls() {
  return (
    <main>
      <p>This is Polls page.</p>
    </main>
  );
}
