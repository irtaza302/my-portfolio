# Vercel Deployment Guide

This guide covers deploying your optimized portfolio website to Vercel with maximum performance.

## 🚀 Quick Deployment

### Option 1: Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

### Option 2: Git Integration
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository at [vercel.com/new](https://vercel.com/new)
3. Vercel will automatically detect Vite and deploy

## ⚙️ Configuration Overview

### `vercel.json` Features
- **Framework Detection**: Automatically configured for Vite
- **SPA Routing**: Handles client-side routing with rewrites
- **Caching Strategy**: Optimized cache headers for assets
- **Build Optimization**: Custom build commands and environment
- **Regional Deployment**: Deployed to `sfo1` region for optimal performance

### Vite Configuration Enhancements
- **Vercel Environment Detection**: Automatically detects Vercel deployment
- **Environment Variables**: Access to Vercel system variables
- **Port Configuration**: Handles Vercel's dynamic port assignment
- **Production Optimizations**: Enhanced for Vercel's edge network

## 🌍 Environment Variables

Vercel automatically provides these environment variables:

```bash
# Available in your app as import.meta.env.VITE_VERCEL_ENV
VITE_VERCEL_ENV=production|preview|development

# Your deployment URL
VITE_VERCEL_URL=your-app.vercel.app

# Git information
VITE_VERCEL_GIT_PROVIDER=github
VITE_VERCEL_GIT_COMMIT_REF=main
```

### Adding Custom Environment Variables
1. Go to your project dashboard on Vercel
2. Navigate to Settings → Environment Variables
3. Add variables with `VITE_` prefix to make them available in your app

## 📊 Performance Features

### 1. Automatic Optimizations
- **Edge Network**: Global CDN with 100+ locations
- **Smart Bundling**: Automatic code splitting and tree shaking
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Compression**: Brotli and Gzip compression

### 2. Caching Strategy
```json
{
  "Static Assets": "1 year cache (immutable)",
  "HTML": "No cache (always fresh)",
  "API Routes": "Configurable per route"
}
```

### 3. Build Performance
- **Dependency Caching**: Automatic npm/pnpm cache
- **Build Cache**: Incremental builds for faster deployments
- **Parallel Processing**: Multi-core build optimization

## 🔧 Advanced Configuration

### Custom Build Commands
```json
{
  "buildCommand": "pnpm run build",
  "installCommand": "pnpm install --frozen-lockfile"
}
```

### Regional Deployment
```json
{
  "regions": ["sfo1"]
}
```
Change to your preferred region:
- `iad1` - Washington, D.C., USA
- `pdx1` - Portland, USA
- `sfo1` - San Francisco, USA
- `lhr1` - London, UK
- `fra1` - Frankfurt, Germany

### Function Configuration
```json
{
  "functions": {
    "app/api/*": {
      "memory": 1024,
      "maxDuration": 10
    }
  }
}
```

## 📈 Monitoring & Analytics

### Built-in Analytics
Add to your `index.html` or main component:
```bash
npm install @vercel/analytics
```

```jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      {/* Your app */}
      <Analytics />
    </>
  );
}
```

### Speed Insights
```bash
npm install @vercel/speed-insights
```

```jsx
import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <>
      {/* Your app */}
      <SpeedInsights />
    </>
  );
}
```

## 🛠️ Deployment Scripts

Add these to your `package.json`:

```json
{
  "scripts": {
    "deploy": "vercel",
    "deploy:prod": "vercel --prod",
    "deploy:preview": "vercel --no-prod",
    "vercel:build": "pnpm run build",
    "vercel:dev": "vite",
    "env:pull": "vercel env pull"
  }
}
```

## 🔍 Troubleshooting

### Build Failures
```bash
# Clear Vercel cache
vercel --force

# Check build logs
vercel logs [deployment-url]

# Local build test
vercel build
vercel dev
```

### Performance Issues
```bash
# Analyze bundle
pnpm run build:analyze

# Profile build
pnpm run build:profile

# Check deployment
vercel inspect [deployment-url]
```

### Environment Variables
```bash
# Pull Vercel env vars locally
vercel env pull

# List all environment variables
vercel env ls
```

## 🚀 Deployment Checklist

- [ ] Code pushed to Git repository
- [ ] `vercel.json` configured
- [ ] Environment variables set in Vercel dashboard
- [ ] Build command tested locally
- [ ] Performance optimizations applied
- [ ] Analytics/Speed Insights added (optional)
- [ ] Custom domain configured (optional)

## 📱 Mobile Optimization

Your Vite configuration includes mobile-specific optimizations:
- Responsive images with proper sizing
- Touch-friendly interactions
- Optimized bundle splitting for mobile networks
- Progressive loading strategies

## 🔗 Useful Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Performance Best Practices](https://vercel.com/docs/concepts/edge-network/overview)

## 🎯 Expected Performance

With these optimizations, expect:
- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Core Web Vitals**: All green scores
- **Global Edge Latency**: < 100ms

## ✅ **Latest Updates & Fixes**

### Fixed Issues (Latest)
- **Header Pattern Issue**: Fixed invalid regex pattern in `vercel.json` headers by using individual patterns
- **Dependency Updates**: Updated to latest versions including Vite 6.3.5
- **Radix UI Components**: Updated to latest stable versions for better performance
- **Vercel CLI**: Added Vercel CLI to dependencies for easier deployment

### Performance Improvements with Latest Versions
- **Vite 6.3.5**: Enhanced build performance and better tree-shaking
- **React 18.3.1**: Latest stable with concurrent features
- **Radix UI v1.2+**: Improved accessibility and performance
- **Framer Motion 12.19.2**: Better animation performance

Your portfolio is now optimized for maximum performance on Vercel! 🎉 