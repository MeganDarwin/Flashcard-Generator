var ClozeCard = function(cloze, fullText, partial) {
    if (this instanceof ClozeCard) {
        this.cloze = cloze;
        this.fullText = fullText;
        this.partial = partial;
    } else if (!fullText.includes(cloze)) {
        return false;
        console.log(cloze + " " + "is not a part of the full text");
    }
}

module.exports = ClozeCard;
