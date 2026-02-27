/**
 * GitBoard (skeleton)
 * No real functionality yet. This file provides stubs/hooks for future features.
 */

function initApp() {
  renderBoard();
  bindUIEvents();
}

function renderBoard() {
  // TODO: later render from state (columns/cards) instead of static HTML
}

function bindUIEvents() {
  // TODO: enable these later:
  // - Add column
  // - Add card
  // - Edit card
  // - Delete card
  // - Drag & drop
  // - localStorage persistence

  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    console.log("Action clicked:", action);
  });
}

initApp();