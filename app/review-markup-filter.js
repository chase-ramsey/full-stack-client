app.filter('reviewMarkupFilter', ($sce) => {
  return (fullText) => {
    fullText = fullText.replace(/__([^_\s]+\1)+/g, '<em>$1')
    fullText = fullText.replace(/([^_\s]+\1)+__/g, '$1</em>')
    fullText = fullText.replace(/\/\/([^\/\s]+\1)+/g, '<strong>$1')
    fullText = fullText.replace(/([^\/\s]+\1)+\/\//g, '$1</strong>')
    fullText = fullText.replace(/\`([^\`\s]+\1)+/g, '<strong>$1')
    fullText = fullText.replace(/([^\`\s]+\1)+\`/g, '$1</strong>')
    return $sce.trustAsHtml(fullText);
  }
})
