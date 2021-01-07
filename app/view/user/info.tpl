<html>
<head><title>成员信息</title>
<link ref="stylesheet" href="/public/css/info.css"/>
</head>
<body> 
  <div class="item">
  <p>姓名：{{name}}</p>
  <p>注册时间：{{helper.formateDate(registAt,'YYYY-MM-DD hh:mm')}}</p>
  {% if (memberId)%}
  <p>会员编号：{{memberId}}</p>
  {%endif%}
  <p>喜欢歌手：{{like['singner']}}</p>
  </div> 
</body>

</html>