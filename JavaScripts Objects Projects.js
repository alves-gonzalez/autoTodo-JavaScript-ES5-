let autoTodo = new function() {
    this.clickItem = function(item) {
        item.click();
    };

    this.toggleAll = function() {
        document.querySelector('.toggle-all').click();
    };

    this.selectItemX = function(x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') input.toggle').click();
    };

    this.deleteItemX = function(x) {
        document.querySelector('ul.todo-list > li:nth-child(' + x + ') button.destroy').click();
    };

    this.clearCompleted = function() {
        document.querySelector('button.clear-completed').click();
    };

    this.filterAll = function() {
        location.hash = '/';
    };

    this.filterCompleted = function() {
        location.hash = '/completed';
    };

    this.filterActive = function() {
        location.hash = '/active';
    };

    this.createTodo = function(text) {
        var input = document.querySelector('body > section > header > input');
        var todoText = text || 'name';
        input.value = todoText;

        // simulate pressing Enter instead of 'change'
        var ev = new KeyboardEvent('keydown', {
            key: 'Enter',
            keyCode: 13,
            which: 13,
            bubbles: true
        });
        input.dispatchEvent(ev);
    };

    this.amendTodo = function(x) {
        document
            .querySelector('ul.todo-list > li:nth-child(' + x + ') label')
            .dispatchEvent(new Event('dblclick', { bubbles: true }));
        document
            .querySelector('ul.todo-list > li:nth-child(' + x + ') .edit')
            .value = 'amended';
        document
            .querySelector('ul.todo-list > li:nth-child(' + x + ') .edit')
            .dispatchEvent(new Event('blur'));
    };
};
