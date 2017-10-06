//jshint esversion:6
module.exports = {
  elementGen: elementGen
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