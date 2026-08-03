---
description: magiClaude banner 1
---

Render this as a SINGLE `mcp__visualize__show_widget` call (favicon ✨). Pass the HTML below as `widget_code` EXACTLY as-is — do not modify it. No other text outside the widget.

```html
<h2 class="sr-only">Welcome to magiClaude</h2>
<style>@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');</style>
<div dir="ltr" style="padding:0; font-family: system-ui,'Segoe UI',Arial,sans-serif;">
  <div id="st" style="position:relative; height:180px; border-radius:16px; overflow:hidden; background:radial-gradient(120% 120% at 50% 0%, #12102a 0%, #06060f 70%);">
    <canvas id="stc" style="position:absolute; inset:0; width:100%; height:100%; display:block; cursor:crosshair;"></canvas>
    <div style="position:absolute; top:14px; right:0; left:0; display:flex; justify-content:center; pointer-events:none;">
      <svg width="440" height="92" viewBox="0 0 470 92" style="max-width:94%; height:auto;">
        <defs>
          <linearGradient id="ug" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="190" y2="40" spreadMethod="reflect">
            <stop offset="0" stop-color="#ffffff"/><stop offset="0.5" stop-color="#b9b2ff"/><stop offset="1" stop-color="#7fe9c8"/>
            <animateTransform attributeName="gradientTransform" type="translate" from="0 0" to="380 0" dur="3.6s" repeatCount="indefinite"/>
          </linearGradient>
        </defs>
        <g fill="url(#ug)">
          <text x="235" y="20" text-anchor="middle" font-family="system-ui,'Segoe UI',Arial" font-size="12" letter-spacing="5" font-weight="500">WELCOME TO</text>
          <text x="205" y="68" text-anchor="middle" font-family="'Orbitron',system-ui,sans-serif" font-weight="800" font-size="42" letter-spacing="1">magiClaude</text>
          <g transform="translate(356,34) scale(0.82)" stroke="url(#ug)" stroke-width="3.4" stroke-linejoin="round">
            <path d="M26 10 L31.66 24.34 L46 30 L31.66 35.66 L26 50 L20.34 35.66 L6 30 L20.34 24.34 Z"/>
            <path d="M48 6 L50.6 12.4 L57 15 L50.6 17.6 L48 24 L45.4 17.6 L39 15 L45.4 12.4 Z"/>
            <path d="M49 35 L50.77 39.23 L55 41 L50.77 42.77 L49 47 L47.23 42.77 L43 41 L47.23 39.23 Z"/>
          </g>
        </g>
      </svg>
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
<script>
  (function(){
    var c=document.getElementById('stc'); if(!c)return; var x=c.getContext('2d');
    function size(){c.width=c.clientWidth;c.height=c.clientHeight;} size();
    function hexToRgb(h){return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)];}
    var rgb=hexToRgb('#7F77DD');
    var P=[]; function spawn(n){for(var i=0;i<n;i++){P.push({x:Math.random()*c.width,y:Math.random()*c.height,vx:(Math.random()-0.5)*0.6,vy:(Math.random()-0.5)*0.6,r:Math.random()*1.8+0.6});}}
    spawn(80);
    var mx=-999,my=-999;
    c.addEventListener('mousemove',function(e){var b=c.getBoundingClientRect();mx=e.clientX-b.left;my=e.clientY-b.top;});
    c.addEventListener('mouseleave',function(){mx=-999;my=-999;});
    document.querySelectorAll('#st .sw').forEach(function(b){b.addEventListener('click',function(){rgb=hexToRgb(b.getAttribute('data-h'));});});
    document.getElementById('burst').addEventListener('click',function(){spawn(24); if(P.length>200)P.splice(0,P.length-200);});
    var D=118;
    function frame(){x.clearRect(0,0,c.width,c.height);
      for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>c.width)p.vx*=-1;if(p.y<0||p.y>c.height)p.vy*=-1;if(mx>-500){var dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy);if(d<140&&d>0.1){p.vx+=dx/d*0.06;p.vy+=dy/d*0.06;}}p.vx*=0.995;p.vy*=0.995;}
      for(var i=0;i<P.length;i++){for(var j=i+1;j<P.length;j++){var a=P[i],b=P[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<D){x.strokeStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+(1-d/D)*0.55+')';x.lineWidth=0.7;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke();}}}
      for(var i=0;i<P.length;i++){var p=P[i];x.fillStyle='rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+',0.95)';x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();}
      requestAnimationFrame(frame);}
    frame();
  })();
</script>
```
