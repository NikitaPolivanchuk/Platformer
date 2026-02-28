# Platformer Game

A simple, lightweight 2D platformer game built with [React](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Vite](https://vite.dev).

## Description

This is a lightweight platformer featuring **2 levels**. The primary objective of the game is to guide your character to the **Skull** at the end of the map to proceed to the next level. Along the way, you must carefully avoid dangerous obstacles while collecting coins to rack up the highest score possible.

## Features

- **Levels**: Progress through two stages of increasing difficulty.
- **Score System**: Collect coins scattered around the map to boost your score.
- **Local Leaderboard**: Track your best runs! High scores are saved locally so you can compete against your friends or own personal best.
- **Obstacle Avoidance**: Test your reflexes by dodging various obstacles that will stop you in your tracks.

## How to Play

1. **Movement**: Use the `W A S D` and `Space` to move and jump.
2. **Collect Coins**: Grab the golden coins to increase your total score.
3. **Avoid Obstacles**: Do not touch the hazards, or you might have to restart
4. **Win Condition**: Reach and touch the **Skull** to complete the current level and advance.

## Installation

To run this project locally on your machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com) installed on your system.

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/NikitaPolivanchuk/Platformer.git
    ```
2. Navigate to the project directory:
    ```bash
    cd Platformer
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
    (This will open the game on a local port, usually http://localhost:5173/)


## Available Scripts

Use these commands to manage the project:

* **`npm run dev`** – Launches the Vite development server. Use this for active coding.
* **`npm run build`** – Runs the TypeScript compiler (`tsc`) and builds the optimized production bundle.
* **`npm run lint`** – Scans the codebase for styling and logic errors using [ESLint](https://eslint.org).
* **`npm run preview`** – Serves the production build locally for final testing before deployment.
* **`npm run docs`** – Generates project documentation using [TypeDoc](https://typedoc.org).
* **`npm run storybook`** – Starts the Storybook development server on port 6006 for developing and testing UI components in isolation.
* **`npm run build-storybook`**– Builds the static Storybook site for deployment or sharing.

## License

This project is distributed under the [Apache License 2.0](LICENSE).

### Third-Party Notices

This project relies on the following open-source dependencies:

- **caniuse-lite**  
  The browser compatibility data provided by caniuse-lite is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). The original data source is caniuse.com.  
  Repository: https://github.com/browserslist/caniuse-lite

- **lightningcss**  
  This project makes use of Lightning CSS, which is licensed under the Mozilla Public License 2.0 (MPL-2.0). The library is not modified and is obtained separately through the package manager during installation.  
  Repository: https://github.com/parcel-bundler/lightningcss

- **axe-core**  
  This project uses axe-core for accessibility testing. Axe-core is licensed under the Mozilla Public License 2.0 (MPL-2.0). The library remains unmodified and is installed as an external dependency.  
  Repository: https://github.com/dequelabs/axe-core

---

Author: Nikita Polivanchuk
