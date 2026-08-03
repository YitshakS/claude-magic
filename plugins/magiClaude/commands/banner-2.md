---
description: magiClaude banner 2
---

Render this as a SINGLE `mcp__visualize__show_widget` call (favicon ✨). Pass the HTML below as `widget_code` EXACTLY as-is — do not modify it. No other text outside the widget.

```html
<h2 class="sr-only">Welcome to magiClaude</h2>
<style>@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@800&display=swap');</style>
<div dir="ltr" style="padding:0; font-family: system-ui,'Segoe UI',Arial,sans-serif;">
  <div id="wc" style="position:relative; height:180px; border-radius:16px; overflow:hidden; background:#0a0a14;">
    <canvas id="wcc" style="position:absolute; inset:0; width:100%; height:100%; display:block;"></canvas>
    <div class="aurora" style="position:absolute; inset:-40%; background:
      radial-gradient(40% 30% at 28% 32%, rgba(127,119,221,0.6), transparent 60%),
      radial-gradient(40% 30% at 72% 42%, rgba(29,158,117,0.5), transparent 60%),
      radial-gradient(45% 35% at 50% 78%, rgba(55,138,221,0.45), transparent 60%);
      filter:blur(28px); animation:swirl 16s linear infinite;"></div>
    <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:10px;">
      <div style="font-size:12px; letter-spacing:0.32em; color:#c9c6ee; text-transform:uppercase;">Welcome to</div>
      <div class="shine" style="font-family:'Orbitron',system-ui,sans-serif; font-size:36px; font-weight:800; letter-spacing:0.02em; line-height:1.3; padding-bottom:0.14em;">magiClaude ✨</div>
    </div>
    <div style="position:absolute; bottom:8px; left:0; right:0; text-align:center; font-size:11px; letter-spacing:0.1em; color:#6f6b96;">v0.1.0</div>
  </div>
</div>
<style>
  @keyframes swirl{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes textGlow{0%,100%{filter:drop-shadow(0 0 3px rgba(127,119,221,0.5))}50%{filter:drop-shadow(0 0 22px rgba(127,119,221,0.95)) drop-shadow(0 0 9px rgba(146,224,200,0.8))}}
  #wc .shine{background:linear-gradient(90deg,#fff,#b9b2ff 25%,#fff 50%,#7fe9c8 75%,#fff); background-size:200% 100%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3.5s linear infinite, textGlow 2.2s ease-in-out infinite;}
  @media (prefers-reduced-motion: reduce){#wc .aurora,#wc .shine{animation:none}}
</style>
<script>
  (function(){
    var c=document.getElementById('wcc'); if(!c)return; var x=c.getContext('2d');
    c.width=c.clientWidth; c.height=c.clientHeight;
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cols=['#7F77DD','#1D9E75','#378ADD','#ffffff']; var P=[];
    for(var i=0;i<48;i++){P.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+0.5,vx:(Math.random()-0.5)*0.35,vy:(Math.random()-0.5)*0.35,c:cols[i%cols.length],a:Math.random()*0.6+0.2});}
    function frame(){x.clearRect(0,0,c.width,c.height);
      for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=c.width;if(p.x>c.width)p.x=0;if(p.y<0)p.y=c.height;if(p.y>c.height)p.y=0;
        x.globalAlpha=p.a;x.fillStyle=p.c;x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill();}
      x.globalAlpha=1; if(!reduce)requestAnimationFrame(frame);}
    frame();
  })();
</script>
```
