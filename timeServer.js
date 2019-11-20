//Loading modules
const execFile = require('child_process').execFile;
var http = require('http');
var fs = require('fs');
var path = require('path');

// Initialize the server on port 8888
var server = http.createServer(function (req, res) {
    // requesting files
    var file = '.'+((req.url=='/')?'/index.html':req.url);
    var fileExtension = path.extname(file);
    var contentType = 'text/html';
    // Uncoment if you want to add css to your web page
    /*
    if(fileExtension == '.css'){
        contentType = 'text/css';
    }*/
    fs.exists(file, function(exists){
        if(exists){
            fs.readFile(file, function(error, content){
                if(!error){
                    // Page found, write content
                    res.writeHead(200,{'content-type':contentType});
                    res.end(content);
                }
            });
        }
        else{
            // Page not found
            res.writeHead(404);
            res.end('Page not found');
        }
    });
}).listen(8888, console.log("Server Running ..."));

// Loading socket io module.
var io = require('socket.io').listen(server);

// When communication is established
io.on('connection', function (socket) {
	
	// On call from Browser
    socket.on('getHumidity', function handleSensor() {
		const child = execFile('./Humidity', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		// Create and send JSON object to browser
		var data = {bbbTime: stdout};
		var dataJSON = JSON.stringify(data);
		io.emit('sensorData', dataJSON);
		});
			});
		
		// On call from Browser
    socket.on('getLightIntensity', function handleSensor() {
		const child = execFile('./LightIntensity', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		// Create and send JSON object to browser
		var dataa = {light: stdout};
		var dataJSONA = JSON.stringify(dataa);
		io.emit('sensorDataa', dataJSONA);
		});
			});
			

	
	var text = 10; //=document.getElementById('myId').value;
	 socket.on('setLight', function handleSensor() {
		const child = execFile('./Light'+text, (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});		
			
		
			
 socket.on('onHeater', function handleSensor() {
		const child = execFile('./Heater on', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});		
			
	 socket.on('offHeater', function handleSensor() {
		const child = execFile('./Heater off', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});			




 socket.on('onHeater', function handleSensor() {
		const child = execFile('./Heater on', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});		
			
	 socket.on('openWindow', function handleSensor() {
		const child = execFile('./WindowControl on', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});					

socket.on('closeWindow', function handleSensor() {
		const child = execFile('./WindowControl off', (error, stdout, stderr) => {
		if(error) {
			console.error('stderr', stderr);
			throw error;
		}
		console.log(stdout);
		
		});
			});				
});

			
		
		

