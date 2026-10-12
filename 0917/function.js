function $(id){
    return document.getElementById(id);
}

function rangeRGB(){
    const r= $("red-range").value;
    const g= $("green-range").value;
    const b= $("blue-range").value;
    const a= $("alpha-range").value;
    


    $("red-value").value = r;
    $("green-value").value = g;
    $("blue-value").value = b;
    $("alpha-value").value = a;
    

    $("rgb-box").style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`;
}

function rangeRGB2(){
    const r= $("red-value").value;
    const g= $("green-value").value;
    const b= $("blue-value").value;
    const a= $("alpha-value").value;

    $("red-range").value = r;
    $("green-range").value = g;
    $("blue-range").value = b;
    $("alpha-range").value = a;

    $("rgb-box").style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`;
}

function rangeSize(){
    const sz= $("width-range").value;
    const m= $("height-range").value;
    const bm= $("leftmargin-range").value;
    const tm= $("topmargin-range").value;
    const h= $("border-range").value;
    const f= $("spin-range").value;

    $("width-value").value = sz;
    $("height-value").value = m;
    $("leftmargin-value").value = bm;
    $("topmargin-value").value = tm;
    $("border-value").value = h;
    $("spin-value").value = f;

    $("rgb-box").style.width=`${sz}px`;
    $("rgb-box").style.height=`${m}px`;
    $("rgb-box").style.marginLeft=`${bm}px`;
    $("rgb-box").style.marginTop=`${tm}px`;
    $("rgb-box").style.borderRadius=`${h}px`;
    $("rgb-box").style.rotate=`${f}deg`;
}

function rangeSize2(){
    const sz= $("width-value").value;
    const m= $("height-value").value;
    const bm= $("leftmargin-value").value;
    const tm= $("topmargin-value").value;
    const h= $("border-value").value;
    const f= $("spin-value").value;

    $("width-range").value = sz;
    $("height-range").value = m;
    $("leftmargin-range").value = bm;
    $("topmargin-range").value = tm;
    $("border-range").value = h;
    $("spin-range").value = f;

    $("rgb-box").style.width=`${sz}px`;
    $("rgb-box").style.height=`${m}px`;
    $("rgb-box").style.marginLeft=`${bm}px`;
    $("rgb-box").style.marginTop=`${tm}px`;
    $("rgb-box").style.borderRadius=`${h}px`;
    $("rgb-box").style.rotate=`${f}deg`;
}


$("red-range").addEventListener("input", rangeRGB);
$("green-range").addEventListener("input", rangeRGB);
$("blue-range").addEventListener("input", rangeRGB);
$("alpha-range").addEventListener("input", rangeRGB);
$("width-range").addEventListener("input", rangeSize);
$("height-range").addEventListener("input", rangeSize);
$("leftmargin-range").addEventListener("input", rangeSize);
$("topmargin-range").addEventListener("input", rangeSize);
$("border-range").addEventListener("input", rangeSize);
$("spin-range").addEventListener("input", rangeSize);

$("red-value").addEventListener("input", rangeRGB2);
$("green-value").addEventListener("input", rangeRGB2);
$("blue-value").addEventListener("input", rangeRGB2);
$("alpha-value").addEventListener("input", rangeRGB2);
$("width-value").addEventListener("input", rangeSize2);
$("height-value").addEventListener("input", rangeSize2);
$("leftmargin-value").addEventListener("input", rangeSize2);
$("topmargin-value").addEventListener("input", rangeSize2);
$("border-value").addEventListener("input", rangeSize2);
$("border-value").addEventListener("input", rangeSize2);

