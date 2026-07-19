import{G as u,f,i as b,c as r,b as e,F as v,p as x,e as y,w,T as k,j as p,o as d,t as z,x as C,m as I,E,_}from"./index-C4bfe2xN.js";const U=[`<html><head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PRANK: macOS Updates</title>
    <style>
    body {
        background: #000;
        width: 100vw;
        height: 100vh;
        user-select: none;
        margin: 0;
        padding: 0;
        cursor: none;
        overflow: hidden;
    }
    .centeragain {
        width:550px;
        margin:0px auto;
    }
    .CT {
        position: absolute;
        top: 50%;
        width: 550px;
        margin-top: -5%;
        font-family: Segoe UI, Arial;
        font-size: 23px;
        color: #fff;
        text-align: center;
    }
    </style>
</head>
<body>
    <div class="centeragain">
        <div class="CT">
            <img src="/system-upgrade/images/mac_logo.png">
            <br><br><br>
            <img src="/system-upgrade/images/mac_load.gif">
        </div>
    </div>

</body></html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <title>Windows XP Updates</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body {
        background: url(/system-upgrade/images/xp_bg.jpg) #5a7edc no-repeat center center fixed;
        background-size: cover;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        cursor: none;
    }
    .CT {
        position: absolute;
        top: 60%;
        width: 520px;
        font-family: Tahoma, Arial;
        font-size: 20px;
        color: #fff;
        text-align: right;
    }
    .image_block {
        position: absolute;
        bottom: 50px;
        left: 50%;
        width: 50%;
        margin: -5% 0 0 -25%;
    }
    .centeragain {
        width: 520px;
        margin: 0 auto;
    }
    </style>

</head>
<body>

    <div class="centeragain">
        <div class="CT">
            <div class="image_block">
                <img src="/system-upgrade/images/xp_logo.png">
            </div>
            <div>
                <br>
                <span>正在安装 Windows 更新...</span>
                <span id="timer">0%</span>
                <br>
                <span>请不要关闭您的计算机或拔掉电源</span>
            </div>
        </div>
    </div>
    <script>
        var count = 0;
        var counter = setInterval(function() {
            count++;
            if (count > 100) count = 1;
            document.getElementById('timer').innerHTML = count + '%';
        }, 5000);
    <\/script>


</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Windows Update</title>
    <style>
    body {
        background: url('/system-upgrade/images/vista_bg.jpg') #07466c no-repeat center center fixed; 
        user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        vertical-align:middle; 
        text-align:center;
        z-index: -1;
        width: 100vw;
        height: 100vh;
        position: fixed;
        cursor: none;
    }
    .CT {
        vertical-align:middle;
        position: absolute;
        top: 50%;
        height: 70px;
        margin-left:auto;
        margin-right:auto;
        display:block;
        width: 580px;
        margin-top: -5%;
        font-family:Segoe UI, Arial;
        font-size:23px;
        color:#fff;
        font-weight:normal;
        text-align:center;
        user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
    }
    .image_block {
        position: absolute;
        bottom: 17px;
        left: 50%;
        width: 50%;
        margin: -5% 0 0 -25%;
    }
    .centeragain {
        width:550px;
        margin:0px auto;
        text-align:left;
    }
    </style>

</head>
<body>

    <div class="centeragain">
        <div class="CT">
            <img src="/system-upgrade/images/win7.gif" style="vertical-align:middle;padding-top:25px;float:left;">
            <a id="ref">正在配置更新: 阶段</a> 
            <a id="stage">0</a> 
            <span>of</span> 
            <a>108</a> - <a id="timer">14%</a> <span>完成</span>
            <br>
            <span>请不要关闭您的计算机</span>
        </div>
    </div>
    <div class="image_block">
        <img src="/system-upgrade/images/vista_logo.png">
    </div>
    <script>
        var stage = 0;
        var percent = 1;
        setInterval(function() {
            percent++;
            if (percent > 100) {
                percent = 1;
                stage++;
                if (stage > 108) stage = 0;
                document.getElementById('stage').innerHTML = stage;
            }
            document.getElementById('timer').innerHTML = percent + '%';
        }, 200);
    <\/script>


</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Windows 7 Update</title>
    <style>
    body {
        background: url('/system-upgrade/images/win7.jpg') #054696 no-repeat center center fixed;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        text-align: center;
        cursor: none;
        width: 100vw;
        height: 100vh;
        position: fixed;
        cursor: none;
    }
    .CT {
        vertical-align:middle;
        position: absolute;
        top: 50%;
        height: 70px;
        margin-left:auto;
        margin-right:auto;
        display:block;
        width:400px;
        margin-top: -5%;
        font-family:Segoe UI, Arial;
        font-size:23px;
        color:#fff;
        font-weight:normal;
        text-align:center;
        text-shadow: 0px 1px 5px rgba(0,0,0, 0.4);
        user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
    }
    .CT img{
        vertical-align:middle;
        padding-top:35px;
        float:left;
    }
    .image_block {
        position: absolute;
        bottom: 17px;
        left: 50%;
        width: 50%;
        margin: -5% 0 0 -25%;
    }
    .centeragain {
        width:400px;
        margin:0px auto;
        text-align:left;
    }
    </style>

</head>
<body>

    <div class="centeragain">
        <div class="CT">
            <img src="/system-upgrade/images/win7.gif" style="">
            <a id="ref">正在配置 Windows Updates</a>
            <br>
            <a id="timer">39%</a> <span>完成</span>
            <br>
            <span>请不要关闭您的计算机</span>
        </div>
    </div>
    <div class="image_block">
        <img src="/system-upgrade/images/win7_logo.png">
    </div>
    <script>
        var percent = 39;
        setInterval(function() {
            percent++;
            if (percent > 100) percent = 30;
            document.getElementById('timer').innerHTML = percent + '%';
        }, 3000);
    <\/script>


</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Windows Update</title>
	<style>
	body {
		background:#07466c; 
		user-select:none;
		-moz-user-select:none;
		-webkit-user-select:none;
		-ms-user-select:none;
		vertical-align:middle; 
		text-align:center;
		z-index: -1;
		margin:0;
		padding:0;
		width:100vw;
		height:100vh;
		position: fixed;
		cursor: none;
	}
	.CT {
		vertical-align: middle;
		position: absolute;
		top: 50%;
		left: 50%;
		height: 70px;
		transform: translate(-50%, 0%);
		margin-left: auto;
		margin-right: auto;
		display: block;
		width: 400px;
		font-family: Segoe UI Light, Segoe UI, Arial;
		font-size: 23px;
		color: #fff;
		font-weight: normal;
		text-align: center;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		margin-top: -5%;
	}
	.loader {
		position: absolute;
		width: 30px;
		margin: auto;
		vertical-align: middle;
	}
	.loader .circle {
		position: absolute;
		width: 28px;
		height: 28px;
		opacity: 0;
		transform: rotate(225deg);
		animation-iteration-count: infinite;
		animation-name: orbit;
		animation-duration: 5.5s;
	}
	.loader .circle:after {
		content: '';
		position: absolute;
		width: 4px;
		height: 4px;
		border-radius: 5px;
		background: #fff;
	}
	.loader .circle:nth-child(2) {
		animation-delay: 240ms;
	}
	.loader .circle:nth-child(3) {
		animation-delay: 480ms;
	}
	.loader .circle:nth-child(4) {
		animation-delay: 720ms;
	}
	.loader .circle:nth-child(5) {
		animation-delay: 960ms;
	}
	@keyframes orbit {
		0% {
			transform: rotate(225deg);
			opacity: 1;
			animation-timing-function: ease-out;
		}
		7% {
			transform: rotate(345deg);
			animation-timing-function: linear;
		}
		30% {
			transform: rotate(455deg);
			animation-timing-function: ease-in-out;
		}
		39% {
			transform: rotate(690deg);
			animation-timing-function: linear;
		}
		70% {
			transform: rotate(815deg);
			opacity: 1;
			animation-timing-function: ease-out;
		}
		75% {
			transform: rotate(945deg);
			animation-timing-function: ease-out;
		}
		76% {
			transform: rotate(945deg);
			opacity: 0;
		}
		100% {
			transform: rotate(945deg);
			opacity: 0;
		}
	}
	</style>

</head>
<body>

	<div class="CT">
		<div class="loader">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
		<a>正在配置 Windows Updates</a>
		<br>
		<a id="timer">11%</a> 
		<span>完成</span>
		<br>
		<span>请不要关闭您的计算机</span>
	</div>
<script>
let percent = 8;
setInterval(()=>{
	percent++;
	if(percent>100) percent=1;
	document.getElementById('timer').textContent = percent+'%';
}, 800);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Update Screen</title>
<style>
body {
	background: #006dae;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    vertical-align: middle;
    text-align: center;
    z-index: -1;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
	cursor: none;
}
.CT {
	vertical-align: middle;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 500px;
    margin-top: -5%;
    font-family: Segoe UI Light, Segoe UI, Arial;
    font-size: 23px;
    color: #fff;
    font-weight: normal;
    text-align: center;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
.loader {
	position: relative;
	padding-top: 100px;
	width: 50px;
	margin: auto;
}
.loader .circle {
	position: absolute;
	width: 48px;
	height: 48px;
	opacity: 0;
	transform: rotate(225deg);
	animation-iteration-count: infinite;
	animation-name: orbit;
	animation-duration: 5.5s;
}
.loader .circle:after {
	content: '';
	position: absolute;
	width: 6px;
	height: 6px;
	border-radius: 5px;
	background: #fff;
}
.loader .circle:nth-child(2) {
	animation-delay: 240ms;
}
.loader .circle:nth-child(3) {
	animation-delay: 480ms;
}
.loader .circle:nth-child(4) {
	animation-delay: 720ms;
}
.loader .circle:nth-child(5) {
	animation-delay: 960ms;
}
@keyframes orbit {
	0% {
		transform: rotate(225deg);
		opacity: 1;
		animation-timing-function: ease-out;
	}
	7% {
		transform: rotate(345deg);
		animation-timing-function: linear;
	}
	30% {
		transform: rotate(455deg);
		animation-timing-function: ease-in-out;
	}
	39% {
		transform: rotate(690deg);
		animation-timing-function: linear;
	}
	70% {
		transform: rotate(815deg);
		opacity: 1;
		animation-timing-function: ease-out;
	}
	75% {
		transform: rotate(945deg);
		animation-timing-function: ease-out;
	}
	76% {
		transform: rotate(945deg);
		opacity: 0;
	}
	100% {
		transform: rotate(945deg);
		opacity: 0;
	}
}
#bottom {
    position: fixed;
    bottom: 10%;
    width: 100%;
	left:0;
	text-align:center;
	color:#fff;
	font-size: 23px;
}
</style>

</head>
<body>

	<div class="CT">
		<div class="loader" style="vertical-align:middle;padding-top:2px;">
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
		</div>
		<br><br>
		<a id="ref">正在配置更新</a> 
		&nbsp;
		<a id="timer">5%</a> 
		<span>完成</span>
		<br>
		<span>不要关闭你的电脑，更新需要一些时间</span>
	</div>
	<div id="bottom">您的电脑将重启几次</div>
<script>
let percent = 1;
setInterval(()=>{
	percent++;
	if(percent>100) percent=1;
	document.getElementById('timer').textContent = percent+'%';
}, 600);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Windows 10</title>
	<style>
	body {
		margin:0;
		padding:0;
		background:#000000;
		font-family:Segoe UI;
		width:100vw;
		height: 100vh;
		color:#fff;
		user-select:none;
		-moz-user-select:none;
		-webkit-user-select:none;
		-ms-user-select:none;
		position: fixed;
		text-align: center;
		cursor: none;
	}
	h1 { 
		font-size:48px;
		font-weight:normal;
		font-family: Segoe UI Light, Segoe UI;
		padding:0;
		margin-top:0;
	}
	.center {
		position: absolute;
		width: 500px;
		height: 450px;
		left: 50%;
		top: 50%; 
		transform: translate(-50%, -50%);
	}
	#bottom {
		position:fixed;
		bottom:3%;
		width:100%;
	}
	.loader {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-top: 100px;
		background: conic-gradient(#177dcf 0% 0%, #7b7b7b 0% 100%);
	}
	.loader::after {
		content: '';
		position: absolute;
		top: 3px;
	 left: 3px;
		right: 3px;
		bottom: 3px;
		border-radius: 50%;
		background: #000000;
		z-index: 10;
		color: #fff;
	}
	.percentage {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 60px;
		color: #fff;
		z-index: 20;
	}
	</style>

</head>
<body>

	<div class="center">
		<h1>正在安装 Windows 10</h1>
		<p style="color:#afafaf;">您的电脑将重新启动多次，请坐下来放松片刻</p>
		<div class="loader" id="loader" style="background: conic-gradient(rgb(23, 125, 207) 6%, rgb(123, 123, 123) 0%, rgb(123, 123, 123) 100%);">
			<div class="percentage" id="timer">6%</div>
		</div>
	</div>
	<p id="bottom">
		<span style="color:#afafaf">正在复制文件</span>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<span style="color:#177dcf">正在安装功能和驱动 <a id="timer2">6%</a></span>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<span style="color:#afafaf">正在配置设置</span>
	</p>
<script>
let percent = 1;
setInterval(()=>{
	percent++;
	if(percent>100) percent=1;
	document.getElementById('timer').textContent = percent+'%';
	document.getElementById('timer2').textContent = percent+'%';
	document.getElementById('loader').style.background = \`conic-gradient(#177dcf \${percent}%, #7b7b7b 0%, #7b7b7b 100%)\`;
}, 500);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Windows 10</title>
	<style>
	body {
		margin:0;
		padding:0;
		background:#000000;
		font-family:Segoe UI;
		width:100vw;
		height: 100vh;
		color:#fff;
		user-select:none;
		-moz-user-select:none;
		-webkit-user-select:none;
		-ms-user-select:none;
		position: fixed;
		text-align: center;
		cursor: none;
	}
	h1 { 
		font-size:48px;
		font-weight:normal;
		font-family: Segoe UI Light, Segoe UI;
		padding:0;
		margin-top:0;
	}
	.center {
		position: absolute;
		width: 500px;
		height: 450px;
		left: 50%;
		top: 50%; 
		transform: translate(-50%, -50%);
	}
	#bottom {
		position:fixed;
		bottom:3%;
		width:100%;
	}
	.loader {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-top: 100px;
		background: conic-gradient(#177dcf 0% 0%, #7b7b7b 0% 100%);
	}
	.loader::after {
		content: '';
		position: absolute;
		top: 3px;
		left: 3px;
		right: 3px;
		bottom: 3px;
		border-radius: 50%;
		background: #000000;
		z-index: 10;
		color: #fff;
	}
	.percentage {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 60px;
		color: #fff;
		z-index: 20;
	}
	</style>

</head>
<body>

	<div class="center">
		<h1>正在安装 Windows 11</h1>
		<p style="color:#afafaf;">您的电脑将重新启动多次，请坐下来放松片刻</p>
		<div class="loader" id="loader" style="background: conic-gradient(rgb(23, 125, 207) 6%, rgb(123, 123, 123) 0%, rgb(123, 123, 123) 100%);">
			<div class="percentage" id="timer">6%</div>
		</div>
	</div>
	<p id="bottom">
		<span style="color:#afafaf">正在复制文件</span>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<span style="color:#177dcf">正在安装功能和驱动 <a id="timer2">6%</a></span>
		&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
		<span style="color:#afafaf">正在配置设置</span>
	</p>
<script>
let percent = 1;
setInterval(()=>{
	percent++;
	if(percent>100) percent=1;
	document.getElementById('timer').textContent = percent+'%';
	document.getElementById('timer2').textContent = percent+'%';
	document.getElementById('loader').style.background = \`conic-gradient(#177dcf \${percent}%, #7b7b7b 0%, #7b7b7b 100%)\`;
}, 500);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>window err</title>
    <style>
        body { 
            font-family:Segoe UI, Arial;
            background-color: #0086ac;
            position: fixed;
            width: 100vw;
            height: 100vh;
            cursor: none;
            user-select: none;
        }
        .content {
            width: 700px;
            color: #fff;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .pp{
            font-size: 100px;
            margin: 0;
            height: 100px;
            line-height: 100px;
            margin-bottom: 20px;
        }
        .py{
            font-size:20pt; 
            margin:0; 
            padding:0;
        }
        .pa{
            font-size:14pt; 
            color:#fff; 
            margin-top:-30px; 
            padding:0;
            line-height:32px;
        }
        .pb{
            float:left;
            margin-left:20px;
            width:calc(100% - 200px);
        }
        .pimg{
            float: left;
            width: 180px;
            height: 180px;
            padding-top: 10px;
        }
        .timerps{
            font-size: 20pt;
            margin: 0;
            padding: 0;
        }
    </style>

</head>
<body>

    <div class="content">
        <p class="pp">:(</p>
        <p class="py">
            您的电脑遇到问题，需要重新启动。<br>
            我们只收集某些错误信息，然后为您重新启动。
        </p>
        <br>
        <p class="timerps"><span id="timer">4%</span> 完成</p>
        <br>
        <img src="/system-upgrade/images/win_err.png" class="pimg">
        <div class="pb">
            <p class="pa">
                <br>
                有关此问题和可能修复的更多信息，请访问<br>
                http://windows.com/stopcode
                <br><br>
                如果致电支持人员，请向他们提供以下信息：<br>
                终止代码:  SYS_EXCEPTION_PONIES_NOT_HANDLED
            </p>
        </div>
    </div>
<script>
let p = 2;
setInterval(()=>{
    p++;
    if(p>100) p=0;
    document.getElementById('timer').textContent = p+'%';
}, 1000);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ubuntu 安装</title>
    
<style>
    body{
        background: url('/system-upgrade/images/ubuntu.jpg') #07466c no-repeat center center fixed; 
        user-select:none;
        -moz-user-select:none;
        -webkit-user-select:none;
        -ms-user-select:none;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        cursor: none;
    }
    .top{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #000;
        color: #fff;
        font-size: 14px;
    }
    .top img{
        width: 16px;
        height: 16px;
        float: right;
        margin-right: 12px;
        margin-top: 7px;
    }
    .top span{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .divs{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 700px;
        transform: translate(-50%, -50%);
        background-color: #f5f5f5;
        border-radius: 15px 15px 0 0;
        box-shadow: 0 0 16px 1px rgba(0,0,0,0.5);
        overflow:hidden;
    }
    .divs .a{
        height: 34px;
        line-height: 34px;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
    }
    .divs .b{
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        font-weight: bold;
        background-color: #333;
        color: #ccc;
        text-align: left;
        padding-left: 20px;
    }
    .divs .c{
        background: url('/system-upgrade/images/ubuntu.jpg') #07466c no-repeat center center;
        background-size: cover;
        width: 100%;
        height: 300px;
        position: relative;
    }
    .divs .c div{
        text-align: left;
        color: #fff;
        padding: 35px 0 0 35px;
        font-size: 14px;
    }
    .divs .c img{
        background-color: #fff;
        border-radius: 100%;
        width: 30px;
        padding: 15px 30px 15px 5px;
        position: absolute;
        top: 50%;
        right: -30px;
        transform: translate(0, -50%);
    }
    .divs .d{
        text-align: left;
        padding: 10px 20px;
        position: relative;
    }
    .divs .d p{
        margin: 0;
        padding: 15px 0;
    }
    .divs .d>div{
        height: 10px;
        background-color: #ccc;
        border-radius: 6px;
        margin-bottom: 10px;
        overflow: hidden;
    }
    .divs .d>div>div{
        width: 0%;
        height: 10px;
        background-color: #cb4d3d;
    }
    .divs .d span{
        position: absolute;
        top: 20px;
        right: 20px;
        border: 1px solid #bbb;
        font-size: 14px;
        padding: 5px 10px;
        color: #888;
        borde
</head>
<body>

    <div class="top">
        <span id="times">Apr 10 17:15</span>
        <img src="/system-upgrade/images/ubuntu_off.svg">
        <img src="/system-upgrade/images/ubuntu_shengyin.svg">
        <img src="/system-upgrade/images/ubuntu_inter.svg">
    </div>
    <div class="divs">
        <div class="a">安装</div>
        <div class="b">欢迎使用 Ubuntu</div>
        <div class="c">
            <div>最新版本的 Ubuntu快速且具有丰富新特性，<br>用起来比以往更方便。这里有一些值得注意的<br>的新玩意……</div>
            <img src="/system-upgrade/images/ubuntu_jiantou.svg">
        </div>
        <div class="d">
            <span>跳过</span>
            <p>› 正在完成文件复制...</p>
            <div><div id="bar" style="width: 4%;"></div></div>
        </div>
    </div>
<script>
let w = 1;
setInterval(()=>{
    w++;
    if(w>100) w=1;
    document.getElementById('bar').style.width = w+'%';
}, 600);
<\/script>

</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Debian</title>
    <style>
    body{
        background: #000;
        user-select:none;
        width: 100vw;
        height: 100vh;
        position: fixed;
        cursor: none;
    }
    .main{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color:#eeece6;
    }
    .main>div>p{
        text-align: left;
        padding: 5px 0 0 20px;
        font-size: 13px;
        font-weight: bold;
        margin: 0;
    }
    .main>div>div{
        position: relative;
        padding: 25px 0 0 0;
        margin: 75px 80px 370px 80px;
    }
    .main>div>div>div{
        position: absolute;
        text-align: center;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 5px;
        border-radius: 4px;
        background-color: #dfd3c7;
        border: 1px solid #c1b8ac;
    }
    .main>div>div>div>span{
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top:50%;
    }
    .main>div>div>div .yes{
        position: absolute;
        height: 19px !important;
        line-height: 19px;
        top: 0;
        left: 0;
        width: 0;
        z-index: 10;
        color: #fff;
        border-radius: 3px;
        overflow: hidden;
        border: 1px solid #43706a !important;
        background: repeating-linear-gradient(125deg, #22afa4 0 10px, #22a095 10px 20px);
    }
    .main>div>div i{
        font-size: 12px;
    }
    </style>

</head>
<body>

    <div class="main">
        <img src="/system-upgrade/images/debian.jpg">
        <div>
            <p>选择并安装软件</p>
            <div>
                <div>
                    <div class="yes" id="bar" style="width: 5%;">
                        <span>安装基础系统</span>
                    </div>
                    <span>安装基础系统</span>
                </div>
                <i>正在安装核心包...</i>
            </div>
        </div>
<script>
let w = 1;
setInterval(()=>{
    w++;
    if(w>100) w=1;
    document.getElementById('bar').style.width = w+'%';
}, 700);
<\/script>
</div>
</body>
</html>`,`<!DOCTYPE html>
<html lang="zh-CN">
<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centos install</title>
<style>
    *{padding:0;margin:0;box-sizing:border-box;}
    body{
        background:#000;
        user-select:none;
        width:100vw;
        height:100vh;
        position:fixed;
        cursor:none;
    }
    .mindiv{
        position:absolute;
        width:1280px;
        height:750px;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        background-color:#e8e8e6;
        overflow:hidden;
    }
    .mindiv .mlf{
        width:190px;
        height:100%;
        float:left;
        background-color:#2d2d2d;
    }
    .mindiv .mlf img{
        width:100%;
        height:100%;
    }
    .mindiv .mlr{
        width:calc(100% - 190px);
        height:100%;
        float:right;
        position:relative;
    }
    .mindiv .mlr .pp{
        padding:20px;
        font-weight:bold;
    }
    .mindiv .mlr .pp .lrs{float:right;}
    .mindiv .mlr .input{
        width:120px;
        height:30px;
        line-height:30px;
        background-color:#fff;
        position:absolute;
        top:60px;
        right:65px;
    }
    .mindiv .mlr .input img{
        height:32px;
        margin-left:5px;
        float:left;
    }
    .mindiv .mlr .input span{
        float:left;
        margin-left:4px;
    }
    .mindiv .mlr .loads{
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        width:100%;
        padding:20px;
    }
    .mindiv .mlr .loads p img{
        width:18px;
        height:18px;
        margin-right:10px;
        vertical-align:-3px;
        animation:rotate 2s linear infinite;
    }
    @keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
    .mindiv .mlr .loads div{
        height:5px;
        width:100%;
        margin-top:5px;
        background-color:#cfcfcd;
        border:1px solid #bcbcb8;
        position:relative;
    }
    .mindiv .mlr .loads div .lodivs{
        position:absolute;
        height:5px;
        left:0;
        top:-5px;
        width:0;
        background-color:#538dc8;
        border:1px solid #265483;
    }
    .butdivs{
        position:absolute;
        bottom:10px;
        text-align:right;
        width:100%;
    }
    .butdivs span{
        height:38px;
        line-height:38px;
        width:150px;
        display:inline-block;
        text-align:center;
        margin-right:10px;
        border:1px solid #bbb;
        border-radius:4px;
        background:linear-gradient(to bottom,#e7e7e5,#d2d2d0);
    }
    .butdivs span.res{
        background:#fff;
        color:#888;
    }
</style>

</head>
<body>

    <div class="mindiv">
        <div class="mlf">
            <img src="/system-upgrade/images/centos_bg.png">
        </div>
        <div class="mlr">
            <p class="pp">
                <span>安装进度</span>
                <span class="lrs">CENTOS LINUX 8安装</span>
            </p>
            <div class="input">
                <img src="/system-upgrade/images/centos_jianpan.svg">
                <span>us</span>
            </div>
            <div class="loads">
                <p><img src="/system-upgrade/images/centos_load.png">从安装源准备下载内容</p>
                <div><div class="lodivs" id="bar" style="width: 4%;"></div></div>
            </div>
            <div class="butdivs">
                <span>退出</span>
                <span class="res">重启系统</span>
            </div>
        </div>
    </div>
<script>
let w = 1;
setInterval(()=>{
    w++;
    if(w>100) w=1;
    document.getElementById('bar').style.width = w+'%';
}, 800);
<\/script>

</body>
</html>`],T={class:"system-upgrade-page"},S={class:"card-grid"},A=["aria-label","onClick"],B={class:"card-thumb"},N=["src","alt"],O={class:"card-name"},P=["srcdoc"],W=u({__name:"index",setup(D){const c=[{key:"macos",name:"macOS 更新",thumb:"/system-upgrade/images/system-litpic-1.png"},{key:"winxp",name:"Windows XP",thumb:"/system-upgrade/images/system-litpic-2.png"},{key:"winvista",name:"Windows Vista",thumb:"/system-upgrade/images/system-litpic-3.png"},{key:"win7",name:"Windows 7",thumb:"/system-upgrade/images/system-litpic-4.png"},{key:"win8",name:"Windows 8",thumb:"/system-upgrade/images/system-litpic-5.png"},{key:"win10",name:"Windows 10",thumb:"/system-upgrade/images/system-litpic-6.png"},{key:"win10-install",name:"Windows 10 安装",thumb:"/system-upgrade/images/system-litpic-7.png"},{key:"win11-install",name:"Windows 11 安装",thumb:"/system-upgrade/images/system-litpic-8.png"},{key:"win-bsod",name:"Windows 蓝屏",thumb:"/system-upgrade/images/system-litpic-9.png"},{key:"ubuntu",name:"Ubuntu 安装",thumb:"/system-upgrade/images/system-litpic-10.png"},{key:"debian",name:"Debian 安装",thumb:"/system-upgrade/images/system-litpic-11.png"},{key:"centos",name:"CentOS 安装",thumb:"/system-upgrade/images/system-litpic-12.png"}],n=p(null),o=p("");function m(){const t=navigator.userAgent||"";return/Android|iPhone|iPad|iPod/i.test(t)}function g(t){if(m()){E({message:"请在电脑端使用",type:"warning"});return}n.value=t,o.value=U[t]??"",document.body.style.overflow="hidden"}function s(){n.value=null,o.value="",document.body.style.overflow=""}function l(t){t.key==="Escape"&&n.value!==null&&s()}return f(()=>{window.addEventListener("keydown",l)}),b(()=>{window.removeEventListener("keydown",l),document.body.style.overflow=""}),(t,a)=>(d(),r("div",T,[a[1]||(a[1]=e("header",{class:"page-header"},[e("h1",{class:"page-title"},"假装系统升级模拟器"),e("p",{class:"page-subtitle"}," 一键全屏伪装成系统升级 / 安装界面，纯前端运行、无需下载，按 ESC 即可退出。 "),e("p",{class:"page-tip"},"点击下面的系统，显示假装在系统升级，按 ESC 退出全屏。")],-1)),e("div",S,[(d(),r(v,null,x(c,(i,h)=>e("button",{key:i.key,class:"system-card",type:"button","aria-label":`打开 ${i.name} 模拟界面`,onClick:X=>g(h)},[e("div",B,[e("img",{src:i.thumb,alt:i.name,loading:"lazy"},null,8,N)]),e("div",O,z(i.name),1)],8,A)),64))]),y(k,{name:"overlay-fade"},{default:w(()=>[n.value!==null?(d(),r("div",{key:0,class:"fullscreen-overlay",role:"dialog","aria-modal":"true",onClick:C(s,["self"])},[e("button",{class:"overlay-close",type:"button",title:"退出 (ESC)",onClick:s},[...a[0]||(a[0]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1),e("span",null,"退出 (ESC)",-1)])]),e("iframe",{class:"sim-frame",srcdoc:o.value,frameborder:"0",scrolling:"no",title:"系统升级模拟界面"},null,8,P)])):I("",!0)]),_:1})]))}}),Y=_(W,[["__scopeId","data-v-c7d89e1d"]]);export{Y as default};
