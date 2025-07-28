import React from 'react';

interface CustomIconProps {
  name: string;
  width?: number;
  height?: number;
  className?: string;
}

// Map of icon names to their SVG file paths
const iconMap: Record<string, string> = {
  // Backend
  'nodejs': '/icons/nodejs.svg',
  'python': '/icons/python.svg',
  'nestjs': '/icons/nestjs.svg',
  'express': '/icons/express.svg',
  'fastapi': '/icons/fastapi.svg',
  'django': '/icons/django.svg',
  'graphql': '/icons/graphql.svg',
  'socketio': '/icons/socketio.svg',
  'oauth': '/icons/oauth.svg',
  
  // Frontend
  'react': '/icons/react.svg',
  'vue': '/icons/vue.svg',
  'nextjs': '/icons/nextjs.svg',
  'typescript': '/icons/typescript.svg',
  'javascript': '/icons/javascript.svg',
  'tailwind': '/icons/tailwind.svg',
  'redux': '/icons/redux.svg',
  'materialui': '/icons/materialui.svg',
  'd3js': '/icons/d3js.svg',
  'svg': '/icons/svg.svg',
  'flutter': '/icons/flutter.svg',
  
  // Database
  'postgresql': '/icons/postgresql.svg',
  'mongodb': '/icons/mongodb.svg',
  'mysql': '/icons/mysql.svg',
  'redis': '/icons/redis.svg',
  'prisma': '/icons/prisma.svg',
  
  // Cloud & DevOps
  'aws': '/icons/aws.svg',
  'gcp': '/icons/gcp.svg',
  'firebase': '/icons/firebase.svg',
  'docker': '/icons/docker.svg',
  'git': '/icons/git.svg',
  
  // AI & Integration
  'openai': '/icons/openai.svg',
  'langchain': '/icons/langchain.svg',
  'vercel': '/icons/vercel.svg',
  'stripe': '/icons/stripe.svg',
  'vectordb': '/icons/vectordb.svg',
};

export default function CustomIcon({ name, width = 24, height = 24, className = '' }: CustomIconProps) {
  const iconPath = iconMap[name.toLowerCase()];
  
  if (!iconPath) {
    // Fallback to a default icon or return null
    console.warn(`Icon not found: ${name}`);
    return (
      <div 
        className={`bg-gray-300 dark:bg-gray-600 rounded ${className}`}
        style={{ width, height }}
      />
    );
  }

  return (
    <img
      src={iconPath}
      alt={`${name} icon`}
      width={width}
      height={height}
      className={className}
      onError={(e) => {
        // Fallback if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.nextElementSibling?.classList.remove('hidden');
      }}
    />
  );
} 