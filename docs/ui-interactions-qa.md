# Navigation and disclosure refinement

## Changes

- Mobile navigation uses a modal dialog instead of expanding the sticky header. Background content stays in place and is inert while the menu is open.
- Escape, the close button and backdrop dismiss the menu. Closing restores focus; section links focus their destination. Resizing to desktop dismisses the mobile menu and releases scrolling.
- About and practical information share the same disclosure component: a full-width button, chevron, explicit expanded state, animated intrinsic height and inert collapsed content. The first practical panel starts open.
- The three process steps are visible without additional interactions.
- Service selection only scrolls when the result would be off screen. Returning restores the selected option, not the top of the page.
- Motion is limited to short fades and state changes. Reduced motion disables animations and smooth scrolling. Native form select behavior is preserved.

## Repeatable browser smoke

Start the application on port 3002, open a Playwright CLI session and run:

```sh
npm run dev -- --port 3002
playwright-cli -s=ui open http://localhost:3002
playwright-cli -s=ui run-code "$(sed 's/^export default //' scripts/ui-interactions-smoke.mjs)"
```

The script throws on failure and returns `status: passed` on success. It covers menu layout stability, keyboard focus, dismissal, breakpoint changes, section navigation, accordion semantics, service selection, reduced motion, native selects and horizontal overflow at 320, 360, 390, 430, 768, 1024 and 1280 px.

## Visual/device checklist

- Review menu and open/closed accordions at 390 px and 1280 px.
- On a short viewport, scroll the menu to its booking action; background must not move.
- Navigate to a section and verify its heading is below the sticky header.
- Open and close every disclosure rapidly; no clipped text or lingering keyboard targets.
- Use Tab, Shift+Tab, Enter, Space and Escape. Focus must be clearly visible.
- Enable reduced motion in the OS. No decorative movement or animated scroll should remain.
- Check iOS Safari and Android Chrome on physical devices before claiming device-specific certification. Desktop viewport emulation is not equivalent to testing those devices.

No booking or intake API behavior is changed by this refinement. Browser checks do not submit real patient data.

## Validation recorded: 2026-10-18

- `npm run lint` and `npm run build`: passed.
- Chromium interaction smoke: passed across the seven listed widths.
- Mobile menu and practical panels visually reviewed at 390 px; short menu at 320 x 568 and process at 1280 px also reviewed.
- Forward/reverse keyboard navigation, Escape, backdrop dismissal, desktop resize, native select selection and reduced-motion styles checked.
- Physical iOS/Android testing remains outside this desktop verification.
