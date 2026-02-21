"use client";

import { useTodoStore } from "@/app/lib/store/StoreProvider";

export function SearchBar() {
  const searchTerm = useTodoStore((state) => state.searchTerm);
  const setSearchTerm = useTodoStore((state) => state.setSearchTerm);

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search todos..."
        className="flex-1 px-4 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-black"
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => setSearchTerm("")}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
