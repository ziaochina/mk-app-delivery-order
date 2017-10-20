import config from './config'
import * as data from './data'

export default {
	name: "mk-app-delivery-order",
	version: "1.0.5",
	description: "mk-app-delivery-order",
	meta: data.getMeta(),
	components: [],
	config: config,
	load: (cb) => {
		require.ensure([], require => {
			cb(require('./component'), require('./action'), require('./reducer'))
		}, "mk-app-delivery-order")
	}
}