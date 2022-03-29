import "./index.less";
import Food from "./modules/Food";
import scorePanel from "./modules/ScorePanel";
import ScorePanel from "./modules/ScorePanel";
let food= new Food();
let scorepanel=new ScorePanel();

for (let i=0;i<44;i++){
    scorepanel.upscore();
}
