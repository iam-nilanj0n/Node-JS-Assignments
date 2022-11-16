const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent, (error)=>{
		if (error) throw error;
  		console.log('Saved!');
	})
}
// myFileWriter("./Myfile2.txt", "I am Nilanjan");

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	fs.readFile(fileName,"utf8", (err, data)=>{
		if(data.length!=0){
			console.log(data)
		}else{
			console.log(err);
		}
	})
}
// myFileReader("./Myfile2.txt");

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent, function (err) {
		if (err) throw err;
		console.log('Updated!');
	  });
}
// myFileUpdater("./Myfile.txt", "New line is added");

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name 
	fs.unlink(fileName, function (err) {
		if (err) throw err;
		console.log('File deleted!');
	  });
}
// myFileDeleter("./Myfile.txt");


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }