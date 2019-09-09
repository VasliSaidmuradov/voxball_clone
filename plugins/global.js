import Vue from 'vue'
import vBtn from '~/components/buttons/vBtn.vue'
import iconBase from '~/components/shared/iconBase.vue'
import vClickOutside from 'v-click-outside'
 
Vue.component('vBtn', vBtn)
Vue.component('iconBase', iconBase)
Vue.use(vClickOutside)
