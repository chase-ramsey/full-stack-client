app.filter('reviewMarkupFilter', ($sce) => {
  return (fullText) => {
    if (!fullText) {
      return;
    } else {
        fullText = '<p>' + fullText;
        fullText = fullText.replace(/\n/g, '</p><p>');
        fullText = fullText.replace(/__([^\W\s]\1)/g, '<em>$1');
        fullText = fullText.replace(/([^_\s]+\1)__/g, '$1</em>');
        fullText = fullText.replace(/\/\/([^\/\s]+\1)+/g, '<strong>$1');
        fullText = fullText.replace(/([^\/\s]+\1)+\/\//g, '$1</strong>');
        fullText = fullText.replace(/\`([^\`\s]+\1)+/g, '$1');
        fullText = fullText.replace(/([^\`\s]+\1)+\`/g, '$1');
        return $sce.trustAsHtml(fullText);
    }
  }
})
