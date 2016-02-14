//Jquery CSS Tetris Made by Onur Altınsoy
//www.onuraltinsoy.com
//info@onuraltinsoy.com
//onuraltinsoy80@gmail.com
$(document).ready(function(){
	
  var rows = 20;
  var cols = 10;
  var cellsize = $('#jquerycsstetris').attr('cell-size');
  var grid = $('#jquerycsstetris').attr('grid');
  var bground = $('#jquerycsstetris').attr('bg');
  
  
  
	for(var i=1; i<=rows; i++){
  	for(var j=1; j<=cols; j++){
    	if(i < rows){
    		$('#jquerycsstetris').append('<div class="grid row' + i + ' col' + j + '"></div>');
      }else{
      	$('#jquerycsstetris').append('<div class="grid row' + i + ' col' + j + ' floor"></div>');
      }
    }
  }
  
  var l = [
  	[
    [1,0,0],
    [1,0,0],
    [1,1,0]
    ],
    [
    [0,0,1],
    [1,1,1],
    [0,0,0]
    ],
    [
    [1,1,0],
    [0,1,0],
    [0,1,0]
    ],
    [
    [1,1,1],
    [1,0,0],
    [0,0,0]
    ],
    ];
    
  var t = [
  	[
    	[1,1,1],
      [0,1,0],
    ],
    [
    	[1,0],
      [1,1],
      [1,0]
    ],
    [
    	[0,1,0],
      [1,1,1]
    ],
    [
    	[0,1],
      [1,1],
      [0,1]
    ]
  ];
  
  var z = [
  	[
    	[1,1,0],
      [0,1,1]
    ],
    [
    	[0,1],
      [1,1],
      [1,0]
    ],
    [
    	[1,1,0],
      [0,1,1]
    ],
    [
    	[0,1],
      [1,1],
      [1,0]
    ]
  ];
  
  var s = [
  	[
    	[0,1,1],
      [1,1,0]
    ],
    [
    	[1,0],
      [1,1],
      [0,1]
    ],
    [
    	[0,1,1],
      [1,1,0]
    ],
    [
    	[1,0],
      [1,1],
      [0,1]
    ]
  ];
  
  var i = [
  	[
    	[1],
      [1],
      [1],
      [1]
    ],
    [
    	[1,1,1,1]
    ],
    [
    	[1],
      [1],
      [1],
      [1]
    ],
    [
    	[1,1,1,1]
    ]
  ];
  
  var o = [
  	[
    	[1,1],
      [1,1]
    ],
    [
    	[1,1],
      [1,1]
    ],
    [
    	[1,1],
      [1,1]
    ],
    [
    	[1,1],
      [1,1]
    ]
  ];
  
 var pieces = [l,t,z,s,i,o];
  var piece = pieces[Math.floor(Math.random() * 6)];
  
  var red = '#f80000';
  var brown = '#603636';
  var green = '#00FF00';
  var blue = '#00D4FF';
  var fu = '#EA148C';
  var orange = '#FF2A00';
  
  var colors = [red,brown,green,blue,fu,orange];
  var color = colors[Math.floor(Math.random() * 6)];
  
  var py = 1;
  var down;
  var pr = 5;
  var pos = 0;
  var dropcontrol;
  
  
  function render(p){
  	if(down == true){
    	$('.grid').removeClass('block');
    }
    down = true;
  	for(var k=0; k<p[pos].length; k++){
    	for(var m=0; m<p[pos][k].length; m++){
      	if(p[pos][k][m] == 1){

        	$('.row' + (k + py) + '.col' + (m + pr)).addClass('block').css({'background': color});
          
        }
      }
    }
    
    
    
    py++;
    

	}
  
  function moving(p){
  	$('.grid').css({'background': bground});
    $('.brick').css({'background': '#111'});
  	if(down == true){
    	$('.grid').removeClass('block');
    }
    down = true;
  	for(var kk=0; kk<p[pos].length; kk++){
    	for(var mm=0; mm<p[pos][kk].length; mm++){
      	if(p[pos][kk][mm] == 1){
        	$('.row' + (kk + py) + '.col' + (mm + pr)).addClass('block').css({'background': color});
          
        }
      }
    }
    
        for(var ii=1; ii<=rows; ii++){
          for(var jj=1; jj<=cols; jj++){
            if($('.grid.row' + ii + '.col' + jj).hasClass('brick')){
              $('.grid.row' + (ii - 1) + '.col' + jj).addClass('floor');
            }
          }
          if($('.grid.row' + ii + '.col1').hasClass('brick') && $('.grid.row' + ii + '.col2').hasClass('brick') && $('.grid.row' + ii + '.col3').hasClass('brick') && $('.grid.row' + ii + '.col4').hasClass('brick') && $('.grid.row' + ii + '.col4').hasClass('brick') && $('.grid.row' + ii + '.col6').hasClass('brick') && $('.grid.row' + ii + '.col7').hasClass('brick') && $('.grid.row' + ii + '.col8').hasClass('brick') && $('.grid.row' + ii + '.col9').hasClass('brick') && $('.grid.row' + ii + '.col10').hasClass('brick')){
          		$('#score span').text(parseInt($('#score span').text()) + 10);
          		$('.grid.row' + ii).removeClass('brick');
              $('.grid.row' + (ii - 1)).removeClass('floor');
              if(ii < 20){
              	$('.grid.row' + ii).removeClass('floor');
              }
              
              for(var ze=(ii - 1); ze>1; ze--){
              		for(var zex=1; zex<=10; zex++){
              	if($('.grid.row' + ze + '.col' + zex).hasClass('brick')){
                	$('.grid.row' + ze + '.col' + zex).removeClass('brick');
                  $('.grid.row' + (ze - 1) + '.col' + zex).removeClass('floor');
                  $('.grid.row' + (ze + 1) + '.col' + zex).addClass('brick');
                  }
                }
              }
    
              
              
          }
    		}
    
    if($('.floor').hasClass('block')){
      $('.block').addClass('brick');
      $('.block').removeClass('block');
      down = false;
      py = 1;
      pos = 1;
      pr = 5;
      piece = pieces[Math.floor(Math.random() * 6)];
      color = colors[Math.floor(Math.random() * 6)];
      render(piece);
    }
    
    					
  }
  


    $('body').keydown(function(e){
            if(e.which == 39 && !$('.col' + cols).hasClass('block')){
							pr = pr + 1;
            }
            if(e.which == 37 && !$('.col1').hasClass('block')){
							pr = pr - 1;
            }
            if(e.which == 40){
							py = py + 1;
            }
            if(e.which == 38){
							if(pos < 3){
              	pos++;
              }else{
              	pos = 0;
              }
            }
  });
 
  
  function init(){
  	render(piece);
    setTimeout(init, 1000);
  }
  function mov(){
  	moving(piece);
    setTimeout(mov,10);
  }
  
  init();
  mov();
  
  if(grid == 'true'){
  	$('#jquerycsstetris').css({
    	'width': (parseInt(cellsize) + 2) * cols,
      'height': (parseInt(cellsize) + 2) * rows,
      'display': 'block',
      'margin': '0 auto',
      'position': 'relative'
    });
    $('.grid').css({
    	'width': cellsize,
      'height': cellsize,
      'float': 'left',
      'background': bground,
      'border': '1px solid #333'
    });
  }else{
  	$('#jquerycsstetris').css({
    	'width': cellsize * cols,
      'height': cellsize * rows,
      'display': 'block',
      'margin': '0 auto',
      'position': 'relative'
    });
    $('.grid').css({
    	'width': cellsize,
      'height': cellsize,
      'float': 'left',
      'background': bground
    });
  }
  
});