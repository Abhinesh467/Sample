sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.numeric.BarChart.controller.View1", {
		onInit: function () {
//			var sampleDatajson = new sap.ui.model.json.JSONModel("model/Data.json");
			var sampleDatajson = new sap.ui.model.json.JSONModel(jQuery.sap.getModulePath("com.numeric.BarChart.model","/Data.json"));
			var oVizFrame = this.getView().byId("idStackedChart");
			oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: 

	[

								'#67db3f','#FFC200', '#FF0000'

								],
					dataLabel: {
						showTotal: true
					},
					dataPointSize: {min : 45, max : 45}
				},
				tooltip: {
					visible: true
				},
				title: {
					text: "Stacked Bar Chart"
				}
			});
			var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					name: "Year",
					value: "{Year}"
				}],

				measures: [{
					name: "Milk",
					value: "{Milk}"
				}],

				data: {
					path: "/items"
				}
			});
			oVizFrame.setDataset(oDataset);

			oVizFrame.setModel(sampleDatajson);

			var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "valueAxis",
					"type": "Measure",
					"values": ["Milk"]
				}),

oFeedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					"uid": "categoryAxis",
					"type": "Dimension",
					"values": ["Year"]
				});

			oVizFrame.addFeed(oFeedValueAxis);
			// oVizFrame.addFeed(oFeedValueAxis1);
			// oVizFrame.addFeed(oFeedValueAxis2);
			oVizFrame.addFeed(oFeedCategoryAxis);

		},
		print: function()
		{
			window.print();
		},
		save: function()
		{
			this.getOwnerComponent().getRouter().navTo("View2");
		}
	});
});