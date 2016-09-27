module.exports = 
  access_token: '5e4be5fe1066691a39373a96ee88a476126f41331d3e7a4122915002991379e3'
  management_token: 'e80e8738247b842037f5c9bbd6f446430d3b7eef18ffd1bf8aa4bd70dc88b709'
  space_id: 'irxgrz69v8ym'
  content_types:                   # remove these object braces once the config below is filled out
    home:                          # data will be made available through this key on the `contentful` object in your templates
      id: 'home'                    # ID of your content type
    header:
	  id: 'header'  
    #   filters: {}                   # passes filters to the call to contentful's API, see contentful's docs for more info
    #   template: 'path/to/template'  # if present a single page view will be created for each entry in the content type
    #   path: (entry) ->              # override function for generating single page file path, passed in the entry object
