export default function Home() {
  return (
    <main className="bg-red-500 h-[140vh] w-[180vw] relative shrink-0 text-black">
      <div className="absolute z-10 top-0 left-0">Top Left</div>
      <div className="absolute z-10 top-0 right-0">Top Right</div>
      <div className="absolute z-10 bottom-0 left-0">Bottom Left</div>
      <div className="absolute z-10 bottom-0 right-0">Bottom Right</div>
    </main>
  );
}
