// For dynamically adding items to tags
const appendMessage = (parentId, contents) => {
  const parent = document.getElementById(parentId);
  const tmpItem = document.createElement('li');
  tmpItem.innerHTML = contents;
  parent.appendChild(tmpItem);
  parent.scrollTop = parent.scrollHeight;
};

// For accessing socket in client
const sock = io();

// Few sample test
sock.on('connect', () => {
  console.log('socket.io connected');
  // Do whatever you need when you're connected
});

// sock.on('message', append.bind(null, 'log'));

// Listener for message events
// When a message is sent from server it lands right here!
const onMessage = (payload) => {
  const msg = payload.message;
  appendMessage('message', msg);
};

sock.on('message', onMessage);

