export function visible(node, { threshold = 0.2 } = {}) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
          obs.unobserve(node);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
}
