# Psicobalbi AI Coding Agent Instructions

## Project Overview
Psicobalbi is a Next.js 16+ psychology practice website with Spanish content. It's a marketing/intake website for a psychologist (Paula Balbi) featuring service information, intake forms, and integration with external booking (Cal.com) and WhatsApp.

### Tech Stack
- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5 with strict mode
- **Styling**: Tailwind CSS 4 with PostCSS
- **Form Handling**: React Hook Form + Zod for validation
- **UI Components**: Custom unstyled components using CSS variables for theming

## Critical Architecture Patterns

### 1. Path Aliases & Module Resolution
The project uses customized path resolution (see `tsconfig.json`):
```
@/*              → ./src/*
react-hook-form  → ./src/vendor/react-hook-form (custom wrapper)
@hookform/resolvers/zod → ./src/vendor/zod-resolver (custom wrapper)
```
**Key point**: Always import from `@/vendor/*` for form vendors, NOT from `node_modules`. The vendor files provide type definitions and shims.

### 2. Form Architecture (Critical)
- **Validation**: Use Zod schemas in `src/lib/validations/` (e.g., `intake.ts`)
- **Resolver**: Use custom `zod-resolver` from `@hookform/resolvers/zod`
- **Client Forms**: Always use `"use client"` directive
- **API Endpoint**: Forms POST to `/api/intake` with JSON
- **Error Handling**: API returns structured `IntakeApiError` or `IntakeApiSuccess` types
- **Example**: [IntakeFormSection](src/components/sections/intake-form.tsx) shows complete pattern with error handling and submission logic

### 3. Site Configuration
All configurable content lives in `src/config/site.ts` as a centralized `siteConfig` object. This includes:
- Navigation links (`nav` array)
- External URLs (booking, WhatsApp) - prioritize env vars: `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`
- SEO metadata
- Section content (hero, services, pricing, etc.)

**Modification rule**: Change `siteConfig`, not hardcoded values in components. Components import `siteConfig` and reference properties like `siteConfig.brandName`.

### 4. Component Organization
```
components/
  ├── ui/              # Unstyled base components (button, input, etc.)
  ├── layout/          # Layout structure (navbar, footer, container)
  ├── sections/        # Page sections that use layout + ui components
  └── [feature].tsx    # Standalone components
```

**Styling Approach**: Components use CSS variables defined in globals:
- `--color-brand` (primary), `--color-accent` (secondary)
- `--color-text`, `--color-bg`, `--color-soft`, `--color-border`
- `--font-heading-family` (Cormorant Garamond), `--font-body-family` (Manrope)

Use the `cn()` utility (from `@/lib/utils.ts`) for conditional class names. See [button.tsx](src/components/ui/button.tsx) for the pattern.

### 5. Type Safety
- Import intake form types from `@/lib/validations/intake` (exports `IntakePayload`, `IntakeApiSuccess`, `IntakeApiError`)
- Import site types from `@/types/site` (NavItem, ServiceItem, etc.)
- Use `SiteConfig` interface for site.ts type hints

## Developer Workflows

### Build & Run
```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

### Adding New Form Fields
1. Update Zod schema in `src/lib/validations/intake.ts` (add validation rules)
2. Add field to `IntakePayload` type export
3. Add to form JSX in `src/components/sections/intake-form.tsx`
4. Register with `useForm` hook
5. Add error display with `<FieldError>`

### Adding Page Content
1. Update `siteConfig` in `src/config/site.ts` with new content
2. If new section, create component in `src/components/sections/`
3. Use `Container` wrapper and `SectionHeading` for consistency
4. Import and add to page layout

## Project-Specific Conventions

### Naming
- TypeScript files: camelCase (e.g., `intake-form.tsx`)
- Types/Interfaces: PascalCase (e.g., `IntakePayload`)
- Constants: UPPER_SNAKE_CASE (e.g., `fallbackBookingUrl` for env fallbacks)

### Validation Rules
- Spanish error messages only
- Phone: min 7 digits, max 30 chars, must contain 7+ numeric digits
- Age: 13-99 range (coerced to number)
- Name fields: 3-120 chars, trimmed
- See [intake.ts](src/lib/validations/intake.ts) for reusable validators like `textField()` and `phoneField`

### Environment Variables
- `NEXT_PUBLIC_BOOKING_URL` - Cal.com booking link (fallback: hardcoded in site.ts)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` - WhatsApp number (fallback: hardcoded)
- `NEXT_PUBLIC_SITE_URL` - For canonical URLs and metadata base

### Language & Locale
- All UI text is Spanish
- No i18n framework—hardcode Spanish in components
- Spanish locale for date/time if needed

## Integration Points

### External Services
1. **Cal.com**: Booking button links to `siteConfig.bookingUrl`
2. **WhatsApp**: Floating button uses `siteConfig.whatsappNumber` and `siteConfig.whatsappMessage`
3. **Intake API**: POST endpoint at `POST /api/intake` (expects JSON, validates with Zod)

### API Response Contracts
```typescript
// Success
{ success: true, data: {...}, referenceId: "uuid" }

// Error
{ success: false, message: "string", errors?: { [field]: ["error1", "error2"] } }
```

## Testing & Linting
- Linting: ESLint (Next.js rules + TypeScript). Run `npm run lint`
- No unit/integration test framework configured
- Manual testing via `npm run dev`

## Common Pitfalls
1. **Don't import form libraries directly**: Use `@hookform/resolvers/zod` not node_modules
2. **Don't hardcode config values**: Always check if `siteConfig` has the property first
3. **Don't use `client` context in server components**: API routes are Server Components; forms are Client
4. **Don't forget "use client" directive** in interactive form components
5. **Don't forget `siteConfig` import** when referencing configuration

## Key Files Reference
- [src/config/site.ts](src/config/site.ts) - All configurable content
- [src/lib/validations/intake.ts](src/lib/validations/intake.ts) - Form validation & API contracts
- [src/components/sections/intake-form.tsx](src/components/sections/intake-form.tsx) - Form pattern example
- [src/app/api/intake/route.ts](src/app/api/intake/route.ts) - Intake API handler
- [src/components/ui/button.tsx](src/components/ui/button.tsx) - Component styling pattern
- [src/lib/utils.ts](src/lib/utils.ts) - `cn()` utility and class merging
