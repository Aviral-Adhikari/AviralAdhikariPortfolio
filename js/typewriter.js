class TypeWriter {
    constructor(element, options) {
        this.element = element;
        this.text = options.text || '';
        this.delay = options.delay || 100;
        this.cursor = options.cursor || false;
        this.cursorChar = options.cursorChar || '|';
        this.currentChar = 0;
    }
    
    start() {
        if (this.cursor) {
            this.element.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor">' + this.cursorChar + '</span>';
            this.textElement = this.element.querySelector('.typewriter-text');
        } else {
            this.textElement = this.element;
        }
        
        this.type();
    }
    
    type() {
        if (this.currentChar < this.text.length) {
            this.textElement.textContent += this.text.charAt(this.currentChar);
            this.currentChar++;
            setTimeout(() => this.type(), this.delay);
        }
    }
}