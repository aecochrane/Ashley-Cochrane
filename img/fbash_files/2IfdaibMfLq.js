/*!CK:2279822407!*//*1451878427,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uEfH6"]); }

__d("ManagedError",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){Error.prototype.constructor.call(this,i);this.message=i;this.innerError=j;}h.prototype=new Error();h.prototype.constructor=h;f.exports=h;},null);
__d('AssertionError',['ManagedError'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){h.prototype.constructor.apply(this,arguments);}i.prototype=new h();i.prototype.constructor=i;f.exports=i;},null);
__d('Assert',['AssertionError','sprintf'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(o,p){if(typeof o!=='boolean'||!o)throw new h(p);return o;}function k(o,p,q){var r;if(p===undefined){r='undefined';}else if(p===null){r='null';}else{var s=Object.prototype.toString.call(p);r=/\s(\w*)/.exec(s)[1].toLowerCase();}j(o.indexOf(r)!==-1,q||i('Expression is of type %s, not %s',r,o));return p;}function l(o,p,q){j(p instanceof o,q||'Expression not instance of type');return p;}function m(o,p){n['is'+o]=p;n['maybe'+o]=function(q,r){if(q!=null)p(q,r);};}var n={isInstanceOf:l,isTrue:j,isTruthy:function(o,p){return j(!!o,p);},type:k,define:function(o,p){o=o.substring(0,1).toUpperCase()+o.substring(1).toLowerCase();m(o,function(q,r){j(p(q),r);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(o){m(o,k.bind(null,o.toLowerCase()));});f.exports=n;},null);
__d('AdsUtils',['Assert'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(ba){return ba===Object(ba);}function j(ba,ca){if(Array.isArray(ba)||typeof ba==='string')return ba.indexOf(ca)!==-1;return ca in ba;}function k(ba){if(Array.isArray(ba)||typeof ba==='string')return ba.length;return i(ba)?Object.keys(ba).length:0;}function l(ba,ca){if(ba===undefined&&ca===undefined){return true;}else if(ba===undefined){return false;}else if(ca===undefined){return false;}else if(ba.length!=ca.length){return false;}else{for(var da=0;da<ba.length;da++){var ea=false;for(var fa=0;fa<ca.length;fa++){var ga=true,ha=Object.keys(ba[da]);for(var ia=0;ia<ha.length;ia++){var ja=ha[ia];if(ba[da][ja]!=ca[fa][ja]){ga=false;break;}}if(ga)ea=true;}if(!ea)return false;}return true;}}function m(ba,ca,da){var ea={};for(var fa=0;fa<ba.length;++fa)ea[ba[fa][ca]]=da===undefined?ba[fa]:ba[fa][da];return ea;}function n(ba,ca){var da={};for(var ea=0;ea<ba.length;++ea){if(da[ba[ea][ca]]===undefined)da[ba[ea][ca]]=[];da[ba[ea][ca]].push(ba[ea]);}return da;}function o(ba){var ca={};Object.keys(ba).forEach(function(da){return ca[ba[da]]=da;});return ca;}function p(ba,ca){var da={};Object.keys(ba).forEach(function(ea){da[ea]=ba[ea]?ba[ea][ca]:undefined;});return da;}function q(ba){var ca=ba;if(Array.isArray(ba)){ca=ba.map(q);}else if(i(ba)){ca={};Object.keys(ba).forEach(function(da){return ca[da]=q(ba[da]);});}return ca;}function r(ba){return ba.replace(/([a-z])([A-Z])/g,'$1_$2').toLowerCase();}function s(ba){return ba.replace(/_[a-z]/g,function(ca){return ca.charAt(1).toUpperCase();});}function t(ba,ca){h.define('scalar',function(fa){return typeof fa==='number'||typeof fa==='boolean';});h.isScalar(ca);var da={};for(var ea=0;ea<ba.length;++ea)da[ba[ea]]=ca;return da;}function u(ba,ca,da){var ea={},fa=Object.keys(babelHelpers._extends({},ba,ca));for(var ga=0;ga<fa.length;ga++){var ha=fa[ga],ia=da(ba.hasOwnProperty(ha),ca.hasOwnProperty(ha));if(ia<0){ea[ha]=ba[ha];}else if(ia>0)ea[ha]=ca[ha];}return ea;}function v(ba,ca){return u(ba,ca,function(da,ea){return da&&ea?-1:0;});}function w(ba,ca){return u(ba,ca,function(da,ea){return da?-1:1;});}var x=function(ba,ca,da,ea){ea=ea||function(ha,ia){return ha==ia;};if(ba.length===0)return da;var fa=ca(ba[0]),ga=!ba.some(function(ha){return !ea(ca(ha),fa);});if(ga){return fa;}else return da;};function y(ba,ca){if(Array.isArray(ba)&&Array.isArray(ca)){if(ba.length!==ca.length)return false;for(var da=0;da<ba.length;++da)if(!y(ba[da],ca[da]))return false;return true;}if(i(ba)&&i(ca)){var ea=Object.keys(ba);for(var fa=0;fa<ea.length;fa++){var ga=ea[fa];if(!ca.hasOwnProperty(ga))return false;if(!y(ba[ga],ca[ga]))return false;}return true;}return ba==ca;}function z(ba){var ca={};Object.keys(ba).forEach(function(da){var ea=s(da);ca[ea]=ba[da];});return ca;}function aa(ba){var ca={};Object.keys(ba).forEach(function(da){var ea=r(da);ca[ea]=ba[da];});return ca;}f.exports={arraysOfMapEquals:l,camelCaseKey:s,camelCaseToUnderscoreKeys:aa,clone:q,contains:j,count:k,flip:o,getSharedValue:x,indexedMap:m,invertedMap:n,isEqualWeak:y,isObject:i,mapFill:t,mapIntersectKey:v,mapUnionKey:w,pluckPreserveKey:p,underscoreKey:r,underscoreToCamelCaseKeys:z};},null);
__d('AdsDispatchActionTypeUtils',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,j){var k={};for(var l in j)k[l]=i+l;return k;}f.exports={createActionTypeMap:h};},null);
__d('FileInput.react',['FileInput','InlineBlock.react','React','ReactDOM','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=j.PropTypes,p=j.createClass({displayName:'FileInput',propTypes:{containerClassName:o.string,display:o.oneOf(['inline-block','inline'])},getDefaultProps:function(){return {display:'inline-block'};},render:function(){var q=n("_m",this.props.containerClassName),r="container",s=j.createElement('input',babelHelpers._extends({},this.props,{type:'file',className:n(this.props.className,"_n"),ref:'fileInput'}),undefined);if(this.props.display==='inline-block')return (j.createElement(i,{className:q,ref:r},this.props.children,s));return (j.createElement('span',{className:q,ref:r},this.props.children,s));},componentDidMount:function(){var q=k.findDOMNode(this.refs.fileInput),r=k.findDOMNode(this.refs.container),s=r.firstChild;!(s.nodeName==='A')?m(0):undefined;s.setAttribute('rel','ignore');this._fileInput=new h(r,s,q);},componentWillUnmount:function(){this._fileInput.destroy();this._fileInput=null;},getFileInput:function(){return this._fileInput;},focus:function(){var q=k.findDOMNode(this.refs.fileInput);if(!q.disabled)q.focus();}});f.exports=p;},null);
__d('ContextualDialog.react',['ReactAbstractContextualDialog','ReactLayer'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=i.createClass(h.createSpec({displayName:'ReactContextualDialog'}));f.exports=j;},null);
__d('MenuSeparator.react',['MenuSeparator'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){k.isReactLegacyFactory={};k.type=k;}var j=h;i(j);f.exports=j;},null);
__d('MenuStaticItem.react',['MenuStaticItem'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){k.isReactLegacyFactory={};k.type=k;}var j=h;i(j);f.exports=j;},null);
__d('ProgressBar.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.PropTypes,l=h.createClass({displayName:'UIProgressBar',propTypes:{value:k.number.isRequired,label:k.string,min:k.number,max:k.number,size:k.oneOf(['small','large']),typesetting:k.oneOf(['float','inline']),isRounded:k.bool},getDefaultProps:function(){return {min:0,max:100,size:'large',typesetting:'inline',isRounded:false};},_calculatePercentage:function(){var m=this.props,n=Math.min(Math.max((m.value-m.min)/(m.max-m.min)*100,0),100);return n;},_hasLabel:function(){return this.props.label!=null&&this.props.size!=='small';},_isFloatingLabel:function(){return this._hasLabel()&&this.props.typesetting==='float';},_getLabel:function(){if(!this._hasLabel())return null;return this.props.label;},_getSpacer:function(){if(this._isFloatingLabel())return h.createElement('div',{className:"_6a"},' ');return null;},_getFillArea:function(){var m=Math.round(this._calculatePercentage()),n="_5e4k"+(m===0?' '+"_5e2d":'')+(m===100?' '+"_5e4j":''),o=this._getLabel();if(o)o=h.createElement('span',{className:"_5e2h"},o);var p=h.createElement('div',{className:n,style:{width:m+'%'}},this._getSpacer(),o);return p;},_getUnfillArea:function(){var m=this._getLabel();if(!m)return null;m=h.createElement('span',{className:"_5e2h _5e2n"},m);if(this._isFloatingLabel()){var n=this._calculatePercentage(),o={left:n+'%',width:n+'%'},p=h.createElement('div',{className:"_5e2g",style:o},this._getSpacer(),m);return p;}return m;},render:function(){var m="_5e4h"+(!this._isFloatingLabel()?' '+"_5e2k":'')+(this._isFloatingLabel()?' '+"_5e2j":'')+(this.props.size==='small'?' '+"_5e2l":'')+(this.props.isRounded===true?' '+"_5e2m":'');if(this._isFloatingLabel()){return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,m)}),h.createElement('div',{className:"_5e2k"},this._getUnfillArea(),this._getFillArea())));}else return (h.createElement('div',babelHelpers._extends({},this.props,{className:j(this.props.className,m)}),this._getUnfillArea(),this._getFillArea()));}});f.exports=l;},null);
__d('XUIDialogCloseButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogCloseButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'cancel',label:j._("Close")})));}});f.exports=k;},null);
__d('XUIDialogSaveButton.react',['React','XUIDialogButton.react','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'XUIDialogSaveButton',render:function(){return (h.createElement(i,babelHelpers._extends({},this.props,{action:'confirm',label:j._("Save")})));}});f.exports=k;},null);
__d('XUIMenuSeparator.react',['MenuSeparator.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h;f.exports=i;},null);
__d('XUIMenuStaticItem.react',['MenuStaticItem.react'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h;f.exports=i;},null);
__d('cssVar',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){throw new Error('cssVar'+'("'+i+'"): Unexpected class transformation.');}f.exports=h;},null);
__d('PagesComposerUnpublishedPostsStore',['ReactComposerStoreBase','PagesComposerActionsTypes'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k,l={isDraft:false,scheduledPublishTime:null,backdateConfig:null,isAdsPost:false,stopFeedDistributionDate:null};j=babelHelpers.inherits(m,h);k=j&&j.prototype;function m(){'use strict';var n;k.constructor.call(this,function(){return Object.assign({},l);},function(o){switch(o.type){case i.BACKDATE:n&&n.$PagesComposerUnpublishedPostsStore1(o);break;case i.SET_DRAFT:n&&n.$PagesComposerUnpublishedPostsStore2(o);break;case i.SCHEDULE:n&&n.$PagesComposerUnpublishedPostsStore3(o);break;case i.SET_ADS_POST:n&&n.$PagesComposerUnpublishedPostsStore4(o);break;}});n=this;}m.prototype.getBackdateConfig=function(n){'use strict';return this.getComposerData(n).backdateConfig;};m.prototype.getIsDraft=function(n){'use strict';return this.getComposerData(n).isDraft;};m.prototype.getScheduledPublishTime=function(n){'use strict';return this.getComposerData(n).scheduledPublishTime;};m.prototype.getStopFeedDistributionTime=function(n){'use strict';return this.getComposerData(n).stopFeedDistributionDate;};m.prototype.getIsAdsPost=function(n){'use strict';return this.getComposerData(n).isAdsPost;};m.prototype.$PagesComposerUnpublishedPostsStore1=function(n){'use strict';var o=this.getComposerData(n.composerID);o.backdateConfig={year:n.year,month:n.month,day:n.day,hideFromNewsFeed:n.hideFromNewsFeed};};m.prototype.$PagesComposerUnpublishedPostsStore3=function(n){'use strict';var o=this.getComposerData(n.composerID);o.scheduledPublishTime=n.scheduleDate;o.stopFeedDistributionDate=n.stopFeedDistributionDate;};m.prototype.$PagesComposerUnpublishedPostsStore2=function(n){'use strict';var o=this.getComposerData(n.composerID);o.isDraft=true;};m.prototype.$PagesComposerUnpublishedPostsStore4=function(n){'use strict';var o=this.getComposerData(n.composerID);o.isAdsPost=true;};f.exports=new m();},null);
__d("XUnpublishedPostSuccessController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/pages\/unpublished_posts\/post_success\/",{type:{type:"String",required:true}});},null);
__d('PagesComposer',['ActorURI','Arbiter','AsyncRequest','Bootloader','ComposerXMarauderLogger','ComposerXStore','DOM','PagesComposerUnpublishedPostsStore','Parent','ReloadPage','Run','XUnpublishedPostSuccessController','$','csx','cx','getObjectValues','goURI'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y,z;function aa(){l.logCompleted(y.id);}function ba(da){if(da.hidePost){var ea=m.getAllForComposer(y.id);if(!w(ea).length){var fa=null;if(o.getIsDraft(y.id))fa='draft';if(o.getScheduledPublishTime(y.id))fa='scheduled';if(fa){var ga=s.getURIBuilder().setString('type',fa).getURI();ga=h.create(ga,z);new j().setURI(ga).send();}}aa();return;}if(da.redirect){var ea=m.getAllForComposer(y.id);w(ea).forEach(function(ia){if(ia.reset)ia.reset(ia);});x(da.redirect);aa();return;}if(!da.streamStory){q.now();return;}if(da.backdatedTime){k.loadModules(["PagesStoryPublisher"],function(ia){ia.publish(da);});aa();return;}var ha=ca.renderStory(y,da.streamStory);i.inform('TimelineComposer/on_after_publish',ha,i.BEHAVIOR_PERSISTENT);aa();}var ca={init:function(da,ea){y=t(da);z=ea;var fa=i.subscribe('composer/publish',function(event,ga){if(ga.composer_id===y.id)ba(ga);});r.onLeave(fa.unsubscribe.bind(fa));},renderStory:function(da,ea){var fa=p.bySelector(da,"._2gqw");if(!fa)return;var ga=n.scry(fa,"._5sem")[0],ha=n.prependContent(ga,ea)[0];k.loadModules(["Animation"],function(ia){new ia(ha).from('backgroundColor','#fff8dd').to('backgroundColor','#fff').duration(2000).ease(ia.ease.both).go();});return ha;},replaceByID:function(da,ea){n.replace(t(da),ea);}};f.exports=b.PagesComposer||ca;},null);
__d("XStickerPhotoEditorController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/editor\/sticker_editor\/",{grid_id:{type:"String"},feedback_id:{type:"String"},target_type:{type:"Enum",required:true,enumType:1},photo_fbid:{type:"Int",required:true},latest_fbid:{type:"Int"},initial_tab:{type:"Enum",enumType:1}});},null);