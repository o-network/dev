// If someone wants to reduce bytes loaded then we probably shouldn't include this in our site, this also leads to being able to
// Track someone's decisions and click habit by monitoring preload events and then additional events happening from the same
// referer. Or can someone tell their browser to leave referer out of the headers even for same origin?
// Imagine someone just scrolling through a screen where they scroll across a few `a` nodes.
//
// Also only include if in a secure context, we don't want to be loading pages early if using http, as privacy is completely lost, aka MIM
function includePreLoading() {
  const script = document.createElement('script');
  script.src = "//instant.page/1.2.2";
  script.type = "module";
  script.integrity = "sha384-2xV8M5griQmzyiY3CDqh1dn4z3llDVqZDqzjzcY+jCBCk/a5fXJmuZ/40JJAPeoU";
  document.body.appendChild(script);
}

if (document.isSecureContext && !navigator.doNotTrack) {
  includePreLoading();
}
