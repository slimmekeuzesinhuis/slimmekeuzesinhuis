"use client";
import { useState } from "react";

export default function Checklist({ items = [] }) {
  const [checked, setChecked] = useState(() => items.map(() => false));
  const toggle = (i) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const done = checked.filter(Boolean).length;
  const progress = items.length ? Math.round((done / items.length) * 100) : 0;

  return (
    <div>
      <div className="mb-4 text-sm text-gray-600">
        Voortgang: {done}/{items.length} • {progress}%
      </div>
      <ul className="space-y-2">
        {items.map((label, i) => (
          <li key={i} className="flex items-start gap-3">
            <input
              id={`item-${i}`}
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={checked[i]}
              onChange={() => toggle(i)}
            />
            <label
              htmlFor={`item-${i}`}
              className={`select-none ${
                checked[i] ? "line-through text-gray-400" : ""
              }`}
            >
              {label}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
