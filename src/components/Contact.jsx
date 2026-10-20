const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-mono">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            &gt; CONTACT
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="rounded-2xl p-8 shadow-2xl bg-black/50 border border-blue-200/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 font-mono">
                &gt; CONTACT_INFO
              </h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-500/10 rounded-full p-3 mr-4 border border-blue-200/30">
                    <i className="fas fa-envelope text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 font-mono">EMAIL</h4>
                    <p className="text-slate-700/80 font-mono">
                      khalidafghanmal2003@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500/10 rounded-full p-3 mr-4 border border-blue-200/30">
                    <i className="fas fa-phone text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 font-mono">PHONE</h4>
                    <p className="text-slate-700/80 font-mono">+93 793237732</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-500/10 rounded-full p-3 mr-4 border border-blue-200/30">
                    <i className="fas fa-map-marker-alt text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-600 font-mono">
                      LOCATION
                    </h4>
                    <p className="text-slate-700/80 font-mono">
                      Kabul, Afghanistan
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex space-x-4">
                {[
                  {
                    icon: "fab fa-linkedin-in",
                    url: "https://linkedin.com/in/khalidafghanmal",
                  },
                  {
                    icon: "fab fa-github",
                    url: "https://github.com/khalidafghanmal",
                  },
                  {
                    icon: "fab fa-twitter",
                    url: "https://twitter.com/khalidafghanmal",
                  },
                  {
                    icon: "fab fa-facebook-f",
                    url: "https://facebook.com/khalid.afghanmal",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500/10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition border border-blue-200/30 hover:border-blue-200/50"
                  >
                    <i className={`${social.icon} text-blue-600`} />
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8 shadow-2xl bg-black/50 border border-blue-200/20">
              <h3 className="text-2xl font-bold mb-6 text-blue-600 font-mono">
                &gt; SEND_MESSAGE
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-blue-600/70 mb-2 font-mono">
                    NAME
                  </label>
                  <input
                    type="text"
                    className="bg-black/50 border border-blue-200/30 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-slate-700 font-mono placeholder-green-500/50"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-blue-600/70 mb-2 font-mono">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    className="bg-black/50 border border-blue-200/30 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-slate-700 font-mono placeholder-green-500/50"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-blue-600/70 mb-2 font-mono">
                    MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    className="bg-black/50 border border-blue-200/30 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/50 text-slate-700 font-mono placeholder-green-500/50"
                    placeholder="Type your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-600 to-emerald-700 border border-blue-200/30 w-full py-3 rounded-lg font-medium hover:scale-105 transition text-white font-mono uppercase tracking-wider"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
