<h1> webs_api</h1>
API는 다른 애플리케이션의 기능을 사용할 수있게 해주는 창구 현재 nodeCat이 node bird의 api를 사용하고있습니다.
모바일서버를 구성할떄 서버를 REST API 방식으로 구현하면됩니다.
API 사용자가 API를 쉽게 사용할수있도록 사용방법 ,요청방식, 응답내용에 관한문서를 준비합시다.
JWT토큰의 내용은 공개되며 변조될수있다는 점을 기억합시다. 단,시그니처를 확인하면 변조되었지 체크 할수있습니다.
토큰을 사용해 API의 오남용을 막습니다. 요청 헤더에 토큰이 있는지를 항상 확인하는것이 좋습니다.
app.use 외에도 router.use를 활용해 라우터간에 고통되는 로직을 처리 할 수있습니다.

