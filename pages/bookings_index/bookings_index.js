// pages/bookings_index/bookings_index.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    console.log(options)
    wx.request({
      url: `https://kolo-app.herokuapp.com/api/v1/users/1/profile`,
      success(res) {
        console.log(res.data)
        const listings = res.data.bookings;
        console.log(listings)
        page.setData({
          listings: listings
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log("this.options",this.options)
    const page = this
    wx.request({
      url: `https://kolo-app.herokuapp.com/api/v1/users/1/profile`,
      success(res) {
        console.log(res.data)
        const listings = res.data.bookings;
        console.log(listings)
        page.setData({
          listings: listings
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})