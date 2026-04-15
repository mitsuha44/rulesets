function extractPackages() {
  const pkgs = [...document.querySelectorAll('a[data-testid="app-card"]')]
    .map((a) => a.getAttribute("href"))
    .filter((h) => h && h.includes("/catalog/app/"))
    .map((h) => h.split("/catalog/app/")[1]);

  copy(pkgs.join("\n"));
  return pkgs;
}

extractPackages();
