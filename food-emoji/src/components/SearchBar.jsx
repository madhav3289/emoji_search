export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center w-full bg-white rounded-xl shadow-md overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search"
        className="flex-1 p-3 pl-4 outline-none text-gray-700"
      />

      <button className="bg-black text-white px-4 py-3 flex items-center justify-center">
        🔍
      </button>
    </div>
  );
}

