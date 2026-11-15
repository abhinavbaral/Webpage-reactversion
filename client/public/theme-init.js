// Runs before first paint so dark-mode visitors never see a light flash.
// Kept as a file (not inline) so the server's Content-Security-Policy allows it.
(function () {
  try {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {}
})();
