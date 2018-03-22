import Vue from 'vue';
import VueHighCharts from 'vue-highcharts';
import _ from 'lodash';
import axios from 'axios';
import accounting from 'accounting';
import moment from 'moment';

// Initial Vue Libraries.
import './libraries';
import * as mixins from './mixins';
import App from './App';
import router from './router';
import { store } from './store';

// Global Vue Components.
import Icon from './components/Icon';
import Input from './components/Input';
import Select from './components/Select';
import TokenIcon from './components/TokenIcon';

// Global Libraries.
window._ = _;
window.accounting = accounting;
window.axios = axios;
window.moment = moment;

// Setup Vue.
if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// Vue Plugins.
Vue.use(VueHighCharts);

// Register global mixins.
_.each(mixins, (mixin) => {
  Vue.mixin(mixin);
});

// Register global components.
Vue.component('aph-icon', Icon);
Vue.component('aph-select', Select);
Vue.component('aph-input', Input);
Vue.component('token-icon', TokenIcon);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App,
}).$mount('#app');
