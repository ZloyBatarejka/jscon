import {Site} from './site';
import {Sidebar} from './sidebar';

export class App {
    constructor(model){
        this.model = model;
    }
    init() {
        const site = new Site('#site');
        new Sidebar('#panel', newBlock => {
            this.model.push(newBlock);
            site.render(this.model);
        });
        site.render(this.model);
    }
}