!function(){
    let aTags = document.querySelectorAll('nav.menu > ul > li > a')
    let liTags = document.querySelectorAll('nav.menu > ul > li')
function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0; i<liTags.length; i++){
  aTags[i].onclick = function(x){
    x.preventDefault()
    let a = x.currentTarget //拿到用户点击了哪个a标签
    let href = a.getAttribute('href') //'#siteAbout'
    let element = document.querySelector(href)//对应ID的整个标签
    let top = element.offsetTop //这个标签相对页面顶部的距离
    let currentTop = window.scrollY
    let targetTop = top - 80
    let s = targetTop - currentTop 
    var coords = { y: currentTop }; // 起始位置
    var t = Math.abs((s / 100) * 300) // 时间
    if (t > 500) { t = 500 }
    var tween = new TWEEN.Tween(coords) // 起始位置
      .to({ y: targetTop }, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
      .onUpdate(function () {
        // coords.y 已经变了
        window.scrollTo(0, coords.y) 
      })
      .start();      
  }
}
}()
