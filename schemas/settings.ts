export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    groups: [{
      name:'all-fields',
      title:'MyTitle',
      default: true
    },{
      name:'regular',
      title:'Regular',
    }], 
    fields: [
      {
        name: 'sitetitle',
        type: 'string',
        title: 'Site Title',  
        group: 'all-fields'      
      },
      {
        name: 'sitetitle2',
        type: 'string',
        title: 'Site Title',  
        group: 'regular'      
      }
    ]
  }