"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experience = [
  {
    role: "Senior Frontend Engineer",
    company: "MindsDB",
    period: "May 2023 — August 2025",
    type: "Remote",
    companyIcon: "mindsdb.png",
    companyColor: "from-purple-500 to-purple-600",
    description:
      "Led 0→1 frontend development of an AI-powered data platform, owning architecture for core data exploration, querying, and conversational AI experiences.",
    achievements: [
      "Led end-to-end development of the AI data platform UI, architecting SQL Query Editor, Results Viewer, Object Explorer, and Data Insights modules with React, TypeScript, and Redux",
      "Designed and shipped a natural-language chat interface converting user intent into SQL and semantic queries, collaborating on Text-to-SQL, RAG pipelines, and LLM streaming responses",
      "Built scalable data visualization and rendering pipelines for large tabular and chart-based outputs with virtualization, windowing, and incremental hydration",
      "Owned data-source onboarding UX for databases, SaaS apps, and vector stores, coordinating schema introspection and metadata APIs with backend teams",
      "Implemented enterprise chatbot integrations for Slack and Microsoft Teams with secure token handling and workspace-level permissions",
      "Established CI/CD and cloud deployment workflows using GitHub Actions, Docker, and AWS (S3, CloudFront, ALB) with production observability via Sentry",
      "Defined frontend testing and quality strategy with Jest, React Testing Library, Playwright/Cypress, contract testing, and performance regression checks",
      "Drove staff-level cross-functional execution with ML, data, and security teams to ship SOC-2-aligned features including RBAC and token-based auth",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "LLMs",
      "Text-to-SQL",
      "RAG",
      "WebSocket",
      "Data Visualization",
      "Virtualization",
      "Slack API",
      "Microsoft Teams API",
      "GitHub Actions",
      "Docker",
      "AWS S3",
      "AWS CloudFront",
      "AWS ALB",
      "Sentry",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Cypress",
      "RBAC",
    ],
  },
  {
    role: "Senior Frontend Engineer",
    company: "Snowflake",
    period: "November 2020 — May 2023",
    type: "Hybrid",
    companyIcon: "snowflake.png",
    companyColor: "from-sky-500 to-sky-600",
    description:
      "Led frontend development of Snowsight’s interactive analytics and data exploration platform used by thousands of customers.",
    achievements: [
      "Led frontend development of Snowsight’s interactive data exploration interface using React, TypeScript, Redux, and GraphQL",
      "Designed high-performance data rendering pipelines with virtualization, memoization, and fine-grained selectors, reducing render time and memory usage by 30–40%",
      "Built a scalable UI platform with component-driven architecture, design tokens, and CSS Modules to standardize UX across dashboards and worksheets",
      "Integrated real-time query execution and streaming results via GraphQL subscriptions and polling with robust cancellation and error handling",
      "Improved reliability with comprehensive testing using Jest, React Testing Library, and Playwright alongside frontend performance instrumentation",
      "Owned complex feature delivery end-to-end, from API contracts to rollout strategy using feature flags, A/B experiments, and accessibility upgrades",
      "Collaborated with backend teams on query workflows, metadata APIs, and state synchronization across sessions",
      "Advanced accessibility and usability with ARIA best practices and consistent interaction patterns across the product",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Virtualization",
      "Memoization",
      "Design Systems",
      "CSS Modules",
      "Feature Flags",
      "A/B Testing",
      "Jest",
      "React Testing Library",
      "Playwright",
      "Accessibility",
      "ARIA",
      "Telemetry",
    ],
  },
  {
    role: "Software Engineer",
    company: "Figma",
    period: "April 2018 — November 2020",
    type: "On-site",
    companyIcon: "figma.png",
    companyColor: "from-blue-500 to-blue-600",
    description:
      "Frontend engineer focused on building high-performance, real-time collaborative experiences in Figma’s browser-based design editor.",
    achievements: [
      "Developed core design editor features emphasizing real-time collaboration and low-latency rendering",
      "Optimized rendering performance and interaction responsiveness for complex design documents",
      "Built advanced UI interactions using TypeScript and React for professional design workflows",
      "Contributed to real-time multiplayer editing and shared state synchronization",
      "Shipped platform-level features including Plugins and design system capabilities supporting enterprise scale",
    ],
    technologies: [
      "TypeScript",
      "React",
      "WebGL",
      "Real-time Collaboration",
      "Rendering Performance",
      "Design Systems",
      "Browser APIs",
    ],
  },
  {
    role: "Software Engineer",
    company: "Accenture",
    period: "October 2015 — April 2018",
    type: "On-site",
    companyIcon: "accenture.png",
    companyColor: "from-gray-500 to-gray-600",
    description:
      "Frontend engineer building real-time, clinician-facing healthcare applications for continuous patient monitoring.",
    achievements: [
      "Built clinician-facing web applications for real-time ECG and vital-sign visualization using Angular and JavaScript",
      "Implemented low-latency waveform rendering and alerting workflows for continuous patient monitoring",
      "Developed responsive dashboards and data views integrated with AWS-backed services",
      "Integrated front-end applications with Android gateways and REST APIs for hospital and remote-care use cases",
      "Supported FDA-cleared monitoring systems with production-grade reliability and performance constraints",
    ],
    technologies: [
      "JavaScript",
      "Angular",
      "HTML",
      "CSS",
      "Canvas",
      "REST APIs",
      "AWS",
      "Real-time Visualization",
      "Healthcare Systems",
    ],
  },
];

export default function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Professional Journey"
          tagIcon="solar:case-bold"
          heading="Experience"
          showUnderline={false}
          description="My professional journey and the impact I've made across different domains"
          centered={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 md:gap-8 lg:gap-12">
                {/* Company Icon & Info */}
                <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
                  <motion.div
                    variants={iconVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <img
                      src={exp.companyIcon}
                      className="text-white  relative z-10 rounded-full"
                      width={100}
                      height={100}
                    />
                    {/* Animated background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4 md:space-y-6 min-w-0">
                  {/* Header */}
                  <div className="space-y-1 md:space-y-2">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 md:gap-3 text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium"
                    >
                      <Icon
                        icon="solar:calendar-outline"
                        width={14}
                        height={14}
                        className="md:w-4 md:h-4"
                      />
                      <span>{exp.period}</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight"
                    >
                      {exp.role}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg md:text-xl text-blue-600 dark:text-blue-400 font-semibold"
                    >
                      {exp.company}
                    </motion.p>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed"
                  >
                    {exp.description}
                  </motion.p>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon
                        icon="solar:cup-star-bold"
                        className="text-amber-500"
                        width={22}
                        height={22}
                      />
                      Key Achievements
                    </h4>

                    <div className="space-y-2 md:space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.div
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.7 + achIndex * 0.1 }}
                          className="flex items-start gap-3 md:gap-4 group/achievement hover:translate-x-1 md:hover:translate-x-2 transition-transform duration-300"
                        >
                          <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center mt-0.5 shadow-md md:shadow-lg group-hover/achievement:scale-110 transition-transform duration-300">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="space-y-3 md:space-y-4"
                  >
                    <h4 className="text-base md:text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                      <Icon
                        icon="solar:programming-bold"
                        className="text-purple-500"
                        width={18}
                        height={18}
                      />
                      Technologies & Skills
                    </h4>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.9 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-100/80 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl font-medium text-xs md:text-sm border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/80 dark:hover:bg-blue-900/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Divider */}
              {index < experience.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="mt-6 md:mt-12 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center px-4 md:px-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50/50 to-blue-100/30 dark:from-blue-950/20 dark:to-blue-900/10 border border-blue-200/30 dark:border-blue-800/20 hover:border-blue-300/50 dark:hover:border-blue-600/30 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">
                Years Experience
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 border border-green-200/30 dark:border-green-800/20 hover:border-green-300/50 dark:hover:border-green-600/30 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">
                Projects Completed
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/10 border border-purple-200/30 dark:border-purple-800/20 hover:border-purple-300/50 dark:hover:border-purple-600/30 transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                90%
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">
                Success Rate
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
