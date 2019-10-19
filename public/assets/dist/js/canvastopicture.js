/*
*Created By Abdul Ghaffar Mallah
*/

var GMPlugins = new Object();

GMPlugins.convertHtmlToImage = function(imagesContainer){
	var canvas = $("<canvas/>");
	canvas[0].width = $(imagesContainer).width();
	canvas[0].height = $(imagesContainer).height();

         var canOffset = $(imagesContainer).offset();

console.log("Canvas: L: " +canOffset.left +" T: " +canOffset.top +" w: " +canvas[0].width +" h: " +canvas[0].height);
	
    var ctx = canvas[0].getContext('2d');

	var images = $(imagesContainer +" .img-responsive");

           

        images.each(function(){
                var imgWidth = this.clientWidth;
		var imgHeight = this.clientHeight;
		var left = $(this).offset().left - canOffset.left;
		var top = $(this).offset().top - canOffset.top;

                 console.log("L: " +left +" t: " +top +" w: " +imgWidth +" h: " +imgHeight);
		ctx.drawImage(this, left, top , imgWidth, imgHeight);
        });
        
	var imgageData = canvas[0].toDataURL("image/png");
    var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
 
	var link = document.createElement("a");
	link.download = "Skets.png";
	link.href = newData;
	link.click(download);
}