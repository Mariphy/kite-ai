# Next.js 16.0.7 Upgrade Documentation

## Overview
This document describes the upgrade of Next.js from version 15.4.8 to 16.0.7, including all breaking changes and their resolutions.

## Dependency Updates

### Updated Packages
- `next`: 15.4.8 → 16.0.7
- `eslint-config-next`: 14.2.5 → 16.0.7

### Installation
The dependencies were updated using pnpm:
```bash
pnpm install --no-frozen-lockfile
```

## Breaking Changes and Fixes

### 1. Partial Prerendering (PPR) Configuration

**Breaking Change**: The `experimental.ppr` configuration option has been renamed to `cacheComponents` in Next.js 16.

**Previous Configuration** (`next.config.ts`):
```typescript
const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  // ...
};
```

**Updated Configuration**:
```typescript
const nextConfig: NextConfig = {
  // cacheComponents is currently disabled - see note below
  // cacheComponents: true,
  // ...
};
```

**Important Note**: The `cacheComponents` feature is currently disabled because it's incompatible with pages that use dynamic data fetching (like `auth()` and database queries) outside of Suspense boundaries. This feature can be re-enabled once the application is refactored to properly handle dynamic data with Suspense.

### 2. Route Segment Config Export

**Breaking Change**: The `experimental_ppr` export in layout files is no longer compatible with `cacheComponents`.

**File**: `app/(chat)/layout.tsx`

**Before**:
```typescript
export const experimental_ppr = true;

export default async function Layout({ children }: { children: React.ReactNode }) {
  // ...
}
```

**After**:
```typescript
export default async function Layout({ children }: { children: React.ReactNode }) {
  // ...
}
```

### 3. Authentication Caching in Root Layout

**Issue**: With `cacheComponents` enabled, uncached data access (like `auth()`) in the root layout delays the entire page rendering.

**File**: `app/layout.tsx`

**Solution**: Wrapped the authentication logic in a Suspense boundary:

**Before**:
```typescript
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <html>
      <body>
        <Header user={session?.user} />
        {children}
      </body>
    </html>
  );
}
```

**After**:
```typescript
async function HeaderWithAuth() {
  const session = await auth();
  return <Header user={session?.user} />;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Suspense fallback={<Header />}>
          <HeaderWithAuth />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
```

### 4. Dynamic Page Configuration

**Files**: 
- `app/(chat)/ai/page.tsx`
- `app/(chat)/chat/[id]/page.tsx`

**Added**: `export const dynamic = 'force-dynamic';` to pages that require authentication and database access. This ensures these pages are always server-rendered dynamically.

**Note**: When `cacheComponents` is re-enabled, these exports may cause conflicts and will need to be refactored to use Suspense boundaries instead.

## Known Warnings

### Middleware Deprecation
```
⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.
```

**Impact**: Non-breaking warning. The current `middleware.ts` file will continue to work but should be renamed to `proxy.ts` in a future update according to Next.js 16 conventions.

**Action**: No immediate action required. Plan to rename in a future update.

## Compatibility Notes

### Peer Dependency Warnings
The following peer dependency warnings were noted during installation:

1. **next-auth**: Expects Next.js ^14.0.0-0 or ^15.0.0-0, but we're using 16.0.7
   - Status: Working without issues
   - Future: Monitor next-auth for official Next.js 16 support

2. **next-themes**: Expects React ^16.8, ^17, or ^18, but we're using React 19.0.0-rc
   - Status: Working without issues
   - Note: React 19 RC is supported by Next.js 16

## Testing Results

### Build Status
✅ Production build completes successfully with Next.js 16.0.7

### Security Check
✅ No known vulnerabilities in Next.js 16.0.7 or eslint-config-next 16.0.7

## Future Improvements

### Re-enabling cacheComponents (formerly PPR)

To re-enable the `cacheComponents` feature for improved performance:

1. Refactor all pages with dynamic data fetching to use Suspense boundaries
2. Remove `export const dynamic = 'force-dynamic'` from pages
3. Enable `cacheComponents: true` in `next.config.ts`
4. Test thoroughly to ensure no "Uncached data was accessed outside of <Suspense>" errors

Example refactoring pattern:
```typescript
// Instead of:
export const dynamic = 'force-dynamic';
export default async function Page() {
  const session = await auth();
  const data = await fetchData();
  return <Component session={session} data={data} />;
}

// Use:
async function DataLoader() {
  const session = await auth();
  const data = await fetchData();
  return <Component session={session} data={data} />;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <DataLoader />
    </Suspense>
  );
}
```

### Middleware to Proxy Migration

Plan to rename `middleware.ts` to `proxy.ts` and update the export according to Next.js 16 conventions when officially documented.

## References

- [Next.js 16 Release Notes](https://nextjs.org/blog/next-16)
- [Next.js Upgrade Guide](https://nextjs.org/docs/app/building-your-application/upgrading)
- [Partial Prerendering Documentation](https://nextjs.org/docs/app/api-reference/next-config-js/cacheComponents)
