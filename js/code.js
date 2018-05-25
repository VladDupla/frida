$(document).ready(function(){

	/**-------------------------------------------------------------------------------------------**/
	/**                                      Hover-Link-Home                                      +*/  
	/**-------------------------------------------------------------------------------------------**/

		$(".home .caja").hover(
			function(){
				$(this).addClass("activo");
				$(".home a").addClass("gris");
				$(".home span").addClass("gris");
				$(".home .int").addClass("gris");

			},

			function(){
				$(this).removeClass("activo");
				$(".home a").removeClass("gris");
				$(".home span").removeClass("gris");
				$(".home .int").removeClass("gris");
				
			}
		);

	/**-------------------------------------------------------------------------------------------**/
	/**                                    Hover-Link-Proyectos                                   +*/  
	/**-------------------------------------------------------------------------------------------**/

		$(".proyectos-internos .permanentes .caja, .proyectos-internos .temporales .caja").hover(
			function(){
				$(this).addClass("activo");
				$(".proyectos-internos a").addClass("gris");
				$(".proyectos-internos span").addClass("gris");
				$(".proyectos-internos .int").addClass("gris");

			},

			function(){
				$(this).removeClass("activo");
				$(".proyectos-internos a").removeClass("gris");
				$(".proyectos-internos span").removeClass("gris");
				$(".proyectos-internos .int").removeClass("gris");
				
			}
		);

	/**-------------------------------------------------------------------------------------------**/
	/**                                    Hover-Link-Noticias                                    +*/  
	/**-------------------------------------------------------------------------------------------**/

		$(".noticias .permanentes .caja").hover(
			function(){
				$(this).addClass("activo");
				$(".noticias a").addClass("gris");
				$(".noticias span").addClass("gris");
				$(".noticias .int").addClass("gris");

			},

			function(){
				$(this).removeClass("activo");
				$(".noticias a").removeClass("gris");
				$(".noticias span").removeClass("gris");
				$(".noticias .int").removeClass("gris");
				
			}
		);

	/**-------------------------------------------------------------------------------------------**/
	/**                                    Hover-Img-Proyectos                                    +*/  
	/**-------------------------------------------------------------------------------------------**/

		/**---------------Hover-permantentes----------------------+*/
			let permImg = $(".proyectos-internos .permanentes .imagenes-permanentes")
			$(".proyectos-internos .permanentes .p-01").hover(
				function(){
					permImg.find(".01").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".01").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-02").hover(
				function(){
					permImg.find(".02").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".02").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-03").hover(
				function(){
					permImg.find(".03").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".03").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-04").hover(
				function(){
					permImg.find(".04").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".04").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-05").hover(
				function(){
					permImg.find(".05").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".05").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-06").hover(
				function(){
					permImg.find(".06").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".06").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-07").hover(
				function(){
					permImg.find(".07").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".07").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .permanentes .p-08").hover(
				function(){
					permImg.find(".08").css({"opacity" : "1", "z-index" : "100"});
					permImg.css({"z-index" : "100"});
				},

				function(){
					permImg.find(".08").css({"opacity" : "0", "z-index" : "-1"});
					permImg.css({"z-index" : "-1"});
				}
			);


		/**---------------Hover-temporales----------------------+*/
			let temImg = $(".proyectos-internos .temporales .imagenes-temporales")
			$(".proyectos-internos .temporales .t-01").hover(
				function(){
					temImg.find(".01").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".01").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-02").hover(
				function(){
					temImg.find(".02").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".02").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-03").hover(
				function(){
					temImg.find(".03").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".03").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-04").hover(
				function(){
					temImg.find(".04").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".04").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-05").hover(
				function(){
					temImg.find(".05").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".05").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-06").hover(
				function(){
					temImg.find(".06").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".06").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-07").hover(
				function(){
					temImg.find(".07").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".07").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

			$(".proyectos-internos .temporales .t-08").hover(
				function(){
					temImg.find(".08").css({"opacity" : "1", "z-index" : "100"});
					temImg.css({"z-index" : "100"});
				},

				function(){
					temImg.find(".08").css({"opacity" : "0", "z-index" : "-1"});
					temImg.css({"z-index" : "-1"});
				}
			);

	/**-------------------------------------------------------------------------------------------**/
	/**                                    Seccionando-Temas                                      +*/  
	/**-------------------------------------------------------------------------------------------**/

		$(".click-comercial").click( (e) => {

			$(".proyectos-internos .permanentes .caja.t-cul .int, .proyectos-internos .temporales .caja.t-cul .int").removeClass("border");
			$(".proyectos-internos .permanentes .caja.t-hab .int, .proyectos-internos .temporales .caja.t-hab .int").removeClass("border");

			$(".proyectos-internos .permanentes .caja.t-com .int, .proyectos-internos .temporales .caja.t-com .int").addClass("border");

		});

		$(".click-cultural").click( (e) => {

			$(".proyectos-internos .permanentes .caja.t-com .int, .proyectos-internos .temporales .caja.t-com .int").removeClass("border");
			$(".proyectos-internos .permanentes .caja.t-hab .int, .proyectos-internos .temporales .caja.t-hab .int").removeClass("border");

			$(".proyectos-internos .permanentes .caja.t-cul .int, .proyectos-internos .temporales .caja.t-cul .int").addClass("border");

		});

		$(".click-habitacional").click( (e) => {

			$(".proyectos-internos .permanentes .caja.t-cul .int, .proyectos-internos .temporales .caja.t-cul .int").removeClass("border");
			$(".proyectos-internos .permanentes .caja.t-com .int, .proyectos-internos .temporales .caja.t-com .int").removeClass("border");

			$(".proyectos-internos .permanentes .caja.t-hab .int, .proyectos-internos .temporales .caja.t-hab .int").addClass("border");

		});

		$(".click-limpiar").click( (e) => {

			$(".proyectos-internos .permanentes .caja.t-cul .int, .proyectos-internos .temporales .caja.t-cul .int").removeClass("border");
			$(".proyectos-internos .permanentes .caja.t-com .int, .proyectos-internos .temporales .caja.t-com .int").removeClass("border");
			$(".proyectos-internos .permanentes .caja.t-hab .int, .proyectos-internos .temporales .caja.t-hab .int").removeClass("border");

		});

	/**-------------------------------------------------------------------------------------------**/
	/**                                        Slider-Img                                         +*/  
	/**-------------------------------------------------------------------------------------------**/

		var slideIndex = 1;
		
		$(".slider-container").hide();

		$(".single-proyecto .descripcion-post img").click(function(){
			slider(slideIndex);
			$(".slider-container").show();
		});

		$(".slider-container .btn-cerrar").click(function(){
			$(".slider-container").hide();
		});

		$(".flecha-slider-izq").click(flechaIzq);

		$(".flecha-slider-der").click(flechaDer);

		//Gestos Touch-----------------------
		$(".slider-container img").hammer().on("swipeleft", flechaDer);
		$(".slider-container img").hammer().on("swiperight", flechaIzq);

		function slider(n) {
		    var i;
		    var x = $(".galeria")
		    if (n > x.length) {slideIndex = 1} 
		    if (n < 1) {slideIndex = x.length} ;
		    for (i = 0; i < x.length; i++) {
		        x[i].style.display = "none"; 
		    }
		    x[slideIndex-1].style.display = "block"; 
		}

		function flechaIzq() {
			slider(slideIndex += -1);
		}

		function flechaDer() {
			slider(slideIndex += 1);
		}

	/**-------------------------------------------------------------------------------------------**/
	/**                                      ver-mas-textos                                       +*/  
	/**-------------------------------------------------------------------------------------------**/
		
		$(".mas-textos").click( (e) => {
			$(".container .seccion-textos .textos-list .caja").removeClass("oculto");
		})

	/**-------------------------------------------------------------------------------------------**/
	/**                                         Sleep Mode                                        +*/  
	/**-------------------------------------------------------------------------------------------**/

		if ($(window).width() >= 769) {  

			$(".img-reposo").hide();

			contador = 0;

			$(window).load(function() {
				contador = 1;
				if(contador == 1){
					setTimeout(showReposo, 60000);
					contador = 0;
				}else{}
			})

			$(document).click(() => {

				clearTimeout(showReposo);
				$(".img-reposo").hide();
				contador = 0

				if(contador == 0){
					clearTimeout(showReposo);
					contador = 1;
				}else{}

				if(contador == 1){
					setTimeout(showReposo, 60000);
					contador = 0;
				}else{}

			})

			const showReposo = () => $(".img-reposo").show();
		}
		else{
			$(".img-reposo").hide();
		}  


		// $(window).scroll(() => {
		// 	clearTimeout(showReposo);
		// 	$(".img-reposo").hide();
		// 	contador = 0
		// 	console.log(contador + "0 2")
		// 	if(contador == 0){
		// 		clearTimeout(showReposo);
		// 		contador = 1;
		// 		console.log(contador + "1 2")
		// 		if(contador == 1){
		// 			setTimeout(showReposo, 10000);
		// 			contador = 0;
		// 			console.log(contador + "0 2")
		// 		}else{

		// 		}
		// 	}else{

		// 	}
		// })

	/**-------------------------------------------------------------------------------------------**/
	/**                                        Sticky-Back                                        +*/  
	/**-------------------------------------------------------------------------------------------**/


		!function(t,e){"use strict";if("object"==typeof module&&"object"==typeof module.exports){if(!t.document)throw new Error("HC-Sticky requires a browser to run.");module.exports=e(t)}else"function"==typeof define&&define.amd?define("hcSticky",[],e(t)):e(t)}("undefined"!=typeof window?window:this,function(t){"use strict";var e={top:0,bottom:0,bottomEnd:0,innerTop:0,innerSticker:null,stickyClass:"sticky",stickTo:null,followScroll:!0,queries:null,queryFlow:"down",onStart:null,onStop:null,onBeforeResize:null,onResize:null,resizeDebounce:100,disable:!1},o=t.document,n=function(i,s){if("string"==typeof i&&(i=o.querySelector(i)),!i)return!1;var r={},a=n.Helpers,l=i.parentNode;"static"===a.getStyle(l,"position")&&(l.style.position="relative");var c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.isEmptyObject(t)&&!a.isEmptyObject(r)||(r=Object.assign({},e,r,t))},f=function(){return r.disable},p=function(){if(r.queries){var o=t.innerWidth,n=r.queryFlow,i=r.queries;if(function(t){r=Object.assign({},e,t||{})}(s),"up"===n)for(var l in i)o>=l&&!a.isEmptyObject(i[l])&&c(i[l]);else{var f=[];for(var p in r.queries){var u={};u[p]=i[p],f.push(u)}for(var d=f.length-1;d>=0;d--){var g=f[d],m=Object.keys(g)[0];o<=m&&!a.isEmptyObject(g[m])&&c(g[m])}}}},u={css:{},position:null,stick:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.hasClass(i,r.stickyClass)||(!1===d.isAttached&&d.attach(),u.position="fixed",i.style.position="fixed",i.style.left=d.offsetLeft+"px",i.style.width=d.width,void 0===t.bottom?i.style.bottom="auto":i.style.bottom=t.bottom+"px",void 0===t.top?i.style.top="auto":i.style.top=t.top+"px",i.classList?i.classList.add(r.stickyClass):i.className+=" "+r.stickyClass,r.onStart&&r.onStart.call(i,r))},release:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.stop=t.stop||!1,!0===t.stop||"fixed"===u.position||null===u.position||!(void 0===t.top&&void 0===t.bottom||void 0!==t.top&&(parseInt(a.getStyle(i,"top"))||0)===t.top||void 0!==t.bottom&&(parseInt(a.getStyle(i,"bottom"))||0)===t.bottom)){!0===t.stop?!0===d.isAttached&&d.detach():!1===d.isAttached&&d.attach();var e=t.position||u.css.position;u.position=e,i.style.position=e,i.style.left=!0===t.stop?u.css.left:d.positionLeft+"px",i.style.width="absolute"!==e?u.css.width:d.width,void 0===t.bottom?i.style.bottom=!0===t.stop?"":"auto":i.style.bottom=t.bottom+"px",void 0===t.top?i.style.top=!0===t.stop?"":"auto":i.style.top=t.top+"px",i.classList?i.classList.remove(r.stickyClass):i.className=i.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),r.onStop&&r.onStop.call(i,r)}}},d={el:o.createElement("div"),offsetLeft:null,positionLeft:null,width:null,isAttached:!1,init:function(){for(var t in u.css)d.el.style[t]=u.css[t];var e=a.getStyle(i);d.offsetLeft=a.offset(i).left-(parseInt(e.marginLeft)||0),d.positionLeft=a.position(i).left,d.width=a.getStyle(i,"width")},attach:function(){l.insertBefore(d.el,i.nextSibling),d.isAttached=!0},detach:function(){d.el=l.removeChild(d.el),d.isAttached=!1}},g=void 0,m=void 0,h=void 0,y=void 0,v=void 0,b=void 0,S=void 0,w=void 0,k=void 0,E=void 0,x=void 0,L=void 0,T=void 0,j=void 0,O=void 0,C=void 0,z=void 0,N=void 0,R=function(){u.css=function(t){var e=a.getCascadedStyle(t),o=a.getStyle(t),n={height:t.offsetHeight+"px",left:e.left,right:e.right,top:e.top,bottom:e.bottom,position:o.position,display:o.display,verticalAlign:o.verticalAlign,boxSizing:o.boxSizing,marginLeft:e.marginLeft,marginRight:e.marginRight,marginTop:e.marginTop,marginBottom:e.marginBottom,paddingLeft:e.paddingLeft,paddingRight:e.paddingRight};return e.float&&(n.float=e.float||"none"),e.cssFloat&&(n.cssFloat=e.cssFloat||"none"),o.MozBoxSizing&&(n.MozBoxSizing=o.MozBoxSizing),n.width="auto"!==e.width?e.width:"border-box"===n.boxSizing||"border-box"===n.MozBoxSizing?t.offsetWidth+"px":o.width,n}(i),d.init(),g=!(!r.stickTo||!("document"===r.stickTo||r.stickTo.nodeType&&9===r.stickTo.nodeType||"object"==typeof r.stickTo&&r.stickTo instanceof("undefined"!=typeof HTMLDocument?HTMLDocument:Document))),m=r.stickTo?g?o:"string"==typeof r.stickTo?o.querySelector(r.stickTo):r.stickTo:l,O=(N=function(){var t=i.offsetHeight+(parseInt(u.css.marginTop)||0)+(parseInt(u.css.marginBottom)||0),e=(O||0)-t;return e>=-1&&e<=1?O:t})(),y=(z=function(){return g?Math.max(o.documentElement.clientHeight,o.body.scrollHeight,o.documentElement.scrollHeight,o.body.offsetHeight,o.documentElement.offsetHeight):m.offsetHeight})(),v=g?0:a.offset(m).top,b=r.stickTo?g?0:a.offset(l).top:v,S=t.innerHeight,C=i.offsetTop-(parseInt(u.css.marginTop)||0),h=r.innerSticker?"string"==typeof r.innerSticker?o.querySelector(r.innerSticker):r.innerSticker:null,w=isNaN(r.top)&&r.top.indexOf("%")>-1?parseFloat(r.top)/100*S:r.top,k=isNaN(r.bottom)&&r.bottom.indexOf("%")>-1?parseFloat(r.bottom)/100*S:r.bottom,E=h?h.offsetTop:r.innerTop?r.innerTop:0,x=isNaN(r.bottomEnd)&&r.bottomEnd.indexOf("%")>-1?parseFloat(r.bottomEnd)/100*S:r.bottomEnd,L=v-w+E+C},H=t.pageYOffset||o.documentElement.scrollTop,A=0,B=void 0,I=function(){O=N(),y=z(),T=v+y-w-x,j=O>S;var e=t.pageYOffset||o.documentElement.scrollTop,n=Math.round(a.offset(i).top),s=n-e,c=void 0;B=e<H?"up":"down",A=e-H,H=e,e>L?T+w+(j?k:0)-(r.followScroll&&j?0:w)<=e+O-E-(O-E>S-(L-E)&&r.followScroll&&(c=O-S-E)>0?c:0)?u.release({position:"absolute",bottom:b+l.offsetHeight-T-w}):j&&r.followScroll?"down"===B?s+O+k<=S?u.stick({bottom:k}):"fixed"===u.position&&u.release({position:"absolute",top:n-w-L-A+E}):s+E<0&&"fixed"===u.position?u.release({position:"absolute",top:n-w-L+E-A}):n>=e+w-E&&u.stick({top:w-E}):u.stick({top:w-E}):u.release({stop:!0})},q=!1,F=!1,M=function(){q&&(a.event.unbind(t,"scroll",I),q=!1)},D=function(){R(),O>=y?M():(I(),q||(a.event.bind(t,"scroll",I),q=!0))},W=function(){i.style.position="",i.style.left="",i.style.top="",i.style.bottom="",i.style.width="",i.classList?i.classList.remove(r.stickyClass):i.className=i.className.replace(new RegExp("(^|\\b)"+r.stickyClass.split(" ").join("|")+"(\\b|$)","gi")," "),u.css={},u.position=null,!0===d.isAttached&&d.detach()},P=function(){W(),p(),f()?M():D()},V=function(){r.onBeforeResize&&r.onBeforeResize.call(i,r),P(),r.onResize&&r.onResize.call(i,r)},Y=r.resizeDebounce?a.debounce(V,r.resizeDebounce):V,$=function(){F&&(a.event.unbind(t,"resize",Y),F=!1),M()},Q=function(){F||(a.event.bind(t,"resize",Y),F=!0),p(),f()?M():D()};this.options=function(t){return t?r.option||null:Object.assign({},r)},this.reinit=P,this.update=function(t){c(t),s=Object.assign({},s,t||{}),P()},this.attach=Q,this.detach=$,this.destroy=function(){$(),W()},c(s),Q(),a.event.bind(t,"load",P)};if(void 0!==t.jQuery){var i=t.jQuery;i.fn.extend({hcSticky:function(t){return this.length?this.each(function(){var e=i.data(this,"hcSticky");e?e.update(t):(e=new n(this,t),i.data(this,"hcSticky",e))}):this}})}return t.hcSticky=t.hcSticky||n,n}),function(t){"use strict";var e=t.hcSticky,o=t.document;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var o=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(o[s]=i[s])}return o},writable:!0,configurable:!0}),Array.prototype.forEach||(Array.prototype.forEach=function(t){var e,o;if(null==this)throw new TypeError("this is null or not defined");var n=Object(this),i=n.length>>>0;if("function"!=typeof t)throw new TypeError(t+" is not a function");for(arguments.length>1&&(e=arguments[1]),o=0;o<i;){var s;o in n&&(s=n[o],t.call(e,s,o,n)),o++}});var n=function(){function e(e){var o=t.event;return o.target=o.target||o.srcElement||e,o}var n=o.documentElement,i=function(){};n.addEventListener?i=function(t,e,o){t.addEventListener(e,o,!1)}:n.attachEvent&&(i=function(t,o,n){t[o+n]=n.handleEvent?function(){var o=e(t);n.handleEvent.call(n,o)}:function(){var o=e(t);n.call(t,o)},t.attachEvent("on"+o,t[o+n])});var s=function(){};return n.removeEventListener?s=function(t,e,o){t.removeEventListener(e,o,!1)}:n.detachEvent&&(s=function(t,e,o){t.detachEvent("on"+e,t[e+o]);try{delete t[e+o]}catch(n){t[e+o]=void 0}}),{bind:i,unbind:s}}(),i=function(e,n){return t.getComputedStyle?n?o.defaultView.getComputedStyle(e,null).getPropertyValue(n):o.defaultView.getComputedStyle(e,null):e.currentStyle?n?e.currentStyle[n.replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]:e.currentStyle:void 0},s=function(e){var n=e.getBoundingClientRect(),i=t.pageYOffset||o.documentElement.scrollTop,s=t.pageXOffset||o.documentElement.scrollLeft;return{top:n.top+i,left:n.left+s}};e.Helpers={isEmptyObject:function(t){for(var e in t)return!1;return!0},debounce:function(t,e,o){var n=void 0;return function(){var i=this,s=arguments,r=o&&!n;clearTimeout(n),n=setTimeout(function(){n=null,o||t.apply(i,s)},e),r&&t.apply(i,s)}},hasClass:function(t,e){return t.classList?t.classList.contains(e):new RegExp("(^| )"+e+"( |$)","gi").test(t.className)},offset:s,position:function(t){var e=t.offsetParent,o=s(e),n=s(t),r=i(e),a=i(t);return o.top+=parseInt(r.borderTopWidth)||0,o.left+=parseInt(r.borderLeftWidth)||0,{top:n.top-o.top-(parseInt(a.marginTop)||0),left:n.left-o.left-(parseInt(a.marginLeft)||0)}},getStyle:i,getCascadedStyle:function(e){var n=e.cloneNode(!0);n.style.display="none",Array.prototype.slice.call(n.querySelectorAll('input[type="radio"]')).forEach(function(t){t.removeAttribute("name")}),e.parentNode.insertBefore(n,e.nextSibling);var i=void 0;n.currentStyle?i=n.currentStyle:t.getComputedStyle&&(i=o.defaultView.getComputedStyle(n,null));var s={};for(var r in i)!isNaN(r)||"string"!=typeof i[r]&&"number"!=typeof i[r]||(s[r]=i[r]);if(Object.keys(s).length<3){s={};for(var a in i)isNaN(a)||(s[i[a].replace(/-\w/g,function(t){return t.toUpperCase().replace("-","")})]=i.getPropertyValue(i[a]))}if(s.margin||"auto"!==s.marginLeft?s.margin||s.marginLeft!==s.marginRight||s.marginLeft!==s.marginTop||s.marginLeft!==s.marginBottom||(s.margin=s.marginLeft):s.margin="auto",!s.margin&&"0px"===s.marginLeft&&"0px"===s.marginRight){var l=e.offsetLeft-e.parentNode.offsetLeft,c=l-(parseInt(s.left)||0)-(parseInt(s.right)||0),f=e.parentNode.offsetWidth-e.offsetWidth-l-(parseInt(s.right)||0)+(parseInt(s.left)||0)-c;0!==f&&1!==f||(s.margin="auto")}return n.parentNode.removeChild(n),n=null,s},event:n}}(window);


		if ($(window).width() > 768) {  
			$(".regresar p, .anio-post p, .descripcion-post .titulo").hcSticky({
				// stickTo: "body", // El contenedor donde se movera el elemento sticky.
				top: 0, //Distancia en px desde el top del window hasta el elemento que se hizo sticky una vez que esta agarrado.
				bottom: 0, //Distancia en px desde el bot del window hasta el elemento que se hizo sticky una vez que esta agarrado.
			    innerTop: -20, //Distancia en px desde el top del window hasta el elemento que va a ser agarrado!
			    bottomEnd: 0, //Distancia en px desde el bottom del elemento hasta el fin del contenedor en el que esta sujeto!
			});

			// $(".descripcion-post .titulo").addClass("fijo-left");

			$(".descripcion-post .titulo h2").hcSticky({
				// stickTo: "body", // El contenedor donde se movera el elemento sticky.
				top: 0, //Distancia en px desde el top del window hasta el elemento que se hizo sticky una vez que esta agarrado.
				bottom: 0, //Distancia en px desde el bot del window hasta el elemento que se hizo sticky una vez que esta agarrado.
			    innerTop: -20, //Distancia en px desde el top del window hasta el elemento que va a ser agarrado!
			    bottomEnd: 0, //Distancia en px desde el bottom del elemento hasta el fin del contenedor en el que esta sujeto!
			    // stickyClass: "titulo-izq",
			});
		}
		else{
		}

	/**-------------------------------------------------------------------------------------------**/
	/**                                            BLazy                                          +*/  
	/**-------------------------------------------------------------------------------------------**/

		var bLazy = new Blazy({ 
	        selector: 'img, iframe, video,' // all images
	    });

	/**-------------------------------------------------------------------------------------------**/
	/**                                    Imagenes de Fondo Home                                 +*/  
	/**-------------------------------------------------------------------------------------------**/

		/**---------------Hover-permantentes----------------------+*/
		let permImgIndex = $(".proyectos .permanentes .imagenes-permanentes")
		$(".proyectos .permanentes .p-01").hover(
			function(){
				permImgIndex.find(".01").css({"opacity" : "1", "z-index" : "100"});
				permImgIndex.css({"z-index" : "100"});
			},

			function(){
				permImgIndex.find(".01").css({"opacity" : "0", "z-index" : "-1"});
				permImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .permanentes .p-02").hover(
			function(){
				permImgIndex.find(".02").css({"opacity" : "1", "z-index" : "100"});
				permImgIndex.css({"z-index" : "100"});
			},

			function(){
				permImgIndex.find(".02").css({"opacity" : "0", "z-index" : "-1"});
				permImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .permanentes .p-03").hover(
			function(){
				permImgIndex.find(".03").css({"opacity" : "1", "z-index" : "100"});
				permImgIndex.css({"z-index" : "100"});
			},

			function(){
				permImgIndex.find(".03").css({"opacity" : "0", "z-index" : "-1"});
				permImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .permanentes .p-04").hover(
			function(){
				permImgIndex.find(".04").css({"opacity" : "1", "z-index" : "100"});
				permImgIndex.css({"z-index" : "100"});
			},

			function(){
				permImgIndex.find(".04").css({"opacity" : "0", "z-index" : "-1"});
				permImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .permanentes .p-05").hover(
			function(){
				permImgIndex.find(".05").css({"opacity" : "1", "z-index" : "100"});
				permImgIndex.css({"z-index" : "100"});
			},

			function(){
				permImgIndex.find(".05").css({"opacity" : "0", "z-index" : "-1"});
				permImgIndex.css({"z-index" : "-1"});
			}
		);

		/**---------------Hover-temporales----------------------+*/
		let temImgIndex = $(".proyectos .temporales .imagenes-temporales")
		$(".proyectos .temporales .t-01").hover(
			function(){
				temImgIndex.find(".01").css({"opacity" : "1", "z-index" : "100"});
				temImgIndex.css({"z-index" : "100"});
			},

			function(){
				temImgIndex.find(".01").css({"opacity" : "0", "z-index" : "-1"});
				temImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .temporales .t-02").hover(
			function(){
				temImgIndex.find(".02").css({"opacity" : "1", "z-index" : "100"});
				temImgIndex.css({"z-index" : "100"});
			},

			function(){
				temImgIndex.find(".02").css({"opacity" : "0", "z-index" : "-1"});
				temImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .temporales .t-03").hover(
			function(){
				temImgIndex.find(".03").css({"opacity" : "1", "z-index" : "100"});
				temImgIndex.css({"z-index" : "100"});
			},

			function(){
				temImgIndex.find(".03").css({"opacity" : "0", "z-index" : "-1"});
				temImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .temporales .t-04").hover(
			function(){
				temImgIndex.find(".04").css({"opacity" : "1", "z-index" : "100"});
				temImgIndex.css({"z-index" : "100"});
			},

			function(){
				temImgIndex.find(".04").css({"opacity" : "0", "z-index" : "-1"});
				temImgIndex.css({"z-index" : "-1"});
			}
		);
		$(".proyectos .temporales .t-05").hover(
			function(){
				temImgIndex.find(".05").css({"opacity" : "1", "z-index" : "100"});
				temImgIndex.css({"z-index" : "100"});
			},

			function(){
				temImgIndex.find(".05").css({"opacity" : "0", "z-index" : "-1"});
				temImgIndex.css({"z-index" : "-1"});
			}
		);

});







