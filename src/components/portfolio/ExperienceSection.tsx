"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experience = [
  {
    role: "Senior Full Stack Engineer",
    company: "Perplexity",
    period: "October 2023 — July 2025",
    type: "Remote",
    companyIcon: "perplexity.png",
    companyColor: "from-green-500 to-green-600",
    description: "Led frontend development for AI-powered search engine, enhancing the conversational interface and real-time answer generation system that serves millions of users seeking accurate, cited information.",
    achievements: [
      "Architected real-time answer streaming interface using React and Server-Sent Events, reducing perceived latency by 60% and enabling progressive answer rendering with citation highlighting",
      "Built advanced citation system with inline source previews, domain verification badges, and credibility scoring, improving user trust metrics by 35%",
      "Developed interactive follow-up question suggestions using context-aware AI, increasing user engagement and session depth by 45%",
      "Implemented conversation threading and search history features with optimistic UI updates and offline support using IndexedDB and service workers",
      "Created specialized search modes (Academic, Writing, Code) with custom UI components and tailored prompt engineering, adopted by 2M+ users",
      "Optimized search result rendering with virtualization and lazy loading, handling 10K+ token responses while maintaining 60fps scrolling performance",
      "Led migration to Next.js 15 App Router with streaming SSR, improving Core Web Vitals scores by 40% and SEO visibility for shared answers"
    ],
    technologies: ["React", "Next.js 15", "TypeScript", "Server-Sent Events", "TanStack Query", "Tailwind CSS", "Framer Motion", "IndexedDB", "Service Workers", "Python", "FastAPI", "Redis", "PostgreSQL", "OpenAI API", "Web Vitals"]
  },
  {
    role: "Full Stack Developer",
    company: "FoxyAI",
    period: "September 2022 — October 2023",
    type: "Remote",
    companyColor: "from-blue-500 to-blue-600",
    companyIcon: "foxyai.avif",
    description: "Built AI-powered property intelligence platform using computer vision and ML to analyze property images, detect damage, and generate comprehensive reports for real estate professionals processing 10K+ properties daily.",
    achievements: [
      "Built AI-powered property intelligence platform using computer vision and ML to analyze property images, detect damage, and generate comprehensive PDF reports for real estate professionals",
      "Integrated Zillow API with custom ML models to create automated property assessment tool processing 10K+ properties daily with 95% accuracy",
      "Deployed containerized microservices on AWS ECS with auto-scaling policies, handling 10x traffic spikes during peak real estate seasons without performance degradation",
      "Implemented PDF generation pipeline using Node.js and Puppeteer, creating customizable reports with charts, images, and AI-generated insights",
      "Set up monitoring and alerting using DataDog APM, Sentry for error tracking, and custom CloudWatch dashboards, reducing MTTR from hours to minutes",
      "Established testing pyramid with unit tests (Jest), integration tests (Supertest), and E2E tests (Cypress), achieving 80% code coverage and catching 95% of bugs pre-production"
    ],
    technologies: ["React", "Node.js", "Computer Vision", "ML Models", "AWS ECS", "Docker", "Puppeteer", "DataDog", "Sentry", "CloudWatch", "Jest", "Cypress", "Supertest", "PostgreSQL"]
  },
  {
    role: "Senior Frontend Engineer",
    company: "Asian Logic",
    period: "February 2017 — September 2022",
    type: "Hybrid",
    companyColor: "from-red-500 to-red-600",
    companyIcon: "sportserve.avif",
    description: "Led migration of legacy betting platforms to modern architecture, supporting millions of concurrent users across multiple brands (Dafabet, Nextbet, Zedbet) with real-time sports betting capabilities.",
    achievements: [
      "Led migration of legacy Backbone.js betting platform to Next.js with SSR, improving performance by 80% and supporting millions of concurrent users during major sporting events",
      "Architected multi-brand theming system supporting Dafabet, Nextbet, and Zedbet from single codebase, reducing deployment time by 90% using 'build once, deploy many' approach",
      "Built real-time sports betting interface handling 500K+ odds updates/minute using WebSocket connections and efficient React state management",
      "Implemented blue-green deployment strategy with NGINX load balancers and health checks, achieving zero-downtime deployments during critical betting events",
      "Optimized performance using CDN and reverse proxy caching (NGINX, Varnish), achieving sub-second load times and 99.9% uptime during peak traffic",
      "Created load testing framework using K6 and JMeter, simulating 100K concurrent users to identify bottlenecks and optimize infrastructure for major sporting events",
      "Established feature flag system using LaunchDarkly for gradual rollouts and A/B testing, enabling safe experimentation without impacting user experience"
    ],
    technologies: ["React", "Next.js", "Backbone.js", "WebSocket", "NGINX", "Varnish", "CDN", "LaunchDarkly", "K6", "JMeter", "Node.js", "Redis", "Blue-Green Deployment"]
  },
  {
    role: "Frontend Engineer",
    company: "Meta",
    period: "October 2015 — February 2017",
    type: "On-site",
    companyColor: "from-blue-500 to-blue-600",
    companyIcon: "meta.png",
    description: "Contributed to Facebook Profile redesign serving 2B+ users, transitioning from Timeline to single-column layout while building performant UI components for News Feed with advanced optimization strategies.",
    achievements: [
      "Contributed to Facebook Profile redesign serving 2B+ users, transitioning from Timeline to single-column layout using React and custom framework",
      "Built performant UI components for News Feed using React, achieving 60fps scrolling with virtualization and intelligent rendering strategies",
      "Developed A/B testing framework for rapid experimentation, enabling data-driven decisions that improved user engagement by 25%",
      "Implemented automated performance testing using Lighthouse CI and custom metrics, blocking deployments that degraded Core Web Vitals below thresholds",
      "Participated in on-call rotation managing production incidents, improving system reliability through runbooks, monitoring dashboards, and post-mortem processes",
      "Contributed to internal testing tools enabling engineers to write visual regression tests, reducing UI bugs in production by 60%"
    ],
    technologies: ["React", "Custom Framework", "A/B Testing", "Lighthouse CI", "Performance Optimization", "Visual Regression Testing", "JavaScript", "CSS", "Internal Tools"]
  }
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
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
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
                      <Icon icon="solar:calendar-outline" width={14} height={14} className="md:w-4 md:h-4" />
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
                      <Icon icon="solar:cup-star-bold" className="text-amber-500" width={22} height={22} />
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
                      <Icon icon="solar:programming-bold" className="text-purple-500" width={18} height={18} />
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
              <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">Years Experience</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50/50 to-green-100/30 dark:from-green-950/20 dark:to-green-900/10 border border-green-200/30 dark:border-green-800/20 hover:border-green-300/50 dark:hover:border-green-600/30 transition-all duration-500"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">10+</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">Projects Completed</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              className="group p-6 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-purple-50/50 to-purple-100/30 dark:from-purple-950/20 dark:to-purple-900/10 border border-purple-200/30 dark:border-purple-800/20 hover:border-purple-300/50 dark:hover:border-purple-600/30 transition-all duration-500 sm:col-span-2 lg:col-span-1"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">90%</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium text-base md:text-lg">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
