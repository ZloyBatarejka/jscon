import {row,col,css} from '../utils';

export class Block {
    constructor( value, options) {
        this.value = value;
        this.options = options;
    }
    toHTML(){
        throw new Error('И')
    }
}

export class Title extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML(){
        const {tag="h1", styles= ''} = this.options;
        return  row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class Text extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML(){
        const { styles= ''} = this.options;
        return  row(col(`<p>${this.value}</p>`), css(styles))
    }
}
export class Columns extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML(){
        const { styles= ''} = this.options;
        if (typeof this.value === 'string') {
            this.value = this.value.split(' ')
        }
        const cols = this.value.map(value => col(`<p>${value}</p>`));
        return row(`${cols.join('')}`, css(styles))
    }
}
export class Image extends Block {
    constructor(value, options){
        super(value, options);
    }
    toHTML(){
        const {styles= '', imageStyles = {}, alt='alt'} = this.options;
        return row(` <img style = "${css(imageStyles)}" src=${this.value} alt=${alt}>`, css(styles))
    }
}
