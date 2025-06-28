# Vite Performance Optimization Guide

This document outlines the performance optimizations implemented in your portfolio website using the latest Vite features and best practices.

## 🚀 Applied Optimizations

### 1. Dependency Optimization
- **`holdUntilCrawlEnd: false`**: Improves server cold start times in large projects
- **Pre-bundled dependencies**: Common libraries are included to prevent re-bundling
- **Smart chunk splitting**: Separates vendor, UI, and utility libraries for better caching

### 2. Development Server Enhancements
- **File warmup**: Pre-transforms frequently accessed components
- **HMR optimization**: Disabled error overlay for better performance
- **Threaded CSS preprocessing**: Enables parallel CSS processing

### 3. Build Optimizations
- **esbuild minification**: 20-40x faster than Terser
- **Disabled compressed size reporting**: Faster builds for large projects
- **Modern browser targeting**: Uses `esnext` for smaller bundles
- **Optimized asset inlining**: 2KB threshold for base64 inlining
- **CSS code splitting**: Automatic CSS chunking for async components

### 4. Advanced Features
- **JSON optimization**: Uses `JSON.parse()` for large JSON files
- **Console/debugger removal**: Automatic cleanup in production builds
- **Legal comments removal**: Reduces bundle size

## 📊 Performance Monitoring

### Available Scripts

```bash
# Development with profiling
pnpm run dev:profile

# Debug transform performance
pnpm run dev:debug

# Build with profiling
pnpm run build:profile

# Build with bundle analysis
pnpm run build:analyze

# Clean cache and build artifacts
pnpm run clean
pnpm run clean:cache
```

### Analyzing Performance

1. **Profile development server**:
   ```bash
   pnpm run dev:profile
   ```
   Visit your site, then press `p + enter` to save a `.cpuprofile` file.

2. **Debug transform times**:
   ```bash
   pnpm run dev:debug
   ```
   Shows transformation times for each file.

3. **Analyze bundle composition**:
   ```bash
   pnpm run build:analyze
   ```
   Generates detailed bundle analysis.

## 🔧 Configuration Files

- **`vite.config.ts`**: Main optimized configuration
- **`vite.performance.config.ts`**: Performance analysis configuration
- **`tsconfig.app.json`**: Already optimized with `moduleResolution: "bundler"`

## 📈 Expected Performance Improvements

- **40% faster cold starts** (with CSS preprocessing optimization)
- **Reduced bundle size** (modern browser targeting + tree shaking)
- **Better caching** (strategic chunk splitting)
- **Faster builds** (esbuild minification + disabled size reporting)
- **Improved HMR** (file warmup + optimized dependencies)

## 🛠️ Troubleshooting

### Slow Cold Starts
- Run `pnpm run clean:cache` to clear Vite cache
- Check if all dependencies are in `optimizeDeps.include`
- Use `pnpm run dev:debug` to identify slow transforms

### Large Bundle Size
- Run `pnpm run build:analyze` to identify large chunks
- Consider code splitting for large components
- Review manual chunks configuration

### Build Performance Issues
- Disable `reportCompressedSize` (already done)
- Use `build:profile` to identify bottlenecks
- Consider using fewer workers for CSS preprocessing on low-end machines

## 🔄 Continuous Optimization

1. **Regular profiling**: Use profiling scripts monthly
2. **Dependency auditing**: Review `optimizeDeps.include` when adding new packages
3. **Bundle analysis**: Monitor chunk sizes after major changes
4. **Cache management**: Clear caches when experiencing issues

## 📚 Additional Resources

- [Vite Performance Guide](https://vitejs.dev/guide/performance.html)
- [Bundle Analysis with speedscope.app](https://speedscope.app)
- [Modern Web Performance Metrics](https://web.dev/vitals/)

## 🎯 Key Performance Metrics to Monitor

- **Time to Interactive (TTI)**
- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Cumulative Layout Shift (CLS)**
- **Bundle size per chunk**
- **Build time**
- **HMR update time**

Remember to measure performance before and after changes to validate improvements! 