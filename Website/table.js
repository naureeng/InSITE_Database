$(document).ready(function () {
    $('#example').DataTable({
        // Enable column reordering (uses the ColReorder plugin)
        colReorder: true,

        // Enable responsive layout for small screens
        responsive: true,

        // Default sort by first column (Stock ID) ascending
        order: [[0, 'asc']],

        // Disable sorting on the Images column (col index 3)
        // since sorting images doesn't make sense
        columnDefs: [
            { orderable: false, targets: 3 }
        ],

        // Show 25 rows by default instead of 10
        pageLength: 25,

        // Customize the length menu options
        lengthMenu: [10, 25, 50, 100]
    });
});
