webpackJsonp([0],{348:function(e,t,n){"use strict";var o=n(99),r=n(352),i=n(150),a=n(101),_=n(151),l=n(152),u=n(31),s=n(350),c=n(45),h=n(34),d=n(100),p=n(351),y=n(61),m=n(349),g=n(36),C=function(e){function t(t){e.call(this,t,[p.LazyComponentNgFactory],[])}return __extends(t,e),Object.defineProperty(t.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new c.NgLocaleLocalization(this.parent.get(y.LOCALE_ID))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_RadioControlRegistry_9",{get:function(){return null==this.__RadioControlRegistry_9&&(this.__RadioControlRegistry_9=new h.RadioControlRegistry),this.__RadioControlRegistry_9},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new d.FormBuilder),this.__FormBuilder_10},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_11",{get:function(){return null==this.__ROUTES_11&&(this.__ROUTES_11=[[{path:"",component:m.LazyComponent}]]),this.__ROUTES_11},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new i.CommonModule,this._RouterModule_1=new a.RouterModule(this.parent.get(a.ROUTER_FORROOT_GUARD,null)),this._InternalFormsSharedModule_2=new _.InternalFormsSharedModule,this._FormsModule_3=new l.FormsModule,this._ReactiveFormsModule_4=new l.ReactiveFormsModule,this._SharedModule_5=new u.SharedModule,this._LazyRoutingModule_6=new s.LazyRoutingModule,this._LazyModule_7=new r.LazyModule,this._LazyModule_7},t.prototype.getInternal=function(e,t){return e===i.CommonModule?this._CommonModule_0:e===a.RouterModule?this._RouterModule_1:e===_.InternalFormsSharedModule?this._InternalFormsSharedModule_2:e===l.FormsModule?this._FormsModule_3:e===l.ReactiveFormsModule?this._ReactiveFormsModule_4:e===u.SharedModule?this._SharedModule_5:e===s.LazyRoutingModule?this._LazyRoutingModule_6:e===r.LazyModule?this._LazyModule_7:e===c.NgLocalization?this._NgLocalization_8:e===h.RadioControlRegistry?this._RadioControlRegistry_9:e===d.FormBuilder?this._FormBuilder_10:e===g.ROUTES?this._ROUTES_11:t},t.prototype.destroyInternal=function(){},t}(o.NgModuleInjector);t.LazyModuleNgFactory=new o.NgModuleFactory(C,r.LazyModule)},349:function(e,t,n){"use strict";var o=n(0),r=function(){function e(){}return e=__decorate([o.Component({changeDetection:o.ChangeDetectionStrategy.Default,encapsulation:o.ViewEncapsulation.Emulated,selector:"lazy",template:"\n    <p>\n      Lazy component\n    </p>\n  "}),__metadata("design:paramtypes",[])],e)}();t.LazyComponent=r},350:function(e,t,n){"use strict";var o=n(0),r=n(35),i=n(349),a=function(){function e(){}return e=__decorate([o.NgModule({imports:[r.RouterModule.forChild([{path:"",component:i.LazyComponent}])]}),__metadata("design:paramtypes",[])],e)}();t.LazyRoutingModule=a},351:function(e,t,n){"use strict";function o(e,t,n){return null===p&&(p=e.createRenderComponentType("",0,c.ViewEncapsulation.None,[],{})),new y(e,t,n)}function r(e,t,n){return null===g&&(g=e.createRenderComponentType("",0,c.ViewEncapsulation.None,m,{})),new C(e,t,n)}var i=n(349),a=n(46),_=n(25),l=n(5),u=n(16),s=n(6),c=n(33),h=n(32),d=function(){function e(){this.changed=!1,this.context=new i.LazyComponent}return e.prototype.detectChangesInInputProps=function(e,t,n){var o=this.changed;return this.changed=!1,o},e.prototype.detectChangesInHostProps=function(e,t,n){},e}();t.Wrapper_LazyComponent=d;var p=null,y=function(e){function t(n,o,r){e.call(this,t,p,u.ViewType.HOST,n,o,r,s.ChangeDetectorStatus.CheckAlways)}return __extends(t,e),t.prototype.createInternal=function(e){this._el_0=l.selectOrCreateRenderHostElement(this.renderer,"lazy",l.EMPTY_INLINE_ARRAY,e,null),this._appEl_0=new _.AppElement(0,null,this,this._el_0);var t=r(this.viewUtils,this.injector(0),this._appEl_0);return this._LazyComponent_0_4=new d,this._appEl_0.initComponent(this._LazyComponent_0_4.context,[],t),t.create(this._LazyComponent_0_4.context,this.projectableNodes,null),this.init([].concat([this._el_0]),[this._el_0],[],[]),this._appEl_0},t.prototype.injectorGetInternal=function(e,t,n){return e===i.LazyComponent&&0===t?this._LazyComponent_0_4.context:n},t.prototype.detectChangesInternal=function(e){this._LazyComponent_0_4.detectChangesInInputProps(this,this._el_0,e),this.detectContentChildrenChanges(e),this._LazyComponent_0_4.detectChangesInHostProps(this,this._el_0,e),this.detectViewChildrenChanges(e)},t}(a.AppView);t.LazyComponentNgFactory=new h.ComponentFactory("lazy",o,i.LazyComponent);var m=[],g=null,C=function(e){function t(n,o,r){e.call(this,t,g,u.ViewType.COMPONENT,n,o,r,s.ChangeDetectorStatus.CheckAlways)}return __extends(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.declarationAppElement.nativeElement);return this._text_0=this.renderer.createText(t,"\n    ",null),this._el_1=l.createRenderElement(this.renderer,t,"p",l.EMPTY_INLINE_ARRAY,null),this._text_2=this.renderer.createText(this._el_1,"\n      Lazy component\n    ",null),this._text_3=this.renderer.createText(t,"\n  ",null),this.init([],[this._text_0,this._el_1,this._text_2,this._text_3],[],[]),null},t}(a.AppView);t.viewFactory_LazyComponent0=r},352:function(e,t,n){"use strict";var o=n(0),r=n(31),i=n(349),a=n(350),_=function(){function e(){}return e=__decorate([o.NgModule({imports:[r.SharedModule,a.LazyRoutingModule],declarations:[i.LazyComponent]}),__metadata("design:paramtypes",[])],e)}();t.LazyModule=_}});
//# sourceMappingURL=05e7dd615b9c1582eaa6.js.map