<html>
<head><title>测试哈</title>
<link ref="stylesheet" href="/public/css/news.css"/>
</head>
<body>
<ul class="news-view view">
  {%for item in data%}
  <li class="item">
  {{item.title}}
  </li>
  {%endfor%}
</ul>
</body>

</html>