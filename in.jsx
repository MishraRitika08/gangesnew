import { useState } from "react";

const categories = [
  {
    id: "basics",
    title: "🔢 Array Basics",
    color: "#4ade80",
    questions: [
      { id: 1, title: "Find the largest/smallest element", diff: "Easy", tag: "Traversal" },
      { id: 2, title: "Reverse an array", diff: "Easy", tag: "Two Pointer" },
      { id: 3, title: "Check if array is sorted", diff: "Easy", tag: "Traversal" },
      { id: 4, title: "Remove duplicates from sorted array", diff: "Easy", tag: "Two Pointer" },
      { id: 5, title: "Move zeros to end", diff: "Easy", tag: "Two Pointer" },
      { id: 6, title: "Left rotate array by K places", diff: "Easy", tag: "Manipulation" },
      { id: 7, title: "Right rotate array by 1", diff: "Easy", tag: "Manipulation" },
      { id: 8, title: "Find union & intersection of two arrays", diff: "Easy", tag: "Hashing" },
      { id: 9, title: "Find missing number in [1..N]", diff: "Easy", tag: "Math/XOR" },
      { id: 10, title: "Maximum consecutive ones", diff: "Easy", tag: "Traversal" },
      { id: 11, title: "Find the number that appears once (XOR)", diff: "Easy", tag: "Bit Manipulation" },
      { id: 12, title: "Find longest subarray with given sum (positives)", diff: "Easy", tag: "Sliding Window" },
    ],
  },
  {
    id: "medium",
    title: "⚡ Medium Level",
    color: "#facc15",
    questions: [
      { id: 13, title: "Two Sum", diff: "Medium", tag: "Hashing" },
      { id: 14, title: "Sort 0s, 1s and 2s (Dutch National Flag)", diff: "Medium", tag: "Two Pointer" },
      { id: 15, title: "Majority Element (> N/2 times) — Moore's Voting", diff: "Medium", tag: "Algorithm" },
      { id: 16, title: "Majority Element (> N/3 times)", diff: "Medium", tag: "Algorithm" },
      { id: 17, title: "Kadane's Algorithm — Maximum Subarray Sum", diff: "Medium", tag: "DP/Greedy" },
      { id: 18, title: "Maximum product subarray", diff: "Medium", tag: "DP" },
      { id: 19, title: "Stock buy and sell — Best time (1 transaction)", diff: "Medium", tag: "Greedy" },
      { id: 20, title: "Stock buy and sell — Multiple transactions", diff: "Medium", tag: "Greedy" },
      { id: 21, title: "Next permutation", diff: "Medium", tag: "Math" },
      { id: 22, title: "Leaders in an array", diff: "Medium", tag: "Traversal" },
      { id: 23, title: "Longest consecutive sequence", diff: "Medium", tag: "Hashing" },
      { id: 24, title: "Set matrix zeroes", diff: "Medium", tag: "Matrix" },
      { id: 25, title: "Spiral matrix traversal", diff: "Medium", tag: "Matrix" },
      { id: 26, title: "Rotate matrix by 90°", diff: "Medium", tag: "Matrix" },
      { id: 27, title: "Search in a 2D matrix", diff: "Medium", tag: "Binary Search" },
      { id: 28, title: "Count subarray sum equals K", diff: "Medium", tag: "Hashing/Prefix" },
      { id: 29, title: "Subarray with given XOR", diff: "Medium", tag: "Hashing/Prefix" },
      { id: 30, title: "Find the duplicate number (Floyd's cycle)", diff: "Medium", tag: "Two Pointer" },
      { id: 31, title: "Rearrange positive and negative alternately", diff: "Medium", tag: "Two Pointer" },
    ],
  },
  {
    id: "hard",
    title: "🔥 Hard Level",
    color: "#f87171",
    questions: [
      { id: 32, title: "4-Sum problem", diff: "Hard", tag: "Two Pointer" },
      { id: 33, title: "3-Sum problem", diff: "Hard", tag: "Two Pointer" },
      { id: 34, title: "Merge overlapping intervals", diff: "Hard", tag: "Sorting" },
      { id: 35, title: "Merge two sorted arrays without extra space", diff: "Hard", tag: "Two Pointer" },
      { id: 36, title: "Find missing and repeating number", diff: "Hard", tag: "Math/XOR" },
      { id: 37, title: "Count inversions in array (Merge Sort)", diff: "Hard", tag: "Divide & Conquer" },
      { id: 38, title: "Count reverse pairs", diff: "Hard", tag: "Divide & Conquer" },
      { id: 39, title: "Maximum sum rectangle in 2D matrix", diff: "Hard", tag: "Kadane + Matrix" },
      { id: 40, title: "Median of two sorted arrays (O log n)", diff: "Hard", tag: "Binary Search" },
      { id: 41, title: "Trapping rainwater", diff: "Hard", tag: "Two Pointer/Stack" },
      { id: 42, title: "Largest rectangle in histogram", diff: "Hard", tag: "Stack" },
      { id: 43, title: "Sliding window maximum (Deque)", diff: "Hard", tag: "Sliding Window" },
      { id: 44, title: "Jump Game I — Can reach end?", diff: "Hard", tag: "Greedy" },
      { id: 45, title: "Jump Game II — Min jumps", diff: "Hard", tag: "Greedy" },
      { id: 46, title: "Find K-th smallest/largest using QuickSelect", diff: "Hard", tag: "Quick Select" },
    ],
  },
  {
    id: "patterns",
    title: "🧩 Pattern-Based",
    color: "#a78bfa",
    questions: [
      { id: 47, title: "Prefix Sum — Range sum queries", diff: "Medium", tag: "Prefix Sum" },
      { id: 48, title: "Subarray with max sum length K (Sliding Window)", diff: "Easy", tag: "Sliding Window" },
      { id: 49, title: "Longest subarray with at most K distinct elements", diff: "Medium", tag: "Sliding Window" },
      { id: 50, title: "Minimum window subarray with sum ≥ S", diff: "Medium", tag: "Sliding Window" },
      { id: 51, title: "Binary search on answer (e.g., Koko eating bananas)", diff: "Medium", tag: "Binary Search" },
      { id: 52, title: "Find peak element (Binary Search)", diff: "Medium", tag: "Binary Search" },
      { id: 53, title: "Search in rotated sorted array", diff: "Medium", tag: "Binary Search" },
      { id: 54, title: "Find minimum in rotated sorted array", diff: "Medium", tag: "Binary Search" },
      { id: 55, title: "Count occurrences in sorted array", diff: "Easy", tag: "Binary Search" },
      { id: 56, title: "Floor and Ceil in sorted array", diff: "Easy", tag: "Binary Search" },
      { id: 57, title: "Product of array except self (no division)", diff: "Medium", tag: "Prefix/Suffix" },
      { id: 58, title: "Find all triplets with zero sum", diff: "Medium", tag: "Two Pointer" },
      { id: 59, title: "Container with most water", diff: "Medium", tag: "Two Pointer" },
      { id: 60, title: "Minimum platforms for trains (sorting)", diff: "Medium", tag: "Sorting" },
    ],
  },
  {
    id: "matrix",
    title: "🟦 Matrix (2D Array)",
    color: "#38bdf8",
    questions: [
      { id: 61, title: "Transpose of a matrix", diff: "Easy", tag: "Matrix" },
      { id: 62, title: "Diagonal traversal", diff: "Easy", tag: "Matrix" },
      { id: 63, title: "Wave traversal", diff: "Easy", tag: "Matrix" },
      { id: 64, title: "Word search in grid (DFS)", diff: "Hard", tag: "DFS/Backtracking" },
      { id: 65, title: "Number of islands (BFS/DFS)", diff: "Medium", tag: "Graph/BFS" },
      { id: 66, title: "Rotate image (matrix)", diff: "Medium", tag: "Matrix" },
      { id: 67, title: "Pascal's Triangle — generate row/full", diff: "Easy", tag: "Math" },
      { id: 68, title: "Pow(x, n) — Fast exponentiation", diff: "Medium", tag: "Math/Recursion" },
    ],
  },
  {
    id: "sorting",
    title: "📊 Sorting & Searching",
    color: "#fb923c",
    questions: [
      { id: 69, title: "Bubble Sort", diff: "Easy", tag: "Sorting" },
      { id: 70, title: "Selection Sort", diff: "Easy", tag: "Sorting" },
      { id: 71, title: "Insertion Sort", diff: "Easy", tag: "Sorting" },
      { id: 72, title: "Merge Sort", diff: "Medium", tag: "Sorting" },
      { id: 73, title: "Quick Sort", diff: "Medium", tag: "Sorting" },
      { id: 74, title: "Counting Sort / Radix Sort", diff: "Medium", tag: "Sorting" },
      { id: 75, title: "Binary Search (iterative & recursive)", diff: "Easy", tag: "Binary Search" },
      { id: 76, title: "Lower bound / Upper bound", diff: "Easy", tag: "Binary Search" },
      { id: 77, title: "Find first and last occurrence", diff: "Easy", tag: "Binary Search" },
      { id: 78, title: "Kth largest element using heap", diff: "Medium", tag: "Heap" },
      { id: 79, title: "Top K frequent elements", diff: "Medium", tag: "Heap/Hashing" },
    ],
  },
];

const diffColor = { Easy: "#4ade80", Medium: "#facc15", Hard: "#f87171" };
const diffBg = { Easy: "#052e16", Medium: "#422006", Hard: "#2d0707" };

export default function App() {
  const [solved, setSolved] = useState({});
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState({});

  const total = categories.flatMap(c => c.questions).length;
  const solvedCount = Object.values(solved).filter(Boolean).length;
  const pct = Math.round((solvedCount / total) * 100);

  const toggle = (id) => setSolved(s => ({ ...s, [id]: !s[id] }));
  const toggleCat = (id) => setExpanded(e => ({ ...e, [id]: !e[id] }));

  const filtered = (qs) =>
    qs.filter(q => {
      const matchDiff = filter === "All" || q.diff === filter;
      const matchSearch = q.title.toLowerCase().includes(search.toLowerCase()) || q.tag.toLowerCase().includes(search.toLowerCase());
      return matchDiff && matchSearch;
    });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0a0f",
      fontFamily: "'Courier New', monospace",
      color: "#e2e8f0",
      padding: "0 0 60px",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        borderBottom: "1px solid #1e293b",
        padding: "36px 24px 28px",
        textAlign: "center",
        position: "sticky", top: 0, zIndex: 10,
        backdropFilter: "blur(10px)",
      }}>
        <div style={{ fontSize: 11, letterSpacing: 6, color: "#6366f1", marginBottom: 8, textTransform: "uppercase" }}>
          DSA Mastery
        </div>
        <h1 style={{ margin: 0, fontSize: "clamp(22px,5vw,36px)", fontWeight: 900, letterSpacing: -1, color: "#f8fafc" }}>
          Arrays — Complete Roadmap
        </h1>
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>
            <span style={{ color: "#6366f1", fontWeight: 700, fontSize: 18 }}>{solvedCount}</span>/{total} solved
          </div>
          <div style={{
            width: "min(300px, 60vw)", height: 8, background: "#1e293b",
            borderRadius: 4, overflow: "hidden"
          }}>
            <div style={{
              width: `${pct}%`, height: "100%",
              background: "linear-gradient(90deg, #6366f1, #a78bfa)",
              borderRadius: 4, transition: "width 0.4s ease"
            }} />
          </div>
          <div style={{ fontSize: 13, color: "#6366f1", fontWeight: 700 }}>{pct}%</div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ maxWidth: 860, margin: "24px auto 0", padding: "0 16px", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search questions or tags..."
          style={{
            flex: 1, minWidth: 200, background: "#0f172a", border: "1px solid #334155",
            color: "#e2e8f0", borderRadius: 8, padding: "9px 14px", fontSize: 13, outline: "none",
            fontFamily: "inherit"
          }}
        />
        {["All", "Easy", "Medium", "Hard"].map(d => (
          <button key={d} onClick={() => setFilter(d)} style={{
            padding: "8px 16px", borderRadius: 8, border: "1px solid",
            borderColor: filter === d ? (diffColor[d] || "#6366f1") : "#334155",
            background: filter === d ? (diffBg[d] || "#1e1b4b") : "#0f172a",
            color: filter === d ? (diffColor[d] || "#a78bfa") : "#94a3b8",
            fontSize: 12, cursor: "pointer", fontFamily: "inherit", fontWeight: 700, letterSpacing: 1
          }}>{d}</button>
        ))}
      </div>

      {/* Categories */}
      <div style={{ maxWidth: 860, margin: "20px auto 0", padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>
        {categories.map(cat => {
          const qs = filtered(cat.questions);
          if (!qs.length) return null;
          const catSolved = qs.filter(q => solved[q.id]).length;
          const isOpen = expanded[cat.id] !== false; // open by default

          return (
            <div key={cat.id} style={{
              background: "#0f172a", border: `1px solid #1e293b`,
              borderRadius: 12, overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)"
            }}>
              {/* Category Header */}
              <div
                onClick={() => toggleCat(cat.id)}
                style={{
                  padding: "16px 20px", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  borderLeft: `4px solid ${cat.color}`,
                  background: isOpen ? "#111827" : "#0f172a",
                  userSelect: "none"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: "clamp(14px,3vw,17px)", fontWeight: 800, letterSpacing: -0.3 }}>{cat.title}</span>
                  <span style={{
                    background: cat.color + "22", color: cat.color,
                    fontSize: 11, padding: "2px 10px", borderRadius: 20, fontWeight: 700
                  }}>{catSolved}/{qs.length}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 80, height: 5, background: "#1e293b", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${(catSolved / qs.length) * 100}%`, height: "100%", background: cat.color, borderRadius: 3 }} />
                  </div>
                  <span style={{ color: "#475569", fontSize: 18 }}>{isOpen ? "▲" : "▼"}</span>
                </div>
              </div>

              {/* Questions */}
              {isOpen && (
                <div style={{ padding: "6px 0 10px" }}>
                  {qs.map((q, i) => (
                    <div
                      key={q.id}
                      onClick={() => toggle(q.id)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "10px 20px", cursor: "pointer",
                        background: solved[q.id] ? "#0a1628" : "transparent",
                        borderBottom: i < qs.length - 1 ? "1px solid #0f172a" : "none",
                        transition: "background 0.15s",
                      }}
                    >
                      {/* Checkbox */}
                      <div style={{
                        width: 20, height: 20, borderRadius: 5, flexShrink: 0,
                        border: `2px solid ${solved[q.id] ? cat.color : "#334155"}`,
                        background: solved[q.id] ? cat.color : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s", fontSize: 12, color: "#000", fontWeight: 900
                      }}>
                        {solved[q.id] ? "✓" : ""}
                      </div>

                      {/* Question number */}
                      <span style={{ color: "#475569", fontSize: 11, width: 26, flexShrink: 0, textAlign: "right" }}>
                        {q.id}.
                      </span>

                      {/* Title */}
                      <span style={{
                        flex: 1, fontSize: "clamp(12px,2.5vw,14px)",
                        color: solved[q.id] ? "#475569" : "#cbd5e1",
                        textDecoration: solved[q.id] ? "line-through" : "none",
                        transition: "all 0.2s"
                      }}>
                        {q.title}
                      </span>

                      {/* Tag */}
                      <span style={{
                        fontSize: 10, padding: "2px 8px", borderRadius: 20,
                        background: "#1e293b", color: "#64748b",
                        whiteSpace: "nowrap", display: "none",
                        ["@media(minWidth:500px)"]: { display: "inline" }
                      }} className="tag">
                        {q.tag}
                      </span>
                      <span style={{
                        fontSize: 10, padding: "3px 9px", borderRadius: 20, flexShrink: 0,
                        background: diffBg[q.diff], color: diffColor[q.diff],
                        fontWeight: 700, letterSpacing: 0.5
                      }}>
                        {q.diff}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer tip */}
      <div style={{ textAlign: "center", marginTop: 36, color: "#334155", fontSize: 12, padding: "0 16px" }}>
        Click any question to mark it solved • Filter by difficulty • Search by topic or tag
      </div>
    </div>
  );
}