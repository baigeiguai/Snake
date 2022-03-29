
class Food{
    private element:HTMLElement;
    private maxDis:number; //除10以后的 maxDis 因为前端的格子是以10为单位的
    constructor(maxDis:number=29) {
        this.element=document.getElementById('food')!;
        this.maxDis=maxDis;
        this.change();
    }
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }
    getRandomNumber(){
        return Math.round(Math.random()*this.maxDis)*10;
    }
    change(){
        let top= this.getRandomNumber();
        let left=this.getRandomNumber();
        this.element.style.top =top+'px';
        this.element.style.left=left+'px';
    }
};

export default  Food;