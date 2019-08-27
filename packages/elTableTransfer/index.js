import elTableTransfer from './src/elTableTransfer.vue'

elTableTransfer.install = function(Vue) {
	Vue.component(elTableTransfer.name, elTableTransfer);
}

export default elTableTransfer;