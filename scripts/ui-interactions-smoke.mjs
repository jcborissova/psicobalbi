// Run with playwright-cli run-code after removing the `export default` prefix.
export default async function checkInteractions(page) {
  const check = (condition, message) => {
    if (!condition) throw new Error(message);
  };
  await page.goto("http://localhost:3002");
  await page.setViewportSize({ width: 390, height: 844 });
  check(
    await page
      .locator("#inicio h1")
      .innerText()
      .then((text) => text.includes("comprenderte")),
    "Hero must welcome instead of selling a service",
  );
  check(
    (await page.locator(".need-choice").count()) === 0,
    "Home must not require selecting a therapy",
  );
  const welcome = page
    .locator("#inicio")
    .getByRole("link", { name: "Podemos conversar" });
  check(
    (await welcome.getAttribute("href")).includes("wa.me/"),
    "Welcome action must open a conversation",
  );
  check(
    !/\$[0-9]/.test(await page.locator("main").innerText()),
    "Prices must not be visible before expanding practical information",
  );
  check(
    (await page.locator("#servicios article").count()) === 3,
    "Accompaniment should be explained in three readable groups",
  );
  const banner = page.getByRole("banner");
  const height = (await banner.boundingBox()).height;
  const widthBeforeMenu = (await banner.boundingBox()).width;
  await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
  check(
    (await banner.boundingBox()).height === height,
    "Menu must not displace the page",
  );
  check(
    (await banner.boundingBox()).width === widthBeforeMenu,
    "Scroll locking must not shift page width",
  );
  const menu = page.getByRole("dialog", { name: "Explora Psicobalbi" });
  check(await menu.isVisible(), "Mobile menu must be a modal dialog");
  check(
    await page.evaluate(() => document.body.style.overflow === "hidden"),
    "Open menu must lock background scrolling",
  );
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press("Tab");
    check(
      await menu.evaluate((el) => el.contains(document.activeElement)),
      `Tab must remain within the open modal (step ${i}, focus ${await page.evaluate(() => document.activeElement?.outerHTML.slice(0, 180))})`,
    );
  }
  await page.keyboard.press("Escape");
  await menu.waitFor({ state: "hidden" });
  check(await menu.isHidden(), "Escape must close the menu");
  check(
    await page.evaluate(() => document.body.style.overflow !== "hidden"),
    "Closing menu must release scroll lock",
  );
  check(
    await page
      .getByRole("button", { name: "Abrir menú", exact: true })
      .evaluate((el) => el === document.activeElement),
    "Menu must restore trigger focus",
  );
  await welcome.focus();
  await page.keyboard.press("Escape");
  check(
    await welcome.evaluate((el) => el === document.activeElement),
    "Escape while menu is closed must not steal focus",
  );
  await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
  await page.mouse.click(2, 78);
  await menu.waitFor({ state: "hidden" });
  await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
  await page.setViewportSize({ width: 1280, height: 900 });
  await menu.waitFor({ state: "hidden" });
  check(
    await page.evaluate(() => document.body.style.overflow !== "hidden"),
    "Desktop resize must release scroll lock",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "Abrir menú", exact: true }).click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Sobre mí" })
    .click();
  await menu.waitFor({ state: "hidden" });
  check(
    await page.evaluate(() => document.activeElement?.id === "sobre-mi"),
    "Anchor navigation must focus the destination",
  );
  const panels = page.locator("#informacion-practica .disclosure-trigger");
  check(
    (await panels.count()) === 3,
    "Practical info must have three disclosures",
  );
  check(
    (await panels.first().getAttribute("aria-expanded")) === "true",
    "First panel must start open",
  );
  await panels.nth(1).focus();
  await page.keyboard.press("Enter");
  check(
    (await panels.nth(1).getAttribute("aria-expanded")) === "true",
    "Disclosure must open by keyboard",
  );
  check(
    (await page.locator("#informacion-practica").innerText()).includes(
      "$1,000",
    ),
    "Honorarios must remain available when requested",
  );
  await page.keyboard.press("Space");
  check(
    (await panels.nth(1).getAttribute("aria-expanded")) === "false",
    "Disclosure must close by keyboard",
  );
  const panelId = await panels.nth(1).getAttribute("aria-controls");
  check(
    await page.locator(`[id="${panelId}"]`).evaluate((el) => el.inert),
    "Collapsed panels must not expose focusable contents",
  );
  check(
    (await page.locator("#proceso details").count()) === 0,
    "Process must not hide steps behind disclosures",
  );
  check(
    (await page.locator("#proceso li p").count()) === 3,
    "All three process descriptions must be visible",
  );
  const widths = [];
  for (const width of [320, 360, 390, 430, 768, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    check(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Overflow at ${width}px`,
    );
    widths.push(width);
  }
  await page.setViewportSize({ width: 320, height: 568 });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  const welcomeBounds = await welcome.boundingBox();
  check(
    welcomeBounds.y + welcomeBounds.height <= 568,
    "Primary welcome action must fit the first short mobile viewport",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  check(
    await page
      .locator(".disclosure-panel")
      .first()
      .evaluate(
        (el) => parseFloat(getComputedStyle(el).transitionDuration) < 0.001,
      ),
    "Reduced motion must disable accordion transitions",
  );
  check(
    await page.evaluate(
      () =>
        getComputedStyle(document.documentElement).scrollBehavior === "auto",
    ),
    "Reduced motion must disable smooth scrolling",
  );
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("http://localhost:3002/entrevista-inicial");
  await page.setViewportSize({ width: 390, height: 844 });
  const select = page.locator("select").first();
  const value = await select
    .locator("option:not([disabled])")
    .last()
    .getAttribute("value");
  await select.selectOption(value);
  check(
    (await select.inputValue()) === value,
    "Native form selects must remain functional",
  );
  check(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "Form must fit mobile viewport",
  );
  return { status: "passed", widths };
}
