import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl{
    snake:Snake;
    food:Food;
    scorepanel:ScorePanel;
    direction:string;
    maxInterval:number;
    perIntervalDelta:number;
    isover:boolean=false;
    constructor(direction:string="Right",maxInterval:number=1000,perIntervalDelta=50) {
        this.snake=new Snake();
        this.food=new Food();
        this.scorepanel=new ScorePanel();
        this.direction=direction;
        this.maxInterval=maxInterval;
        this.perIntervalDelta=perIntervalDelta;
        this.init();
    }
    init(){
        document.addEventListener('keydown',this.keyDownEvent.bind(this));
        this.run();
    }
    keyDownEvent(event:KeyboardEvent){
        if (event.key in {
            'Left' :0  ,
            'ArrowLeft':1,
            'Down':2,
            'ArrowDown':3,
            'Right':4,
            'ArrowRight':5,
            'Up':6,
            'ArrowUp':7
        }) {
            this.direction = event.key;
            // console.log(this.direction);
        }
    }
    run(){
        let X=this.snake.X;
        let Y=this.snake.Y ;
        // console.log(X, Y);
        switch (this.direction){
            case "Left":
            case "ArrowLeft":
                X-=10;
                break;
            case "Down":
            case "ArrowDown":
                Y+=10;
                break;
            case "Up":
            case "ArrowUp":
                Y-=10;
                break;
            case "Right":
            case "ArrowRight":
                X+=10;
                break;
        };
        this.checkEat(X,Y);
        try{
            this.snake.X=X;
            this.snake.Y=Y;
        }catch (e ){
            alert((e as Error).message+"GameOver!期待下次相见哦~");
            this.isover=true;
        };
        (!this.isover)&&setTimeout(this.run.bind(this),this.maxInterval-(this.scorepanel.Level-1)*this.perIntervalDelta);
    }
    checkEat(x:number,y:number) {
        if (x === this.food.X && y === this.food.Y){
            this.food.change();
            this.scorepanel.upscore();
            this.snake.addBody();
        }
    }
};
export default  GameControl;