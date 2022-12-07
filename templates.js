function layout(content) {
    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Elite Peak</title>
          <link rel="stylesheet" href="/style.css">
        </head>
        <body>
          <header>
            <nav>
              <a href="/">Home</a>
              <a href="/new-post></a>
              <a href="/posts"></a>
            </nav>
          </header>
          ${content}
        </body>
      </html>
    `;
  }
  
  function home() {
   
    
      return layout(/*html */ `
        <h1>Elite Peak</h1>
        <a href="/log-in">Log in</a>
      `);
    
  }
  module.exports = {home};