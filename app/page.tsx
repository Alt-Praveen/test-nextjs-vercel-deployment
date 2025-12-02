
export default function Home() {
  const getEnvVar = process.env.TEST_VARIABLE
  console.log("TEST_VARIABLE in env file => ", getEnvVar);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
            Hello World
          </code>
        </div>
      </main>
    </div>
  );
}
