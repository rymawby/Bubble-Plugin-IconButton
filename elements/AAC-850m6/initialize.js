function(instance, context) {

	var btn = $('<button id="but" class="btn" type="submit"></button>');
    
    function clickHandler(e) {
        
        instance.triggerEvent("click");
        e.preventDefault(); 
    }
    btn.on('click', clickHandler);
    instance.canvas.append(btn);
    
    
}
