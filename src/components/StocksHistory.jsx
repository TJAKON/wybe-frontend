export default class StocksHistory {
    /** Gets stock OHLC prices for multiple stocks */
    static async getMultipleStocks() {
      // Fetching prices of multiple stocks asynchronously
      const dataSources = [
        await this.getGoogleStock(),
        await this.getMicrosoftStock(),
      ];
      return dataSources;
    }
  
    /** Gets Amazon stock OHLC prices from a JSON file */
    static async getAmazonStock() {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      stockData.__dataIntents = { close: ["SeriesTitle/Amazon"] };
      return stockData;
    }
  
    /** Gets Tesla stock OHLC prices from a JSON file */
    static async getTeslaStock() {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      stockData.__dataIntents = { close: ["SeriesTitle/Tesla"] };
      return stockData;
    }
  
    /** Gets Microsoft stock OHLC prices from a JSON file */
    static async getMicrosoftStock() {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      stockData.__dataIntents = { close: ["SeriesTitle/Microsoft"] };
      return stockData;
    }
  
    /** Gets Google stock OHLC prices from a JSON file */
    static async getGoogleStock() {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      stockData.__dataIntents = { close: ["SeriesTitle/Google"] };
      return stockData;
    }
  
    static convertData(jsonData) {
      return jsonData.map((json) => {
        let parts = json.date.split("-"); // "2020-01-01"
        return {
          date: new Date(parts[0], parts[1] - 1, parts[2]), // Month is 0-based in JS Date
          open: json.open,
          high: json.high,
          low: json.low,
          close: json.close,
          volume: json.volume,
        };
      });
    }
  }
  