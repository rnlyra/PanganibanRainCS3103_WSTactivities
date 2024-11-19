const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordcount');
const sentenceCount = document.getElementById('sentenceCount');

// event listener for input changes
textInput.addEventListener('input', () => {
  const text = textInput.value.trim();

  // count words
  const words = text.split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = `Words: ${words.length}`;

  // count sentences
  const sentences = text.split(/[.!?]\s/).filter(sentence => sentence.trim().length > 0);
  sentenceCount.textContent = `Sentences: ${sentences.length}`;
});
