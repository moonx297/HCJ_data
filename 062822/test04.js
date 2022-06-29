class Chart{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    drawLine(){
        console.log('draw line');
    }
}

class BarChart extends Chart{
    constructor(width, height){
        super(width, height); //super는 상위 생성자를 부르는거. 애기가 엄마 부르는 격.
    }
    draw(){
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);    //백틱- $사인 쓸때에는 ``을 사용해야 한다.
    }
}

//실행

const barchart1 = new BarChart(100, 100);
barchart1.draw();