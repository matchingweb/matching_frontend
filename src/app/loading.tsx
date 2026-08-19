export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-50 px-5 py-20 text-zinc-950">
      <section className="mx-auto max-w-3xl rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="h-4 w-24 rounded bg-zinc-200" />
        <div className="mt-4 h-8 w-3/4 rounded bg-zinc-200" />
        <div className="mt-6 space-y-3">
          <div className="h-4 rounded bg-zinc-100" />
          <div className="h-4 w-5/6 rounded bg-zinc-100" />
          <div className="h-4 w-2/3 rounded bg-zinc-100" />
        </div>
      </section>
    </main>
  );
}
