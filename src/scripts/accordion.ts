const DURATION = 380;
const EASING = "cubic-bezier(0.32, 0.72, 0, 1)";
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

const running = new WeakMap<HTMLDetailsElement, Animation>();

function setExpanded(group: HTMLDetailsElement, expanded: boolean) {
  if ((group.dataset.expanded === "true") === expanded) return;
  group.dataset.expanded = String(expanded);

  const body = group.querySelector<HTMLElement>(":scope > .children")!;
  // Read before cancelling, so an interrupted toggle carries on from what is on screen.
  const fromHeight = group.open ? body.getBoundingClientRect().height : 0;
  const fromOpacity = group.open ? getComputedStyle(body).opacity : "0";
  running.get(group)?.cancel();
  if (expanded) group.open = true;

  const animation = body.animate(
    {
      height: [`${fromHeight}px`, `${expanded ? body.scrollHeight : 0}px`],
      opacity: [fromOpacity, expanded ? "1" : "0"],
    },
    { duration: reducedMotion.matches ? 0 : DURATION, easing: EASING },
  );
  running.set(group, animation);
  animation.onfinish = () => {
    running.delete(group);
    if (!expanded) group.open = false;
  };
  return animation;
}

/** Keeps the tapped row under the finger while a group above it collapses. */
function pin(anchor: Element, animation: Animation) {
  const top = anchor.getBoundingClientRect().top;
  const userScrolled = new AbortController();
  for (const type of ["wheel", "touchmove"]) {
    addEventListener(type, () => userScrolled.abort(), { passive: true, signal: userScrolled.signal });
  }

  const follow = () => {
    if (userScrolled.signal.aborted) return;
    scrollBy(0, anchor.getBoundingClientRect().top - top);
    if (animation.playState === "running") requestAnimationFrame(follow);
    else userScrolled.abort();
  };
  requestAnimationFrame(follow);
}

for (const group of document.querySelectorAll<HTMLDetailsElement>("details.group")) {
  // The native name= rule closes siblings instantly; owning it here lets them animate shut.
  group.removeAttribute("name");
  group.dataset.expanded = String(group.open);

  const summary = group.querySelector("summary")!;
  summary.addEventListener("click", (event) => {
    event.preventDefault();
    const expanding = group.dataset.expanded !== "true";
    if (expanding) {
      const siblings = group.closest("ul")!.querySelectorAll<HTMLDetailsElement>(":scope > li > details.group");
      for (const sibling of siblings) {
        if (sibling !== group) setExpanded(sibling, false);
      }
    }
    const animation = setExpanded(group, expanding);
    if (expanding && animation) pin(summary, animation);
  });
}
