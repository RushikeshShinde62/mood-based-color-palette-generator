export default function ColorCard({ color }) {
  const copy = () => navigator.clipboard.writeText(color);
    
  return (
    <>
    <div className="flex flex-col items-center gap-2">

    <div
      onClick={copy}
      className="h-32 w-32 rounded-xl cursor-pointer flex shadow"
      style={{ background: color }}
    > 
    </div>
    <div className="text-black font-semibold">
        {color}
    </div>
    </div>
    
    </>
  );
}
