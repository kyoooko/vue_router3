const B = {
  template: `
  <div>
    <h2>This is B</h2>
  </div>
  `
}

// エイリアス
const C = {
  template: `
  <div>
    <h2>This is C</h2>
  </div>
  `
}

const router = new VueRouter({
  routes: [
    {
      path:'/a', 
      // リダイレクト
      // redirect: '/b'
      // 名前付きルートへのリダイレクト
      redirect: { name: 'page-b'}
    },
    {
      // 名前付きルートへのリダイレクト
      name: 'page-b',
      path:'/b',
      component:B
    },
    {
      // エイリアス
      // D押すとcが表示されるがURlはDのまま
      path:'/c',
      component:C,
      alias:'/d'
    }
  ]
})

var app = new Vue({
  router
}).$mount('#app')