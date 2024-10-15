

interface ToggleType {
    active: boolean;
    setActive: () => void
}

function Toggle({ active, setActive } : ToggleType) {

  return (
    <button
      onClick={(_) => setActive()}
      className={`font-medium text-blue-500 hover:underline w-[2.5rem] h-[1.3rem] flex items-center rounded-full p-1 transition duration-300 ease-in-out ${
        active ? "bg-blue-500" : "bg-gray-400"
      }`}
    >
      {/* Toggle indicator */}
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          active ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default Toggle;
