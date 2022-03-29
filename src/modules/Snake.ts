class Snake{
    head:HTMLElement;
    body:HTMLCollection;
    element:HTMLElement;
    boundary:number;
    constructor(boundary:number=290) {
        this.element=document.getElementById('snake')!;
        this.head=document.querySelector('#snake > div') as HTMLElement;
        this.body=this.element.getElementsByTagName('div');
        this.boundary=boundary;
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X(x:number){
        if(x===this.X)return ;
        if(this.body[1] &&(this.body[1] as HTMLElement).offsetLeft === x){
            if(x>this.head.offsetLeft) {
                x-=20;
            }
            else {
                x+=20;
            }
        }
        if(x<0||x>this.boundary){
            throw  new Error("可爱的蛇蛇撞墙啦!");
        }
        if(this.checkCollision()){
            throw new Error("可爱的蛇蛇咬到自己了！");
        }
        this.moveBody();
        this.head.style.left=x+'px';
    }
    set Y(y:number){
        if(y===this.Y)return ;
        if(this.body[1] &&(this.body[1] as HTMLElement).offsetTop === y){
            if(y>this.head.offsetTop) {
                y-=20;
            }
            else {
                y+=20;
            }
        }
        if(y<0||y>this.boundary){
            throw  new Error("可爱的蛇蛇撞墙啦!");
        }
        if(this.checkCollision()){
            throw new Error("可爱的蛇蛇咬到自己了！");
        }
        this.moveBody()
        this.head.style.top=y+'px';
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>");
    }
    moveBody(){
        for(let i=this.body.length-1;i>0;i--){
            let bd1= this.body[i-1] as HTMLElement;
            let bd=this.body[i] as HTMLElement;
            bd.style.left=bd1.offsetLeft+'px';
            bd.style.top=bd1.offsetTop+'px';
        }
    }
    checkCollision(){
        for(let i=1;i<this.body.length;i++){
            let bd=this.body[i] as HTMLElement;
            if(this.head.offsetTop===bd.offsetTop && this.head.offsetLeft=== bd.offsetLeft){
                return true;
            }
        }
        return false;
    }
};

export  default Snake;