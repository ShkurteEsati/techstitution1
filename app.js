var express = require('express');
var path = require('path');
// init app
var app = express();
app.use(express.static(__dirname + '/public'));
//Connection of MongoDB
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const mongoURL = 'mongodb://localhost:27017/tech';

//Connecting MongoDB
MongoClient.connect(mongoURL, function(err, database){
     if(err) {
      console.log(err);
       }
     console.log("MongoDB connected!");
   users = database.collection('newdata');
});


var bodyParser = require('body-parser');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/',function(req,res){
    newdata.find({}).toArray(function(err,docs){
        if (err){
            console.log(err)
        }
    res.render('index',{docs:docs});    
    });
});

app.get('/newdata/:id',function(req,res){
	newdata.findOne({_id: ObjectId(req.params.id)}, function(err, doc){
		if(err) {
    console.log(err);
                    }
                    res.render("edit",{doc: doc});
                  });
});

app.post('/newdata/add',function(req,res){
    newdata.insert({title: req.body.title, 
                  description: req.body.description},function(err,result){
                    if(err){
                        console.log(err);
                    }
                    res.redirect("/");
                  })
});

app.get('/newdata/edit/:id',function(req,res){
	newdata.findOne({_id: ObjectId(req.params.id)}, function(err, doc){
		if (err){
			console.log(err);
		}
	
    res.render('edit',{doc:doc});
});
});

app.post('/newdata/update/:id',function(req,res){
	newdata.updateOne({_id: ObjectId(req.params.id)}, 
	       {$set: {title: req.body.title,description:req.body.description}}, function(err, result){
	       	if(err){
	       		console.log(err);
	       	}
	       	 res.redirect("/");
	       });
});

app.get('/newdata/delete/:id',function(req,res){
     todos.deleteOne({_id: ObjectId(req.params.id)}, function(err, result){
     	if(err) {
     		console.log(err);
     	}
     	res.redirect("/");
     });  
});


//setup template engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));



app.listen(3001, function() {
   console.log("App running at http://localhost:3001");
});