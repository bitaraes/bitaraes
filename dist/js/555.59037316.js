"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[555],{4555:function(e,i,s){s.r(i),s.d(i,{default:function(){return h}});var t=function(){var e=this,i=e._self._c;return i("div",{staticClass:"skill-view"},[i("SkillsCard")],1)},a=[],o=function(){var e=this,i=e._self._c;return i("div",[i("div",{staticClass:"card-skills"},[i("h1",[e._v("Hard Skills")]),i("ul",e._l(e.hardItems,(function(s,t){return i("li",{key:`item-${t}`,staticClass:"skill-item",class:{"active-skill":e.hardItemSelected.id==s.id},style:`color: ${s.color}`,on:{click:function(i){return e.selecItem(s.id,"hard")}}},[i("font-awesome-icon",{attrs:{size:e.iconSize,icon:s.icon}})],1)})),0),i("div",{staticClass:"skill-item__data"},[i("div",{staticClass:"data-title"},[e._v(e._s(e.hardItemSelected.name))]),i("div",{staticClass:"data-description"},[e._v(e._s(e.descriptionExample))])])]),i("div",{staticClass:"card-skills"},[i("h1",[e._v("Soft Skills")]),i("ul",e._l(e.softItems,(function(s,t){return i("li",{key:`item-${t}`,staticClass:"skill-item",class:{"active-skill":e.softItemSelected.id==s.id},style:`color: ${s.color}`,on:{click:function(i){return e.selecItem(s.id,"soft")}}},[i("font-awesome-icon",{attrs:{size:e.iconSize,icon:s.icon}})],1)})),0),i("div",{staticClass:"skill-item__data"},[i("div",{staticClass:"data-title"},[e._v(e._s(e.softItemSelected.name))]),i("div",{staticClass:"data-description"},[e._v(e._s(e.descriptionExample))])])])])},n=[],l={data(){return{hardItems:[{id:"0",name:"HTML5",description:"",icon:"fa-brands fa-html5",color:"#dd4b25"},{id:"1",name:"CSS3",description:"",icon:"fa-brands fa-css3-alt",color:"#1a6fb4"},{id:"2",name:"Javascript",description:"",icon:"fa-brands fa-square-js",color:"#efd81d"},{id:"3",name:"VueJs",description:"",icon:"fa-brands fa-vuejs",color:"#3fb27f"},{id:"4",name:"Angular",description:"",icon:"fa-brands fa-angular",color:"#d6002f"}],softItems:[{id:"0",name:"Trabalho em equipe",description:"",icon:"fa-solid fa-people-group",color:"#183153"},{id:"1",name:"Solução de problemas",description:"",icon:"fa-solid fa-lightbulb",color:"#183153"},{id:"2",name:"Flexibilidade",description:"",icon:"fa-solid fa-arrows-split-up-and-left",color:"#183153"},{id:"3",name:"Gestão de tempo",description:"",icon:"fa-solid fa-clock",color:"#183153"}],hardItemSelected:{id:"0",name:"HTML5",description:"",icon:"fa-brands fa-html5",color:"#dd4b25"},softItemSelected:{id:"0",name:"Trabalho em equipe",description:"",icon:"fa-solid fa-people-group",color:"#183153"},descriptionExample:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Fusce malesuada vel arcu vitae efficitur.\n        Donec ornare, velit non faucibus maximus, eros sapien dictum lacus,\n        non varius urna nisi in purus.",screenSize:window.innerWidth}},created(){window.addEventListener("resize",this.setScreenSize)},destroyed(){window.removeEventListener("resize",this.setScreenSize)},computed:{iconSize(){return this.screenSize<530?"xl":"2x"}},methods:{selecItem(e,i){"hard"!=i?this.softItemSelected=this.softItems.find((i=>i.id==e)):this.hardItemSelected=this.hardItems.find((i=>i.id==e))},setScreenSize(){this.screenSize=window.innerWidth}}},c=l,d=s(1001),r=(0,d.Z)(c,o,n,!1,null,"36a1a22e",null),f=r.exports,m={components:{SkillsCard:f}},u=m,p=(0,d.Z)(u,t,a,!1,null,"69390417",null),h=p.exports}}]);
//# sourceMappingURL=555.59037316.js.map