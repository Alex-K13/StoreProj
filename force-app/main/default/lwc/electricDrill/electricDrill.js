import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    name = 'Electra X4';
    description = 'A sweet bike built for comfort.';
    category = 'Elecro Drill';
    maker = 'Praktyl';
    price = '$2,700';
    pictureUrl = 'https://static.leroymerlin.ua/images/default/integ/lm_ua/5/6/1/2/11105612/512/11105612_512_1.jpg';
    ready = false;
    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 3000);
    }
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
}