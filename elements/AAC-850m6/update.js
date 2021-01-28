function(instance, properties, context) {

	var btn = $(instance.canvas.children()[0]);
	btn.addClass("btn-" + properties.type);
    if (!properties.autoSize) btn.addClass("btn-block");
    var buttonText = ""
    if(properties.text) buttonText = '&nbsp; ' + properties.text;
    btn.html('<i class="' + properties.iconName + '"></i>' + buttonText );
	
    // accessibility
	if(properties.ariaLabel) {
        console.log(properties.ariaLabel);
        btn.attr('aria-label', properties.ariaLabel);
        btn.attr('title', properties.ariaLabel);
        
    }
    
	// modify background colours start here
    if(properties.useCustomColors){
        var fillColor = properties.fillColor
        if(!properties.fillColor){
            fillColor = '#007bff';
            switch(properties.type){
                case 'success':
                    fillColor = '#28a745';
                    break;
                case 'info':
                    fillColor = '#17a2b8';
                    break;
                case 'warning':
                    fillColor = '#ffc107';
                    break;
                case 'danger':
                    fillColor = '#dc3545';
                    break;
                case 'secondary':
                    fillColor = '#6c757d';
                    break;
                 case 'light':
                    fillColor = '#f8f9fa';
                    break;
                 case 'dark':
                    fillColor = '#343a40';
                    break;
                 case 'link':
                    fillColor = '#ffffff';
                    break;
              }	
        }
	    if(properties.fillColor) btn.css('background-color', fillColor);
        if(properties.customFontColor) btn.css('color', properties.customFontColor);
    	if(properties.borderColor) btn.css('border-color', properties.borderColor);
        if(properties.hoverColor){
            btn.hover(
              function() {
                $(this).css("background-color", properties.hoverColor);
              }, function() {
                $(this).css("background-color", fillColor); 
              });
        }
        if(properties.font) btn.css('font-family', properties.font);
        if(properties.bold) btn.css('font-weight', "bold");
        if(properties.size) btn.css('font-size', properties.size);
    }
    
    

}
