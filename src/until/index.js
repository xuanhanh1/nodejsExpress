//chuyển dữ liệu từ doccument sang kiểu object 
//với object đơn phần tử và đa phần tử
module.exports = {
    mutipleMongooseToObject: function (mongoses)
    {
        return mongoses.map(mongose => mongose.toObject());
    },
    mongoseToObject: function (mongose) {
        return mongose ? mongose.toObject() : mongose;
    },
}