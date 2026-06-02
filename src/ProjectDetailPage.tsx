import { useParams, Link } from 'react-router-dom';
import { projects } from './projectsData';
import { ArrowLeft, Globe, Github, Calendar, User, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white font-medium"
        >
          <ArrowLeft size={18} /> Back to portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </motion.div>

        {/* ── MAIN GRID: LEFT content, RIGHT image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ── LEFT — all text content ── */}
          <div className="order-2 lg:order-1">

            {/* Period & role badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2 mb-5"
            >
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                {project.period}
              </span>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-800">
                {project.role}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {project.title}
              </span>
            </motion.h1>

            {/* Full description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="space-y-4 mb-8"
            >
              {project.full.map((paragraph, idx) => (
                <p key={idx} className="text-gray-600 dark:text-gray-300 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Key Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mb-8 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700"
            >
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Key Contributions
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mb-8"
            >
              <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34 }}
              className="flex flex-wrap gap-4"
            >
              {project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:opacity-90 transition-opacity"
                >
                  <Globe size={16} /> Live Demo
                </a>
              )}
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-sm font-medium hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  <Github size={16} /> View Code
                </a>
              )}
            </motion.div>
          </div>

          {/* ── RIGHT — square image 1:1 (3375×3375) ── */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200/40 dark:border-gray-700"
              style={{ aspectRatio: '1 / 1' }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Subtle gradient overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Period badge on image */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                  {project.period}
                </span>
              </div>
            </motion.div>

            {/* Other projects — di bawah gambar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700"
            >
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Other Projects
              </h3>
              <div className="space-y-3">
                {projects
                  .filter(p => p.slug !== slug)
                  .slice(0, 3)
                  .map(p => (
                    <Link
                      key={p.slug}
                      to={`/projects/${p.slug}`}
                      className="flex items-center gap-3 group"
                    >
                      {/* Thumbnail square */}
                      <div
                        className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                        style={{ width: 48, height: 48 }}
                      >
                        <img
                          src={p.image}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">
                          {p.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{p.period}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* ── PREV / NEXT NAVIGATION ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 grid grid-cols-2 gap-6"
        >
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
            >
              <ArrowLeft size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-0.5">Previous</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center justify-end gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300 text-right"
            >
              <div className="min-w-0">
                <p className="text-xs text-gray-400 mb-0.5">Next</p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {nextProject.title}
                </p>
              </div>
              <ArrowLeft size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 rotate-180" />
            </Link>
          ) : <div />}
        </motion.div>

      </div>
    </div>
  );
}