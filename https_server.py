import http.server
import ssl
import os

# Set up the server
server_address = ('localhost', 4443)  # Port 4443 for HTTPS

# Change the current working directory to the folder containing your website files
web_folder = "/Users/hershelnashman/Desktop/current-projects/699-bradshaw/balsamfalls.github.io/"
os.chdir(web_folder)  # This makes sure the server serves files from the website folder

# Initialize the HTTP server to serve files from the current directory
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

# Expand ~ to full path for SSL folder
ssl_folder = os.path.expanduser("~") + "/ssl"

# Wrap the socket with SSL using the correct expanded paths for SSL
httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile=os.path.join(ssl_folder, "server.key"),  # Absolute path to SSL key
                               certfile=os.path.join(ssl_folder, "server.crt"),  # Absolute path to SSL cert
                               server_side=True)

print("Serving HTTPS on https://localhost:4443")
httpd.serve_forever()