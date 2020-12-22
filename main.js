let styleInline = document.querySelector('#style-inline');
let preArea = document.querySelector('#text-content');

const text = `/* 你好，我叫CJ
* 接下来我演示一下我的前端功底
* 首先我要准备一个div
**/
#drawing {
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/* 接下来我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆
**/
#drawing {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦是阴阳形成的
* 一黑一白
**/
#drawing {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/* 加两个神秘的小球 */
#drawing:before {
    display: block;
    width: 100px;
    height: 100px;
    background: #000;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%);
}
#drawing:after {
    display: block;
    width: 100px;
    height: 100px;
    background: #fff;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%, rgba(0, 0, 0, 1) 100%);
}`;

let n = 0;

let advance = () => {
    setTimeout(() => {
        preArea.innerHTML = text.substring(0, n);
        styleInline.innerHTML = text.substring(0, n);
        window.scrollTo(0, 99999);
        preArea.scrollTo(0, 99999);
        if (n < text.length - 1) {
            n++;
            advance();
        }
    }, 50);
};

advance();