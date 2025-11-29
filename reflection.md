# Knowledge Reflection & Project Architecture

## Key Tech & Process Terms

> **RESTful API**
> A RESTful API is an application programming interface that uses HTTP requests to access and use data. It follows REST principles, making it stateless and scalable. [Source](https://restfulapi.net/)

> **Fetch API**
> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

> **Agile / SCRUM**
> Scrum is an Agile framework used to develop and deliver complex products through iterative, incremental work cycles called sprints. [OpenAI ChatGPT 5.1]

## Infrastructure (Tech Stack)
- HTML5, CSS3, JavaScript (ES6)
- Bootstrap 5, Normalize.css, Google Fonts, Bootstrap Icons
- jQuery
- GitHub Pages (hosting)
- GitHub Copilot (AI code assistance)
- VS Code, browser dev tools

## Architecture & Dev Process
- Data for projects is stored in `assets/data/projects.json` and loaded dynamically.
- Responsive layout and navigation via Bootstrap 5.
- Source code managed in GitHub, deployed via GitHub Pages.
- Issues and milestones tracked in GitHub for project management.
- Wireframes and diagrams used for planning.

```
Local Code → GitHub Repo → GitHub Pages (Live Site)
```

## Diagram
```
[VS Code] → [GitHub Repo] → [GitHub Pages]
         ↘ [Issues/Milestones]
         ↘ [Copilot/AI Tools]
```

## Final Takeaway / Advice
If I could advise my past self, I’d say: "Start with a clear project structure and use version control from day one. Don’t be afraid to use modern frameworks and automation tools—they save time and help you learn best practices faster."

---
*This reflection is rendered as HTML in the app using [zero-md](https://zerodevx.github.io/zero-md/).*