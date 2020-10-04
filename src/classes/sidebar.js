import {block} from '../utils';
import {Text, Title, Image, Columns} from './blocks';

export class Sidebar{
    constructor(selector, update) {
        this.$el = document.querySelector(selector);
        this.update = update;
        this.init();
    }
    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.tepmplate);
        this.$el.addEventListener('submit', this.addBlock.bind(this))
    }
    addBlock (event) {
        event.preventDefault()
        let newBlock;
        const type = event.target.name;
        const value = event.target.value.value;
        const styles = event.target.styles.value;
        switch(type){
            case 'text': 
                newBlock = new Text(value,{styles})
                break;
            case 'title':
                newBlock = new Title(value,{styles})
                break;
            case 'image':
                newBlock = new Image(value,{styles})
                break;
            case 'columns':
                newBlock = new Columns(value,{styles})
                break;
        }

        this.update(newBlock)
        event.target.value.value = '';
        event.target.styles.value = '';
    }
    get tepmplate() {
        return [
            block('title'),
            block('text'),
            block('image'),
            block('columns')
        ].join('')
    }
}