/*
var model = Model({
    resourceName:'表名'
})
*/
window.Model = function (options) {
  let resourceName = options.resourceName;
  return {
    init: function () {
      var APP_ID = 'WJYoikRJ4DxQUjfWCVt7LsdR-gzGzoHsz';
      var APP_KEY = '4V9bbGQPenDckK6ypd8KA3Hu';
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      });
    },
    fetch: function () {
      var query = new AV.Query(resourceName);
      return query.find(); //Promise对象
    },
    save: function (object) {
      var x = AV.Object.extend(resourceName);
      var x = new x();
      return x.save(object);
    }
  };
};