/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Brand.find({}).remove(function() {
  Brand.create({
    id:2,
    Category:1,
    item:"Christophers",
    numberEvents:27,
    IncSalesMin:98,
    IncSalesMax:169,
    IncSalesMean:135,
    VolSalesMin:37,
    VolSalesMax:69,
    VolSalesMean:52,
    MarSalesMin:0,
    MarSalesMax:35,
    MarSalesMean:20,
    isBest:true,
    followUp:"Investigate drivers of variation in performance for Christophers and Gidd events as they are the most promoted brands and can most impact performance",
    action:null,
    hiddenAction:null,
    actionColor:"yellow",
    disabled:false,
    ActionOrder:1
  },
  {
    id:0,
    Category:1,
    item:"Gidd",
    numberEvents:20,
    IncSalesMin:102,
    IncSalesMax:236,
    IncSalesMean:149,
    VolSalesMin:31,
    VolSalesMax:71,
    VolSalesMean:57,
    MarSalesMin:-2,
    MarSalesMax:39,
    MarSalesMean:18,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:false,
    ActionOrder:null
  },
  {
    id:3,
    Category:1,
    item:"Sureseal",
    numberEvents:15,
    IncSalesMin:36,
    IncSalesMax:76,
    IncSalesMean:68,
    VolSalesMin:15,
    VolSalesMax:49,
    VolSalesMean:30,
    MarSalesMin:1,
    MarSalesMax:24,
    MarSalesMean:19,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:1,
    Category:1,
    item:"Private Brand",
    numberEvents:14,
    IncSalesMin:23,
    IncSalesMax:62,
    IncSalesMean:51,
    VolSalesMin:9,
    VolSalesMax:44,
    VolSalesMean:25,
    MarSalesMin:-1,
    MarSalesMax:27,
    MarSalesMean:22,
    isBest:false,
    followUp:null,
    action:"Consider reducing private brand promotional events and switching to higher performance branded events",
    hiddenAction:null,
    actionColor:"red",
    disabled:true,
    ActionOrder:2
  },
  {
    id:5,
    Category:8,
    item:"Common Presses",
    numberEvents:86,
    IncSalesMin:1,
    IncSalesMax:143,
    IncSalesMean:76,
    VolSalesMin:1,"VolSalesMax":90,
    VolSalesMean:42,
    MarSalesMin:-149,
    MarSalesMax:75,
    MarSalesMean:-49,
    isBest:false,
    followUp:"Investigate drivers of variation in brand performance for General Mills, Shelly and Post",
    action:null,
    hiddenAction:"These brands account for ~75% of the promo events but have wide spread performance across sales, volume and margin",
    actionColor:"yellow",
    disabled:false,
    ActionOrder:1
  },
  {
    id:6,
    Category:8,
    item:"Shelly",
    numberEvents:75,
    IncSalesMin:2,
    IncSalesMax:321,
    IncSalesMean:69,
    VolSalesMin:2,
    VolSalesMax:151,
    VolSalesMean:31,
    MarSalesMin:-160,
    MarSalesMax:29,
    MarSalesMean:-45,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:7,
    Category:8,
    item:"Post",
    numberEvents:30,
    IncSalesMin:-1,
    IncSalesMax:229,
    IncSalesMean:54,
    VolSalesMin:3,
    VolSalesMax:200,
    VolSalesMean:29,
    MarSalesMin:-139,
    MarSalesMax:5,
    MarSalesMean:-29,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:9,
    Category:8,
    item:"Private Brand",
    numberEvents:28,
    IncSalesMin:-2,
    IncSalesMax:42,
    IncSalesMean:13,
    VolSalesMin:1,
    VolSalesMax:39,
    VolSalesMean:6,
    MarSalesMin:-23,
    MarSalesMax:8,
    MarSalesMean:-2,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:8,
    Category:8,
    item:"EcoPro",
    numberEvents:23,
    IncSalesMin:0,
    IncSalesMax:187,
    IncSalesMean:92,
    VolSalesMin:0,
    VolSalesMax:120,
    VolSalesMean:52,
    MarSalesMin:-55,
    MarSalesMax:9,
    MarSalesMean:-25,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:4,
    Category:8,
    item:"Arrow Head",
    numberEvents:11,
    IncSalesMin:3,
    IncSalesMax:93,
    IncSalesMean:27,
    VolSalesMin:2,
    VolSalesMax:70,
    VolSalesMean:28,
    MarSalesMin:-31,
    MarSalesMax:2,
    MarSalesMean:-9,
    isBest:false,
    followUp:"Test additional tactics and items for Arrow Head promotions given relatively strong sales lift by margin erosion",
    action:null,
    hiddenAction:"Test top performing tactics in other brands, like Quantity discounts, on Arrow Head to identify additional opportunity to driver performance",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:2
  },
  {
    id:14,
    Category:5,
    item:"Brads",
    numberEvents:154,
    IncSalesMin:-43,
    IncSalesMax:125,
    IncSalesMean:31,
    VolSalesMin:-33,
    VolSalesMax:97,
    VolSalesMean:10,
    MarSalesMin:-35,
    MarSalesMax:11,
    MarSalesMean:-4,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:"red",
    disabled:false,
    ActionOrder:null
  },
  {
    id:13,
    Category:5,
    item:"Shelly",
    numberEvents:126,
    IncSalesMin:-12,
    IncSalesMax:81,
    IncSalesMean:24,
    VolSalesMin:-3,
    VolSalesMax:46,
    VolSalesMean:5,
    MarSalesMin:-34,
    MarSalesMax:7,
    MarSalesMean:-2,
    isBest:false,
    followUp:"Investigate drivers for large variation in Brads and Shelly events",
    action:null,
    hiddenAction:"Assess item selection, tactics and levels of vendor funding for different events",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:2
  },
  {
    id:10,
    Category:5,
    item:"Archway",
    numberEvents:45,
    IncSalesMin:-1,
    IncSalesMax:5,
    IncSalesMean:2,
    VolSalesMin:0,
    VolSalesMax:2,
    VolSalesMean:1,
    MarSalesMin:-1,
    MarSalesMax:2,
    MarSalesMean:1,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:15,
    Category:5,
    item:"Big Bob",
    numberEvents:26,
    IncSalesMin:2,
    IncSalesMax:16,
    IncSalesMean:10,
    VolSalesMin:1,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:-2,
    MarSalesMax:28,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:16,
    Category:5,
    item:"Shana's",
    numberEvents:25,
    IncSalesMin:1,
    IncSalesMax:3,
    IncSalesMean:2,
    VolSalesMin:1,
    VolSalesMax:2,
    VolSalesMean:1,
    MarSalesMin:-1,
    MarSalesMax:1,
    MarSalesMean:0,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:11,
    Category:5,
    item:"CookieFactory",
    numberEvents:17,
    IncSalesMin:-2,
    IncSalesMax:10,
    IncSalesMean:5,
    VolSalesMin:0,
    VolSalesMax:5,
    VolSalesMean:2,
    MarSalesMin:0,
    MarSalesMax:2,
    MarSalesMean:1,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:18,
    Category:5,
    item:"Voortman",
    numberEvents:17,
    IncSalesMin:-4,
    IncSalesMax:5,
    IncSalesMean:2,
    VolSalesMin:0,
    VolSalesMax:4,
    VolSalesMean:2,
    MarSalesMin:2,
    MarSalesMax:4,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:19,
    Category:5,
    item:"World Table",
    numberEvents:16,
    IncSalesMin:-6,
    IncSalesMax:31,
    IncSalesMean:16,
    VolSalesMin:-1,
    VolSalesMax:16,
    VolSalesMean:8,
    MarSalesMin:1,
    MarSalesMax:6,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
},
  {
    id:17,
    Category:5,
    item:"Crystal Farm",
    numberEvents:14,
    IncSalesMin:-1,
    IncSalesMax:25,
    IncSalesMean:13,
    VolSalesMin:0,
    VolSalesMax:17,
    VolSalesMean:11,
    MarSalesMin:0,
    MarSalesMax:5,
    MarSalesMean:3,
    isBest:true,
    followUp:null,
    action:"Increase Crystal Farm brand promotions, including running more successful promos and testing new tactics and items",
    hiddenAction:"Currently, very few events run, despite margin improvement.  Additional lift possible from both more frequency and new tactics",
    actionColor:"green",
    disabled:true,
    ActionOrder:1
  },
  {
    id:12,
    Category:5,
    item:"Private Brand",
    numberEvents:10,
    IncSalesMin:4,
    IncSalesMax:11,
    IncSalesMean:8,
    VolSalesMin:4,
    VolSalesMax:7,
    VolSalesMean:6,
    MarSalesMin:1,
    MarSalesMax:5,
    MarSalesMean:3,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:22,
    Category:2,
    item:"Drink Powder",
    numberEvents:14,
    IncSalesMin:-2,
    IncSalesMax:8,
    IncSalesMean:4,
    VolSalesMin:-1,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:-6,
    MarSalesMax:1,
    MarSalesMean:-3,
    isBest:false,
    followUp:null,
    action:"Reduce frequency of Drink  Powder events given relatively weaker sales, volume and margin performance",
    hiddenAction:null,
    actionColor:"red",
    disabled:true,
    ActionOrder:1
  },
  {
    id:25,
    Category:2,
    item:"Liquid Sugar",
    numberEvents:5,
    IncSalesMin:6,
    IncSalesMax:45,
    IncSalesMean:24,
    VolSalesMin:0,
    VolSalesMax:30,
    VolSalesMean:11,
    MarSalesMin:-1,
    MarSalesMax:12,
    MarSalesMean:4,
    isBest:true,
    followUp:null,
    action:"Increase promos across Temporal South, Carolina Kick and Liquid Sugar brands",
    hiddenAction:"Current tactics create sales lift and margin improvement, despite few events.  Increasing frequency could further improve category performance",
    actionColor:"green",
    disabled:true,
    ActionOrder:2
  },
  {
    id:20,
    Category:2,
    item:"4C",
    numberEvents:3,
    IncSalesMin:2,
    IncSalesMax:4,
    IncSalesMean:3,
    VolSalesMin:1,
    VolSalesMax:3,
    VolSalesMean:2,
    MarSalesMin:-1,
    MarSalesMax:0,
    MarSalesMean:0,
    isBest:false,
    followUp:"Test new tactics and items across all brands",
    action:null,
    hiddenAction:"Currently, relatively few events are used in Drink Mixes category.  Exploring new tactics and items to increase promos and / or focus on highest performing events could improve overall category lift and margin growth",
    actionColor:"yellow",
    disabled:true,
    ActionOrder:3
  },
  {
    id:21,
    Category:2,
    item:"Temporal South",
    numberEvents:3,
    IncSalesMin:9,
    IncSalesMax:14,
    IncSalesMean:11,
    VolSalesMin:6,
    VolSalesMax:10,
    VolSalesMean:7,
    MarSalesMin:3,
    MarSalesMax:6,
    MarSalesMean:5,
    isBest:true,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:23,
    Category:2,
    item:"Private Brand",
    numberEvents:3,
    IncSalesMin:3,
    IncSalesMax:7,
    IncSalesMean:5,
    VolSalesMin:2,
    VolSalesMax:5,
    VolSalesMean:3,
    MarSalesMin:3,
    MarSalesMax:5,
    MarSalesMean:4,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  },
  {
    id:24,
    Category:2,
    item:"Carolina Kick",
    numberEvents:2,
    IncSalesMin:5,
    IncSalesMax:11,
    IncSalesMean:8,
    VolSalesMin:3,
    VolSalesMax:7,
    VolSalesMean:5,
    MarSalesMin:4,
    MarSalesMax:6,
    MarSalesMean:5,
    isBest:false,
    followUp:null,
    action:null,
    hiddenAction:null,
    actionColor:null,
    disabled:true,
    ActionOrder:null
  }, function() {
    console.log('finished populating brands');
  }
  );
})

Category.find({}).remove(function() {
  Category.create({
    id : 5,
    item : "Cookies",
    numEvents : 450,
    sales : 0.04,
    volume : 0.03,
    margin : -0.05,
    profit : -0.04,
    transactions : 0.019999999999999997,
    impact : 0.049999999999999996,
    isBest : false,
    followUp : "Investigate Cookies brand, item and tactic performance in more detail, to find higher and lower performing promos",
    action : null,
    hiddenAction : "Large number of events currently used produces mixed results, causing little sales lift and margin erosion.  Identifying and focusing on higher performing brands, items and tactics will improve category performance",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 4,
    item : "Bath Tissue",
    numEvents : 269,
    sales : 0.19,
    volume : 0.14,
    margin : 0.7,
    profit : 0.08,
    transactions : 0.13,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 8,
    item : "Cereal",
    numEvents : 253,
    sales : 0.24,
    volume : 0.19,
    margin : -0.22,
    profit : -0.22,
    transactions : 0.18,
    impact : 0.24,
    isBest : false,
    followUp : null,
    action : "Stop current high discount promotions in Cereal, and explore different promo tactics",
    hiddenAction : "Current approach causes significant margin erosion. New tactic needed to maintain sales lift without margin loss",
    actionColor : "red",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 0,
    item : "Juices",
    numEvents : 190,
    sales : 0.1,
    volume : 0.07,
    margin : 0.04,
    profit : 0.07,
    transactions : 0.060000000000000005,
    impact : 0.09,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 6,
    item : "Dressings",
    numEvents : 189,
    sales : 0.09,
    volume : 0.06,
    margin : 0.1,
    profit : 0.1,
    transactions : 0.049999999999999996,
    impact : 0.12,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 7,
    item : "Canned Vegetables",
    numEvents : 99,
    sales : 0.07,
    volume : 0.05,
    margin : 0.12,
    profit : 0.12,
    transactions : 0.04,
    impact : 0.07,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  },
  {
    id : 9,
    item : "Laundry Detergent",
    numEvents : 86,
    sales : 0.13,
    volume : 0.09,
    margin : 0.14,
    profit : 0.14,
    transactions : 0.08,
    impact : 0.11,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : "red",
    disabled : true,
    ActionOrder : null
  },
  {
    id : 1,
    item : "Food Wrappers",
    numEvents : 76,
    sales : 0.21,
    volume : 0.16,
    margin : 0.16,
    profit : 0.16,
    transactions : 0.15,
    impact : 0.18,
    isBest : true,
    followUp : null,
    action : "Promote items in Food Wrapper more frequently, using current tactics",
    hiddenAction : "Despite relatively few promo events, Food Wrappers shows significant margin and profit lift",
    actionColor : "green",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 2,
    item : "Drink Mixes",
    numEvents : 30,
    sales : 0.03,
    volume : 0.02,
    margin : 0.01,
    profit : 0.02,
    transactions : 0.01,
    impact : 0.04,
    isBest : false,
    followUp : "Explore additional promo tactics and greater frequency for Drink Mixes",
    action : null,
    hiddenAction : "Currently, few events are driving very little sales and margin improvement. Testing additional events will determine the best tactics and frequency for Drink Mixes",
    actionColor : "yellow",
    disabled : false,
    ActionOrder : null
  },
  {
    id : 3,
    item : "Household Cleaners",
    numEvents : 17,
    sales : 0.1,
    volume : 0.08,
    margin : 0.03,
    profit : 0.03,
    transactions : 0.07,
    impact : 0.1,
    isBest : false,
    followUp : null,
    action : null,
    hiddenAction : null,
    actionColor : null,
    disabled : true,
    ActionOrder : null
  }, function() {
      console.log('finished populating categories');
    }
  );
});