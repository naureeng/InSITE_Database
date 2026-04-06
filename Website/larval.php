<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox-plus-jquery.min.js"></script>

<style>
.gallery a {
  border: none !important;
  text-decoration: none !important;
}

.gallery img {
  width: 180px !important;
  height: auto !important;
  border: none !important;
  padding: 0 !important;
  box-shadow: none !important;
  display: block;
}

/* Lightbox caption styling */
.lb-data .lb-caption {
  font-family: Helvetica, Arial, sans-serif !important;
  font-size: 20px !important;   /* adjust size as you like */
  font-weight: 500;
  line-height: 1.4;
}

</style>

</head>
<div class="gallery">
<?php
  $thumbs = glob("larval/_thumb/*.jpg");
  sort($thumbs);
  foreach ($thumbs as $thumb) {
    $filename = basename($thumb);
    $name     = pathinfo($filename, PATHINFO_FILENAME);
    $full     = "larval/" . $filename;

    echo '<a href="' . $full . '" data-title="' . $name . '" data-lightbox="larval">'
       . '<img src="' . $thumb . '" alt="' . $name . '">'
       . '</a>';
  }
?>
</div>
</html>
