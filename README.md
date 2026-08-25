# D&D 2024 Point Buy Calculator

A clean, interactive character ability score calculator for the **Dungeons & Dragons 2024 Point Buy system**.

**[Live Demo](https://<your-github-username>.github.io/dnd-point-buy/)**

## ✨ Features

* **27-point budget** with a visual remaining-points bar
* Ability scores from **8 to 15**
* Automatic Point Buy cost calculation
* Live ability modifiers
* Interactive Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma cards
* Prevents spending points that aren't available
* Reset to the default 8/8/8/8/8/8 scores
* One-click **Standard Array** (15, 14, 13, 12, 10, 8)
* Responsive dark-fantasy UI
* Smooth visual feedback and transitions
* Runs entirely in the browser

## 🎲 Point Buy Rules

The calculator uses the following Point Buy costs:

| Score | Cost |
| ----: | ---: |
|     8 |    0 |
|     9 |    1 |
|    10 |    2 |
|    11 |    3 |
|    12 |    4 |
|    13 |    5 |
|    14 |    7 |
|    15 |    9 |

Every ability starts at **8**, with **27 points** available to spend.

The calculator does not include ability score increases from backgrounds, feats, or other character creation choices. It is specifically focused on generating the base ability scores.

## 🛠️ Tech Stack

* [Svelte 5](https://svelte.dev/)
* TypeScript
* Vite
* CSS
* Font Awesome
* GitHub Pages

The project uses a component-based Svelte architecture while keeping the game rules separate from the UI.

## 📁 Project Structure

```text
src/
├── components/
│   ├── AbilityCard.svelte
│   ├── ActionButtons.svelte
│   ├── CostTable.svelte
│   ├── Footer.svelte
│   ├── Header.svelte
│   └── ProgressBar.svelte
├── game/
│   ├── abilities.ts
│   ├── defaultScores.ts
│   └── pointBuy.ts
├── types/
│   ├── ability.ts
│   └── abilityCard.ts
├── App.svelte
├── app.css
└── main.ts
```

## 🚀 Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-github-username>/dnd-point-buy.git
cd dnd-point-buy
npm install
```

Start the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

The production build is generated in `dist/`.

The project is configured to deploy automatically to GitHub Pages whenever changes are pushed to `main`.

## 📦 Distribution

The production build is bundled into a portable static site. The application requires no backend or database and all character creation calculations happen locally in the browser.

## License

The original source code in this repository is licensed under the MIT License.

This project is an unofficial fan-made tool and is not affiliated with,
endorsed, or sponsored by Wizards of the Coast.

This work includes material from the System Reference Document 5.2
("SRD 5.2") by Wizards of the Coast LLC, available at:
https://www.dndbeyond.com/srd

The SRD 5.2 is licensed under the Creative Commons Attribution 4.0
International License (CC-BY-4.0).