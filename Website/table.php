<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">

  <!-- DataTables CSS -->
  <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/colreorder/1.7.0/css/colReorder.dataTables.min.css">
  <link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.5.0/css/responsive.dataTables.min.css">

  <!-- jQuery and DataTables JS -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
  <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
  <script src="https://cdn.datatables.net/colreorder/1.7.0/js/dataTables.colReorder.min.js"></script>
  <script src="https://cdn.datatables.net/responsive/2.5.0/js/dataTables.responsive.min.js"></script>
  <script src="table.js"></script>

  <style>
    body {
      margin: 50px;
      max-width: 700px;
    }

    th, td {
      white-space: nowrap;
      font-family: Arial, Helvetica, sans-serif;
    }

    .container {
      width: 50%;
      margin: 0 auto;
      text-align: center;
    }

    .container span {
      width: 30%;
      margin: 0 1%;
      display: inline-block;
    }
  </style>
</head>
<body>

<table id="example" class="display responsive no-wrap" cellspacing="0" width="100%">
  <thead>
    <tr>
      <th>Stock ID</th>
      <th>Map Location</th>
      <th>Bloomington Number</th>
      <th>Images</th>
      <th>Behavior</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <?php
    // Read the CSV file
    $file = fopen("InSITE_DB_stocks_CSV.csv", "r");
    $firstRow = true;

    while (($row = fgetcsv($file)) !== false) {
        // Skip the header row
        if ($firstRow) { $firstRow = false; continue; }

        $stockID      = htmlspecialchars($row[0]);  // e.g. IT.0001
        $mapLocation  = htmlspecialchars($row[1]);
        $bloomington  = htmlspecialchars($row[2]);
        $behavior     = htmlspecialchars($row[3]);
        $notes        = htmlspecialchars($row[4]);

        // Extract the 4-digit number from Stock ID e.g. "IT.0001" → "0001"
        $num = substr($stockID, 3);

        // Only show a Bloomington link if the number exists
        $bloomingtonCell = $bloomington
            ? '<a href="http://flybase.org/reports/FBst00' . $bloomington . '.html">' . $bloomington . '</a>'
            : '';

        echo "
        <tr>
          <td>{$stockID}</td>
          <td>{$mapLocation}</td>
          <td>{$bloomingtonCell}</td>
          <td>
            <div class='container'>
              <span><img src='adultbrain/{$num}.jpg' style='width:200px;height:200px' onclick='window.open(this.src)'></span>
              <span><img src='adultvnc/{$num}.jpg'   style='width:150px;height:200px' onclick='window.open(this.src)'></span>
              <span><img src='larval/{$num}.jpg'      style='width:200px;height:200px' onclick='window.open(this.src)'></span>
            </div>
          </td>
          <td>{$behavior}</td>
          <td>{$notes}</td>
        </tr>\n";
    }
    fclose($file);
    ?>
  </tbody>
</table>

</body>
</html>
