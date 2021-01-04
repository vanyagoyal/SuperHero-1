var canvas = new fabric.Canvas("myCanvas");

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

player_obj = "";
block_obj = "";

function player_update(){
    fabric.Image.fromURL("superman.png",function(Img){
        player_obj = Img;
        player_obj.scaleToWidth(100);
        player_obj.scaleToHeight(120);
        player_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_obj);
    });
}

function new_image(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block_obj = Img;
        block_obj.scaleToWidth(100);
        block_obj.scaleToHeight(120);
        block_obj.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_obj);
    });
}