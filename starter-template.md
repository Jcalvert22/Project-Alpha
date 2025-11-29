# Front-End Starter Template

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Starter</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles/style.css">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">App Starter</a>
  </nav>
  <main class="container my-5">
    <div id="cards-container" class="row g-4 justify-content-center"></div>
  </main>
  <footer class="text-center bg-light py-4 mt-5">
    <small>&copy; 2025 Your Name</small>
  </footer>
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="scripts/script.js"></script>
</body>
</html>
```

## CSS
```css
body {
  background: #fff;
  color: #222;
}
.card {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
```

## JavaScript
```js
$(document).ready(function() {
  fetch('assets/data/data.json')
    .then(response => response.json())
    .then(data => {
      const container = $('#cards-container');
      data.forEach(item => {
        container.append(`
          <div class="col-md-6 col-lg-4">
            <div class="card h-100">
              <img src="${item.image}" class="card-img-top" alt="${item.title}">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
              </div>
            </div>
          </div>
        `);
      });
    });
});
```

## Example JSON
```json
[
  {
    "title": "Sample Card",
    "description": "This is a sample card loaded from JSON.",
    "image": "assets/images/sample.png"
  }
]
```

---
Use this template to quickly start new front-end projects with a modern, organized structure.