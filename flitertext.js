var censoredWords = ["excited", "reporter", "HongKong"];
var customerWords = [];

function fliter(in_words) {
	var allFliterWords = getFliterWords();
	for (idx in allFliterWords) {
		in_words = in_words.replace(allFliterWords[idx], "???");
	}
	return in_words;
}

function addFliterWords(str) {
	customerWords.push(str);
}

function getFliterWords() {
	return censoredWords.contac(customerWords);
}

exports.fliter = fliter;
exports.addFliterWords = addFliterWords;
exports.getFliterWords = getFliterWords;