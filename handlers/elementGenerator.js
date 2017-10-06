//jshint esversion:6
module.exports = {
  elementGen: elementGen,
  updateIndex: updateIndex
};

function elementGen(post){
 return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements - ${post.elementName}</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>${post.elementName}</h1>
  <h2>${post.elementSymbol}</h2>
  <h3>Atomic number ${post.elementAtomicNumber}</h3>
  <p>${post.elementDescription}</p>
  <p><a href="/">back</a></p>
</body>
</html>`;}


function updateIndex(post){
  let link = `<a href="/${post.elementName}.html">${post.elementName}</a>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Elements</title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>The Elements</h1>
  <h2>These are all the known elements.</h2>
  <h3>There are a lot of them.</h3>
  <ol>
    <li>
      <a href="/hydrogen.html">Hydrogen</a>
    </li>
    <li>
      <a href="/helium.html">Helium</a>
    </li>
    <li>
      ${link}
    </li>
  </ol>
</body>
</html>`;}