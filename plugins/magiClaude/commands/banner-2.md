---
description: magiClaude banner 2
---

Render this as a SINGLE `mcp__visualize__show_widget` call (favicon ✨). Pass the HTML below as `widget_code` EXACTLY as-is — do not modify it. No other text outside the widget.

```html
<h2 class="sr-only">magiClaude interactive constellation</h2>
<style>@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');</style>
<div dir="ltr" style="padding:0; font-family: system-ui,'Segoe UI',Arial,sans-serif;">
  <div id="st" style="position:relative; height:180px; border-radius:16px; overflow:hidden; background:radial-gradient(120% 120% at 50% 0%, #12102a 0%, #06060f 70%);">
    <canvas id="stc" style="position:absolute; inset:0; width:100%; height:100%; display:block; cursor:crosshair;"></canvas>
    <div style="position:absolute; top:16px; right:0; left:0; text-align:center; pointer-events:none;">
      <div style="font-size:12px; letter-spacing:0.32em; color:#c9c6ee; text-transform:uppercase; margin-bottom:4px;">Welcome to</div>
      <div class="ttl" style="font-family:'Orbitron',system-ui,sans-serif; font-weight:800; font-size:36px; letter-spacing:0.02em; line-height:1.3; padding-bottom:0.14em;">magiClaude ✨</div>
    </div>
    <div style="position:absolute; bottom:12px; right:0; left:0; display:flex; gap:10px; justify-content:center; align-items:center;">
      <button class="sw" data-h="#7F77DD" style="width:22px;height:22px;border-radius:50%;border:1.5px solid #fff6;background:#7F77DD;cursor:pointer;padding:0;"></button>
      <button class="sw" data-h="#1D9E75" style="width:22px;height:22px;border-radius:50%;border:1.5px solid #fff6;background:#1D9E75;cursor:pointer;padding:0;"></button>
      <button class="sw" data-h="#D85A30" style="width:22px;height:22px;border-radius:50%;border:1.5px solid #fff6;background:#D85A30;cursor:pointer;padding:0;"></button>
      <button class="sw" data-h="#378ADD" style="width:22px;height:22px;border-radius:50%;border:1.5px solid #fff6;background:#378ADD;cursor:pointer;padding:0;"></button>
      <button id="burst" style="font-family:inherit;font-size:12px;padding:5px 14px;border-radius:999px;border:1px solid #ffffff44;background:#ffffff14;color:#fff;cursor:pointer;">✦ burst</button>
    </div>
  </div>
</div>
<style>
  @keyframes shim{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes glow{0%,100%{filter:drop-shadow(0 0 3px rgba(127,119,221,0.5))}50%{filter:drop-shadow(0 0 22px rgba(127,119,221,0.95)) drop-shadow(0 0 9px rgba(146,224,200,0.8))}}
  #st .ttl{background:linear-gradient(90deg,#fff,#b9b2ff 25%,#fff 50%,#7fe9c8 75%,#fff); background-size:200% 100%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shim 3.5s linear infinite, glow 2.2s ease-in-out infinite;}
  #st .sw:hover{transform:scale(1.18);} #st .sw{transition:transform .15s;} #st #burst:hover{background:#ffffff28;}
</style>
<script>
  (function(){
    var c=document.getElementById('stc'); if(!c)return; var x=c.getContext('2d');
    function size(){c.width=c.clientWidth;c.height=c.clientHeight;} size();
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hue='#7F77DD';
    function hexToRgb(h){return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}
    var rgb=hexToRgb(hue);
    var P=[]; function spawn(n){for(var i=0;i<n;i++){P.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-0.5)*0.6,vy:(Math.random()-0.5)*0.6,r:Math.random()*1.8+0.6});}}
    spawn(90);
    var mx=-999,my=-999;
    c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top;});
    c.addEventListener('mouseleave',function(){mx=-999;my=-999;});
    document.querySelectorAll('#st .sw').forEach(function(b){b.addEventListener('click',function(){hue=b.getAttribute('data-h');rgb=hexToRgb(hue);});});
    document.getElementById('burst').addEventListener('click',function(){spawn(30); if(P.length>240)P.splice(0,P.length-240);});
    var D=118;
    function frame(){
      x.clearRect(0,0,c.width,c.height);
      for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>c.width)p.vx*=-1; if(p.y<0||p.y>c.height)p.vy*=-1;
        if(mx>-500){var dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy); if(d<140&&d>0.1){p.vx+=dx/d*0.06;p.vy+=dy/d*0.06;}}
        p.vx*=0.995;p.vy*=0.995;}
      for(var i=0;i<P.length;i++){for(var j=i+1;j<P.length;j++){
        var a=P[i],b=P[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<D){var al=(1-d/D)*0.55; x.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+al+')'; x.lineWidth=0.7; x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}}
      if(mx>-500){for(var i=0;i<P.length;i++){var p=P[i],dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy);
        if(d<170){var al=(1-d/170)*0.9; x.strokeStyle='rgba(255,255,255,'+al+')'; x.lineWidth=0.8; x.beginPath();x.moveTo(p.x,p.y);x.lineTo(mx,my);x.stroke();}}}
      for(var i=0;i<P.length;i++){var p=P[i]; x.fillStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.95)'; x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();}
      if(!reduce)requestAnimationFrame(frame);
    }
    frame();
  })();
</script>
```
