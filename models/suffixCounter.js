var suffixCount = 0;

function incrementSuffixCount() {
  return ++suffixCount;
}

function currentSuffixCount() {
  return suffixCount;
}

module.exports = {
  incrementSuffixCount: incrementSuffixCount,
  currentSuffixCount: currentSuffixCount
}
