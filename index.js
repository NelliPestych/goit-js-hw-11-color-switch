const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  stopBtn: document.querySelector('button[data-action="stop"'),
  startBtn: document.querySelector('button[data-action="start"'),
};

const colorSwitch = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.ChangeBodyColor = setInterval(() => {
      const randomIntegerFromInterval =
        colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomIntegerFromInterval;
    }, 1000);
  },
  stop() {
    clearInterval(this.ChangeBodyColor);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', colorSwitch.start.bind(colorSwitch));
refs.stopBtn.addEventListener('click', colorSwitch.stop.bind(colorSwitch));
