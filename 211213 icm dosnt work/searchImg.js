var myImage = new Image(100, 200);
myImage.src = '01.png';

var myImage2 = new Image(100, 200);
myImage2.src = '02.jpg';
//const myImage = document.getElementById("mouse1");
// var myImage2 = new Image(100, 200);
// myImage.src = 'canvasCopy';


searchImage(myImage,myImage2,200,200);

function searchImage(image1, image2, tmplw, tmplh){
  let width = 400;
  let height = 400;
  let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d'),
      sw = image1.width,
      sh = image1.height,
      tw = tmplw || 8,
      th = tmplh || 8;
  canvas.width = tw;
  canvas.height = th;
  ctx.drawImage(image1, 0, 0, sw, sh, 0, 0, tw, th);
  let pixels1 = ctx.getImageData(0,0,tw,th);
  pixels1 = toGrayBinary(pixels1,true,null,true);
  let canvas2 = document.createElement('canvas');
  let ctx2 = canvas2.getContext('2d');
  canvas2.width = tw;
  canvas2.height = th;
 ctx2.drawImage(image2, 0, 0, width, height, 0, 0, tw, th);
  var pixels2 = ctx2.getImageData(0,0,tw,th);
  pixels2 = toGrayBinary(pixels2,true,null,true);
  
  let similar = 0;
  for (var i = 0, len = tw.th; i<len;i++){
    if (pixel1[i] == pixels2[i]) similar++;
  }
  similar = (similar / (tw * th)) * 100;
  return similar;
  
  //console.log(similar);
}

function toGrayBinary(px, binary, value, sn) {
  
// for (i = 0; i < px.data.length; i += 4) {
// 	let count = px.data[i] + px.data[i + 1] + px.data[i + 2];
// 	let colour = 0;
// 	if (count > 383) colour = 255;
	
// 	px.data[i] = colour;
// 	px.data[i + 1] = colour;
// 	px.data[i + 2] = colour;
// 	px.data[i + 3] = 255;
// }

var r, g, b,gr, avg = 0;
    let len = px.data.length;
  //let len = 160000;
  
  console.log(len);
    let s = '';
    for (var i = 0; i < len; i += 4) {                
        avg += (299 * px.data[i] + 587 * px.data[i + 1] + 114 * px.data[i + 2]);            
    }
    avg /= (len / 4);
    for (let i = 0; i < len; i += 4) {                
        r = 299 * px.data[i];
        g = 587 * px.data[i + 1]; 
        b = 114 * px.data[i + 2];                
        if (binary) {                    
            if ((r + g + b) >= (value || avg)) {                        
                gr = 255;                        
                if (sn) s += '1';                    
            } else {                        
                gr = 0;                        
                if (sn) s += '0';                    
            }                    
            gr = (r + g + b) > (value || avg) ? 255 : 0;                
        } else {                    
            gr = r + g + b;                
        }
        px.data[i] = gr;
        px.data[i + 1] = gr; 
        px.data[i + 2] = gr;            
    }
    if (sn) return s;            
    else return pixels;  

}


