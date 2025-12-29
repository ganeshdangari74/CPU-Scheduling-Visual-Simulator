# CPU Scheduling Visual Simulator

A browser-based **visual simulator for CPU scheduling algorithms** that demonstrates how different scheduling strategies affect process execution. The project provides an interactive way to compare **FCFS, SJF, and Round Robin** scheduling using predefined test cases.

---

## Overview

CPU scheduling is a core concept in Operating Systems that determines the order in which processes are executed by the CPU. This project visually simulates popular scheduling algorithms and displays **waiting time** and **turnaround time** for each process in tabular form.

The simulator is implemented using **HTML, CSS, and JavaScript** and runs entirely in the browser.

---

## Algorithms Visualized

* **First Come First Serve (FCFS)**
* **Shortest Job First (SJF)** – Non-Preemptive
* **Round Robin (RR)** – Fixed Time Quantum

---

## Key Features

* Interactive buttons to run different scheduling algorithms
* Two predefined test cases:

  * Case where **FCFS and SJF produce the same output**
  * Case where **FCFS and SJF produce different outputs**
* Displays:

  * Arrival Time
  * Burst Time
  * Waiting Time
  * Turnaround Time
* Clean, responsive user interface
* Runs completely in the browser (no backend required)

---

## Technologies Used

* **HTML5** – Structure
* **CSS3** – Styling and responsiveness
* **JavaScript** – Scheduling logic and DOM manipulation
* **Core Concepts:** Operating Systems, CPU Scheduling

---

## Project Structure

```
CPU-Scheduling-Visual-Simulator/
│
├── index.html   # Main HTML file
├── script.js    # Scheduling algorithms and logic
├── style.css    # Styling and layout
└── README.md    # Project documentation
```

---

## How to Run

1. Download or clone the repository
2. Open the project folder
3. Double-click **index.html** or open it in any modern web browser

No additional setup or dependencies are required.

---

## Test Cases

### Case 1: Same Output for FCFS and SJF

Processes are arranged such that both algorithms yield identical results.

### Case 2: Different Output for FCFS and SJF

Processes arrive simultaneously with different burst times, highlighting differences between algorithms.

---

## Output

The simulator displays results in a table containing:

* Process ID
* Arrival Time
* Burst Time
* Waiting Time
* Turnaround Time

This helps users visually compare scheduling behavior.

---

## Limitations

* No Gantt chart visualization
* Fixed time quantum for Round Robin
* Uses predefined process data only

---

## Future Enhancements

* Gantt chart visualization
* User-defined process input
* Configurable time quantum
* Additional algorithms (Priority Scheduling, SRTF)

---

## Academic Relevance

This project demonstrates practical understanding of:

* CPU scheduling algorithms
* Process performance metrics
* Visualization of Operating Systems concepts

It is suitable for **Operating Systems coursework**, **lab demonstrations**, and **internship portfolios**.

---

## License

This project is open-source and intended for educational use.

---

## Author

**Ganesh Dangari**
 ( Computer Science Student )
