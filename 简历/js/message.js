!function () {

var view = document.querySelector('section.message')

var model = {
  init: function () {
    var APP_ID = 'hmFf4HoQldezYBRMHquaeRXe-gzGzoHsz';
    var APP_KEY = 'ng893fsqtp8mjqXdUWr8gSJL';

    AV.init({appId: APP_ID,appKey: APP_KEY});
},
  fetch:function(){
    var query = new AV.Query('Message');
    return query.find()
       
  },
  save:function(name,content){
    var Message = AV.Object.extend('Message')
    var message = new Message()
    return message.save({
        name:name,
        content: content
      })
  }
}

var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view,model) {
        this.view = view
        this.model = model
        this.messageList = view.querySelector('#messageList')
        this.form = view.querySelector('#postMessageForm')
        this.model.init()
        this.loadMessages()
        this.bindEvents()  

    },
    
    loadMessages: function(){
        // var query = new AV.Query('Message');
        // query.find().
        this.model.fetch()
        .then(
          function(messages){
            let array = messages.map((item) => item.attributes)
            console.log(array)
            array.forEach((item) =>{
                let li = document.createElement('li')
                li.innerText = `${item.name}:${item.content}`
                this.messageList.appendChild(li)
            })
          }.bind(controller)
        )
      },
    bindEvents: function(){
         this.form.addEventListener('submit',function (e) {
          e.preventDefault()
          this.saveMessage()
          
      }.bind(controller))
    },
    saveMessage: function(){
      //收集数据，保存数据，更新页面
      let myForm = this.form
      let content = myForm.querySelector('input[name=content]').value      //用户留言的内容
      let name = myForm.querySelector('input[name=name]').value
      // var Message = AV.Object.extend('Message')
      // var message = new Message()
      // message.save({
      //     name:name,
      //     content: content
      //   })
      this.model.save(name,content)
      .then(function(object) {
          let li = document.createElement('li')
          li.innerText = `${object.attributes.name}:${object.attributes.content}`
          this.messageList.appendChild(li)
          myForm.querySelector('input[name=content]').value = ''
          console.log(object)
        })
    }
}


controller.init(view,model)

}()








