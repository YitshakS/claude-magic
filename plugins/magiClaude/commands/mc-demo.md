---
description: Show the magiClaude capabilities demo (interactive widget)
---

Render the magiClaude capabilities demo as a SINGLE `mcp__visualize__show_widget` call (favicon a sparkle ✨). Pass the HTML below as the `widget_code` EXACTLY as-is — do not modify, translate, restyle, or shorten it. Do not add any other text outside the widget.

```html
<h2 class="sr-only">magiClaude capabilities demo</h2>
<style>
  #cap{font-family:system-ui,'Segoe UI','Arial Hebrew',Tahoma,Arial,sans-serif;color:var(--text-primary);display:flex;flex-direction:column;gap:14px}
  #cap .card{background:var(--surface-2);border:0.5px solid var(--border);border-radius:12px;padding:1rem 1.15rem}
  #cap .metrics{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:12px}
  #cap .charts{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px}
  #cap .charts .card{display:flex;flex-direction:column}
  #cap .m{border-radius:12px;padding:0.85rem 1rem;border:0.5px solid}
  #cap .m.g{background:var(--bg-success);border-color:var(--border-success)}
  #cap .m.n{background:var(--surface-1);border-color:var(--border)}
  #cap .m.b{background:var(--bg-accent);border-color:var(--border-accent)}
  #cap .m .lbl{font-size:12px;color:var(--text-secondary)}
  #cap .m .val{font-size:24px;font-weight:500;color:var(--text-primary);font-variant-numeric:tabular-nums}
  #cap .qbtn{font-family:inherit;font-size:13px;padding:5px 12px;border-radius:999px;border:0.5px solid var(--border-strong);background:transparent;color:var(--text-primary);cursor:pointer}
  #cap .qbtn.on{background:var(--bg-accent);color:var(--text-accent);border-color:var(--border-accent)}
  #cap .opt{font-family:inherit;font-size:14px;padding:9px 14px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:transparent;color:var(--text-primary);cursor:pointer;text-align:left;display:flex;align-items:center;gap:10px}
  #cap .opt:hover{background:var(--surface-1)}
  #cap .opt .num{width:20px;height:20px;border-radius:50%;background:var(--bg-accent);color:var(--text-accent);display:flex;align-items:center;justify-content:center;font-size:12px;flex:0 0 auto}
  #cap .copy,#cap .qt{font-size:12px;padding:4px 12px;border-radius:var(--radius);border:0.5px solid var(--border-strong);background:transparent;color:var(--text-primary);cursor:pointer}
  #cap .copy:hover,#cap .qt:hover{background:var(--surface-1)}
  #cap pre{margin:0;background:var(--surface-0);border:0.5px solid var(--border);border-radius:8px;padding:10px;overflow-x:auto}
  #cap canvas{display:block;width:100%;height:100%}
  #cap #bars,#cap #donut{cursor:pointer}
  #cap .hljs-keyword{color:#7F77DD}#cap .hljs-string{color:#1D9E75}#cap .hljs-number{color:#BA7517}#cap .hljs-title,#cap .hljs-attr,#cap .hljs-built_in{color:#378ADD}#cap .hljs-comment{color:var(--text-muted);font-style:italic}
  #cap .donwrap{display:flex;align-items:flex-end;gap:18px;flex:1}
  #cap .leg{display:flex;flex-direction:column;gap:6px;margin-left:auto}
  #cap .li{display:flex;align-items:center;gap:8px;font-size:14px;padding:3px 6px;border-radius:6px;cursor:pointer;transition:background .12s,transform .12s}
  #cap .li .dot{width:12px;height:12px;border-radius:3px;flex:0 0 auto}
  #cap .li.on{background:var(--surface-1);transform:translateX(2px);font-weight:500}
  #cap .alert{display:flex;align-items:center;gap:8px;padding:9px 12px;border-radius:8px;font-size:14px;border:0.5px solid}
  #cap .alert.warn{background:var(--bg-warning);color:var(--text-warning);border-color:var(--border-warning)}
  #cap .alert.ok{background:var(--bg-success);color:var(--text-success);border-color:var(--border-success)}
  #cap .rtlblock{direction:rtl}
  #cap .rtlblock p{text-align:right;line-height:1.85;margin:0 0 8px;font-size:15px}
  #cap .rtlblock p:last-child{margin-bottom:0}
  #cap .rtlblock code,#cap .rtlblock .ltr{unicode-bidi:isolate;direction:ltr}
</style>
<div id="cap" dir="ltr">

  <div style="display:flex;align-items:center;gap:8px;">
    <i class="ti ti-sparkles" style="font-size:22px;color:#7F77DD;" aria-hidden="true"></i>
    <span style="font-size:18px;font-weight:500;">magiClaude — capabilities</span>
  </div>

  <div class="metrics">
    <div class="m g"><div class="lbl">Downloads</div><div class="val">1,240</div></div>
    <div class="m n"><div class="lbl">Languages</div><div class="val">7</div></div>
    <div class="m b"><div class="lbl">Avg. render</div><div class="val">0.9s</div></div>
  </div>

  <div class="charts">
    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
        <span style="font-weight:500;">Revenue by quarter</span>
        <span id="qval" style="font-size:18px;font-weight:500;color:var(--text-accent);font-variant-numeric:tabular-nums;">$300k</span>
      </div>
      <div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
        <button class="qbtn" data-i="0">Q1</button><button class="qbtn" data-i="1">Q2</button>
        <button class="qbtn on" data-i="2">Q3</button><button class="qbtn" data-i="3">Q4</button>
      </div>
      <div style="position:relative;height:190px;"><canvas id="bars"></canvas></div>
    </div>

    <div class="card">
      <div style="font-weight:500;margin-bottom:10px;">Traffic sources</div>
      <div class="donwrap">
        <div style="position:relative;width:185px;height:185px;flex:0 0 auto;"><canvas id="donut"></canvas></div>
        <div class="leg">
          <div class="li on" data-i="0"><span class="dot" style="background:#7F77DD"></span>Organic — 40%</div>
          <div class="li" data-i="1"><span class="dot" style="background:#1D9E75"></span>Direct — 25%</div>
          <div class="li" data-i="2"><span class="dot" style="background:#378ADD"></span>Referral — 20%</div>
          <div class="li" data-i="3"><span class="dot" style="background:#D85A30"></span>Social — 15%</div>
        </div>
      </div>
    </div>
  </div>

  <div class="card" style="display:flex;flex-direction:column;gap:8px;">
    <span style="font-weight:500;">Status messages</span>
    <div class="alert warn"><i class="ti ti-alert-triangle" style="font-size:16px;" aria-hidden="true"></i>Warning — your token expires in 5 minutes.</div>
    <div class="alert ok"><i class="ti ti-circle-check" style="font-size:16px;" aria-hidden="true"></i>Success — deploy completed in 0.9s.</div>
  </div>

  <div class="card rtlblock">
    <div style="font-weight:500;margin-bottom:8px;text-align:left;direction:ltr;">BiDi — your language &amp; direction (LTR/RTL)</div>
    <p>Deployment נכשל אתמול בלילה כי ה-<code>token</code> פג אחרי 15 דקות; תיקנתי עם <code>refresh</code> אוטומטי ב-<code>interceptor</code>.</p>
    <p>Deployment فشل الليلة لأن الـ<code>token</code> انتهى بعد 15 دقيقة؛ أصلحته بـ<code>refresh</code> تلقائي في الـ<code>interceptor</code>.</p>
  </div>

  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-weight:500;">Code — with copy button</span>
      <button class="copy" data-t="cd"><i class="ti ti-copy" style="font-size:13px;vertical-align:-2px;margin-right:3px;" aria-hidden="true"></i>copy</button>
    </div>
    <pre><code id="cd" class="language-javascript" style="font-family:ui-monospace,Consolas,monospace;font-size:13px;line-height:1.6;color:var(--text-primary);">axios.interceptors.response.use(null, async (err) =&gt; {
  if (err.response?.status === 401) await refreshToken();
  return Promise.reject(err);
});</code></pre>
  </div>

  <div class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
      <span style="font-weight:500;">Quotable block</span>
      <button class="qt" id="quoteBtn"><i class="ti ti-quote" style="font-size:14px;vertical-align:-2px;margin-right:4px;" aria-hidden="true"></i>quote</button>
    </div>
    <div id="quoteText" style="font-size:14px;line-height:1.7;color:var(--text-secondary);">magiClaude renders every reply as a beautiful, colorful widget — in the language and direction you write in.</div>
  </div>

  <div class="card">
    <div style="font-weight:500;margin-bottom:4px;">Which plan should I set up?</div>
    <div style="font-size:13px;color:var(--text-secondary);margin-bottom:10px;">Click an option — it goes into your message box.</div>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <button class="opt" data-o="Basic"><span class="num">1</span>Basic — free, core features</button>
      <button class="opt" data-o="Pro"><span class="num">2</span>Pro — teams and priority support</button>
      <button class="opt" data-o="Enterprise"><span class="num">3</span>Enterprise — SSO, SLA, dedicated</button>
    </div>
  </div>

</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>
  (function(){
    try{document.querySelectorAll('#cap pre code').forEach(function(el){hljs.highlightElement(el);});}catch(e){}
    function copyText(t,cb){function fb(){try{var ta=document.createElement('textarea');ta.value=t;ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.focus();ta.select();var ok=document.execCommand('copy');document.body.removeChild(ta);cb(ok);}catch(e){cb(false);}}
      if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){cb(true);}).catch(fb);}else{fb();}}
    document.querySelectorAll('#cap .copy').forEach(function(btn){btn.addEventListener('click',function(){
      var el=document.getElementById(btn.getAttribute('data-t')),t=el?el.innerText:'';
      copyText(t,function(ok){btn.innerHTML=ok?'<i class="ti ti-check" style="font-size:13px;vertical-align:-2px;margin-right:3px;"></i>copied':'select';setTimeout(function(){btn.innerHTML='<i class="ti ti-copy" style="font-size:13px;vertical-align:-2px;margin-right:3px;"></i>copy';},1500);});
    });});
    var qb=document.getElementById('quoteBtn');
    qb.addEventListener('click',function(){
      var t=document.getElementById('quoteText').innerText;
      if(typeof sendPrompt==='function'){sendPrompt('> '+t+'\n\n');}
      qb.innerHTML='<i class="ti ti-check" style="font-size:14px;vertical-align:-2px;margin-right:4px;"></i>quoted';
      setTimeout(function(){qb.innerHTML='<i class="ti ti-quote" style="font-size:14px;vertical-align:-2px;margin-right:4px;"></i>quote';},1600);
    });
    document.querySelectorAll('#cap .opt').forEach(function(b){b.addEventListener('click',function(){
      var v=b.getAttribute('data-o'); if(typeof sendPrompt==='function'){sendPrompt(v);}
    });});
    var data=[120,190,300,250], vals=['$120k','$190k','$300k','$250k'], barSel=2, barHover=null, pad=20, gap=16;
    var qbtns=Array.prototype.slice.call(document.querySelectorAll('#cap .qbtn'));
    var bc=document.getElementById('bars'), bx=bc.getContext('2d');
    function effBar(){return barHover!==null?barHover:barSel;}
    function drawBars(){
      bc.width=bc.clientWidth;bc.height=bc.clientHeight;
      var w=bc.width,h=bc.height,n=data.length,max=Math.max.apply(null,data),act=effBar();
      var bw=(w-pad*2-gap*(n-1))/n; bx.clearRect(0,0,w,h);
      for(var i=0;i<n;i++){var bh=(data[i]/max)*(h-pad-18),xx=pad+i*(bw+gap),yy=h-18-bh;
        bx.fillStyle=(i===act)?'#7F77DD':'rgba(127,119,221,0.28)';
        var r=6;bx.beginPath();bx.moveTo(xx,yy+r);bx.arcTo(xx,yy,xx+r,yy,r);bx.arcTo(xx+bw,yy,xx+bw,yy+r,r);bx.lineTo(xx+bw,h-18);bx.lineTo(xx,h-18);bx.closePath();bx.fill();
        bx.fillStyle='#888780';bx.font='12px system-ui';bx.textAlign='center';bx.fillText('Q'+(i+1),xx+bw/2,h-4);}
    }
    function renderBars(){drawBars(); var act=effBar(); qbtns.forEach(function(o){o.classList.toggle('on', +o.getAttribute('data-i')===act);}); document.getElementById('qval').textContent=vals[act];}
    function setSel(i){barSel=i;barHover=null;renderBars();}
    qbtns.forEach(function(b){var i=+b.getAttribute('data-i');
      b.addEventListener('click',function(){setSel(i);});
      b.addEventListener('mouseenter',function(){barHover=i;renderBars();});
      b.addEventListener('mouseleave',function(){barHover=null;renderBars();});});
    function barHit(e){var w=bc.width,n=data.length,bw=(w-pad*2-gap*(n-1))/n;
      for(var i=0;i<n;i++){var xx=pad+i*(bw+gap); if(e.offsetX>=xx&&e.offsetX<=xx+bw)return i;} return null;}
    bc.addEventListener('mousemove',function(e){barHover=barHit(e);renderBars();});
    bc.addEventListener('mouseleave',function(){barHover=null;renderBars();});
    bc.addEventListener('click',function(e){var i=barHit(e); if(i!==null)setSel(i);});
    var dc=document.getElementById('donut'), dx=dc.getContext('2d');
    var seg=[[40,'#7F77DD'],[25,'#1D9E75'],[20,'#378ADD'],[15,'#D85A30']], donSel=0, hover=null;
    var lis=Array.prototype.slice.call(document.querySelectorAll('#cap .li'));
    function eff(){return hover!==null?hover:donSel;}
    function drawDonut(){
      dc.width=dc.clientWidth;dc.height=dc.clientHeight;
      var w=dc.width,h=dc.height,cx=w/2,cy=h/2,R=Math.min(w,h)/2-6,a=-Math.PI/2,act=eff();
      dx.clearRect(0,0,w,h);
      for(var i=0;i<seg.length;i++){var ang=seg[i][0]/100*6.283, rr=(i===act)?R+4:R;
        dx.globalAlpha=(i===act)?1:0.32;
        dx.beginPath();dx.moveTo(cx,cy);dx.arc(cx,cy,rr,a,a+ang);dx.closePath();dx.fillStyle=seg[i][1];dx.fill();a+=ang;}
      dx.globalAlpha=1;
      dx.globalCompositeOperation='destination-out';dx.beginPath();dx.arc(cx,cy,R*0.5,0,6.283);dx.fill();dx.globalCompositeOperation='source-over';
    }
    function renderDon(){drawDonut(); var act=eff(); lis.forEach(function(el){el.classList.toggle('on', +el.getAttribute('data-i')===act);});}
    lis.forEach(function(el){var i=+el.getAttribute('data-i');
      el.addEventListener('mouseenter',function(){hover=i;renderDon();});
      el.addEventListener('mouseleave',function(){hover=null;renderDon();});
      el.addEventListener('click',function(){donSel=i;hover=null;renderDon();});});
    function donHit(e){var w=dc.width,h=dc.height,cx=w/2,cy=h/2,R=Math.min(w,h)/2-6;
      var px=e.offsetX-cx, py=e.offsetY-cy, d=Math.sqrt(px*px+py*py);
      if(d>R*0.5&&d<=R+4){var rel=Math.atan2(py,px)+Math.PI/2; if(rel<0)rel+=6.283; var acc=0;
        for(var i=0;i<seg.length;i++){var ang=seg[i][0]/100*6.283; if(rel>=acc&&rel<acc+ang)return i; acc+=ang;}}
      return null;}
    dc.addEventListener('mousemove',function(e){hover=donHit(e);renderDon();});
    dc.addEventListener('mouseleave',function(){hover=null;renderDon();});
    dc.addEventListener('click',function(e){var i=donHit(e); if(i!==null){donSel=i;hover=null;renderDon();}});
    function redraw(){renderBars();renderDon();}
    redraw(); window.addEventListener('resize',redraw);
  })();
</script>
```
