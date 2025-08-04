import { useState, useRef, useEffect } from "react";

export function ProviderSelect({
  items,
  selectedItem,
  setSelectedItem,
  icon: Icon,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="dropdown w-full max-w-[90%] md:w-[180px] cursor-pointer relative"
    >
      <button
        type="button"
        className="cursor-pointer  flex items-center gap-2 border border-gray-300 px-3 py-2 h-11 rounded-md shadow-sm w-full focus:border-[#BE5985] focus:ring-2 focus:ring-[#BE5985] focus:ring-offset-2"
        onClick={() => setOpen(!open)}
      >
        {Icon && <Icon className="w-5 h-5 text-gray-500" />}
        <span className="w-full text-left text-sm text-gray-700 truncate capitalize">
          {selectedItem }
        </span>
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg overflow-hidden border border-gray-200">
          <div className="max-h-60 overflow-y-auto">
            {items.map((prov) => (
              <li key={prov} className="hover:bg-gray-50">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 capitalize"
                  onClick={() => {
                    setSelectedItem(prov);
                    setOpen(false);
                  }}
                >
                  {prov}
                </button>
              </li>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}