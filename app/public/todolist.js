(function(Vue) {

    console.log('vue ready');

    var todolist_app = new Vue({
        el: '#todolist-app',
        data: {
            data_list: _data_list,
            title: '<%=title%>',

        }
    });

})(Vue);