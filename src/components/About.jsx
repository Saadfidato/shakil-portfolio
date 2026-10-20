import shakilImage from "../assets/img/shakil2.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Information
            </span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile & Stats */}
          <div className="space-y-10">
            {/* Profile Image */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto group">
              {/* Soft blue glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-400 to-sky-400 opacity-30 blur-3xl animate-pulse" />

              {/* Animated blue border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 opacity-25 animate-spin-slow" />

              {/* Profile Picture */}
              <div className="absolute inset-2 rounded-full overflow-hidden bg-white shadow-2xl border-4 border-blue-200 transition-transform duration-700 group-hover:scale-105">
                <img
                  src={shakilImage}
                  alt="Shakil Profile"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  value: "3+",
                  label: "Years Experience",
                  color: "text-blue-600",
                },
                {
                  value: "7+",
                  label: "Projects",
                  color: "text-indigo-600",
                },
                {
                  value: "100%",
                  label: "Client Satisfaction",
                  color: "text-sky-700",
                },
                {
                  value: "24/7",
                  label: "Support",
                  color: "text-blue-700",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group text-center p-6
                    bg-white/90 backdrop-blur-md
                    rounded-2xl border border-blue-100
                    shadow-md shadow-blue-100/50
                    hover:border-blue-300
                    hover:shadow-xl hover:shadow-blue-200/50
                    hover:-translate-y-1
                    transition-all duration-300"
                >
                  <div
                    className={`text-4xl font-extrabold mb-2 tracking-tight ${stat.color}`}
                  >
                    {stat.value}
                  </div>

                  <div className="text-slate-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Biography & Skills */}
          <div className="space-y-10">
            {/* Biography */}
            <div>
              <h3 className="text-3xl font-extrabold text-blue-600 mb-6">
                About Me
              </h3>

              <p className="text-slate-700 text-lg leading-loose mb-6">
                I'm a{" "}
                <span className="text-blue-600 font-bold">
                  Certified Ethical Hacker
                </span>{" "}
                with{" "}
                <span className="text-blue-600 font-bold">
                  CEH &amp; PWK certifications
                </span>
                . Specializing in penetration testing, web application security,
                and secure development practices.
              </p>

              <p className="text-slate-700 text-lg leading-loose">
                My mission is to identify vulnerabilities before attackers do,
                and build secure systems that withstand modern threats. I
                combine development expertise with security knowledge to create
                robust, hack-resistant applications.
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h4 className="text-2xl font-bold text-slate-900 mb-6">
                Core <span className="text-blue-600">Competencies</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: "fas fa-terminal",
                    label: "Penetration Testing",
                  },
                  {
                    icon: "fas fa-code",
                    label: "Secure Development",
                  },
                  {
                    icon: "fas fa-shield-alt",
                    label: "Security Auditing",
                  },
                  {
                    icon: "fas fa-network-wired",
                    label: "Network Security",
                  },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 p-4
                      bg-white/90 backdrop-blur-md
                      rounded-xl border border-blue-100
                      shadow-sm hover:border-blue-300
                      hover:bg-blue-50 hover:shadow-lg
                      hover:-translate-y-1
                      transition-all duration-300"
                  >
                    <div
                      className="w-11 h-11 shrink-0 bg-blue-50
                        border border-blue-100 rounded-xl
                        flex items-center justify-center
                        group-hover:bg-blue-600
                        transition-colors duration-300"
                    >
                      <i
                        className={`${skill.icon} text-blue-600
                          text-lg group-hover:text-white
                          transition-colors duration-300`}
                      />
                    </div>

                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {skill.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
