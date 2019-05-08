!function(){
    function writeCode(prefix,code,fn){
    let n =0
    let timer = setInterval(()=>{
      n++
      ccode.innerHTML = code.slice(0,n)
      styleTag.innerHTML = code.slice(0,n)
      ccode.scrollTop = ccode.scrollHeight
      if(n >= code.length){
          clearInterval(timer)
          fn && fn.call()
      }


    },20)
 }

 var code = `*{margin:0;padding:0;box-sizing:border-box;}

body{
    background:#FFF6D3;  overflow:hidden;
    display:flex;  flex-direction: column;
    height: 100vh;  width: 100vw;
 }
 .code-wrapper{
    flex:1;  height:40%;  padding:20px;

}
.code{
    overflow:auto;  height: 100%;
}
.preview-wrapper{
    flex:1.6;  height:60%;
}

.bili-wrapper{
    width: 370px;  height: 370px;  position:relative;   left:50%;  margin-left:-185px;
    display:flex;  justify-content: center;  align-items: center;
}

.bili-wrapper::before{
    content: '';
    height: 48px; 
    width: 302px; 
    background: #000; opacity: .2; 
    border-radius: 50%;
    position: absolute;
    top: 340px;
    left: 30px;
    animation: shadow 1.2s linear infinite;
}

/*开始画身体~*/

.outbody{
    width: 302px;  
    height: 230px;
    background:skyblue;
    border-radius:40px;
    display:flex;  justify-content: center;  align-items: center;
}
.innerbody{
    background:white;
    width: 232px;
    height: 170px;
    border-radius:20px;
}


/*萌萌哒天线~*/

.antenna{
    position:absolute;
    top:14%;
    height: 20px;
    width: 84px;
    background:skyblue;
    border-top-left-radius:40px 30px;
    border-top-right-radius:40px 30px;
    border-bottom-left-radius:40px 30px;
    border-bottom-right-radius:40px 30px;
}

.antenna.right{ 
    left:51%;
    transform:rotate(-38deg); 
}
.antenna.left{
    left:26%;
    transform:rotate(38deg);
}

.eye{
    position:absolute;
    top:40%;
    height: 24px;
    width: 65px;
    background:skyblue;
}





/*看破红尘的眼神~*/
.eye.right{
    left:59%;
    transform:rotate(8deg);
}
.eye.left{
    left:24%;
    transform:rotate(-8deg);
}

.leg{
    position:absolute;
    top:76%;
    height: 34px;
    width: 34px;
    border-radius:50%;
    background:skyblue;
}





/*可爱的小短腿~*/
.leg.right{
    left:24%;    
}

.leg.left{
    left:67%;   
}








/*开始画嘴巴咯~*/

.diamond-wrapper{
    position:absolute;
    top:50%;
    left:47%;
    display:flex;
    justify-content: center;
    align-items: center;
}


.diamond {
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-bottom: 12px solid skyblue;
}
.diamond::after {
    content: '';
    position: absolute;
    top: 88%;
    right:10%;
    width: 9px;
    height: 17px;
    border-radius:30%;
    background:skyblue;
    transform:rotate(-45deg)
}
.lip-wrapperL{
    position:absolute;
    top:52%;
    left:34.5%;
    width:55px;
    height: 45px;
    border:none;
    overflow:hidden;
    border-bottom-left-radius:27px;
    border-bottom-right-radius:7px;
}

.left-lip{
    position:absolute;
    bottom:8px;
    left:-15px;
    width:100px; 
    height:400px;
    border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
    background:skyblue;
}
.left-egg{
    position:absolute;
    bottom:-4px;
    left:160px;
    background:white;
    width: 154px;
    height: 1500px;
    border-radius:50%;
    transform:rotate(16deg); 
}
.left-egg::after{
    content: '';
    position: absolute;
    top:97%;
    right:51%;
    background:white;
    width: 30px;
    height: 55px;
    transform:rotate(45deg);
}
.lip-wrapperR{
    position:absolute;
    border:none;
    top:52%;
    left:49%;
    width: 100px;
    height: 45px;
    overflow:hidden;
    border-bottom-right-radius:27px;
    border-bottom-left-radius:7px;        
}
.right-lip{
    width:140px; 
    height:560px;
    border-radius:50% 50% 50% 50%/60% 60% 40% 40%;
    background:skyblue;
    position:absolute;
    bottom:8px;
    left:-45px;
}
.right-egg{
    background:white;
    width: 154px;
    height: 1100px;
    position:absolute;
    bottom:16px;
    left:-145px;
    border-radius:50%;
    transform:rotate(-10deg);
}
.right-egg::after{
    content: '';
    position: absolute;
    top:96%;
    right:24%;
    background:white;
    width: 30px;
    height: 55px;
    transform:rotate(-45deg);
}

/*起跳~*/

.bili-wrapper{
    animation: rotate 1.2s linear infinite;   
}

@keyframes shadow {
    0%, 100% {transform: scaleX(1);}
    50% {transform: scaleX(1.1);}
}

@keyframes rotate {
    0% {
    transform: translateY(0) ;
}
    25% {
        transform: translateY(65px);
    }
    50% {
        transform: translateY(20px) ;
    
    }
    75% {
        transform: translateY(10px) scale(0.9) ;
    }
    100% {
        transform: translateY(0)  ;
    }
}

 `
writeCode('',code)
}.call()