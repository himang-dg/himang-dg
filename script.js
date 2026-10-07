(() => {
  const cards = document.querySelectorAll('.card');

  if (!('IntersectionObserver' in window)) {
    cards.forEach((card) => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, target) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          target.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  cards.forEach((card) => observer.observe(card));
})();
