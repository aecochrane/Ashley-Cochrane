/*!CK:4028286467!*//*1452040575,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["yr\/Yc"]); }

__d("XCriticReviewsClickLoggingController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/critic_reviews\/log\/",{log_data:{type:"String",required:true}});},null);
__d('CriticReviewPreviewItemController',['AsyncRequest','EventListener','XCriticReviewsClickLoggingController'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();k.prototype.initCriticReviewClickThroughLogging=function(l,m){'use strict';i.listen(l,'click',(function(){return this.onClickCriticReview(m);}).bind(this));};k.prototype.onClickCriticReview=function(l){'use strict';new h(j.getURIBuilder().setString('log_data',JSON.stringify(l)).getURI()).setMethod('POST').setReadOnly(true).send();};function k(){'use strict';}f.exports=new k();},null);
__d('FbFeedAccessible',['AccessibilityConfig','Arbiter','ARIA','Bootloader','BootloadedComponent.react','CSS','DOMQuery','JSResource','React','ReactDOM','cx','csx','fbt','ge','getOrCreateDOMID','invariant'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x='Accessibility/StoriesRequested',y='Accessibility/StoriesLoaded',z='Accessibility/StoryContentInserted',aa='Accessibility/SubstreamInserted',ba=undefined,ca=undefined,da={init:function(ea){ba=ea;if(h.a11yNewsfeedStoryEnumeration)k.loadModules(["LitestandMessages","SubscriptionsHandler"],(function(fa,ga){var ha=new ga();ha.addSubscriptions(i.subscribe(fa.STORIES_REQUESTED,this._onStoriesRequested.bind(this)),i.subscribe(fa.STORIES_INSERTED,this._onInsertedSubstream.bind(this)),i.subscribe(fa.NEWER_STORIES_INSERTED,this._onInsertedSubstream.bind(this)),i.subscribe(y,this._processStoriesLoaded.bind(this)),i.subscribe(x,this._processStoriesRequested.bind(this)),i.subscribe(z,this._processStoryContentInserted.bind(this)),i.subscribe(aa,this._processInsertedSubstream.bind(this)));this._enumerateStories();}).bind(this));},informStoryContentInserted:function(ea){i.inform(z,ea);this.setAriaLabelledBy(ea);},setAriaLabelledBy:function(ea){var fa=u(ea),ga;if(fa&&this._isStory(fa)){if(fa.getAttribute('aria-labelledby'))return;ga=this._filterForElement(fa,["._4gns","._5pbw",".timestampContent",".uiStreamSponsoredLink","._5pbx"]);if(ga.length>0)fa.setAttribute('aria-labelledby',ga.map(function(ha){return v(ha);}).join(' '));}},_getStories:function(ea){return n.scry(ea||ba,"._5jmm");},_onInsertedSubstream:function(ea,fa){i.inform(aa,fa.substream_id);},_onStoriesRequested:function(){i.inform(x);},_setEnumerationText:function(ea,fa,ga){var ha=p.createElement(l,{bootloadLoader:o('FbFeedPager.react'),bootloadPlaceholder:p.createElement('div',null),position:fa,total:ga,'aria-hidden':'true'});q.render(ha,ea);},_enumerateStories:function(){var ea=this._getStories(ba);ca=ea.length;ea.forEach((function(fa,ga){this._enumerateStory(fa,ga+=1);}).bind(this));},_enumerateSubstream:function(ea){var fa=this._getStories();ca=fa.length;var ga=this._getStories(u(ea)),ha=ga.length||0;for(var ia=0;ia<ha;ia++)this._registerStoryEnumerationPosition(ga[ia],ca-ha+(ia+1),ia+1);},_enumerateStory:function(ea,fa){!this._isStory(ea)?w(0):undefined;if(fa>0){var ga=n.scry(ea,"._4gns");if(ga&&ga[0])this._setEnumerationText(ga[0],fa,ca);}},_processStoriesLoaded:function(){j.notify(t._("More stories loaded."));},_processStoriesRequested:function(){j.notify(t._("More stories requested."));},_processInsertedSubstream:function(ea,fa){this._enumerateSubstream(fa);this._enumerateStories();},_processStoryContentInserted:function(ea,fa){var ga=undefined,ha=u(fa);if(ha)ga=JSON.parse(ha.getAttribute('data-ft'));if(ga&&ga.ordinal_position){var ia=ga.ordinal_position.split(':'),ja=ia[0],ka=ia[1];ja=parseInt(ja,10);ka=parseInt(ka,10);this._enumerateStory(ha,ja);if(ka===1)i.inform(y);}},_registerStoryEnumerationPosition:function(ea,fa,ga){var ha=JSON.parse(ea.getAttribute('data-ft'));if(ha){ha.ordinal_position=fa+':'+ga;ea.setAttribute('data-ft',JSON.stringify(ha));}},_isStory:function(ea){return m.hasClass(ea,"_5jmm");},_filterForElement:function(ea,fa){return fa.map(function(ga){return n.scry(ea||document,ga)[0];}).filter(function(ga){return !!ga;});}};f.exports=da;},null);