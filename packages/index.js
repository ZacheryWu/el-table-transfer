import elTableTransfer from './elTableTransfer'

const components = [ elTableTransfer ];

function install(Vue) {
	components.map(component => {
		Vue.component(component.name, component);
	})
}

if(typeof window !== undefined && window.Vue) {
	install(window.Vue);
}

export default {
	elTableTransfer,
	install
}