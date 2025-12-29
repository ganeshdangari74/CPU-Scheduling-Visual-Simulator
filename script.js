// Case 1: FCFS and SJF give SAME output
const sameCase = [
  { pid: "P1", arrival: 0, burst: 5 },
  { pid: "P2", arrival: 1, burst: 3 },
  { pid: "P3", arrival: 2, burst: 8 }
];

// Case 2: FCFS and SJF give DIFFERENT output
const differentCase = [
  { pid: "P1", arrival: 0, burst: 8 },
  { pid: "P2", arrival: 0, burst: 4 },
  { pid: "P3", arrival: 0, burst: 2 }
];

let processes = [];

/* ---------------- Utility Functions ---------------- */

function clearTable() {
  document.getElementById("output").innerHTML = "";
}

function addRow(p, waiting, turnaround) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.pid}</td>
    <td>${p.arrival}</td>
    <td>${p.burst}</td>
    <td>${waiting}</td>
    <td>${turnaround}</td>
  `;
  document.getElementById("output").appendChild(row);
}

function loadSameCase() {
  processes = [...sameCase];
  clearTable();
}

function loadDifferentCase() {
  processes = [...differentCase];
  clearTable();
}

/* ---------------- FCFS ---------------- */

function runFCFS() {
  let time = 0;
  processes.forEach(p => {
    const waiting = Math.max(0, time - p.arrival);
    const turnaround = waiting + p.burst;
    time += p.burst;
    addRow(p, waiting, turnaround);
  });
}

/* ---------------- SJF (Non-preemptive) ---------------- */

function runSJF() {
  let time = 0;
  const remaining = [...processes];

  while (remaining.length > 0) {
    const available = remaining.filter(p => p.arrival <= time);

    if (available.length === 0) {
      time++;
      continue;
    }

    const shortest = available.reduce((a, b) =>
      a.burst < b.burst ? a : b
    );

    const waiting = time - shortest.arrival;
    const turnaround = waiting + shortest.burst;
    time += shortest.burst;

    addRow(shortest, waiting, turnaround);
    remaining.splice(remaining.indexOf(shortest), 1);
  }
}

/* ---------------- Round Robin ---------------- */

function runRR() {
  clearTable();
  let time = 0;
  const quantum = 2;
  const queue = [...processes];
  const remaining = {};

  processes.forEach(p => remaining[p.pid] = p.burst);

  while (queue.length > 0) {
    const p = queue.shift();

    if (remaining[p.pid] > quantum) {
      time += quantum;
      remaining[p.pid] -= quantum;
      queue.push(p);
    } else {
      time += remaining[p.pid];
      const waiting = time - p.arrival - p.burst;
      const turnaround = time - p.arrival;
      remaining[p.pid] = 0;
      addRow(p, waiting, turnaround);
    }
  }
}

/* ---------------- Reset Function ---------------- */

function resetTable() {
  document.getElementById("output").innerHTML = "";
}