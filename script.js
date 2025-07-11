function blowCandle() {
  const cake = document.querySelector('.cake');
  cake.style.opacity = '0.4'; // Simulate candle blown

  setTimeout(() => {
    window.location.href = 'page5.html'; // Go to next page
  }, 1500);
}


