// pages/bookings_new/bookings_new.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    roomId:"",
    name:"",
    address:"",
    description:"",
    date:"",
    capacity:"",
    price:"",
    phone_number:""
  },

  takePhoto: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */

   formSubmit: function(e){
     const data = e.detail.value
     data.user_id = 1
     const url = app.globalData.url
     console.log(data)
     wx.request({
       url: `${url}/api/v1/rooms`,
       method: 'POST',
       data: data,
       success(res) {
         console.log(res)
       }
     })
    wx.switchTab({
      url: '/pages/rooms_index/rooms_index',
    })
   },
  onLoad: function (options) {
    const page = this
    console.log("options",options)
    const id = options.id
    wx.request({
      url: `https://kolo-app.herokuapp.com/api/v1/rooms/${options.id}`,
      success(res) {
        console.log(res.data)
        const listing = res.data;
        page.setData({
        roomId:id,
        name:listing.name,
        address:listing.address,
        description:listing.description,
        capacity:listing.capacity,
        price:listing.price,
        phone_number:listing.phone_number
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