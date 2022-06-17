const rules={
  name:[{
    required:true,
    message:'请输入用户名',
    trigger:'blur'
  },{
    pattern:/^[a-z0-9]{5,10}$/,
    message: '请输入五到十个字符或数字'
  }],
  password: [{
    required:true,
    message:'请输入密码',
    trigger:'blur'
  },{
    pattern:/^[0-9]{3,}$/,
    message: '密码必须是3位以上的数字'
  }]
}

export {
  rules
}
