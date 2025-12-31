"use client";

export const ServicesBackground = () => {
  return (
    <>
      {/* Background elements */}
      <div className="via-forge-secondary/5 absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-transparent"></div>
      <div className="absolute top-1/2 -left-20 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>
      <div className="from-forge-secondary/10 absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-gradient-to-bl to-transparent blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      {/* Frosted dividers */}
      <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"></div>
      <div className="absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"></div>
    </>
  );
};
