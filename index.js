var fs = require("fs");
var startTime = Date.now();

function traverseTree(n,k){

	var route = [{ky:k, nth_child:k%2===0 ? 2 : 1, gender:null}];
	var parent_node;
	var child;

	function findParent(ky){
		if(n > 1){
			var parent_node = {
				ky :Math.round(ky/2),
				nth_child: ky%2===0 ? 2 : 1,
				gender:null
			}
			route.push(parent_node);
			n--;
			findParent(parent_node.ky)
		}
	}

	findParent(k);

	var path=route.reverse();
	var children_from_male = ["Male", "Female"];
	var children_from_female = ["Female", "Male"];

	for(var i=0; i<path.length; i++){
		if(i===0) {
			path[i].gender="Male";
			child=path[i];
		}
		else{
			var _parent = path[i-1];
			if(_parent.gender=== "Male"){
				path[i].gender=children_from_male[_parent.nth_child-1];
				child=path[i-1];
			}else{
				path[i].gender=children_from_female[_parent.nth_child-1];
				child=path[i-1];
			}}}
	return path[path.length-1].gender;
}

var input_files = [];

fs.readdirSync(__dirname).forEach(function(file) {
	if(file.indexOf("t")===0 && file.indexOf("out") === -1){
		input_files.push(file);
	}
});

input_files.forEach(function(file_to_read){
	fs.readFile(file_to_read,function (err, data) {
		if (err) throw err;
		var input = data.toString('utf8').split("\n");
		var output="";
		var no_of_test_cases = parseInt(input[0]);

		for (var i=1; i<no_of_test_cases+1; i++){

			var n = parseInt(input[i].split(" ")[0]); // generation
			var k = parseInt(input[i].split(" ")[1]); //child
			var child = traverseTree(n,k);
			output+= child + "\n";
		}

		var file_to_save = file_to_read + ".out";

		fs.writeFile(file_to_save, output, function (err) {
			if (err) throw err;
			console.log('saved '+ file_to_save + '!\n');
			var elapsedTime = Date.now() - startTime;
			console.log("elapsedTime: ", elapsedTime + " ms");
		});

	});
});


