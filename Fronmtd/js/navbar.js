function navbarConten() {
    return `
    
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootswatch@5.3.2/dist/litera/bootstrap.min.css" rel="stylesheet">
        <link href="../src/estilos.css" rel="stylesheet">
        <title>Dashboard</title>
        <style>
            /* Estilos para el navbar */
            .navbar {
                position: fixed;
                top: 0;
                left: 0;
                width: 250px;
                height: 100%;
                background-color: #374151; /* Cambiar según tus estilos */
                z-index: 1000; /* Asegura que el navbar esté por encima del contenido */
                transition: transform 0.3s ease;
                padding-top: 1rem;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
    
            .navbar.hidden {
                transform: translateX(-100%);
            }
    
            /* Estilos para los enlaces del navbar */
            .navbar-links a {
                display: block;
                padding: 0.75rem 1rem;
                color: #D1D5DB;
                transition: background-color 0.3s ease;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                font-size: 1.1rem;
            }
    
            .navbar-links a:hover {
                background-color: #4B5563;
            }
    
            /* Estilos para el botón de activación del navbar */
            .navbar-toggle {
                position: fixed;
                top: 20px; /* Ajusta según sea necesario */
                left: 20px; /* Ajusta según sea necesario */
                z-index: 1001; /* Asegura que el botón esté por encima del navbar */
                cursor: pointer;
                background-color: #4a5568;
                padding: 0.5rem;
                border-radius: 50%;
                transition: background-color 0.3s ease;
            }
    
            .navbar-toggle:hover {
                background-color: #2d3748;
            }
    
            .navbar-toggle svg {
                fill: #D1D5DB;
                width: 1.5rem;
                height: 1.5rem;
            }
        </style>
    </head>
    <body>
        <!-- Botón de activación del navbar -->
        <div class="navbar-toggle" onclick="toggleNavbar()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </div>
    
        <!-- Navbar -->
        <div class="navbar" id="navbar">
            <!-- Contenido del navbar -->
            <div class="navbar-links">
                <a href="../View/Cliente.html">Cliente</a>
                <a href="../View/Productos.html">Producto</a>
                <a href="../View/Ventas.html">Ventas</a>
                <a href="../View/inbox.html">Inbox</a> <!-- Nuevo enlace -->
            </div>
        </div>
    
        <!-- Contenido principal -->
        <!-- Aquí va todo el contenido principal de tu página -->
    
        <script>
            function toggleNavbar() {
                var navbar = document.getElementById('navbar');
                navbar.classList.toggle('hidden');
            }
        </script>
    </body>
    </html>
    
    </div>`


}










