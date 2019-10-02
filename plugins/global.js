import Vue from 'vue'
import vBtn from '~/components/buttons/vBtn.vue'
import vClickOutside from 'v-click-outside'
import vEditor from '~/components/inputs/vEditor.vue'

Vue.component('vBtn', vBtn)
Vue.component('vEditor', vEditor)
Vue.use(vClickOutside)
