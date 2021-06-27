/** Vue アプリケーションの生成 **/
function createApp() {
  new Vue({
    el: "#app",
    data: {
      //現在開いているタブのインデックス
      currentTabIndex: 0,
      //タブ情報を定義する
      tabs: [
        {
          id:1,
          name:"タブ1",
          content:"これはタブ１のコンテンツです"
        },
        {
          id:2,
          name:"タブ2",
          content:"これはタブ２のコンテンツです"
        },
        {
          id:3,
          name:"タブ3",
          content:"これはタブ３のコンテンツです"
        },
        {
          id:4,
          name:"タブ4",
          content:"これはタブ４のコンテンツです"
        }
      ]
    },
    computed: {
      currentTabContent(){
        return this.tabs[this.currentTabIndex].content
      }
    },
    methods: {
      onClick(index){
        this.currentTabIndex = index
      }
    }
  })
}

/** 初期化 **/
function initialize() {
  createApp()
}

document.addEventListener("DOMContentLoaded", initialize.bind(this))
