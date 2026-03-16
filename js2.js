const copyBtn = document.getElementById('c');
const textToCopy = "Wishing you a delightful Eid filled with delicious food, endless laughter, and lots of love 🎉. Have a beautiful celebration!";

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(textToCopy);
    alert('Text copied to clipboard!');
  } catch (error) {
    console.error('Error copying text:', error);
  }
});