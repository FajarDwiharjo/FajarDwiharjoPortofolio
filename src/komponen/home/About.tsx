export default function About() {
  return (
    <section className="my-[170px] px-6">
      <div className="bg-black/50  backdrop-blur-md border border-[#39FF14]/40 rounded-xl p-10 shadow-[0_0_15px_#39FF14] max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-4xl font-bold text-[#39FF14]">About Me</h1>
          </div>

          <div className="mt-6 mb-8">
            <p className="text-xl text-[#ccffe6] drop-shadow-[0_0_60px_black]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
