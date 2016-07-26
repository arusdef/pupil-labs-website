"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),Bideo=function(){function e(t){_classCallCheck(this,e),this.videoEl=t.videoEl,this.resize=t.resize||!1,this.isMobile=t.isMobile||!1,this.autoplay=t.autoplay||!1,this.onLoad=t.onLoad,this.src=t.src,this.container=t.container,this._addSources(),this._addEventListeners=this._addEventListeners.bind(this),this._resize=this._resize.bind(this),this._canPlay=this._canPlay.bind(this),this._addEventListeners(),console.log("ran constructor...")}return _createClass(e,[{key:"_addEventListeners",value:function(){this.videoEl.addEventListener("loadedmetadata",this._resize,!1),this.videoEl.addEventListener("canplay",this._canPlay),this.resize===!0&&window.addEventListener("resize",this._resize,!1)}},{key:"_addSources",value:function(){var e=document.createElement("source"),t=!0,i=!1,o=void 0;try{for(var n,a=this.src[Symbol.iterator]();!(t=(n=a.next()).done);t=!0){var r=n.value;for(var s in r)console.log(s+" - "+r[s]),e.setAttribute(s,r[s])}}catch(l){i=!0,o=l}finally{try{!t&&a["return"]&&a["return"]()}finally{if(i)throw o}}this.videoEl.appendChild(e)}},{key:"_canPlay",value:function(){console.log("called canPlay"),this.isMobile===!1&&(this.onLoad(),this.autoplay===!0&&(console.log(this.videoEl),this.videoEl.play()))}},{key:"_resize",value:function(){console.log("called resize");var e=this.videoEl.videoWidth,t=this.videoEl.videoHeight,i=(e/t).toFixed(2),o=this.container,n=window.getComputedStyle(o),a=parseInt(n.getPropertyValue("width")),r=parseInt(n.getPropertyValue("height"));if("border-box"!==n.getPropertyValue("box-sizing")){var s=parseInt(n.getPropertyValue("padding-top")),l=parseInt(n.getPropertyValue("padding-bottom")),d=parseInt(n.getPropertyValue("padding-left")),c=parseInt(n.getPropertyValue("padding-right"));a+=d+c,r+=s+l}var u,h,v=a/e,y=r/t;v>y?(u=a,h=Math.ceil(u/i)):(h=r,u=Math.ceil(h*i)),this.videoEl.style.width=u+"px",this.videoEl.style.height=h+"px"}}]),e}();!function(){var e={videoEl:document.querySelector("#background_video"),container:document.querySelector("#Assembly-video-container"),resize:!0,autoplay:!0,isMobile:window.matchMedia("(max-width: 768px)").matches,playButton:document.querySelector("#play"),pauseButton:document.querySelector("#pause"),src:[{src:"../media/videos/assembly.mp4",type:"video/mp4"}],onLoad:function(){console.log("hiding video cover"),document.querySelector("#video_cover").style.display="none"}};new Bideo(e)}();