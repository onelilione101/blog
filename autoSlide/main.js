let n = 1 
初始化()
setInterval(()=>{
  makeLeave(getImage(n))
    .one('transitionend', (e)=>{
     makeEnter($(e.currentTarget))
    })
  makeCurrent(getImage(n+1))
  n += 1
},1500)


function getImage(n){
  return $(`.images > img:nth-child(${x(n)})`)
}

function x(n){
  if(n>7){
    n = n%7
    if (n===0){
      n = 7
    }
  } // n = 1 2 3 4 5 6 7
  return n
}

function 初始化() {
  $(`.images > img:nth-child(${n})`).addClass('current')
  .siblings().addClass('enter')
}


function makeCurrent($node){
  return  $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
  return  $node.removeClass('enter current').addClass('leave')
}

function makeEnter($node){
  return  $node.removeClass('current leave').addClass('enter')
}