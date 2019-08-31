/* Creem una funció, per mostrar només el menú per defecte, es a dir, el missatge de benvinguda ('menu_inici') */
 function menu_inici()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Inici' del menú, de color negre */
	document.getElementById('inici').style.color="black";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
	document.getElementById('substancia').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('comandes').style.color="white";
	document.getElementById('parametres').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Mostrem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="hidden";
	document.getElementById('menu_parametres').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el menu 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
	document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
	document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Mostrem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="visible";
	document.getElementById('contingut_inici').style.display="block";

	/* Mostrem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="visible";
	document.getElementById('missatge_benvinguda').style.display="block";
}

/* Creem una funció, per mostrar només el menú de l'apartat Substància ('menu_substancia') */
function menu_substancia()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Substància' del menú, de color negre */
	document.getElementById('substancia').style.color="black";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
	document.getElementById('inici').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('comandes').style.color="white";
	document.getElementById('parametres').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="hidden";
	document.getElementById('menu_parametres').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden",
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Mostrem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="visible";
	document.getElementById('menu_substancia').style.display="block";

	/* Mostrem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="visible";
	document.getElementById('menu_substancia_eliminar').style.display="block";

	/* Ocultem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";
}

function modificar_substancia()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

        /* Pintem l'opció 'Inici' del menú, de color negre */
        document.getElementById('substancia').style.color="black";

        /* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
        document.getElementById('inici').style.color="white";
        document.getElementById('estoc').style.color="white";
        document.getElementById('comandes').style.color="white";
        document.getElementById('parametres').style.color="white";
        document.getElementById('gestor_comandes').style.color="#333";
        document.getElementById('localitzacions').style.color="#333";
        document.getElementById('usuaris').style.color="#333";

	 /* Ocultem el contingut 'contingut_inicial_sub'  */
        document.getElementById('contingut_inicial_sub').style.visibility="hidden"
        document.getElementById('contingut_inicial_sub').style.display="none";

        /* Mostrem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	 /* Ocultem el contingut 'contingut_inicial_sub'  */
        document.getElementById('contingut_modificar_substancia').style.visibility="visible";
        document.getElementById('contingut_modificar_substancia').style.display="block";
}

function afegir_substancia()
{

	carregar();	

	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

        /* Pintem l'opció 'Inici' del menú, de color negre */
        document.getElementById('substancia').style.color="black";

        /* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
        document.getElementById('inici').style.color="white";
        document.getElementById('estoc').style.color="white";
        document.getElementById('comandes').style.color="white";
        document.getElementById('parametres').style.color="white";
        document.getElementById('gestor_comandes').style.color="#333";
        document.getElementById('localitzacions').style.color="#333";
        document.getElementById('usuaris').style.color="#333";

	/* Ocultem el contingut 'contingut_inicial_sub'  */
	document.getElementById('contingut_inicial_sub').style.visibility="hidden"
	document.getElementById('contingut_inicial_sub').style.display="none";

	/* Mostrem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="visible";
        document.getElementById('contingut_afegir_substancia').style.display="block";

	/* Mostrem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_modificar_substancia').style.visibility="hidden";
        document.getElementById('contingut_modificar_substancia').style.display="none";
}

/* Creem una funció, per mostrar només el menú de l'apartat Estoc ('menu_estoc') */
function menu_estoc()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Estoc' del menú, de color negre */
	document.getElementById('estoc').style.color="black";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('comandes').style.color="white";
	document.getElementById('parametres').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="hidden";
	document.getElementById('menu_parametres').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Mostrem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

        /* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Mostrem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="visible";
	document.getElementById('menu_estoc').style.display="block";

	/* Mostrem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="visible";
	document.getElementById('menu_app').style.display="block";
}

/* Creem una funció, per mostrar només el menú de l'apartat Històric ('menu_historic') */
function menu_historic()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Historic' del menú, de color negre */
	document.getElementById('historic').style.color="black";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
	document.getElementById('estoc').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('comandes').style.color="white";
	document.getElementById('parametres').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="hidden";
	document.getElementById('menu_parametres').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Mostrem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

        /* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el menu 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Mostrem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="visible";
	document.getElementById('menu_historic').style.display="block";
}

/* Creem una funció, per mostrar només el menú de l'apartat Comandes ('menu_comandes') */
function menu_comandes()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Comandes' del menú, de color negre */
	document.getElementById('comandes').style.color="black";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres"  */
	document.getElementById('historic').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('parametres').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="hidden";
	document.getElementById('menu_parametres').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Mostrem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

        /* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Mostrem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="visible";
	document.getElementById('menu_comandes').style.display="block";
}

/* Creem una funció, per mostrar només el menú de l'apartat Localitzacions ('menu_localitzacions') */
function menu_localitzacions()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Paràmetres' del menú, de color negre, i l'opció localitzacions de color blau, i la resta de color blanc */
	document.getElementById('parametres').style.color="black";
	document.getElementById('localitzacions').style.color="blue";
	document.getElementById('usuaris').style.color="white";
	document.getElementById('gestor_comandes').style.color="white";

	/* Pintem en el menú lateral; de qualsevol apartat de l'opció "Paràmetres", a la secció a la qual ens trobem */
	document.getElementById('comandes2').style.color="grey";
	document.getElementById('usuaris2').style.color="grey";
	document.getElementById('localitzacio2').style.color="blue";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres", menys l'apartat "Localitzacions"  */
	document.getElementById('comandes').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('usuaris').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

        /* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el contingut ‘c_afegir_usuari’ */
        document.getElementById('c_afegir_usuari').style.visibility="hidden";
        document.getElementById('c_afegir_usuari').style.display="none";

	/* Mostrem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="visible";
	document.getElementById('menu_parametres').style.display="block";

	/* Ocultem el menú 'menu_localitzacions' */
        document.getElementById('menu_localitzacions').style.visibility="hidden";
        document.getElementById('menu_localitzacions').style.display="none";
}

/* Funció per mostrar el formulari, per poder afegir diferents localitzacions */
function contingut_afegir_localitzacio()
{
	$(document).ready(function(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
				document.getElementById("select_loc").innerHTML = this.responseText;
			}
		};
		xhttp.open("GET","consultar_loc.php",true);
		xhttp.send();
	});

	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Paràmetres' del menú, de color negre, i l'opció localitzacions de color blau, i la resta de color blanc */
	document.getElementById('parametres').style.color="black";
	document.getElementById('localitzacions').style.color="blue";
	document.getElementById('usuaris').style.color="white";
	document.getElementById('gestor_comandes').style.color="white";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres", menys l'apartat "Localitzacions"  */
	document.getElementById('comandes').style.color="white";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el contingut 'contingut_inicial_localitzacions' */
        document.getElementById('contingut_inicial_localitzacions').style.visibility="hidden";
        document.getElementById('contingut_inicial_localitzacions').style.display="none";

	/* Mostrem el menú 'menu_localitzacions' */
        document.getElementById('menu_localitzacions').style.visibility="visible";
        document.getElementById('menu_localitzacions').style.display="block";

	/* Mostrem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="visible";
        document.getElementById('contingut_afegir_localitzacio').style.display="block";
}

/* Creem una funció, per mostrar només el menú de l'apartat Usuaris ('menu_usuaris') */
function menu_usuaris()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Paràmetres' del menú, de color negre, i la resta de color blanc */
	document.getElementById('parametres').style.color="black";
	document.getElementById('usuaris').style.color="blue";
	document.getElementById('gestor_comandes').style.color="white";
	document.getElementById('localitzacions').style.color="white";

	/* Pintem en el menú lateral; de qualsevol apartat de l'opció "Paràmetres", a la secció a la qual ens trobem */
	document.getElementById('comandes2').style.color="grey";
	document.getElementById('usuaris2').style.color="blue";
	document.getElementById('localitzacio2').style.color="grey";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres", menys l'apartat "Usuaris"  */ 
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('comandes').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="hidden";
	document.getElementById('contingut_gestor').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
        document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

        /* Ocultem el contingut 'contingut_afegir_localitzacio' */
        document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el contingut ‘c_afegir_usuari’ */
        document.getElementById('c_afegir_usuari').style.visibility="hidden";
        document.getElementById('c_afegir_usuari').style.display="none";

	/* Mostrem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="visible";
	document.getElementById('menu_parametres').style.display="block";

	/* Mostrem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="visible";
        document.getElementById('menu_usuaris').style.display="block";

}

/* Creem una funció, per mostrar només el menú de l'apartat Paràmetres -> Gestor de comandes  */
function menu_gestor_comandes()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Paràmetres' del menú, de color negre, i la resta de color blanc */
	document.getElementById('parametres').style.color="black";
	document.getElementById('gestor_comandes').style.color="blue";
	document.getElementById('usuaris').style.color="white";
	document.getElementById('localitzacions').style.color="white";

	/* Pintem en el menú lateral; de qualsevol apartat de l'opció "Paràmetres", a la secció a la qual ens trobem */
	document.getElementById('comandes2').style.color="blue";
	document.getElementById('usuaris2').style.color="grey";
	document.getElementById('localitzacio2').style.color="grey";

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres", menys l'apartat "Gestor de comandes"  */ 
	document.getElementById('comandes').style.color="white";
	document.getElementById('historic').style.color="white";
	document.getElementById('estoc').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('usuaris').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT: */

	/* Ocultem el menú 'missatge_benvinguda' */
	document.getElementById('missatge_benvinguda').style.visibility="hidden";
	document.getElementById('missatge_benvinguda').style.display="none";

	/* Ocultem el contingut 'contingut_inici' */
	document.getElementById('contingut_inici').style.visibility="hidden";
	document.getElementById('contingut_inici').style.display="none";

	/* Ocultem el menú 'menu_substancia' */
	document.getElementById('menu_substancia').style.visibility="hidden";
	document.getElementById('menu_substancia').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_substancia' */
        document.getElementById('contingut_afegir_substancia').style.visibility="hidden";
        document.getElementById('contingut_afegir_substancia').style.display="none";

	/* Ocultem el menú 'menu_substancia_eliminar' */
	document.getElementById('menu_substancia_eliminar').style.visibility="hidden";
	document.getElementById('menu_substancia_eliminar').style.display="none";

	/* Ocultem el menú 'menu_estoc' */
	document.getElementById('menu_estoc').style.visibility="hidden";
	document.getElementById('menu_estoc').style.display="none";

	/* Ocultem el menú 'menu_app' */
	document.getElementById('menu_app').style.visibility="hidden";
	document.getElementById('menu_app').style.display="none";

	/* Ocultem el menú 'menu_historic' */
	document.getElementById('menu_historic').style.visibility="hidden";
	document.getElementById('menu_historic').style.display="none";

	/* Ocultem el menú 'menu_comandes' */
	document.getElementById('menu_comandes').style.visibility="hidden";
	document.getElementById('menu_comandes').style.display="none";

	/* Ocultem el menú 'menu_usuaris' */
	document.getElementById('menu_usuaris').style.visibility="hidden";
	document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el menú 'menu_localitzacions' */
	document.getElementById('menu_localitzacions').style.visibility="hidden";
	document.getElementById('menu_localitzacions').style.display="none";

	/* Ocultem el contingut 'contingut_gestor' */
	document.getElementById('contingut_gestor').style.visibility="visible";
	document.getElementById('contingut_gestor').style.display="block";

	/* Ocultem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="hidden";
        document.getElementById('menu_usuaris').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_usuari' */
	document.getElementById('contingut_afegir_usuari').style.visibility="hidden";
        document.getElementById('contingut_afegir_usuari').style.display="none";

	/* Ocultem el contingut 'contingut_afegir_localitzacio'  */
	document.getElementById('contingut_afegir_localitzacio').style.visibility="hidden";
        document.getElementById('contingut_afegir_localitzacio').style.display="none";

	/* Ocultem el contingut ‘c_afegir_usuari’ */
	document.getElementById('c_afegir_usuari').style.visibility="hidden";
	document.getElementById('c_afegir_usuari').style.display="none";

	/* Mostrem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="visible";
	document.getElementById('menu_parametres').style.display="block";
}

/* Creem una funció, per afegir un usuari */
function afegir_usuari()
{
	/* PINTAR L'OPCIÓ DEL MENÚ DE COLOR NEGRE: */

	/* Pintem l'opció 'Paràmetres' del menú, de color negre, i la resta de color blanc */
	document.getElementById('parametres').style.color="black";
	document.getElementById('usuaris').style.color="blue";
	document.getElementById('gestor_comandes').style.color="white";
	document.getElementById('localitzacions').style.color="white";

	/* Pintem en el menú lateral; de qualsevol apartat de l'opció "Paràmetres", a la secció a la qual ens trobem */
	document.getElementById('comandes2').style.color="grey";
	document.getElementById('usuaris2').style.color="blue";
/*	document.getElementById('localitzacio2').style.color="grey";*/

	/* Pintem la resta d'opcions del menú de color blanc, i de color #333, pel submenú de l'apartat "Paràmetres", menys l'apartat "Usuaris"  */
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('comandes').style.color="white";
	document.getElementById('substancia').style.color="white";
	document.getElementById('inici').style.color="white";
	document.getElementById('gestor_comandes').style.color="#333";
	document.getElementById('localitzacions').style.color="#333";

	/* MOSTRAR EL MENÚ CORRESPONENT */

	/* Ocultem el contingut ‘contingut_inicial_usuaris’ */
        document.getElementById('contingut_inicial_usuaris').style.visibility="hidden";
        document.getElementById('contingut_inicial_usuaris').style.display="none";

	/* Mostrem el contingut ‘c_afegir_usuari’ */
        document.getElementById('c_afegir_usuari').style.visibility="visible";
        document.getElementById('c_afegir_usuari').style.display="block";

	/* Mostrem el menú 'menu_parametres' */
	document.getElementById('menu_parametres').style.visibility="visible";
	document.getElementById('menu_parametres').style.display="block";

	/* Mostrem el menú 'menu_usuaris' */
        document.getElementById('menu_usuaris').style.visibility="visible";
        document.getElementById('menu_usuaris').style.display="block";
}


function carregar()
{
	$(document).ready(function(){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange=function(){
			if(this.readyState == 4 && this.status == 200){
				document.getElementById("tipus_subs").innerHTML=this.responseText;
			}
		};
		xhttp.open("GET","consultar_tipus.php",true);
		xhttp.send();
	});
	
}
