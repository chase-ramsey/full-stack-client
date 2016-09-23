app.filter('reviewMarkupFilter', ($sce) => {
  return (fullText) => {
    if (!fullText) {
      return;
    } else {
        fullText = '<p>' + fullText;
        fullText = fullText.replace(/\n/g, '</p><p>');
        return $sce.trustAsHtml(fullText);
    }
  }
})
