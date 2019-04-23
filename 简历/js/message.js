
var APP_ID = 'hmFf4HoQldezYBRMHquaeRXe-gzGzoHsz';
var APP_KEY = 'ng893fsqtp8mjqXdUWr8gSJL';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});


var query = new AV.Query('Message');
query.find().then(function (messages) {
    let array = messages.map((item) => item.attributes)
    console.log(array)
    array.forEach((item) =>{
        let li = document.createElement('li')
        li.innerText = `${item.name}:${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
    })
}, function (error) {
  // 异常处理
});


let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value      //用户留言的内容
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        name:name,
        content: content
      }).then(function(object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(object)
      })
})