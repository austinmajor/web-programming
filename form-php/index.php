<?php

session_start();



// echo var_dump($_SESSION);

?>



<!DOCTYPE html>

<html>

    <head>

        <title>Major Enterprises</title>

        

        <link href="index.css" rel="stylesheet">

    </head>

    <body>

        <div>

            <h1>Major Enterprises</h1>

            <h2>Inventory Search</h2>

        </div>

        <form method="get" action="controller.php">

            <div>

                <label for="productName">Product Name</label>

                <input type="text" id="productName" name="productName" value="<?php echo $_SESSION["productName"]?>">

            </div>

            

            <div>

                <label for="warehouseCity">Warehouse City</label>

                <input type="text" id="warehouseCity" name="warehouseCity" value="<?php echo $_SESSION["warehouseCity"]?>">

            </div>

            

            <div>

                <label for="minimumQuantity">Minimum Quantity</label>

                <input type="text" id="minimumQuantity" name="minimumQuantity" value="<?php echo $_SESSION["minimumQuantity"]?>">

            </div>    

                

            <div>

                <label for="maximumQuantity">Maximum Quanity</label>

                <input type="text" id="maximumQuantity" name="maximumQuantity" value="<?php echo $_SESSION["maximumQuantity"]?>">

            </div>    

                

            <div>    

                <label for="minimumPrice">Minimum Price</label>

                <input type="text" id="minimumPrice" name="minimumPrice" value="<?php echo $_SESSION["minimumPrice"]?>">

            </div>    

                

            <div>    

                <label for="maximumPrice">Maximum Price</label>

                <input type="text" id="maximumPrice" name="maximumPrice" value="<?php echo $_SESSION["maximumPrice"]?>">

            </div>    

            

            <input type="submit" name="reset" value="Reset">

            <input type="submit" name="search" value="Search">

        </form>

    </body>

</html>
