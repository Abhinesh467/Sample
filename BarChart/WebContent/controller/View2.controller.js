sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.numeric.BarChart.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.numeric.BarChart.view.View2
		 */
		onInit: function () {
			var sampleDatajson = new sap.ui.model.json.JSONModel("model/Data.json");
			this.getView().setModel(sampleDatajson);
// 				var oVizFrame = this.getView().byId("bottomVizFrame");
// 		oVizFrame.setVizProperties(	 {
			
//                 title : {
//                     visible : true,
//                 },
//                 valueAxis : {
//                     title : {
//                         visible : true
//                     }
//                 },
//                 categoryAxis : {
//                     title : {
//                         visible : true
//                     }
//                 }
//             });
//       //var oData = {
               
//       //     };
// var sampleDatajson = new sap.ui.model.json.JSONModel("model/Data.json");



//             debugger;
//             // var oVizFrame= sap.ui.getCore().byId("bottomVizFrame");
// //          this._updateBottomFrame(oVizFrame);


//             var oDataset = new sap.viz.ui5.data.FlattenedDataset({
//                 dimensions:[{
//                     name:"Store",
//                     value:"{store}"
//                 }],
//                 measures: [
//                     {
//                         name:"Year Value",
//                         value:"{yearT}"
//                     },
//                     {
//                         name:"Year",
//                         value:"{year}"
//                     }
//                 ],
                
//                 data: {
//                     path: "/Names"
//                 }
//             });

//             oVizFrame.setDataset(oDataset);
//             oVizFrame.setModel(sampleDatajson);

//             var oFeedXAxis1 = new sap.viz.ui5.controls.common.feeds.FeedItem({
//                 "uid": "valueAxis",
//                 "type": "Measure",
//                 "values": ["Year Value"]
//             });
//             var oFeedXAxis2 = new sap.viz.ui5.controls.common.feeds.FeedItem({
//                 "uid": "valueAxis2",
//                 "type":"Measure",
//                 "values": ["Year"]
//             });
//             var oFeedYAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
//                 "uid":"categoryAxis",
//                 "type":"Dimension",
//                 "values": ["Store"]  
//             });

//             oVizFrame.addFeed(oFeedXAxis1);
//             oVizFrame.addFeed(oFeedXAxis2);
//             oVizFrame.addFeed(oFeedYAxis);
//             var oPopover = new sap.viz.ui5.controls.Popover({});
// 			oPopover.connect(oVizFrame.getVizUid());

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.numeric.BarChart.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.numeric.BarChart.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.numeric.BarChart.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});