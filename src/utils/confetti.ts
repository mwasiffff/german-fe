// A simple confetti effect implementation
export default function confetti() {
  const colors = ['#4361EE', '#7209B7', '#4CC9F0', '#10B981', '#F59E0B'];
  const particleCount = 150;
  
  function createConfetti() {
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.floor(Math.random() * 10) + 5; // Random size between 5-15px
      
      particle.style.position = 'fixed';
      particle.style.top = '0';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.zIndex = '9999';
      particle.style.opacity = (Math.random() * 0.7 + 0.3).toString();
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      // Set physics properties
      const angle = Math.random() * Math.PI * 2; // Random angle
      const velocity = Math.random() * 3 + 2; // Random velocity
      const vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity;
      let x = Math.random() * window.innerWidth;
      let y = -10;
      let rotation = 0;
      const rotationSpeed = (Math.random() - 0.5) * 10;
      
      document.body.appendChild(particle);
      
      // Animate the particle
      function animate() {
        if (y > window.innerHeight + 20 || x < -20 || x > window.innerWidth + 20) {
          particle.remove();
          return;
        }
        
        y += vy;
        x += vx;
        vy += 0.1; // Gravity
        rotation += rotationSpeed;
        
        particle.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        
        requestAnimationFrame(animate);
      }
      
      // Start the animation with a random delay
      setTimeout(() => requestAnimationFrame(animate), Math.random() * 1000);
    }
  }
  
  // Clean up any existing confetti
  const existingConfetti = document.querySelectorAll('div[style*="position: fixed"][style*="border-radius: 50%"]');
  existingConfetti.forEach(el => el.remove());
  
  // Create new confetti
  createConfetti();
}