"use client";

import { useEffect, useState } from "react";

export default function AuditForm() {
  const [tool, setTool] = useState("");
  const [plan, setPlan] = useState("");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [result, setResult] = useState("");
  const [savings, setSavings] = useState(0);
  const [recommendation, setRecommendation] = useState("");

  // Load saved data
  useEffect(() => {
    const savedTool = localStorage.getItem("tool");
    const savedPlan = localStorage.getItem("plan");
    const savedSpend = localStorage.getItem("spend");
    const savedTeam = localStorage.getItem("teamSize");

    if (savedTool) setTool(savedTool);
    if (savedPlan) setPlan(savedPlan);
    if (savedSpend) setSpend(savedSpend);
    if (savedTeam) setTeamSize(savedTeam);
  }, []);

  // Save form data
  useEffect(() => {
    localStorage.setItem("tool", tool);
    localStorage.setItem("plan", plan);
    localStorage.setItem("spend", spend);
    localStorage.setItem("teamSize", teamSize);
  }, [tool, plan, spend, teamSize]);

  const runAudit = () => {
    const amount = Number(spend);
    const seats = Number(teamSize);

    if (!tool || !plan || !spend) {
      setResult("Please fill all required fields.");
      setRecommendation("");
      setSavings(0);
      return;
    }

    // ChatGPT
    if (tool === "ChatGPT" && amount > 100) {
      const save = Math.floor(amount * 0.3);

      setSavings(save);

      setRecommendation(
        "Switch smaller teams from ChatGPT Team to Plus plans"
      );

      setResult(
        `You are likely overspending on ChatGPT subscriptions. Smaller teams often don't require Team plans. Switching eligible users to Plus could reduce costs significantly while maintaining similar functionality.`
      );
    }

    // Cursor
    else if (tool === "Cursor" && amount > 50) {
      const save = Math.floor(amount * 0.25);

      setSavings(save);

      setRecommendation(
        "Downgrade Cursor Business to Cursor Pro"
      );

      setResult(
        `Cursor Business appears expensive for your current setup. Many small teams can operate efficiently on Cursor Pro while keeping access to core AI coding workflows.`
      );
    }

    // Claude
    else if (tool === "Claude" && amount > 80) {
      const save = Math.floor(amount * 0.2);

      setSavings(save);

      setRecommendation(
        "Reduce unused Claude Team seats"
      );

      setResult(
        `Claude Team plans are frequently over-provisioned. Optimizing active seats and reducing unused allocations could noticeably reduce your monthly AI spend.`
      );
    }

    // GitHub Copilot
    else if (tool === "GitHub Copilot" && seats < 3) {
      const save = Math.floor(amount * 0.15);

      setSavings(save);

      setRecommendation(
        "Use GitHub Copilot Individual instead of Business"
      );

      setResult(
        `GitHub Copilot Business may be unnecessary for very small engineering teams. Individual plans can often provide similar value at lower cost.`
      );
    }

    // Gemini
    else if (tool === "Gemini" && amount > 40) {
      const save = Math.floor(amount * 0.2);

      setSavings(save);

      setRecommendation(
        "Optimize Gemini plan allocation"
      );

      setResult(
        `Your Gemini usage indicates possible plan oversizing. Reviewing actual usage patterns may help reduce unnecessary recurring costs.`
      );
    }

    // Default
    else {
      setSavings(0);

      setRecommendation(
        "No major changes recommended"
      );

      setResult(
        "Your current AI spending appears reasonably optimized. No major savings opportunities were identified."
      );
    }
  };

  return (
    <div className="space-y-6 w-full max-w-2xl">
      {/* Main Card */}
      <div className="bg-zinc-900 p-8 rounded-2xl space-y-6 border border-zinc-800 shadow-2xl">

        {/* Header */}
        <div>
          <h1 className="text-5xl font-bold">
            AI Spend Audit
          </h1>

          <p className="text-zinc-400 mt-3 text-lg">
            Discover hidden AI subscription waste in under 60 seconds.
          </p>
        </div>

        {/* Tool */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            AI Tool
          </label>

          <select
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            value={tool}
            onChange={(e) => setTool(e.target.value)}
          >
            <option value="">Select Tool</option>
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>GitHub Copilot</option>
            <option>Gemini</option>
          </select>
        </div>

        {/* Plan */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Current Plan
          </label>

          <input
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            placeholder="Ex: Team / Business / Pro"
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
          />
        </div>

        {/* Monthly Spend */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            placeholder="100"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
          />
        </div>

        {/* Team Size */}
        <div>
          <label className="block mb-2 text-sm font-medium">
            Team Size
          </label>

          <input
            type="number"
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            placeholder="5"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          onClick={runAudit}
          className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-zinc-200 transition"
        >
          Run Audit
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="bg-green-950 border border-green-800 p-6 rounded-2xl">

          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-green-400">
              Audit Result
            </h2>

            {savings > 0 && (
              <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-lg text-sm font-semibold">
                Save ${savings}/month
              </div>
            )}
          </div>

          {/* Description */}
          <p className="mt-4 text-zinc-300 leading-7">
            {result}
          </p>

          {/* Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-black border border-zinc-800 rounded-xl p-4">
              <p className="text-zinc-500 text-sm">
                Recommended Action
              </p>

              <p className="mt-2 font-semibold text-lg">
                {recommendation}
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-xl p-4">
              <p className="text-zinc-500 text-sm">
                Estimated Monthly Savings
              </p>

              <p className="mt-2 font-bold text-3xl text-green-400">
                ${savings}
              </p>
            </div>

          </div>

          {/* Annual Savings */}
          {savings > 0 && (
            <div className="mt-6 p-4 rounded-xl bg-black border border-zinc-800">

              <p className="text-lg font-semibold">
                Estimated Annual Savings
              </p>

              <p className="text-4xl font-bold mt-2 text-green-400">
                ${savings * 12}
              </p>

              <p className="text-zinc-500 mt-2 text-sm">
                Potential savings identified through plan optimization and usage alignment.
              </p>

            </div>
          )}
        </div>
      )}
    </div>
  );
}