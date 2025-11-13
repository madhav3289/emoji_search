export default function MemeCard({ meme }) {
  return (
    <div className="
      bg-white 
      rounded-xl 
      shadow 
      p-5 
      text-center 
      hover:scale-105 
      transition 
      cursor-pointer
    ">
      <img
        src={meme.url}
        alt={meme.name}
        className="w-20 h-20 object-cover mx-auto rounded-lg mb-3"
      />

      <h3 className="font-semibold text-md mb-1">{meme.name}</h3>

      <p className="text-xs text-gray-500">
        {meme.width}px • {meme.height}px • boxes: {meme.box_count}
      </p>
    </div>
  );
}

