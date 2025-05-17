"use client";
import { useState } from "react";
import Card from "@/components/card";

export default function Home() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSuggestTitle = async () => {
    setLoading(true);
    const res = await fetch("/api/suggest-title", {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (data.suggestion) setTitle(data.suggestion);
  };

  return (
    <div className="mx-auto mt-20 flex justify-center">
      <Card>
        <h1 className="text-xl font-bold">AI Smart Title Suggester</h1>
        <p className="text-sm text-gray-500 my-2">
          Enter a task description below, and our AI will suggest a smart and
          concise title for it.
        </p>
        <form action="">
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="">
            <input
              className="w-full p-2 border rounded"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded"
              onClick={handleSuggestTitle}
              disabled={loading}
            >
              {loading ? "Loading..." : "Suggest Title"}
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
