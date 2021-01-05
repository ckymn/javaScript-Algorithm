const bunny = {
  name: 'Usagi',
  task: ['transform', 'eat', 'cake', 'blow kisses'],
  showTask () {
    this.task.forEach(el => {
      console.log(`${this.name} wants to ${el}`)
    })
  }
}

bunny.showTask()
//Usagi wants to transform
//Usagi wants to eat
//Usagi wants to cake
//Usagi wants to blow kisses

//=====================================================================

var bunny1 = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function () {
    //>> undefined cikmasinin nedeni foreach icerisinde yeni bir callback icinde girimesinde kayanak.
    //<< cozumu let _this = this atama islemi yapmaktir.cunku globalde calisiyor

    // * 1.yol= var _this = this
    this.tasks.forEach(function (task) {
      console.log(_this.name + ' wants to ' + task)
    }//* 2.yol= .bind(this)
    )
  }
}

bunny1.showTasks()
// undefined wants to transform
// undefined wants to eat cake
// undefined wants to blow kisses
