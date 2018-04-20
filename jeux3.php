<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	
	<title>Ore</title>

	<link rel="icon" type="image/x-icon" href="images/favicon.ico" />
	<link rel="stylesheet" type="text/css" href="css/screen.css" />
	<link rel="stylesheet" type="text/css" href="css/game.css" />
	<link href='http://fonts.googleapis.com/css?family=Electrolize' rel='stylesheet' type='text/css'>
</head>
<body>
	<div id="content">
		<header>
			<nav>
				<a href="jeux3.php">Accueil</a>
				<a href="game.php" class="current_menu">Jeu</a>
				<a href="rules.php">Règles</a>
			</nav>
		</header>
		<div id="game_content">
			<div id="player_info">
				<div id="time_gauge"><div id="current_gauge"></div></div>
				<p id="level_text">Niveau</p><div id="level">1</div>
				<p>Score</p><div id="total_score"><span id="current_score">0</span><br/>/<span id="goal_score">5000</span></div>
				<button id="restart_bt">Recommencer</button>
				<button id="pause_bt">Pause</button>
			</div>
			<div id="grid"></div>
		</div>
	</div>


	<script type="text/javascript" src="js/util.js"></script>
	<script type="text/javascript" src="js/game/capabilities/item.js"></script>
	<script type="text/javascript" src="js/game/init.js"></script>
	<script type="text/javascript" src="js/game/timer.js"></script>
	<script type="text/javascript" src="js/game/level.js"></script>
	<script type="text/javascript" src="js/game/hint.js"></script>
	<script type="text/javascript" src="js/game/score.js"></script>
	<script type="text/javascript" src="js/game/streak.js"></script>
	<script type="text/javascript" src="js/game/bonus.js"></script>
	<script type="text/javascript" src="js/game/classes/Gem.js"></script>
	<script type="text/javascript" src="js/game/classes/Bomb.js"></script>
	<script type="text/javascript" src="js/game/classes/Popup.js"></script>
	<script type="text/javascript" src="js/game/main.js"></script>
</body>
</html>