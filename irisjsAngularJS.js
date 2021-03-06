/**
 * Implements hook_frontend_embed
 * Load in necessary JavaScript files on the client side if entity embed is present
 */

iris.modules.irisjsAngularJS.registerHook("hook_frontend_template", 2, function (thisHook, data) {

  if (!thisHook.context.vars) {

    thisHook.context.vars = { 'tags' : { 'headTags' : {}}};
  }

    thisHook.context.vars.tags.headTags["socket.io"] = {
      type: "script",
      attributes: {
        "src": "/socket.io/socket.io.js"
      },
      rank: -1
    }

    thisHook.context.vars.tags.headTags["angular"] = {
      type: "script",
      attributes: {
        "src": "https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.js"
      },
      rank: 0
    }

    thisHook.context.vars.tags.headTags["irisjsAngularJS"] = {
      type: "script",
      attributes: {
        "src": "/modules/irisjsAngularJS/irisjsAngularJS.js"
      },
      rank: 1
    }

  thisHook.pass(data);

})
