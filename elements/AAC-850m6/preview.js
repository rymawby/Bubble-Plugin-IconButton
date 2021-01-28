function(instance, properties) {

	var preview = $('<div></div>');
    var span = $('<span>'+ (properties.text || "" ) + '</span>');
	var color = '#007bff';
    switch(properties.type){
        case 'success':
            color = '#28a745';
        	break;
        case 'info':
            color = '#17a2b8';
        	break;
		case 'warning':
            color = '#ffc107';
        	break;
        case 'danger':
            color = '#dc3545';
        	break;
        case 'secondary':
            color = '#6c757d';
        	break;
         case 'light':
            color = '#f8f9fa';
        	break;
         case 'dark':
            color = '#343a40';
        	break;
         case 'link':
            color = '#ffffff';
        	break;
	}
    if(properties.useCustomColors){
        if(properties.fillColor) color = properties.fillColor;
    }
        
    preview.css('background-color', color);
    preview.css('height', 30);
   
    preview.css('padding-left', 40);
	preview.css('padding-top', 11);    
    preview.css('border-radius', 4);
    
    span.css('font-family', 'Helvetica, sans-serif');	
    span.css('color', '#ffffff');
    preview.append(span);
    instance.canvas.append(preview);
    
    
    var icon = $('<div id="icon"><img src="//dd7tel2830j4w.cloudfront.net/f1608682381968x964955999440490600/image-icon.png" /></div>');
    icon.css('width', 25);
    icon.css('height', 25);
    icon.css('position', 'absolute');
    icon.css('z-index', 10);
    icon.css('top', 10);
    icon.css('left', 10);
    instance.canvas.append(icon);
    
    if(properties.autoSize){
        preview.css('width', 25 + span.width());   
    } else {
		span.css('margin', 'auto');
        span.css('display', 'table');
        preview.css('padding-left', 0);
        icon.css('left', ((properties.bubble.width() - span.width())/2) - 25);

    }

}