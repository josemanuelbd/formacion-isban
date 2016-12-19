/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './about.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/router/src/router_module';
import * as import4 from '@angular/forms/src/directives';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from '../shared/shared.module';
import * as import7 from './about-routing.module';
import * as import8 from '@angular/common/src/localization';
import * as import9 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import10 from '@angular/forms/src/form_builder';
import * as import11 from '@angular/core/src/di/injector';
import * as import12 from './about.component.ngfactory';
import * as import13 from '@angular/core/src/i18n/tokens';
import * as import14 from './about.component';
import * as import15 from '@angular/router/src/router_config_loader';
class AboutModuleInjector extends import0.NgModuleInjector<import1.AboutModule> {
  _CommonModule_0:import2.CommonModule;
  _RouterModule_1:import3.RouterModule;
  _InternalFormsSharedModule_2:import4.InternalFormsSharedModule;
  _FormsModule_3:import5.FormsModule;
  _ReactiveFormsModule_4:import5.ReactiveFormsModule;
  _SharedModule_5:import6.SharedModule;
  _AboutRoutingModule_6:import7.AboutRoutingModule;
  _AboutModule_7:import1.AboutModule;
  __NgLocalization_8:import8.NgLocaleLocalization;
  __RadioControlRegistry_9:import9.RadioControlRegistry;
  __FormBuilder_10:import10.FormBuilder;
  __ROUTES_11:any[];
  constructor(parent:import11.Injector) {
    super(parent,[import12.AboutComponentNgFactory],([] as any[]));
  }
  get _NgLocalization_8():import8.NgLocaleLocalization {
    if ((this.__NgLocalization_8 == (null as any))) { (this.__NgLocalization_8 = new import8.NgLocaleLocalization(this.parent.get(import13.LOCALE_ID))); }
    return this.__NgLocalization_8;
  }
  get _RadioControlRegistry_9():import9.RadioControlRegistry {
    if ((this.__RadioControlRegistry_9 == (null as any))) { (this.__RadioControlRegistry_9 = new import9.RadioControlRegistry()); }
    return this.__RadioControlRegistry_9;
  }
  get _FormBuilder_10():import10.FormBuilder {
    if ((this.__FormBuilder_10 == (null as any))) { (this.__FormBuilder_10 = new import10.FormBuilder()); }
    return this.__FormBuilder_10;
  }
  get _ROUTES_11():any[] {
        if ((this.__ROUTES_11 == (null as any))) { (this.__ROUTES_11 = [[{
          path: 'about',
          component: import14.AboutComponent
        }
    ]]); }
    return this.__ROUTES_11;
  }
  createInternal():import1.AboutModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._RouterModule_1 = new import3.RouterModule(this.parent.get(import3.ROUTER_FORROOT_GUARD,(null as any)));
    this._InternalFormsSharedModule_2 = new import4.InternalFormsSharedModule();
    this._FormsModule_3 = new import5.FormsModule();
    this._ReactiveFormsModule_4 = new import5.ReactiveFormsModule();
    this._SharedModule_5 = new import6.SharedModule();
    this._AboutRoutingModule_6 = new import7.AboutRoutingModule();
    this._AboutModule_7 = new import1.AboutModule();
    return this._AboutModule_7;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.RouterModule)) { return this._RouterModule_1; }
    if ((token === import4.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_2; }
    if ((token === import5.FormsModule)) { return this._FormsModule_3; }
    if ((token === import5.ReactiveFormsModule)) { return this._ReactiveFormsModule_4; }
    if ((token === import6.SharedModule)) { return this._SharedModule_5; }
    if ((token === import7.AboutRoutingModule)) { return this._AboutRoutingModule_6; }
    if ((token === import1.AboutModule)) { return this._AboutModule_7; }
    if ((token === import8.NgLocalization)) { return this._NgLocalization_8; }
    if ((token === import9.RadioControlRegistry)) { return this._RadioControlRegistry_9; }
    if ((token === import10.FormBuilder)) { return this._FormBuilder_10; }
    if ((token === import15.ROUTES)) { return this._ROUTES_11; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const AboutModuleNgFactory:import0.NgModuleFactory<import1.AboutModule> = new import0.NgModuleFactory(AboutModuleInjector,import1.AboutModule);