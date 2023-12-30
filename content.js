const elementsToRemove = [
  "banner_skyscraper", // ads to the right,
  "chatBarPlayerList", // open chat button
  "siteFooter",
  "pageReloader",

  // siteHeader and mmonetbar need both to be removed together to get rid of the top-most thing where you can select other games
  "siteHeader",
  "mmonetbar"
];

for (let el of elementsToRemove) {
  try {
    document.getElementById(el).remove();
  } catch (e) {
    console.log(e);
  }
}

