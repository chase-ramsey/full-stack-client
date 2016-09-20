app.filter('lengthFilter500', () => {
  return (fullText) => {
    if (fullText.length > 500) {
      sliced_string = fullText.slice(0, 500);
      new_text = sliced_string + '...';
      return new_text;
    } else {
      return fullText;
    }
  }
})
