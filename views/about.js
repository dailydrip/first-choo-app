var html = require("choo/html");

module.exports = view;

function view(state, emit) {
  return html`
    <body>
      <h1>This is our about page</h1>
    </body>
  `;
}
