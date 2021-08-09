import $ from '../core';

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function(...classNames) {
    console.log(this);
    for (let i = 0; i < this.length; i++) {
        if(this[i].classList.contains(...classNames)) {
            this[i].classList.remove(...classNames);
        } else {
            continue;
        }
    }

    return this;
};

$.prototype.toggleClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        if(this[i].classList.contains(...classNames)) {
            this[i].classList.remove(...classNames);
        } else {
            this[i].classList.add(...classNames);
        }
    }

    return this;
};