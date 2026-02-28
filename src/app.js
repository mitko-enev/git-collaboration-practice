/**
 * GitBoard (skeleton)
 * No real functionality yet. This file provides stubs/hooks for future features.
 */

/**
 * STEP 1:
 * Introduce centralized board state.
 * This mirrors the current static HTML structure.
 */

const state = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      cards: [
        {
          id: "c1",
          title: "Placeholder card",
          meta: "This is sample content.",
        },
      ],
    },
    {
      id: "inprogress",
      title: "In Progress",
      cards: [
        {
          id: "c2",
          title: "Work in progress",
          meta: "Drag & drop later.",
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      cards: [
        {
          id: "c3",
          title: "Completed task",
          meta: "Persistence later.",
        },
      ],
    },
  ],
};

function initApp() {
  renderBoard();
  bindUIEvents();
}

function renderBoard() {
  /**
   * STEP 2:
   * Migrate from static HTML to dynamic rendering.
   */

  const board = document.getElementById("board");
  if (!board) return;

  // Clear board before rendering
  board.innerHTML = "";

  // Render each column from state
  state.columns.forEach((column) => {
    const columnElement = createColumn(column);
    board.appendChild(columnElement);
  });
}

/**
 * STEP 3:
 * Create column dynamically
 */

function createColumn(column) {
  const columnEl = document.createElement("article");
  columnEl.className = "column";
  columnEl.dataset.columnId = column.id;

  columnEl.innerHTML = `
    <header class="column__header">
      <h2 class="column__title">${column.title}</h2>
    </header>
    <div class="column__cards"></div>
    <footer class="column__footer">
      <button
        class="btn btn--ghost"
        type="button"
        data-action="add-card"
        disabled
      >
        + Add card (soon)
      </button>
    </footer>
  `;

  const cardsContainer = columnEl.querySelector(".column__cards");

  column.cards.forEach((card) => {
    const cardElement = createCard(card);
    cardsContainer.appendChild(cardElement);
  });

  return columnEl;
}

/**
 * STEP 4:
 * Create card dynamically
 */

function createCard(card) {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  cardEl.dataset.cardId = card.id;

  cardEl.innerHTML = `
    <h3 class="card__title">${card.title}</h3>
    <p class="card__meta">${card.meta}</p>
  `;

  return cardEl;
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
