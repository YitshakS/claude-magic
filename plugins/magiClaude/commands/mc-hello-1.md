---
description: magiClaude effects showcase (aurora + particles)
---

Render this as a SINGLE `mcp__visualize__show_widget` call (favicon ✨). Pass the HTML below as `widget_code` EXACTLY as-is — do not modify it. No other text outside the widget.

```html
<h2 class="sr-only">magiClaude effects showcase</h2>
<div dir="ltr" style="padding:0; font-family: system-ui,'Segoe UI',Arial,sans-serif;">
  <div id="fx" style="position:relative; height:340px; border-radius:16px; overflow:hidden; background:#0a0a14;">
    <canvas id="fxc" style="position:absolute; inset:0; width:100%; height:100%; display:block;"></canvas>
    <div class="aurora" style="position:absolute; inset:-40%; background:
      radial-gradient(40% 30% at 30% 30%, rgba(127,119,221,0.55), transparent 60%),
      radial-gradient(40% 30% at 70% 40%, rgba(29,158,117,0.45), transparent 60%),
      radial-gradient(45% 35% at 50% 75%, rgba(216,90,48,0.4), transparent 60%);
      filter:blur(30px); animation:swirl 14s linear infinite;"></div>
    <div style="position:absolute; inset:0; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; gap:12px;">
      <div class="shine" style="font-size:38px; font-weight:600; line-height:1.3; padding-bottom:0.12em;">magiClaude ✨</div>
      <div class="pulse" style="font-size:14px; color:#eae8ff; padding:6px 16px; border:1px solid rgba(255,255,255,0.25); border-radius:999px;">answers that glow</div>
    </div>
  </div>
</div>
<style>
  @keyframes swirl{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
  @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
  @keyframes pulseGlow{0%,100%{box-shadow:0 0 0 0 rgba(127,119,221,0.5)}50%{box-shadow:0 0 22px 4px rgba(127,119,221,0.55)}}
  #fx .shine{background:linear-gradient(90deg,#fff 0%,#b9b2ff 25%,#fff 50%,#7fe9c8 75%,#fff 100%); background-size:200% 100%; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; animation:shimmer 3.5s linear infinite;}
  #fx .pulse{animation:pulseGlow 2.4s ease-in-out infinite;}
  @media (prefers-reduced-motion: reduce){#fx .aurora,#fx .shine,#fx .pulse{animation:none}}
</style>
<script>
  (function(){
    var c=document.getElementById('fxc'); if(!c)return; var x=c.getContext('2d');
    c.width=c.clientWidth; c.height=c.clientHeight;
    var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cols=['#7F77DD','#1D9E75','#378ADD','#D85A30','#ffffff'];
    var P=[]; for(var i=0;i<70;i++){P.push({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2.2+0.5,vx:(Math.random()-0.5)*0.4,vy:(Math.random()-0.5)*0.4,c:cols[i%cols.length],a:Math.random()*0.6+0.2});}
    function frame(){x.clearRect(0,0,c.width,c.height);
      for(var i=0;i<P.length;i++){var p=P[i];p.x+=p.vx;p.y+=p.vy;
        if(p.x<0)p.x=c.width; if(p.x>c.width)p.x=0; if(p.y<0)p.y=c.height; if(p.y>c.height)p.y=0;
        x.globalAlpha=p.a; x.fillStyle=p.c; x.beginPath(); x.arc(p.x,p.y,p.r,0,6.283); x.fill();}
      x.globalAlpha=1; if(!reduce) requestAnimationFrame(frame);}
    frame();
  })();
</script>
```
