const toTitle = (url) =>
  url
    .replace(/-+/g, " ")
    .replace(/(^\w{1})|(\s+\w{1})/g, (t) => t.toUpperCase());

const toUrl = (title) => title.replace(/\W+/g, "-").toLowerCase();

export default { toTitle, toUrl };
