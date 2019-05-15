/*!CK:765492577!*//*1451622492,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["IoIBe"]); }

__d("MessengerView",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={DETAIL:{COMPOSE:"detail\/compose",THREAD:"detail\/thread"},MASTER:{GROUPS:"master\/groups",PEOPLE:"master\/people",RECENT:"master\/recent"}};},null);
__d('MessengerURIConstants',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={COMPOSE_SUBPATH:'/new',GROUPS_PATH:'/groups',PEOPLE_PATH:'/people',FILTERED_REQUESTS_PATH:'/filtered',MESSAGE_REQUESTS_PATH:'/requests',THREAD_PREFIX:'/t/',GROUP_PREFIX:'group-'};f.exports=h;},null);
__d('MessengerStateProcessor',['MercuryAPIArgsSource','MercuryIDs','MercuryParticipantTypes','MercuryParticipants','MercuryThreadIDMap','MercuryThreads','MercuryVanityIDMap','MessengerURIConstants'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p={preprocess:function(r){var s=r.activeThreadID;if(s){var t=i.getUserIDFromThreadID(s),u=t&&k.getNow(i.getParticipantIDFromUserID(t));if(u&&u.type!==j.EVENT){r.threadKey=u.vanity||t;}else if(t&&!u){var v=i.getParticipantIDFromUserID(t);r.threadKey=n.hasID(v)?n.getVanity(v):t;}else{var w=l.get(),x=w.getServerIDFromClientIDNow(s);r.threadKey=x||s;}}delete r.activeThreadID;return r;},postprocess:function(r){var s=l.get(),t=m.get(),u=q(r.threadKey),v;v=i.isValid(u)?u:s.getClientIDFromServerIDNow(u);if(!v){var w=k.getIDFromVanityOrFBID(u),x=w&&t.getCanonicalThreadToParticipant(w,null,h.MESSENGER);if(x)v=x.thread_id;}if(v){r.activeThreadID=v;r.serverThreadID=s.getServerIDFromClientIDNow(v);}delete r.threadKey;return r;}};function q(r){if(!r)return null;return r.startsWith(o.GROUP_PREFIX)?r.substr(o.GROUP_PREFIX.length):r;}f.exports=p;},null);
__d('MessengerURISerializer',['MessagingTag','MessengerStateProcessor','MessengerURIConstants','MessengerView','URI','WWWBase'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n='/?$',o={serialize:function(q){var r=new l(m.uri);q=i.preprocess(q);switch(q.masterView){case k.MASTER.GROUPS:r.setPath(j.GROUPS_PATH);break;case k.MASTER.PEOPLE:r.setPath(j.PEOPLE_PATH);break;}switch(q.folder){case h.OTHER:r.setPath(j.FILTERED_REQUESTS_PATH);break;case h.PENDING:r.setPath(j.MESSAGE_REQUESTS_PATH);break;}if(q.detailView===k.DETAIL.COMPOSE){r.setPath(r.getPath()+j.COMPOSE_SUBPATH);}else if(q.threadKey)r.setPath(r.getPath()+j.THREAD_PREFIX+q.threadKey);return r;},deserialize:function(q){var r={},s=q.getPath();if(s.match('^'+j.GROUPS_PATH)){r.masterView=k.MASTER.GROUPS;}else if(s.match('^'+j.PEOPLE_PATH)){r.masterView=k.MASTER.PEOPLE;}else r.masterView=k.MASTER.RECENT;if(s.match('^'+j.FILTERED_REQUESTS_PATH)){r.folder=h.OTHER;}else if(s.match('^'+j.MESSAGE_REQUESTS_PATH)){r.folder=h.PENDING;}else r.folder=h.INBOX;if(s.match(j.COMPOSE_SUBPATH+n)){r.detailView=k.DETAIL.COMPOSE;}else{var t=p(s);if(t){r.threadKey=t;r.detailView=k.DETAIL.THREAD;}}return i.postprocess(r);}};function p(q){var r=q.match(j.THREAD_PREFIX+'([^/]+)'+n);return r&&r[1];}f.exports=o;},null);
__d('MessengerActions',['MessengerDispatcher','MessengerURISerializer','MessengerView','URI','goURI','keyMirror'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=m({HIDE_DIALOG:null,REPLACE_STATE:null,SHOW_DIALOG:null}),o={Types:n,changeDetailView:function(q){p(function(r){if(r.detailView!==q)return {detailView:q};});},changeMasterView:function(q){p(function(r){if(r.masterView!==q)return {masterView:q};});},selectThread:function(q){p(function(r){if(r.activeThreadID!==q)return {activeThreadID:q,detailView:j.DETAIL.THREAD};});},changeState:function(q){h.dispatch({type:n.REPLACE_STATE,nextState:q});},showDialog:function(q,r){h.dispatch({type:o.Types.SHOW_DIALOG,dialogClass:q,dialogProps:r});},hideDialog:function(q){h.dispatch({type:o.Types.HIDE_DIALOG,dialogClass:q});},changeFolder:function(q){p(function(r){if(r.folder!==q)return {folder:q};});}};function p(q){var r=i.deserialize(new k(window.location.href)),s=q(r);if(s)l(i.serialize(Object.assign(r,s)));}f.exports=o;},null);
__d('P2PActions',['ChatOpenTab','CurrentEnvironment','MessengerActions','P2PActionConstants','P2PDispatcher','MercuryShareAttachmentRenderLocations'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n={updateCreditCards:function(o){l.dispatch({type:k.CREDIT_CARDS_UPDATED,data:o});},ignoreCreditCardChannelEvents:function(){l.dispatch({type:k.CHANNEL_EVENTS_IGNORED});},allowCreditCardChannelEvents:function(){l.dispatch({type:k.CHANNEL_EVENTS_ALLOWED});},creditCardSaving:function(){l.dispatch({type:k.CREDIT_CARD_SAVING});},addCreditCard:function(o){l.dispatch({type:k.CREDIT_CARD_ADDED,data:o});},addCreditCardError:function(o){l.dispatch({type:k.CREDIT_CARD_ADDED_ERROR,data:o});},addCreditCardErrorCleared:function(){l.dispatch({type:k.CREDIT_CARD_ADDED_ERROR_CLEARED});},updatePresetCreditCard:function(o){l.dispatch({type:k.PRESET_CREDIT_CARD_UPDATED,data:o});},updatePresetCreditCardError:function(o){l.dispatch({type:k.PRESET_CREDIT_CARD_UPDATED_ERROR,data:o});},updateCreditCard:function(o){l.dispatch({type:k.CREDIT_CARD_UPDATED,data:o});},updateCreditCardError:function(o){l.dispatch({type:k.CREDIT_CARD_UPDATED_ERROR,data:o});},deleteCreditCard:function(o){l.dispatch({type:k.CREDIT_CARD_DELETED,data:o});},deleteCreditCardError:function(o){l.dispatch({type:k.CREDIT_CARD_DELETED_ERROR,data:o});},verifyCreditCard:function(o){l.dispatch({type:k.CREDIT_CARD_VERIFIED,data:o});},verifyCreditCardError:function(o){l.dispatch({type:k.CREDIT_CARD_VERIFIED_ERROR,data:o});},updateTransfers:function(o){l.dispatch({type:k.TRANSFERS_UPDATED,data:o});},updateTransfersError:function(o){l.dispatch({type:k.TRANSFERS_UPDATED_ERROR,data:o});},updateNUXTransfers:function(o){l.dispatch({type:k.NUX_TRANSFERS_UPDATED,data:o});},transferAdded:function(o){l.dispatch({type:k.TRANSFER_ADDED,data:o});},transferAddedError:function(o){l.dispatch({type:k.TRANSFER_ADDED_ERROR,data:o});},transferUpdated:function(o){l.dispatch({type:k.TRANSFER_UPDATED,data:o});},transferUpdatedError:function(o){l.dispatch({type:k.TRANSFER_UPDATED_ERROR,data:o});},transferAccepted:function(){l.dispatch({type:k.TRANSFER_ACCEPTED});},transferDeclined:function(o){l.dispatch({type:k.TRANSFER_DECLINED,data:o});},chatSendViewOpened:function(o){function p(){l.dispatch({type:k.CHAT_SEND_VIEW_OPENED,data:o});}if(o.referrer===m.WEB_INBOX){p();}else if(h.canOpenTab()){h.openThread(o.threadID,null,null,p);}else if(i.messengerdotcom){j.selectThread(o.threadID);p();}else p();},chatSendViewClosed:function(o){l.dispatch({type:k.CHAT_SEND_VIEW_CLOSED,data:o});},binNumberValidated:function(o){l.dispatch({type:k.BIN_NUMBER_VALIDATED,data:o});},binNumberValidatedError:function(o){l.dispatch({type:k.BIN_NUMBER_VALIDATED_ERROR,data:o});},friendsListUpdated:function(o){l.dispatch({type:k.FRIENDS_LIST_UPDATED,data:o});},userEligibilityUpdated:function(o){l.dispatch({type:k.USER_ELIGIBILITY_UDPATED,data:o});},showDialog:function(o,p){l.dispatch({type:k.DIALOG_SHOWN,data:{dialogClass:o,dialogProps:p}});},hideDialog:function(){l.dispatch({type:k.DIALOG_CLOSED});},bannerStatesUpdated:function(o){l.dispatch({type:k.BANNER_STATES_UPDATED,data:o});},bannerDismissed:function(o){l.dispatch({type:k.BANNER_DISMISSED,data:o});},bannerCompleted:function(o){l.dispatch({type:k.BANNER_COMPLETED,data:o});},moneypennyTransferCreated:function(o){l.dispatch({type:k.MONEYPENNY_TRANSFER_CREATED,data:o});},moneypennyTransferCreatedError:function(o){l.dispatch({type:k.MONEYPENNY_TRANSFER_CREATED_ERROR,data:o});},addPlatformContext:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_ADDED,data:o});},addPlatformContextError:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_ADDED_ERROR,data:o});},clearPlatformContextSaveErrors:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_SAVE_ERRORS_CLEARED,data:o});},platformContextBannerDismissed:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_BANNER_DISMISSED,data:o});},platformContextProductItemSold:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_PRODUCT_ITEM_SOLD,data:o});},platformContextChanged:function(o){l.dispatch({type:k.PLATFORM_CONTEXT_CHANGED,data:o});},extensiveTransferDetailsLoaded:function(o){l.dispatch({type:k.EXTENSIVE_TRANSFER_DETAILS_UPDATED,data:o});},updateAddresses:function(o){l.dispatch({type:k.ADDRESSES_UPDATED,data:o});},addressSaving:function(){l.dispatch({type:k.ADDRESS_SAVING});},addAddress:function(o){l.dispatch({type:k.ADDRESS_ADDED,data:o});},addAddressError:function(o){l.dispatch({type:k.ADDRESS_ADDED_ERROR,data:o});},addAddressErrorCleared:function(){l.dispatch({type:k.ADDRESS_ADDED_ERROR_CLEARED});},checkoutCartInitiated:function(){l.dispatch({type:k.CHECKOUT_CART_INITIATED});},checkoutCartCreated:function(o){l.dispatch({type:k.CHECKOUT_CART_CREATED,data:o});},checkoutShippingOptionSelected:function(o){l.dispatch({type:k.CHECKOUT_SHIPPING_OPTION_SELECTED,data:o});},checkoutAddressSelected:function(o){l.dispatch({type:k.CHECKOUT_ADDRESS_SELECTED,data:o});},checkoutCreditCardSelected:function(o){l.dispatch({type:k.CHECKOUT_CREDIT_CARD_SELECTED,data:o});},checkoutAddressFormToggled:function(o){l.dispatch({type:k.CHECKOUT_ADDRESS_FORM_TOGGLED,data:o});},checkoutCreditCardFormToggled:function(o){l.dispatch({type:k.CHECKOUT_CREDIT_CARD_FORM_TOGGLED,data:o});},checkoutAddressEditOptionsToggled:function(o){l.dispatch({type:k.CHECKOUT_ADDRESS_EDIT_OPTIONS_TOGGLED,data:o});},checkoutCreditCardEditOptionsToggled:function(o){l.dispatch({type:k.CHECKOUT_CREDIT_CARD_EDIT_OPTIONS_TOGGLED,data:o});},checkoutCreditCardFormValidated:function(o,p){l.dispatch({type:k.CHECKOUT_CREDIT_CARD_FORM_VALIDATED,data:{isValid:o,formData:p}});},checkoutAddressFormValidated:function(o,p){l.dispatch({type:k.CHECKOUT_ADDRESS_FORM_VALIDATED,data:{isValid:o,formData:p}});},checkoutEditCompleted:function(){l.dispatch({type:k.CHECKOUT_EDIT_COMPLETED});},checkoutProcessing:function(o){l.dispatch({type:k.CHECKOUT_PROCESSING,data:o});},checkoutBuyerProfileUpdated:function(o){l.dispatch({type:k.CHECKOUT_BUYER_PROFILE_UPDATED,data:o});},paymentRequestInitiated:function(){l.dispatch({type:k.PAYMENT_REQUEST_INITIATED});},paymentRequestInitiatedComplete:function(){l.dispatch({type:k.PAYMENT_REQUEST_INITIATED_COMPLETE});},paymentRequestCreated:function(o){l.dispatch({type:k.PAYMENT_REQUEST_CREATED,data:o});},paymentRequestCreatedError:function(o){l.dispatch({type:k.PAYMENT_REQUEST_CREATED_ERROR,data:o});},paymentRequestUpdated:function(o){l.dispatch({type:k.PAYMENT_REQUEST_UPDATED,data:o});},paymentRequestDeclineInitiated:function(){l.dispatch({type:k.PAYMENT_REQUEST_DECLINE_INITIATED});},paymentRequestDeclined:function(o){l.dispatch({type:k.PAYMENT_REQUEST_DECLINED,data:o});},paymentRequestDeclineError:function(o){l.dispatch({type:k.PAYMENT_REQUEST_DECLINE_ERROR,data:o});},paymentRequestCancelInitiated:function(){l.dispatch({type:k.PAYMENT_REQUEST_CANCEL_INITIATED});},paymentRequestCanceled:function(o){l.dispatch({type:k.PAYMENT_REQUEST_CANCELED,data:o});},paymentRequestCancelError:function(o){l.dispatch({type:k.PAYMENT_REQUEST_CANCEL_ERROR,data:o});},paymentRequestsFetched:function(o){l.dispatch({type:k.PAYMENT_REQUESTS_FETCHED,data:o});}};f.exports=n;},null);
__d('P2PSendMoneyHelper',['MercuryIDs','P2PActions'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j={bindProfileSendMoneyAction:function(k,l){k.subscribe('itemclick',function(m,n){if(n.item.getValue()==='send_money')i.chatSendViewOpened({referrer:'profile_action',threadID:h.getThreadIDFromUserID(l)});});}};f.exports=j;},null);