(function() {ഀ
    var o = { exec: function(p) {ഀ
        var p = {};ഀ
        url = "GetSomeData.js";ഀ
        $.post(url, p, function(response) {ഀ
            response = eval(response);ഀ
            if (editorInstance) {ഀ
                //CKEDITOR.instances[editorInstance.name].insertHtml(response[0].value + '<br/>');ഀ
                // Orഀ
                editorInstance.insertHtml(response[0].value + '<br/>');ഀ
            }ഀ
            elseഀ
                alert(response[0].value);ഀ
        });ഀ
    }ഀ
    };ഀ
    CKEDITOR.plugins.add('newplugin', {ഀ
        init: function(editor) {ഀ
            editor.addCommand('newplugin', o);ഀ
            editor.ui.addButton('newplugin', { label: 'New Plugin', icon: this.path + 'newplugin.png', command: 'newplugin' });ഀ
            if (editor.addMenuItems) editor.addMenuItem("newplugin", { label: 'New Plugin', command: 'newplugin', group: 'clipboard', order: 9 });ഀ
            if (editor.contextMenu) editor.contextMenu.addListener(function() {ഀ
                return { "newplugin": CKEDITOR.TRISTATE_OFF };ഀ
            });ഀ
        }ഀ
    });ഀ
})();