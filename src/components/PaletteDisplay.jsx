import ColorCard from "./ColorCard";

export default function PaletteDisplay({ colors }) {
  if (!colors.length) return null;
    function copyAll(){
        const text=color.join(", ")
        navigator.clipboard.writeText(text);
        alert("copied all colors!!")
    }
  return (<>
    <div className="flex justify-center gap-6 mt-10 flex-wrap">
      {colors.map((color) => (
        <ColorCard key={color} color={color} />
      ))}
    </div>
<div 
    className="bg-yellow-400 mt-2 pt-1 h-8 w-20 rounded-xl inline-block font-semibold cursor-pointer" 
    onClick={copyAll}>
        Copy all
    </div>

    <div className="mt-1"> 
      developed by rushikesh shinde 
    </div> 
    </>
  );
}
