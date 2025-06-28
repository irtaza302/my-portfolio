import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
  
  return {
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // Dependency optimization for faster cold starts
  optimizeDeps: {
    // Improve server cold start times in large projects
    holdUntilCrawlEnd: false,
    
    // Include commonly used dependencies to prevent re-bundling
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-icons',
      'react-intersection-observer',
      'react-type-animation',
      'aos',
      'class-variance-authority',
      'clsx',
      'tailwind-merge',
      '@radix-ui/react-slot',
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-separator',
      '@radix-ui/react-tabs',
      '@radix-ui/react-select',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-tooltip',
      'react-hook-form',
      '@hookform/resolvers',
      'zod'
    ],
    
    // Force pre-bundling to ignore cache for debugging
    // force: true, // Uncomment only when debugging dependency issues
  },

  // Development server optimizations
  server: {
    // Pre-transform frequently accessed files
    warmup: {
      clientFiles: [
        './src/components/Hero.tsx',
        './src/components/About.tsx',
        './src/components/Navigation.tsx',
        './src/components/Skills.tsx',
        './src/components/Experience.tsx',
        './src/components/Contact.tsx',
        './src/App.tsx',
        './src/main.tsx'
      ],
    },
    
    // Improve HMR performance
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },

  // CSS preprocessing optimizations
  css: {
    // Enable threaded CSS preprocessing for faster builds
    preprocessorMaxWorkers: true,
    
    // Optimize CSS dev builds
    devSourcemap: false, // Disable CSS sourcemaps in dev for speed
  },

  // Build optimizations
  build: {
    // Use esbuild for faster minification (default, but explicit)
    minify: 'esbuild',
    
    // Disable compressed size reporting for faster builds
    reportCompressedSize: false,
    
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
                    ui: [
            'framer-motion',
            'lucide-react',
            'react-icons',
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-separator',
            '@radix-ui/react-tabs',
            '@radix-ui/react-select'
          ],
          utils: [
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
            'aos',
            'react-intersection-observer',
            'react-type-animation'
          ]
        }
      }
    },

    // Target modern browsers for smaller bundles
    target: 'esnext',
    
    // Enable CSS code splitting for better loading
    cssCodeSplit: true,
    
    // Optimize asset inlining threshold
    assetsInlineLimit: 2048, // Inline assets smaller than 2KB
    
    // Generate sourcemaps only in development
    sourcemap: false,
  },

  // Optimize JSON imports
  json: {
    stringify: 'auto', // Use JSON.parse for large JSON files
  },

  // Enable esbuild optimizations
  esbuild: {
    // Remove console logs and debugger in production
    drop: isProduction ? ['console', 'debugger'] : [],
    
    // Optimize for smaller bundle size
    legalComments: isProduction ? 'none' : 'inline',
  },
  
  // Clean base URL configuration
  base: '/',
  
  // Preview server configuration for Vercel
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    host: true,
  },
}
})

