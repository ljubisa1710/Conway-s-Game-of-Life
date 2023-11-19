README for Interactive Game of Life Simulation
Overview

This script is an interactive implementation of Conway's Game of Life, a cellular automaton, using p5.js. It creates a grid where each cell can be either alive or dead and evolves over time based on simple rules. Users can interact with the grid, change the speed of evolution, and pause or resume the simulation.
Requirements

    p5.js Library

Features

    Interactive Grid: Click or drag over the grid to toggle cells between alive and dead states.
    Controlled Evolution: Use a slider to adjust the speed of the simulation.
    Pause/Resume: Toggle the simulation's running state with a button.
    Wrapping Grid Edges: The grid wraps around the edges, creating a continuous space.

Usage

    Setup: Create an HTML file and link the p5.js library.
    Initialization: The script sets up a canvas and initializes the grid with all cells dead.
    Interaction: Click or drag on the canvas to make cells alive.
    Control Simulation: Use the button to pause/resume and the slider to control the speed of the simulation.

Key Functions

    setup(): Initializes the canvas, grid, button, and slider.
    draw(): Runs the simulation, updating and displaying the grid for each frame.
    toggleCell(): Toggles the state of a cell when the mouse is pressed or dragged over it.
    togglePause(): Pauses or resumes the simulation.
    make2DArray(): Creates a 2D array to represent the grid.
    countNeighbors(): Counts alive neighbors for a given cell.

Interaction

    Click/Drag: Activate cells in the grid.
    Button: Switch between 'Pause' and 'Resume' states.
    Slider: Adjust the simulation speed.

Visualization

    Alive cells are displayed in white on a black background.
    The grid updates according to the Game of Life rules.

Additional Notes

    This script is a foundational implementation. Further enhancements can include more interactive elements, different rulesets, or graphical improvements.
    The resolution of the grid can be adjusted by changing the resolution variable.

Disclaimer

    The script is intended for educational and recreational purposes. It may require modifications for advanced or specific use cases.
