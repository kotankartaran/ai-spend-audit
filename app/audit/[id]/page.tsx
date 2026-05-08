export default async function AuditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">

      <div className="max-w-2xl w-full bg-zinc-900 p-8 rounded-2xl border border-zinc-800 shadow-2xl">

        <div>
          <h1 className="text-5xl font-bold">
            Shared Audit Report
          </h1>

          <p className="mt-3 text-zinc-400">
            Public Audit ID: {id}
          </p>
        </div>

        <div className="mt-8 bg-black border border-zinc-800 rounded-2xl p-6">

          <p className="text-green-400 text-xl font-semibold">
            Estimated Savings Opportunity
          </p>

          <p className="text-6xl font-bold mt-4">
            $2,400/year
          </p>

          <p className="mt-4 text-zinc-500 leading-7">
            This team appears to be overspending on AI tooling subscriptions.
            Optimizing plans and seat allocation could significantly reduce recurring costs.
          </p>

        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-black border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-500 text-sm">
              Suggested Optimization
            </p>

            <p className="mt-2 font-semibold text-lg">
              Reduce unnecessary enterprise plans
            </p>
          </div>

          <div className="bg-black border border-zinc-800 rounded-xl p-4">
            <p className="text-zinc-500 text-sm">
              Potential Monthly Savings
            </p>

            <p className="mt-2 text-3xl font-bold text-green-400">
              $200
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}