const commentRoutes = require('./comment')
const poiRoutes = require('./poi')


module.exports = app => {
  app.use('/comment', commentRoutes )
  app.use('/poi', poiRoutes )
}
