var App = {
  init: function(){
    var that = this;
    var title = document.querySelector('#buildingwebapps h2');
    title.addEventListener('click', that.hideTitle, false);
    console.log('add event');
  },

  hideTitle: function(){
    var el = document.querySelector('#buildingwebapps span');
    el.style.display= 'none';
    console.log('fire event');
  }
}

App.init();
