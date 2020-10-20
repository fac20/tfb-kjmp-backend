const app = require("./app");

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

// four get routes: experiences, laws, activites, things-to-do
