class ScorePanel{
    private maxLevel:number;
    private levelEle:HTMLElement;
    private scoreEle:HTMLElement;
    private score:number;
    private level:number;
    private upPerScoreNum:number;
    constructor(upPerScoreNum:number=5,maxLever:number=10) {
        this.score=0;
        this.level=1;
        this.levelEle=document.getElementById("level")!;
        this.scoreEle=document.getElementById("score")!;
        this.maxLevel=maxLever;
        this.upPerScoreNum=upPerScoreNum;
    }
    upscore(){
        this.scoreEle.innerHTML=++this.score+"";
        if(this.score%this.upPerScoreNum===0){
            this.uplevel();
        }
    }
    uplevel(){
        if(this.level<this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + "";
        }
    }
};

export default  ScorePanel;