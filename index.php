<!DOCTYPE html>

<?php
        include 'config.php';
?>

<html>
<head>

    <title>Fibonacci Clock</title>

    <link rel="stylesheet" type="text/css" href="<?php echo CSS_PATH.'style.css'; ?>">

    <script type="text/javascript" src="<?php echo JS_PATH.'jQuery-1.12.1.js'; ?>"></script>
    <script type="text/javascript" src="<?php echo JS_PATH.'main.js'; ?>"></script>

</head>

<body>

    <div id="clock-container">
        <div id="clock">
            <div id="block-2" class="blocks"></div>
            <div id="block-1a" class="blocks"></div>
            <div id="block-1b" class="blocks"></div>
            <div id="block-3" class="blocks"></div>
            <div id="block-5" class="blocks"></div>
        </div>
    </div>

</body>

</html>
