<?php

session_start();



// Connect to DB

$mysqli = new mysqli("localhost", "id15301795_admin", "n]UGQCbQ3p~7S#B@", "id15301795_v1"); 

if ($mysqli->connect_errno) {

   die("Failed to connect to MySQL: ($mysqli->connect_errno) 

      $mysqli->connect_error");

}



if(isset($_GET["reset"])) {

    session_unset();

    $_SESSION["productName"] = "";

    $_SESSION["warehouseCity"] = "";

    $_SESSION["minimumQuantity"] = "";

    $_SESSION["maximumQuantity"] = "";

    $_SESSION["minimumPrice"] = "";

    $_SESSION["maximumPrice"] = "";

    header("Location: index.php");

}



// Collect HTML form data and input into PHP variables with SQL Injection Protection

if(isset($_GET["search"])) {

    $productName = $mysqli->real_escape_string($_GET["productName"]);

    $warehouseCity = $mysqli->real_escape_string($_GET["warehouseCity"]);

    $minimumQuantity = $mysqli->real_escape_string($_GET["minimumQuantity"]);

    $maximumQuantity = $mysqli->real_escape_string($_GET["maximumQuantity"]);

    $minimumPrice = $mysqli->real_escape_string($_GET["minimumPrice"]);

    $maximumPrice = $mysqli->real_escape_string($_GET["maximumPrice"]);

    

    $_SESSION["productName"] = $productName;

    $_SESSION["warehouseCity"] = $warehouseCity;

    $_SESSION["minimumQuantity"] = $minimumQuantity;

    $_SESSION["maximumQuantity"] = $maximumQuantity;

    $_SESSION["minimumPrice"] = $minimumPrice;

    $_SESSION["maximumPrice"] = $maximumPrice;

    

    // echo var_dump($_SESSION);



    // Check if HTML form data was empty and pass data into SQL query

    $whereArr = array();

    if($productName != "") $whereArr[] = "pname like '%$productName%'";

    if($warehouseCity != "") $whereArr[] = "city like '%$warehouseCity%'";

    if($minimumQuantity != "") $whereArr[] = "quantity >= '$minimumQuantity'";

    if($maximumQuantity != "") $whereArr[] = "quantity <= '$maximumQuantity'";

    if($minimumPrice != "") $whereArr[] = "price >= '$minimumPrice'";

    if($maximumPrice != "") $whereArr[] = "price <= '$maximumPrice'";

    

    $whereStr = implode(" AND ", $whereArr);

    

    if($productName == "" && $warehouseCity == "" && $minimumQuantity == "" && $maximumQuantity == "" && $minimumPrice == "" && $maximumPrice == "") {

            $sql = "SELECT * FROM products";

        } else {

            $sql = "SELECT * FROM products WHERE {$whereStr}";

    }

    

    // Issue the query

    $result = $mysqli->query($sql);

    if (!$result) {

       die("Error executing query: ($mysqli->errno) $mysqli->error<br>SQL = $sql");

    }

    

    echo "<link href='index.css' rel='stylesheet'>";

    echo    "<div>

                <h1>Major Enterprises</h1>

                <h2>Inventory Result</h2>

            </div>";

    

    echo "<table>

            <tr>

                <th>ID</th>

                <th>Name</th>

                <th>City</th>

                <th>Quantity</th>

                <th>Price</th>

            </tr>";

    

    // Loop through all the rows returned by the query

    while ($row = $result->fetch_row()) {

       echo "<tr>

                <td>".$row[0]."</td>

                <td>".$row[1]."</td>

                <td>".$row[2]."</td>

                <td>".$row[3]."</td>

                <td>".$row[4]."</td>

            ";

    }

    

    echo    "</tr>

        </table>";

    

    echo "<br><br><a href='index.php'>New Search</a>";

    

}



?>
