const fixByjusOnlineClassesThumbnail = () => {
  const img = document.querySelector<HTMLImageElement>('a[href="#case/byjus-online-classes"] img');
  if (img) img.src = "./resources/Byju%27s%20Classes%20Cover.png";
};

const runFix = () => setTimeout(fixByjusOnlineClassesThumbnail, 0);

runFix();
window.addEventListener('load', runFix);
window.addEventListener('hashchange', runFix);
