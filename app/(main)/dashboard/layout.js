export default function Layout({ children }) {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl xl:text-7xl gradient-title animate-gradient">
          Industry Insights
        </h1>
      </div>
      <div>{children}</div>
    </div>
  );
}
