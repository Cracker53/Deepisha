body {
  margin: 0;
  padding: 0;
  background: black;
  font-family: 'Comic Sans MS', cursive;
  overflow: hidden;
}

.heart {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.5);
}

svg {
  width: 200px;
  height: 200px;
  animation: pulse 2s infinite;
}

path {
  fill: url(#rainbowGradient);
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1.5);
  }
  50% {
    transform: scale(1.65);
  }
}

.message {
  position: absolute;
  top: 75%;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  text-shadow: 0 0 10px rgba(255,255,255,0.7);
}

button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  font-size: 1rem;
  background: hotpink;
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 20, 147, 0.7);
  cursor: pointer;
  z-index: 999;
}

@keyframes floatUp {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}

@media (max-width: 480px) {
  .message {
    font-size: 1.2rem;
    padding: 0 10px;
  }

  svg {
    width: 150px;
    height: 150px;
  }
}
