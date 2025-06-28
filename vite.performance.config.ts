import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Performance analysis configuration
export default defineConfig(({ command, mode }) => {
  const isAnalyze = mode === 'analyze'
  
  return {
    plugins: [
      react(),
      // Add bundle analyzer plugin in analyze mode
      ...(isAnalyze ? [
        {
          name: 'bundle-analyzer',
          generateBundle(options, bundle) {
            // Simple bundle analysis report
            const fileCount = Object.keys(bundle).length
            const totalSize = Object.values(bundle).reduce((acc: number, chunk) => {
              const size = typeof chunk === 'object' && chunk && 'code' in chunk 
                ? (chunk.code as string).length 
                : 0
              return acc + size
            }, 0)
            
            console.log('\n📊 Bundle Analysis:')
            console.log(`Total files: ${fileCount}`)
            console.log(`Total size: ${(totalSize / 1024).toFixed(2)} KB`)
            console.log('Files:', Object.keys(bundle))
          }
        }
      ] : [])
    ],
    
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    
    // Enhanced dependency optimization for analysis
    optimizeDeps: {
      holdUntilCrawlEnd: false,
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
    },

    // Development server with detailed logging
    server: {
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
      hmr: {
        overlay: false,
      },
    },

    css: {
      preprocessorMaxWorkers: true,
      devSourcemap: false,
    },

    // Enhanced build configuration for analysis
    build: {
      minify: 'esbuild',
      reportCompressedSize: isAnalyze, // Enable size reporting in analyze mode
      
      rollupOptions: {
        output: {
          manualChunks: {
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
          },
          
          // Enhanced chunk file naming for analysis
          chunkFileNames: (chunkInfo) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? path.basename(chunkInfo.facadeModuleId, path.extname(chunkInfo.facadeModuleId))
              : 'chunk'
            return `js/${facadeModuleId}-[hash].js`
          },
          
          assetFileNames: (assetInfo) => {
            const extType = path.extname(assetInfo.name || '').substring(1)
            if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
              return `images/[name]-[hash][extname]`
            }
            if (/css/i.test(extType)) {
              return `css/[name]-[hash][extname]`
            }
            return `assets/[name]-[hash][extname]`
          }
        }
      },

      target: 'esnext',
      cssCodeSplit: true,
      assetsInlineLimit: 2048,
      sourcemap: isAnalyze, // Enable sourcemaps in analyze mode
    },

    json: {
      stringify: 'auto',
    },

    esbuild: {
      drop: command === 'build' ? ['console', 'debugger'] : [],
      legalComments: 'none',
    },
  }
}) 