"use strict";let menu,animate;!function(){document.querySelectorAll("#layout-menu").forEach(function(e){menu=new Menu(e,{orientation:"vertical",closeChildren:!1}),window.Helpers.scrollToActive(animate=!1),window.Helpers.mainMenu=menu});if(document.querySelectorAll(".layout-menu-toggle").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),window.Helpers.toggleCollapsed()})}),document.getElementById("layout-menu")){var e,l;let t;e=document.getElementById("layout-menu"),l=function(){Helpers.isSmallScreen()||document.querySelector(".layout-menu-toggle").classList.add("d-block")},t=null,e.onmouseenter=function(){t=Helpers.isSmallScreen()?setTimeout(l,0):setTimeout(l,300)},e.onmouseleave=function(){document.querySelector(".layout-menu-toggle").classList.remove("d-block"),clearTimeout(t)}}let o=document.getElementsByClassName("menu-inner"),s=document.getElementsByClassName("menu-inner-shadow")[0];o.length>0&&s&&o[0].addEventListener("ps-scroll-y",function(){this.querySelector(".ps__thumb-y").offsetTop?s.style.display="block":s.style.display="none"});let n=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));n.map(function(e){return new bootstrap.Tooltip(e)});let a=function(e){"show.bs.collapse"==e.type||"show.bs.collapse"==e.type?e.target.closest(".accordion-item").classList.add("active"):e.target.closest(".accordion-item").classList.remove("active")},c=[].slice.call(document.querySelectorAll(".accordion"));c.map(function(e){e.addEventListener("show.bs.collapse",a),e.addEventListener("hide.bs.collapse",a)}),window.Helpers.setAutoUpdate(!0),window.Helpers.initPasswordToggle(),window.Helpers.initSpeechToText(),!window.Helpers.isSmallScreen()&&window.Helpers.setCollapsed(!0,!1)}();