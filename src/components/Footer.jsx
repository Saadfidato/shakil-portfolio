const Footer = () => {
  return (
    <footer className="relative py-12 text-center overflow-hidden">
      <div className="relative z-10 bg-black/80 backdrop-blur-xl border border-blue-200/20 rounded-3xl p-8 mx-6 md:mx-auto max-w-lg shadow-lg shadow-blue-500/10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent animate-pulse font-mono">
          &gt; SYSTEM_READY
        </h2>
        <p className="text-blue-600/70 mb-4 font-mono">
          © 2026 KHALID AFGHANMAL. ALL RIGHTS RESERVED.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <p className="text-blue-600/50 font-mono text-sm">
            [root@kali]~# Ready for security challenges
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
