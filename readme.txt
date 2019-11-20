EXAMPLE OF COMMUNICATION VIA SOCKET.IO

Date: 11-11-2019
Author: Erland Larsen

Files included:
readme.txt (this file)
index.html
timeServer.js

How to use:
Copy index.html and timeServer.js to your home directory on the Beaglebone.
Start the server: "node timeServer.js" and wait for the message "Server Running..."
Open a browser and type the url: <Beaglebone's IP>:8888, e.g. http://192.168.7.2:8888/

The output in the Browser should look like this:

Beaglebone date and time
Today is: Mon Nov 11 13:23:33 UTC 2019
