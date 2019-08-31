<?php
        require "config.php";
        require "funcions.php";
        require "localitzacioModel.php";
?>
<html>
	<head>
		<title>qrLAB | Institut Montilivi</title>
		<!-- Habilitem els caràcter UTF-8 -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- Posem un favicon -->
		<link href="ImatgesPlantilla/logo.png" type="image/x-icon" rel="shortcut icon" />
		<!-- Importem els arxius CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link href="css/bootstrap.css" rel="stylesheet">
		<link href="css/comun.css" rel="stylesheet">
		<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet">
		<link href="css/jquery-ui.min.css" rel="stylesheet">
		<link href="css/jquery.treetable.css" rel="stylesheet">
		<link href="css/jquery.treetable.theme.default.css" rel="stylesheet">
		<link href="css/public.css" rel="stylesheet">
		<link href="css/intranet.css" rel="stylesheet">
		<link href="css/propi.css" rel="stylesheet">
	</head>
	<body style="cursor:default">
		<!-- Creem un 'div', per a la capçalera de la pàgina -->
		<div id="container" align="center">
			<header>
				<div class="container">
					<div class="row" style="display: inline;">
						<div class="col-xs-2">
							<img src="ImatgesPlantilla/logo2.png" style="margin-top:10px;" width="170px" height="70px">
						</div>
						<div class="col-xs-10" align="right">
							<nav class="pull-right">
								<ul class="list-unstyled list-inline text-right">
									<li>
										<a href="https://www.institutmontilivi.cat/">
											<img src="ImatgesPlantilla/surt.png" style="margin-top:10px;" width="40px" height="40px">
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div class="container-fluid">
				<div class="container not-padding t" align="center">
					<nav class="navbar navbar-default" role="navigation">
						<div class="navbar-header">
							<!-- Creem l'icone del menú, que es veurà en el mode responsive, per a telèfons mòbils i tablets -->
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<!-- Creem el menú horitzontal principal de la pàgina -->
						<div class="navbar-collapse collapse" aria-expanded="false" align="left" style="height: 1px;">
							<ul class="nav navbar-nav">
								<li>
									<a id="inici" href="index.php" class="pointer" onclick="menu_inici()">Inici</a>
								</li>
								<li>
									<a id='substancia' href="substancia.php" class="pointer" onclick="menu_substancia()">Substància</a>
								</li>
								<li>
									<a id='estoc' href="estoc.php"  class="pointer" onclick="menu_estoc()">Estoc</a>
								</li>
								<li>
									<a id='comandes' href="comandes.php" class="pointer" onclick="menu_comandes()">Comandes</a>
								</li>
								<li>
									<a id='parametres' href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Paràmetres<span class="caret"></span></a>
									<ul class="dropdown-menu nav" role="menu">
										<li>
											<a id="gestor_comandes" href="gestor_comandes.php"  class="pointer" onclick="menu_gestor_comandes()">• Gestor de comandes</a>														
										</li>
										<li>
											<a id="usuaris" href="usuaris.php" class="pointer" onclick="menu_usuaris()">• Usuaris</a>
										</li>
										<li>
											<a id="localitzacions" href="localitzacions.php"  class="pointer" onclick="menu_localitzacions()">• Localitzacions</a>									
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
				</div>
				<!-- Creem un 'div', per al contingut de la pàgina -->
				<div id="fons2" class="container content inici" style="min-height: 480px;">
					<!-- Deixem una fila buida, perquè hi hagi separació entre el menú i el contingut de la pàgina -->
					<div class="row">
						<div class="col-xs-12">
							<ol class="bredcrumb pull-left"></ol>
						</div>
					</div>
					<!-- Creem una fila, que servirà per mostrar les diferents opcions que hi han per cada apartat del menú -->
					<!-- Al inici, per defecte, mostrarà un missatge de benvinguda -->
					<div class="row">
						<!-- Determinem la posició del menú -->
						<div class="col-xs-12 col-md-2 col-sm-2 col-lg-3">
							 <div id="menu_parametres" class="pointer">
                                                                <div class="box">
                                                                        <h1>Paràmetres</h1>
                                                                        <div id="menu_parametres2">
                                                                                <br>
                                                                                <a id="comandes2" type="button" class="btn btn-default btn-md" href="gestor_comandes.php" style="width: 160px;">
                                                                                         <font color="#333">Gestor de comandes</font>
                                                                                </a>
                                                                                <hr>
                                                                                <a id="usuaris2" type="button" class="btn btn-default btn-md" href="usuaris.php" style="width:160px;">
                                                                                         <font color="#333">Usuaris</font>
                                                                                </a>
                                                                                <hr>
                                                                                <a id="localitzacions2" type="button" class="btn btn-default btn-md" href="localitzacions.php" style="width:160px;">
                                                                                         <font color="#333">Localitzacions</font>
                                                                                </a>
                                                                        </div>
                                                                </div>
                                                        </div>
							<!-- Creem el menú de l'opció localitzacions, que per defecte serà ocult -->
							<div id="menu_localitzacions">
								<div class="box">
									<h1>Opcions</h1>
									<div id="menu_localitzacions2">
										<br>
										<button type="button" class="btn btn-default btn-md" onclick="contingut_afegir_localitzacio()" style="width: 160px;">
											Afegir
										</button>
										<hr>
										<button type="button" class="btn btn-default btn-md" style="width: 160px;">
											Mostrar
										</button>
										<br>
										<br>
									</div>
								</div>
							</div>
						</div>
						<!-- Creem un 'div', que servirà per mostrar el gran contingut de la pàgina -->
						<div class="col-xs-12 col-md-10 col-sm-10 col-lg-9">
							<div>
								<div id="contingut_inicial_localitzacions">
                                                                        <div class="box">
                                                                                <div align="left">
                                                                                        <h1>Introducció - Localitzacions</h1>
                                                                                </div>
                                                                                <div class="box-content" align="justify">
                                                                                        <font size="3">En aquesta secció, el que podrà fer serà el següent:</font>
                                                                                        <font size="2"><br><br>- Afegir una nova localització.</font>
                                                                                        <font size="2"><br><br>- Mostrar totes les localitzacions ja entrades.</font>
                                                                                </div>
                                                                </div>
                                                        </div>
								<div id="contingut_afegir_localitzacio">
									<div class="box">
										<div align="left">
											<h1>Afegeix una localització</h1>
										</div>
										<div class="box-content" align="justify">
											<div class="row">
												<div class="col-xs-12">
													<div id="alerta3" class="alert alert-success" role="alert"></div>
													<form action="afegir_localitzacio.php" method="POST">
														<div class="form-group">
															<input name="codi" type="text" class="form-control" placeholder="Codi">
														</div>
														<div class="form-group">
															<input name="nom" type="text" class="form-control" placeholder="Nom de la localització">
														</div>
														<div class="form-group" align="left">
															<select id="select_loc" name="select_loc" class="form-control">
																
															</select>
														</div>
														<div align="left">
															<button type="submit" class="btn btn-primary">Afegeix</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- Importem el JQuery, per poder utilitzar-lo -->
			<script src="js/jquery.min.js"></script>
			<!-- Importem el Bootstrap -->
			<script src="js/bootstrap.min.js"></script>
			<!-- Importem el navbar -->
			<script src="https://www.institutmontilivi.cat/js/navbar.js"></script>
			<!-- Importem el Tools -->
			<script type="text/javascript" src="js/tools.js"></script>
			<!-- Importem el document JavaScript, que hem creat -->
            <script type="text/javascript" src="js/propi.js"></script>
			<!-- Posem el peu de pàgina, que té l'Intranet de l'institut per defecte -->
			<footer class="text-center">
				<h5>INSTITUT Montilivi, Av. Montilivi, 125, 17003 Girona, Tel.: 972209458 Fax: 972209069 iesmontilivi@xtec.cat | <a href="https://www.institutmontilivi.cat/centre/avis-legal/" target="_blank">Avís legal</a> ©  2018 </h5>
			</footer>
		</div>
	</body> 
</html> 
<?php
 mysqli_close($connexio);
?>
