// Create floating button
const createFloatingButton = () => {
  const button = document.createElement('button');
  button.id = 'interview-helper-toggle';
  button.innerHTML = '🎤';
  button.style.cssText = `
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 10000;
    padding: 10px;
    border-radius: 50%;
    background: #4f46e5;
    color: white;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    font-size: 24px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  `;
  
  document.body.appendChild(button);
  return button;
};

// Create assistant container
const createAssistantContainer = () => {
  const container = document.createElement('div');
  container.id = 'interview-helper-container';
  container.style.cssText = `
    position: fixed;
    right: 20px;
    top: 80px;
    width: 300px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 10000;
    display: none;
    padding: 16px;
  `;
  
  document.body.appendChild(container);
  return container;
};

// Initialize
const init = () => {
  const button = createFloatingButton();
  const container = createAssistantContainer();
  let isOpen = false;

  button.addEventListener('click', () => {
    isOpen = !isOpen;
    container.style.display = isOpen ? 'block' : 'none';
    button.innerHTML = isOpen ? '✕' : '🎤';
    
    if (isOpen) {
      chrome.runtime.sendMessage({ type: 'INTERVIEW_STARTED' });
    } else {
      chrome.runtime.sendMessage({ type: 'INTERVIEW_ENDED' });
    }
  });
};

// Start the extension
init();

