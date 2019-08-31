<!DOCTYPE html>
<html lang="en">
	<head>
  		<meta charset="UTF-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1.0">
  		<title>Web QR</title>
  		<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link href="imatges/logo.png" type="image/x-icon" rel="shortcut icon" />
      		<!--Import materialize.css-->
  		<link type="text/css" rel="stylesheet" href="materialize/css/materialize.min.css"  media="screen,projection"/>
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet">
		<link href="css/jquery-ui.min.css" rel="stylesheet">
		<link href="css/jquery.treetable.css" rel="stylesheet">
		<link href="css/jquery.tree" rel="stylesheet">
		<link href="css/" rel="stylesheet">
		<style type="text/css">
			body
			{
				width: 100%;
				heigth: 100%;
			}

			#logo
			{
				width: 5%;
				height: 5%;
			}

			#canvas
			{
    				display:none;
			}

			#v
			{
  				width: 470px;
  				height: 352px;
			}

			@page :left
			{
  				margin-left: 3cm;
			}

			@page :right
			{
  				margin-left: 4cm;
			}

  			*
			{
      				box-sizing: border-box;
      				-moz-box-sizing: border-box;
  			}

  			.page
			{
      				width: 15cm;
      				min-height: 10cm;
      				padding: 0cm;
      				margin: 1cm auto;
      				/*border: 1px #D3D3D3 solid;*/
      				/*border-radius: 5px;*/
      				background: white;
      				/*box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);*/
  			}

  			.subpage
			{
      				padding: 1cm;
      				border: 5px red solid;
      				height: 256mm;
      				outline: 2cm #FFEAEA solid;
  			}

  			@page
			{
      				size: A4;
      				margin: 0;
  			}

  			@media print
			{
      				.page
				{
          				margin: 0;
          				border: initial;
          				border-radius: initial;
          				width: initial;
          				min-height: initial;
          				box-shadow: initial;
          				background: initial;
          				page-break-after: always;
      				}
  			}

  			@media print
  			{
      				.no-print, .no-print *
      				{
          				display: none !important;
      				}
  			}

  			.qrcode
			{
    				position: relative;
  			}

  			.logo
			{
   				position:absolute;
   				left:45%;
   				top: 36%;
  				transform: translateX(-50%);
  				-webkit-transform: translateX(-50%);
  			}

			#print
			{
				width: 100%;
			}
		</style>
	</head>
	<body>
  		<div class="row" style="max-width: 100%;">
      			<div id="test2" class="col s12">
        			<h3 style="color: blue; text-align: center;" class="no-print">
					<img id="logo" src="imatges/logo.png">Generador QR's
				</h3>
        			<div class="container">
          				<div class="row">
            					<div class="no-print">
            						<div align="center" class="col-xs-12 col-md-12 col-sm-6 col-lg-6">
              							<div class="row">
                							<div class="input-field col s12">
                  								<input  type="text" class="validate" id="mapo">
                  								<label for="password">ID Pot</label>
                							</div>
              							</div>
              							<div class="row">
                							<div class="input-field col s12">
                  								<input  type="text" class="validate" id="mact">
                  								<label for="email">Concepte</label>
                							</div>
              							</div>
              							<div class="row">
                							<div class="input-field col s12">
                  								<input type='number' class="validate" id='soluong' value=5 max="5" min="1">
                  								<label for="email">Tamany QR</label>
                							</div>
              							</div>
              							<div class="row" style="text-align: center; margin-right: 20px;">
                							<a class="waves-effect waves-light btn red" id="btntaoma">
										<i class="material-icons">generar</i>Generar
									</a>
              							</div>
            						</div>
            					</div>
            					<div class="col-xs-12 col-md-12 col-sm-6 col-lg-6">
              						<div class="page" id="print">
                						<div class="row">
                  							<div class="col s12">
                    								<div style="border: 2px solid #000; border-radius: 5px; width: 245px;">
                    									<div id="qrcode" class="qrcode" style="margin-top: 10px; margin-left: 20px;">
                    									</div>
                      									<div style="margin-top: 10px; margin-left: 20px;">
                      									</div>
                    								</div>
                								<button class="waves-effect waves-light btn green no-print" id="btnin" style="margin-top: 10px; margin-left: 20px;">
											<i class="material-icons">imprimir</i>Imprimir
										</button>
                  							</div>
                						</div>
              						</div>
            					</div>
          				</div>
        			</div>
      			</div>
		</div>
		<div align="center">
			<font size="3">Per anar a la pàgina de llegir codis QR, fes clic a <a href="readqr.php" class="no-print">Escanejar codis QR</a></font>
		</div>
	</body>
  	<script type="text/javascript" src="createQR/jquery.min.js"></script>
  	<script type="text/javascript" src="createQR/qrcode.js"></script>
  	<script type="text/javascript" src="materialize/js/materialize.min.js"></script>
  	<!-- create qr code -->
  	<script type="text/javascript">
    		//Funció per tornar a Generar el QR en el tamany desitjat
    		function reGen()
    		{
      			$('#qrcode').empty();
      			valor = $('#soluong').val();
      			if(valor > 5 )
      			{
         			valor = 5;
      			}
      			else if(valor < 1)
      			{
        			valor = 1;
      			}
      			qrcode = new QRCode(document.getElementById('qrcode'),{
          			width :valor*42,
          			height : valor*42
      			});
    		}
    		var valor = $('#soluong').val();
    		var qrcode = new QRCode(document.getElementById("qrcode"), {
      			width : 200,
      			height : 200
    		});

    		function makeCode ()
		{
      			var mapo = $("#mapo").val();
      			var mact = $("#mact").val();
      			var elText = mapo + '|' + mact ;
      			qrcode.makeCode(elText);
    		}

    		makeCode();
    		$("#btntaoma").
      		on("click", function () {
        		reGen();
        		makeCode();
         		//lấy thông tin
        		$("#lblmapo").empty();
        		$("#lblmact").empty();
        		$("#lblsoluong").empty();
        		var mapo = $("#mapo").val();
        		$("#lblmapo").text("ID: " + mapo);
        		var mact = $("#mact").val();
        		$("#lblmact").text("Concepte: " + mact);
      		}).
      		on("keydown", function (e) {
        		if (e.keyCode == 13) {
          			makeCode();
        		}
      		});

    		$("#btnin").click(function(event) {
      			window.print();
    		});
	</script>
</html>
