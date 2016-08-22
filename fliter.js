var censoredWords = ["excited", "reporter", "HongKong"];
var customerWords = [];

function Fliter(in_words) {
	// for (idx in censoredWords) {
	// 	in_words = in_words.replcase(censoredWords[idx], "a fark");
	// }
	// for (idx in customerWords) {
	// 	in_words = in_words.replcase(customerWords[idx], "???");
	// }
	var allFliterWords = getFliterWords();
	for (idx in allFliterWords) {
		in_words = in_words.replace(allFliterWords[idx], "???");
	}
}

function addFliterWords(str) {
	customerWords.push(str);
}

function getFliterWords() {
	return censoredWords.contac(customerWords);
}

exports.Fliter = Fliter;
exports.addFliterWords = addFliterWords;
exports.getFliterWords = getFliterWords;