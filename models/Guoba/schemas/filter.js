export default [
  {
    component: 'SOFT_GROUP_BEGIN',
    label: '表情过滤设置'
  },
  {
    field: 'filter.enable',
    label: '全局表情过滤',
    component: 'Switch',
    bottomHelpMessage: '是否开启全局表情包过滤功能'
  },
  {
    field: 'filter.keywords',
    label: '过滤关键词',
    component: 'GTags',
    bottomHelpMessage: '触发过滤的关键词列表，匹配到这些关键词时将触发过滤并回复设定内容'
  },
  {
    field: 'filter.replyContent',
    label: '过滤回复内容',
    component: 'Input',
    bottomHelpMessage: '触发过滤时的回复内容，默认为"哼"'
  },
  {
    component: 'SOFT_GROUP_BEGIN',
    label: '白名单设置'
  },
  {
    field: 'filter.whiteGroupList',
    label: '白名单群聊',
    component: 'GTags',
    bottomHelpMessage: '不受过滤限制的群聊列表，可输入群号添加'
  },
  {
    field: 'filter.whiteUserList',
    label: '白名单用户',
    component: 'GTags',
    bottomHelpMessage: '不受过滤限制的用户列表，可输入QQ号添加'
  }
]
